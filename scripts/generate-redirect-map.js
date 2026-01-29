const fs = require('fs');
const path = require('path');

// Configuration
const LOCATIONS_FILE = path.join(__dirname, '../src/lib/locations-data.ts');
const BLOG_FILE = path.join(__dirname, '../src/lib/blog-data.ts');
const OUTPUT_FILE = path.join(__dirname, '../redirects-map.json');

// Helper to extract data from TS files using Regex (since we can't easily compile TS here)
function extractLocations(content) {
    const locations = [];
    // Match object blocks in the LOCATIONS array
    // This is a rough regex, assuming standard formatting
    const idRegex = /id:\s*'([^']+)'/g;
    const cityRegex = /city:\s*'([^']+)'/g;

    // We'll iterate through the file and try to match blocks
    // Since regex on the whole file for matched pairs is hard, let's just find all IDs and Cities
    // and assume they are in order. This is risky but likely safe for this structured file.
    // Better approach: Split by "id:" and parse the chunk.

    const blocks = content.split('id:');
    blocks.shift(); // Remove pre-amble

    blocks.forEach(block => {
        // We already split by id:, so the ID is at the start (in quotes)
        const idMatch = block.match(/^\s*'([^']+)'/);
        const cityMatch = block.match(/city:\s*'([^']+)'/);

        if (idMatch && cityMatch) {
            locations.push({
                id: idMatch[1],
                city: cityMatch[1]
            });
        }
    });

    return locations;
}

function extractBlogIds(content) {
    const ids = [];
    const idRegex = /id:\s*'([^']+)'/g;
    let match;
    while ((match = idRegex.exec(content)) !== null) {
        ids.push(match[1]);
    }
    return ids;
}

// Main execution
try {
    console.log('Reading data files...');
    const locationsContent = fs.readFileSync(LOCATIONS_FILE, 'utf8');
    const blogContent = fs.readFileSync(BLOG_FILE, 'utf8');

    const locations = extractLocations(locationsContent);
    const blogIds = extractBlogIds(blogContent);

    console.log(`Found ${locations.length} locations and ${blogIds.length} blog posts.`);

    const redirects = [];
    const keptPosts = [];

    // Hub Pages to explicitly PROTECT (Do not redirect these)
    const PROTECTED_IDS = [
        'structural-engineering-services-guide',
        'engineering-design-services-guide',
        'specialized-engineering-services-guide',
        'residential-structural-engineering-guide',
        'structural-engineer-cost-orange-county-2025',
        'engineering-design-principles-southern-california',
        'ultimate-guide-structural-engineering-design-california',
        'sustainable-design-engineering-orange-county',
        'how-to-choose-engineering-design-firm-socal',
    ];

    blogIds.forEach(blogId => {
        if (PROTECTED_IDS.includes(blogId)) {
            keptPosts.push(blogId);
            return;
        }

        // Check for city match
        let targetLocation = null;

        // sorting locations by city length ensures "Newport Beach" matches before "Beach" (if that were a city)
        // or to avoid partial matches being weird
        const sortedLocations = [...locations].sort((a, b) => b.city.length - a.city.length);

        for (const loc of sortedLocations) {
            // Normalize for comparison
            const normalizedBlogId = blogId.toLowerCase().replace(/-/g, ' ');
            const normalizedCity = loc.city.toLowerCase();

            // Strict Check: The blog ID must contain the city name
            if (normalizedBlogId.includes(normalizedCity)) {
                targetLocation = loc;
                break; // Found the best match (longest city name)
            }
        }

        if (targetLocation) {
            redirects.push({
                source: `/blog/${blogId}`,
                destination: `/locations/${targetLocation.id}`,
                permanent: true,
                reason: `Consolidating thin blog post to ${targetLocation.city} Location Page`
            });
        } else {
            keptPosts.push(blogId);
        }
    });

    // Write results
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(redirects, null, 2));

    console.log(`Analysis Complete.`);
    console.log(`- Redirects generated: ${redirects.length}`);
    console.log(`- Posts kept: ${keptPosts.length}`);
    console.log(`Redirect map saved to: ${OUTPUT_FILE}`);

} catch (error) {
    console.error('Error generating redirects:', error);
}
