const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '../redirects-map.json');
const OUTPUT_FILE = path.join(__dirname, '../src/lib/generated-redirects.ts');

try {
    const redirects = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));

    // Clean checks
    const cleanRedirects = redirects.map(r => ({
        source: r.source,
        destination: r.destination,
        permanent: r.permanent
    }));

    const fileContent = `// Auto-generated redirects for thin content consolidation
// Generated on ${new Date().toISOString()}

export const GENERATED_REDIRECTS = ${JSON.stringify(cleanRedirects, null, 2)};
`;

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Successfully wrote ${cleanRedirects.length} redirects to ${OUTPUT_FILE}`);

} catch (e) {
    console.error(e);
}
