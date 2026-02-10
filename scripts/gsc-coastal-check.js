/**
 * GSC Coastal Posts Traffic Check
 *
 * Checks Google Search Console for traffic data on the 27 coastal engineering
 * blog posts to determine if they should be kept or redirected.
 *
 * Usage: node scripts/gsc-coastal-check.js
 */

const fs = require('fs');
const { google } = require('googleapis');

const COASTAL_POST_SLUGS = [
  'coastal-bluff-engineer-la-jolla',
  'coastal-bluff-engineer-near-me-in-del-mar',
  'coastal-bluff-engineer-near-me-in-laguna-beach',
  'coastal-bluff-foundation-design-in-la-jolla',
  'coastal-bluff-foundation-engineering-in-laguna-beach',
  'coastal-bluff-foundation-engineering-in-san-clemente',
  'coastal-bluff-stabilization-engineering-in-malibu',
  'coastal-bluff-stabilization-in-la-jolla',
  'coastal-bluff-stabilization-in-malibu',
  'coastal-bluff-structural-engineering-in-malibu',
  'coastal-commercial-development-in-huntington-beach',
  'coastal-commercial-renovation-engineering-in-del-mar',
  'coastal-commercial-retrofit-engineering-in-malibu',
  'coastal-commission-engineer-near-me-in-newport-beach',
  'coastal-commission-structural-engineer-malibu',
  'coastal-erosion-structural-solutions-in-corona-del-mar',
  'coastal-foundation-design-in-coronado',
  'coastal-foundation-design-in-la-jolla',
  'coastal-foundation-design-in-newport-beach',
  'coastal-foundation-engineering-in-hermosa-beach',
  'coastal-foundation-engineering-in-la-jolla',
  'coastal-foundation-engineer-near-me-in-san-juan-capistrano',
  'coastal-home-addition-structural-engineering-in-carlsbad',
  'coastal-home-remodel-engineering-in-huntington-beach',
  'coastal-home-structural-engineering-in-huntington-beach',
  'coastal-slope-stabilization-engineering-in-laguna-beach',
  'coastal-structural-engineer-near-me-in-rancho-palos-verdes',
];

async function main() {
  try {
    const credentials = JSON.parse(fs.readFileSync('./gsc-credentials.json', 'utf-8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({
      version: 'v1',
      auth: authClient,
    });

    const siteUrl = 'sc-domain:aaaengineeringdesign.com';

    // Query last 90 days for a broader picture
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 90);

    console.log(`\n📊 GSC COASTAL POSTS TRAFFIC CHECK`);
    console.log(`═══════════════════════════════════════`);
    console.log(`Date Range: ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`);
    console.log(`Posts to check: ${COASTAL_POST_SLUGS.length}\n`);

    // Query GSC by page dimension, filtering for coastal blog URLs
    const response = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        dimensions: ['page'],
        rowLimit: 25000,
        dimensionFilterGroups: [
          {
            filters: [
              {
                dimension: 'page',
                operator: 'contains',
                expression: '/blog/coastal-',
              },
            ],
          },
        ],
      },
    });

    const rows = response.data.rows || [];

    // Map results
    const results = [];
    let totalClicks = 0;
    let totalImpressions = 0;

    for (const slug of COASTAL_POST_SLUGS) {
      const url = `https://aaaengineeringdesign.com/blog/${slug}`;
      const match = rows.find(r => r.keys[0].includes(slug));

      if (match) {
        totalClicks += match.clicks;
        totalImpressions += match.impressions;
        results.push({
          slug,
          clicks: match.clicks,
          impressions: match.impressions,
          ctr: (match.ctr * 100).toFixed(1) + '%',
          position: match.position.toFixed(1),
        });
      } else {
        results.push({
          slug,
          clicks: 0,
          impressions: 0,
          ctr: '0%',
          position: '-',
        });
      }
    }

    // Sort by clicks desc, then impressions desc
    results.sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);

    // Print results
    console.log('Post Slug                                              | Clicks | Impr  | CTR    | Pos');
    console.log('-------------------------------------------------------|--------|-------|--------|-----');

    for (const r of results) {
      const slug = r.slug.padEnd(55);
      const clicks = String(r.clicks).padStart(6);
      const impr = String(r.impressions).padStart(5);
      const ctr = r.ctr.padStart(6);
      const pos = String(r.position).padStart(4);
      console.log(`${slug} | ${clicks} | ${impr} | ${ctr} | ${pos}`);
    }

    console.log('-------------------------------------------------------|--------|-------|--------|-----');
    console.log(`${'TOTAL'.padEnd(55)} | ${String(totalClicks).padStart(6)} | ${String(totalImpressions).padStart(5)} |`);

    // Summary
    const withTraffic = results.filter(r => r.clicks > 0).length;
    const withImpressions = results.filter(r => r.impressions > 0).length;
    const zeroData = results.filter(r => r.impressions === 0).length;

    console.log(`\n📈 SUMMARY:`);
    console.log(`  Posts with clicks: ${withTraffic} / ${results.length}`);
    console.log(`  Posts with impressions: ${withImpressions} / ${results.length}`);
    console.log(`  Posts with zero data: ${zeroData} / ${results.length}`);
    console.log(`  Total clicks (90 days): ${totalClicks}`);
    console.log(`  Total impressions (90 days): ${totalImpressions}`);

    if (totalClicks < 10) {
      console.log(`\n🔴 VERDICT: Low traffic. Safe to redirect all 27 coastal posts.`);
    } else if (totalClicks < 50) {
      console.log(`\n🟡 VERDICT: Moderate traffic. Consider keeping top performers, redirect the rest.`);
    } else {
      console.log(`\n🟢 VERDICT: Meaningful traffic. Consider repurposing instead of redirecting.`);
    }

  } catch (error) {
    console.error('Error:', error.message);
    if (error.message.includes('credentials')) {
      console.log('\nMake sure gsc-credentials.json exists in the project root.');
    }
    process.exit(1);
  }
}

main();
