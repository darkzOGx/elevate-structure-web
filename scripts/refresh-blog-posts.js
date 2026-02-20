#!/usr/bin/env node
/**
 * refresh-blog-posts.js
 *
 * Programmatically refreshes 20 blog posts in src/lib/blog-data.ts with:
 * - CTR-optimized titles
 * - New meta description excerpts
 * - lastUpdated field set to 2026-02-20
 * - FAQ arrays with 3-5 items each
 *
 * Uses fs.openSync/writeSync for Windows large file compatibility.
 */

const fs = require('fs');
const path = require('path');

const BLOG_DATA_PATH = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');
const TODAY = '2026-02-20';

// ─── Post refresh definitions ───────────────────────────────────────────────

const fixedPosts = [
  {
    id: 'affordable-structural-engineer-near-me-in-long-beach',
    title: 'Affordable Structural Engineer in Long Beach: 5 Cost-Saving Tips 2026',
    excerpt: 'Licensed PE structural engineers in Long Beach from $500. AAA Engineering Design offers free consultations with 48-hour quotes. 500+ projects completed.',
    faq: [
      { question: 'How much does a structural engineer cost in Long Beach?', answer: 'Structural engineering fees in Long Beach range from $500 for basic assessments to $5,000 for complex residential projects. AAA Engineering Design provides free initial consultations and transparent pricing for all Long Beach homeowners.' },
      { question: 'Do I need a structural engineer for a home renovation in Long Beach?', answer: 'Yes, California Building Code requires a licensed structural engineer for load-bearing wall removal, room additions, foundation repairs, and seismic retrofits in Long Beach. PE-stamped plans are required for permit approval.' },
      { question: 'How do I find a licensed structural engineer near me in Long Beach?', answer: 'Verify PE licenses at bpelsg.ca.gov. AAA Engineering Design serves Long Beach with California-licensed Professional Engineers who provide same-day consultations and 48-hour quote turnaround for residential and commercial projects.' },
    ],
  },
  {
    id: 'foundation-assessment-services-in-long-beach',
    title: 'Foundation Assessment in Long Beach: Licensed PE Inspection Services 2026',
    excerpt: 'Professional foundation assessments in Long Beach by PE-licensed engineers. Same-day inspections available. Identify settlement, cracks, and structural issues before they worsen.',
    faq: [
      { question: 'How much does a foundation inspection cost in Long Beach?', answer: 'Foundation inspections in Long Beach typically cost $300-$800 depending on property size and complexity. AAA Engineering Design provides comprehensive PE-stamped foundation assessment reports accepted by all Long Beach building departments.' },
      { question: 'What are signs I need a foundation inspection in Long Beach?', answer: 'Common signs include diagonal wall cracks, sticking doors and windows, uneven floors, gaps between walls and ceiling, and visible foundation cracks. Long Beach properties near the coast face additional settlement risks from sandy soil conditions.' },
      { question: 'How long does a foundation assessment take in Long Beach?', answer: 'A standard foundation assessment takes 2-4 hours on-site, with the written PE-stamped report delivered within 48 hours. Emergency same-day assessments are available for urgent Long Beach foundation concerns.' },
    ],
  },
  {
    id: 'foundation-settlement-solutions-in-long-beach',
    title: 'Foundation Settlement Repair in Long Beach: 3 Proven Fix Methods 2026',
    excerpt: 'Fix foundation settlement in Long Beach with PE-engineered solutions. Underpinning, helical piers, and mudjacking options. Free assessment with 48-hour quote turnaround.',
    faq: [
      { question: 'What causes foundation settlement in Long Beach homes?', answer: 'Long Beach foundation settlement results from expansive clay soils, poor drainage, tree root intrusion, and the area\'s high water table. Coastal properties face additional risks from sandy substrate and seismic activity affecting soil compaction.' },
      { question: 'How much does foundation settlement repair cost in Long Beach?', answer: 'Foundation settlement repair in Long Beach ranges from $3,000-$15,000 for pier underpinning and $1,500-$5,000 for mudjacking. Costs depend on settlement severity, foundation type, and number of piers required.' },
      { question: 'Can foundation settlement be permanently fixed?', answer: 'Yes. PE-engineered solutions like steel push piers and helical piers provide permanent foundation stabilization. AAA Engineering Design creates custom repair plans that address the root cause of settlement, not just symptoms.' },
    ],
  },
  {
    id: 'residential-structural-engineer-near-me-newport-beach',
    title: 'Residential Structural Engineer in Newport Beach: PE-Licensed Experts 2026',
    excerpt: 'Top-rated residential structural engineers in Newport Beach. PE-stamped plans for additions, remodels, and custom homes. Free consultation with 48-hour turnaround.',
    faq: [
      { question: 'How much does a residential structural engineer cost in Newport Beach?', answer: 'Residential structural engineering in Newport Beach costs $2,000-$8,000 for standard projects and $10,000-$25,000 for custom coastal homes. Newport Beach projects often require additional engineering for Coastal Commission compliance.' },
      { question: 'Do I need a structural engineer for a home remodel in Newport Beach?', answer: 'Yes, Newport Beach building department requires PE-stamped structural plans for load-bearing wall removal, room additions, second-story additions, and any work affecting the structural system. Plans must comply with CBC 2025 and local coastal overlay requirements.' },
      { question: 'What makes Newport Beach structural engineering different?', answer: 'Newport Beach projects require expertise in coastal soil conditions, salt air corrosion protection, Coastal Commission requirements, and flood zone engineering. AAA Engineering Design has completed 50+ Newport Beach residential projects.' },
    ],
  },
  {
    id: 'structural-engineering-quote-near-me-in-newport-beach',
    title: 'Structural Engineering Quote in Newport Beach: Free Estimates 2026',
    excerpt: 'Get a free structural engineering quote in Newport Beach within 48 hours. Licensed PE engineers for residential and commercial projects. No obligation consultation.',
    faq: [
      { question: 'How do I get a structural engineering quote in Newport Beach?', answer: 'Contact AAA Engineering Design for a free consultation. We provide detailed quotes within 48 hours covering scope of work, timeline, and fixed-price fees for Newport Beach residential and commercial structural engineering projects.' },
      { question: 'What information do I need for a structural engineering quote?', answer: 'Provide your property address, project scope (addition, remodel, ADU, repair), existing plans if available, and timeline. For Newport Beach properties, note if the project is in the coastal zone or flood zone.' },
      { question: 'Are structural engineering quotes free in Newport Beach?', answer: 'Yes, AAA Engineering Design offers free initial consultations and no-obligation quotes for all Newport Beach projects. Our PE engineers assess your needs and provide transparent pricing before any commitment.' },
    ],
  },
  {
    id: 'foundation-inspection-engineering-in-newport-beach',
    title: 'Foundation Inspection in Newport Beach: PE-Licensed Assessment 2026',
    excerpt: 'Expert foundation inspections in Newport Beach by licensed PE engineers. Identify settlement, cracks, and coastal erosion damage. Same-day assessments available.',
    faq: [
      { question: 'How much does a foundation inspection cost in Newport Beach?', answer: 'Foundation inspections in Newport Beach cost $400-$1,000 depending on property size and foundation type. Coastal properties may require additional assessment for salt air corrosion and moisture intrusion at $200-$400 additional.' },
      { question: 'What do foundation inspectors look for in Newport Beach homes?', answer: 'PE engineers inspect for settlement cracks, moisture damage, reinforcement corrosion, drainage issues, and seismic vulnerability. Newport Beach inspections include coastal-specific checks for salt air deterioration and flood zone compliance.' },
      { question: 'How often should Newport Beach homes get foundation inspections?', answer: 'Newport Beach homeowners should schedule foundation inspections every 5-7 years, or immediately if noticing cracks, uneven floors, or water intrusion. Coastal properties benefit from more frequent 3-5 year inspection cycles due to marine environment exposure.' },
    ],
  },
  {
    id: 'foundation-repair-engineer-near-me-in-anaheim',
    title: 'Foundation Repair Engineer in Anaheim: Licensed PE Solutions 2026',
    excerpt: 'Anaheim foundation repair by PE-licensed engineers. Crack repair, pier underpinning, and settlement correction. 500+ projects completed. Free assessment.',
    faq: [
      { question: 'How much does foundation repair cost in Anaheim?', answer: 'Anaheim foundation repair costs $2,500-$12,000 depending on damage severity. Crack sealing runs $500-$2,000, pier underpinning costs $1,000-$3,000 per pier, and full foundation replacement ranges from $20,000-$50,000.' },
      { question: 'What causes foundation problems in Anaheim?', answer: 'Anaheim foundation issues stem from expansive clay soils that swell and shrink with moisture changes, poor drainage, tree root intrusion, and seismic activity. The Santa Ana River floodplain creates additional soil instability in parts of Anaheim.' },
      { question: 'Do I need a structural engineer for foundation repair in Anaheim?', answer: 'Yes, Anaheim building department requires PE-stamped plans for structural foundation repairs. A licensed structural engineer designs the repair solution, provides calculations, and ensures code compliance for permit approval.' },
    ],
  },
  {
    id: 'foundation-settlement-solutions-in-anaheim',
    title: 'Foundation Settlement in Anaheim: Expert Repair Solutions 2026',
    excerpt: 'Fix Anaheim foundation settlement with PE-engineered pier systems. Helical piers, push piers, and slab lifting. Free assessment and 48-hour quotes.',
    faq: [
      { question: 'How do I know if my Anaheim home has foundation settlement?', answer: 'Signs of foundation settlement in Anaheim homes include diagonal cracks in drywall, doors and windows that stick or won\'t close, gaps between walls and ceilings, sloping floors, and visible cracks in the concrete foundation.' },
      { question: 'What is the best foundation repair method for Anaheim homes?', answer: 'Steel push piers are the most effective permanent solution for Anaheim foundation settlement, reaching stable soil below the expansive clay layer. Helical piers work well for lighter structures and new construction foundation support.' },
      { question: 'How long does foundation settlement repair take in Anaheim?', answer: 'Most Anaheim foundation repairs take 3-7 days for pier installation and 2-4 weeks for the complete engineering, permitting, and construction process. Emergency stabilization can begin within 24-48 hours of assessment.' },
    ],
  },
  {
    id: 'foundation-drainage-engineering-in-anaheim',
    title: 'Foundation Drainage Engineering in Anaheim: Protect Your Home 2026',
    excerpt: 'PE-designed foundation drainage systems in Anaheim. French drains, sump pumps, and waterproofing solutions. Prevent settlement and water damage. Free consultation.',
    faq: [
      { question: 'Why is foundation drainage important in Anaheim?', answer: 'Anaheim\'s expansive clay soils absorb water and swell, putting pressure on foundations. Proper drainage prevents soil expansion, settlement, and water intrusion that cause cracking, shifting, and structural damage to Anaheim homes.' },
      { question: 'How much does foundation drainage installation cost in Anaheim?', answer: 'Foundation drainage systems in Anaheim cost $3,000-$10,000 for French drains, $1,500-$4,000 for sump pump installation, and $5,000-$15,000 for comprehensive waterproofing. Costs depend on property size and soil conditions.' },
      { question: 'What drainage solutions work best for Anaheim soil?', answer: 'French drains with perforated pipe and gravel beds work best for Anaheim\'s clay soils. Area drains capture surface water, and foundation waterproofing membranes prevent moisture intrusion. A PE engineer designs the optimal system for your specific soil conditions.' },
    ],
  },
  {
    id: 'home-addition-structural-engineer-near-me-in-santa-ana',
    title: 'Home Addition Structural Engineer in Santa Ana: PE Plans 2026',
    excerpt: 'Licensed structural engineers for home additions in Santa Ana. Room additions, second stories, and ADUs. PE-stamped plans accepted by Santa Ana building department.',
    faq: [
      { question: 'How much does a structural engineer charge for a home addition in Santa Ana?', answer: 'Structural engineering for home additions in Santa Ana costs $2,000-$5,000 for single-story additions and $3,500-$8,000 for second-story additions. ADU structural plans range from $2,500-$6,000 depending on size and complexity.' },
      { question: 'Do I need a structural engineer for a room addition in Santa Ana?', answer: 'Yes, Santa Ana building department requires PE-stamped structural plans for all room additions, second-story additions, and ADUs. The structural engineer designs the foundation, framing connections, and lateral force-resisting system.' },
      { question: 'How long does it take to get structural plans for an addition in Santa Ana?', answer: 'Structural engineering plans for Santa Ana home additions take 2-4 weeks for design and drafting. Plan check at Santa Ana building department typically takes 4-6 weeks. Total timeline from engineering to permit is 6-10 weeks.' },
    ],
  },
  {
    id: 'structural-engineering-quote-near-me-in-costa-mesa',
    title: 'Structural Engineering Quote in Costa Mesa: Free PE Estimates 2026',
    excerpt: 'Free structural engineering quotes in Costa Mesa. Licensed PE engineers for residential and commercial projects. 48-hour turnaround on all estimates.',
    faq: [
      { question: 'How do I get a structural engineering quote in Costa Mesa?', answer: 'Contact AAA Engineering Design for a free no-obligation consultation. We provide detailed structural engineering quotes within 48 hours for Costa Mesa residential additions, remodels, ADUs, and commercial tenant improvements.' },
      { question: 'What does a structural engineer cost in Costa Mesa?', answer: 'Structural engineering in Costa Mesa costs $1,500-$5,000 for residential projects and $3,000-$15,000 for commercial work. Free initial consultations help determine exact scope and pricing for your specific project.' },
      { question: 'What should I expect from a structural engineering consultation in Costa Mesa?', answer: 'During a free consultation, our PE engineer reviews your project plans, assesses existing conditions, discusses code requirements specific to Costa Mesa, and provides a written scope of work with fixed-price quote within 48 hours.' },
    ],
  },
  {
    id: 'licensed-structural-engineer-near-me-in-huntington-beach',
    title: 'Licensed Structural Engineer in Huntington Beach: PE Experts 2026',
    excerpt: 'PE-licensed structural engineers serving Huntington Beach. Residential, commercial, and coastal projects. Verify credentials at bpelsg.ca.gov. Free consultation.',
    faq: [
      { question: 'How do I verify a structural engineer\'s license in Huntington Beach?', answer: 'Verify California PE licenses at bpelsg.ca.gov using the engineer\'s name or license number. All AAA Engineering Design engineers hold active California PE licenses and carry professional liability insurance for Huntington Beach projects.' },
      { question: 'What services do structural engineers provide in Huntington Beach?', answer: 'Huntington Beach structural engineers provide home addition plans, seismic retrofits, foundation design and repair, ADU engineering, load-bearing wall removal analysis, and commercial tenant improvement engineering. All work includes PE-stamped plans for permit.' },
      { question: 'Why choose a local structural engineer in Huntington Beach?', answer: 'Local Huntington Beach engineers understand coastal building requirements, sandy soil conditions, flood zone regulations, and the city\'s specific plan check process. AAA Engineering Design has completed 30+ projects in Huntington Beach.' },
    ],
  },
  {
    id: 'foundation-repair-engineer-near-me-in-huntington-beach',
    title: 'Foundation Repair Engineer in Huntington Beach: Coastal PE Solutions 2026',
    excerpt: 'Huntington Beach foundation repair by PE-licensed engineers. Sandy soil stabilization, pier underpinning, and coastal foundation solutions. Free assessment.',
    faq: [
      { question: 'What causes foundation problems in Huntington Beach?', answer: 'Huntington Beach foundation issues result from sandy soil conditions, high water table, salt air corrosion of reinforcement steel, and seismic activity. Coastal properties face additional risks from wave action and tidal moisture fluctuations.' },
      { question: 'How much does foundation repair cost in Huntington Beach?', answer: 'Huntington Beach foundation repair ranges from $3,000-$15,000 for pier underpinning and $5,000-$20,000 for comprehensive coastal foundation rehabilitation. Sandy soil conditions often require deeper pier installations than inland cities.' },
      { question: 'Do Huntington Beach foundations need special engineering?', answer: 'Yes, Huntington Beach\'s sandy soils and coastal environment require specialized foundation engineering. PE engineers design corrosion-resistant reinforcement, deeper pier systems, and proper drainage to protect against marine conditions.' },
    ],
  },
  {
    id: 'pier-foundation-engineering-in-huntington-beach',
    title: 'Pier Foundation Engineering in Huntington Beach: Coastal Design 2026',
    excerpt: 'PE-designed pier foundations for Huntington Beach coastal properties. Deep foundation solutions for sandy soils. 20+ years of coastal engineering expertise.',
    faq: [
      { question: 'Why are pier foundations used in Huntington Beach?', answer: 'Pier foundations bypass Huntington Beach\'s sandy surface soils to reach stable bearing layers 15-30 feet deep. This prevents settlement and provides reliable support for residential and commercial structures in coastal environments.' },
      { question: 'How deep do pier foundations go in Huntington Beach?', answer: 'Pier foundations in Huntington Beach typically extend 15-30 feet deep to reach competent bearing soil below the sandy surface layer. Exact depth is determined by geotechnical investigation and PE engineering calculations.' },
      { question: 'How much do pier foundations cost in Huntington Beach?', answer: 'Pier foundation systems in Huntington Beach cost $8,000-$25,000 for residential projects depending on the number of piers, depth requirements, and soil conditions. Commercial pier foundations range from $15,000-$50,000.' },
    ],
  },
  {
    id: 'slab-foundation-engineering-in-huntington-beach',
    title: 'Slab Foundation Design in Huntington Beach: PE Engineering 2026',
    excerpt: 'Engineered slab foundations for Huntington Beach homes. Post-tension and conventional slab design for sandy coastal soils. PE-stamped plans for permit.',
    faq: [
      { question: 'What type of slab foundation is best for Huntington Beach?', answer: 'Post-tension slab foundations perform best in Huntington Beach\'s sandy soils, providing crack resistance and uniform support. Conventional reinforced slabs work for smaller structures when properly designed by a PE for local soil conditions.' },
      { question: 'How thick should a slab foundation be in Huntington Beach?', answer: 'Slab foundations in Huntington Beach typically require 4-6 inches for residential construction with thickened edges at 12-18 inches. Post-tension slabs can be thinner (4 inches) due to pre-stressed reinforcement providing additional strength.' },
      { question: 'Can you build a slab foundation on Huntington Beach sandy soil?', answer: 'Yes, with proper PE engineering. Slab foundations on Huntington Beach sandy soil require compacted fill, moisture barriers, and appropriate reinforcement design. Post-tension slabs are preferred for their superior performance in sandy conditions.' },
    ],
  },
  {
    id: 'adu-structural-engineer-near-me-in-irvine',
    title: 'ADU Structural Engineer in Irvine: PE Plans From $2,500 in 2026',
    excerpt: 'Irvine ADU structural engineering from $2,500. Garage conversions, detached ADUs, and JADUs. PE-stamped plans approved by Irvine building department. 200+ ADU projects.',
    faq: [
      { question: 'How much does ADU structural engineering cost in Irvine?', answer: 'ADU structural engineering in Irvine costs $2,500-$6,000 depending on ADU type. Garage conversions start at $2,500, detached ADUs range $3,500-$5,000, and two-story ADUs cost $4,500-$6,000. All include PE-stamped plans for Irvine permit.' },
      { question: 'What size ADU can I build in Irvine without a permit?', answer: 'All ADUs in Irvine require building permits regardless of size. However, California state law (AB 68) allows ADUs up to 800 sq ft by right on single-family lots. Irvine processes ADU permits within 60 days as required by state law.' },
      { question: 'Can I convert my garage to an ADU in Irvine?', answer: 'Yes, garage conversions to ADUs are allowed in Irvine under California state ADU law. You do not need to replace the parking space. Structural engineering is required to verify the existing garage structure supports residential occupancy loads.' },
    ],
  },
  {
    id: 'residential-foundation-design-in-irvine',
    title: 'Residential Foundation Design in Irvine: PE Engineering Guide 2026',
    excerpt: 'Custom residential foundation design in Irvine by PE-licensed engineers. Slab, raised, and post-tension options for Irvine\'s expansive soils. Free consultation.',
    faq: [
      { question: 'What foundation types are common in Irvine homes?', answer: 'Irvine residential construction uses primarily post-tension slab foundations (80% of new construction), conventional reinforced slabs, and raised foundations in older neighborhoods. Post-tension slabs best resist Irvine\'s expansive soil conditions.' },
      { question: 'How much does residential foundation design cost in Irvine?', answer: 'Residential foundation engineering in Irvine costs $1,500-$4,000 for standard designs and $3,000-$8,000 for custom homes. Post-tension foundation design costs slightly more due to tendon layout calculations and special inspection requirements.' },
      { question: 'Do Irvine homes have foundation problems?', answer: 'Some Irvine homes experience foundation issues from expansive clay soils that swell with moisture and shrink during drought. Proper drainage, consistent watering, and PE-designed foundations minimize these risks. Older homes without post-tension slabs are most vulnerable.' },
    ],
  },
  {
    id: 'stem-wall-foundation-design-in-irvine',
    title: 'Stem Wall Foundation in Irvine: Design and Engineering 2026',
    excerpt: 'PE-engineered stem wall foundations for Irvine residential projects. Raised foundation design for slope sites and crawl space access. Code-compliant plans.',
    faq: [
      { question: 'What is a stem wall foundation?', answer: 'A stem wall foundation uses short concrete walls extending from the footing to the floor level, creating a raised foundation with crawl space access. This design provides ventilation, plumbing access, and works well on sloped Irvine properties.' },
      { question: 'When is a stem wall foundation needed in Irvine?', answer: 'Stem wall foundations are needed in Irvine for sloped lots requiring grade changes, properties needing crawl space access for plumbing and utilities, additions to existing raised foundation homes, and areas with high water table concerns.' },
      { question: 'How much does a stem wall foundation cost in Irvine?', answer: 'Stem wall foundation construction in Irvine costs $12-$22 per linear foot for the stem wall plus $6-$10 per square foot for footings. Total project costs for a typical Irvine home range from $15,000-$35,000 including engineering and construction.' },
    ],
  },
];

// Dynamic search posts (19 and 20)
const dynamicPosts = [
  {
    searchPattern: 'pasadena',
    label: 'Post 19 (Pasadena seismic)',
    title: 'Seismic Retrofit Engineer in Pasadena: Mandatory Compliance 2026',
    excerpt: 'Pasadena seismic retrofit engineers. Soft-story retrofit, cripple wall bracing, and foundation bolting. Meet mandatory retrofit deadlines. PE-stamped plans.',
    faq: [
      { question: 'Does Pasadena require mandatory seismic retrofitting?', answer: 'Pasadena has identified vulnerable soft-story buildings requiring seismic evaluation and potential retrofit. Property owners receive notices with compliance timelines. AAA Engineering Design helps Pasadena building owners meet all retrofit requirements with PE-stamped plans.' },
      { question: 'How much does seismic retrofitting cost in Pasadena?', answer: 'Pasadena seismic retrofit costs range from $3,000-$7,000 for foundation bolting and cripple wall bracing to $50,000-$200,000 for soft-story apartment building retrofits. Engineering fees are typically 10-15% of construction cost.' },
      { question: 'What seismic retrofit methods work for Pasadena homes?', answer: 'Common Pasadena retrofit methods include foundation bolting (securing house to foundation), cripple wall bracing (strengthening short walls above foundation), and steel moment frames for soft-story buildings. Your PE engineer determines the best approach.' },
    ],
  },
  {
    searchPattern: 'los-angeles',
    label: 'Post 20 (Los Angeles structural)',
    title: 'Structural Engineer in Los Angeles: Licensed PE Services 2026',
    excerpt: 'Top structural engineers in Los Angeles. PE-licensed for residential, commercial, and seismic retrofit projects. Free consultation with 48-hour quotes.',
    faq: [
      { question: 'How much does a structural engineer cost in Los Angeles?', answer: 'Los Angeles structural engineering costs $1,500-$5,000 for residential projects, $3,000-$15,000 for commercial work, and $5,000-$25,000 for complex custom homes. Free initial consultations help determine exact scope and pricing.' },
      { question: 'Do I need a structural engineer in Los Angeles?', answer: 'LADBS requires PE-stamped structural plans for load-bearing wall removal, room additions, ADUs, seismic retrofits, and any work exceeding prescriptive code limits. A licensed structural engineer ensures code compliance and permit approval.' },
      { question: 'What is LA Ordinance 183893?', answer: 'LA Ordinance 183893 requires owners of soft-story wood-frame buildings to complete mandatory seismic retrofits. The ordinance affects approximately 13,500 buildings citywide. Property owners must hire a licensed structural engineer to design compliant retrofit solutions.' },
    ],
  },
];

// ─── Helper functions ───────────────────────────────────────────────────────

/**
 * Escape a string for safe inclusion inside single-quoted JS strings.
 */
function escSQ(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/**
 * Build the faq array source string for insertion into blog-data.ts.
 */
function buildFaqString(faqItems) {
  const entries = faqItems.map(item => {
    return `      { question: '${escSQ(item.question)}', answer: '${escSQ(item.answer)}' }`;
  });
  return `    faq: [\n${entries.join(',\n')},\n    ],`;
}

/**
 * Find the block for a given post id. Returns { start, end } character indices
 * covering from `{` to matching `}` of the post object in the blogPosts array.
 */
function findPostBlock(content, postId) {
  // Search for id: 'postId' - handle both single and double quotes
  const idPatterns = [
    `id: '${postId}'`,
    `id: "${postId}"`,
    `id: \`${postId}\``,
  ];

  let idIndex = -1;
  for (const pat of idPatterns) {
    idIndex = content.indexOf(pat);
    if (idIndex !== -1) break;
  }

  if (idIndex === -1) return null;

  // Walk backward to find the opening `{` of this object
  let braceDepth = 0;
  let blockStart = idIndex;
  for (let i = idIndex - 1; i >= 0; i--) {
    if (content[i] === '{') {
      blockStart = i;
      break;
    }
  }

  // Walk forward from blockStart to find the matching closing `}`
  braceDepth = 0;
  let blockEnd = -1;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = blockStart; i < content.length; i++) {
    const ch = content[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (inString) {
      if (ch === stringChar) {
        inString = false;
      }
      continue;
    }

    // Check for template literals, single and double quotes
    if (ch === "'" || ch === '"' || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }

    if (ch === '{') braceDepth++;
    if (ch === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        blockEnd = i;
        break;
      }
    }
  }

  if (blockEnd === -1) return null;
  return { start: blockStart, end: blockEnd, block: content.substring(blockStart, blockEnd + 1) };
}

/**
 * Update a field value in a post block. Returns the modified block.
 * Handles single-quoted, double-quoted, or backtick-quoted string values.
 */
function updateStringField(block, fieldName, newValue) {
  // Match field: 'value' or field: "value" or field: `value`
  // The value can span the rest of the line
  const patterns = [
    // Single quoted - non-greedy match to closing quote (handling escaped quotes)
    new RegExp(`(${fieldName}:\\s*)('[^'\\\\]*(?:\\\\.[^'\\\\]*)*')`, 's'),
    // Double quoted
    new RegExp(`(${fieldName}:\\s*)("[^"\\\\]*(?:\\\\.[^"\\\\]*)*")`, 's'),
    // Backtick
    new RegExp(`(${fieldName}:\\s*)(\`[^\`\\\\]*(?:\\\\.[^\`\\\\]*)*\`)`, 's'),
  ];

  for (const regex of patterns) {
    const match = block.match(regex);
    if (match) {
      const prefix = match[1]; // e.g. "title: "
      const escapedValue = escSQ(newValue);
      return block.replace(match[0], `${prefix}'${escapedValue}'`);
    }
  }

  return block; // unchanged if field not found
}

/**
 * Add or update the lastUpdated field in a post block.
 */
function upsertLastUpdated(block, date) {
  // Check if lastUpdated already exists
  if (/lastUpdated:\s*['"`]/.test(block)) {
    return updateStringField(block, 'lastUpdated', date);
  }

  // Add after date: field
  const dateFieldRegex = /(date:\s*['"`][^'"`]*['"`],?\s*\r?\n)/;
  const match = block.match(dateFieldRegex);
  if (match) {
    const lineEnding = block.includes('\r\n') ? '\r\n' : '\n';
    return block.replace(match[0], `${match[0]}    lastUpdated: '${date}',${lineEnding}`);
  }

  return block;
}

/**
 * Add or replace the faq field in a post block.
 */
function upsertFaq(block, faqItems) {
  const faqString = buildFaqString(faqItems);
  const lineEnding = block.includes('\r\n') ? '\r\n' : '\n';

  // Check if faq already exists - find faq: [ ... ],
  // Use a simple approach: find 'faq:' and replace up to the closing '],'
  const faqStartRegex = /(\s*)faq:\s*\[/;
  const faqMatch = block.match(faqStartRegex);

  if (faqMatch) {
    // Find the start of faq field
    const faqIdx = block.indexOf(faqMatch[0]);
    // Find the closing '],\n' or '],\r\n'
    let bracketDepth = 0;
    let faqEnd = -1;
    let inStr = false;
    let strCh = '';
    let esc = false;

    for (let i = faqIdx; i < block.length; i++) {
      const ch = block[i];
      if (esc) { esc = false; continue; }
      if (ch === '\\') { esc = true; continue; }
      if (inStr) { if (ch === strCh) inStr = false; continue; }
      if (ch === "'" || ch === '"' || ch === '`') { inStr = true; strCh = ch; continue; }
      if (ch === '[') bracketDepth++;
      if (ch === ']') {
        bracketDepth--;
        if (bracketDepth === 0) {
          // Include trailing comma if present
          faqEnd = i;
          if (block[i + 1] === ',') faqEnd = i + 1;
          break;
        }
      }
    }

    if (faqEnd !== -1) {
      return block.substring(0, faqIdx) + faqString + block.substring(faqEnd + 1);
    }
  }

  // faq doesn't exist - add before content: field
  const contentFieldRegex = /([ \t]*content:\s*[`'"])/;
  const contentMatch = block.match(contentFieldRegex);
  if (contentMatch) {
    const contentIdx = block.indexOf(contentMatch[0]);
    return block.substring(0, contentIdx) + faqString + lineEnding + block.substring(contentIdx);
  }

  // Fallback: add before the closing brace
  const lastBrace = block.lastIndexOf('}');
  if (lastBrace !== -1) {
    return block.substring(0, lastBrace) + faqString + lineEnding + '  ' + block.substring(lastBrace);
  }

  return block;
}

/**
 * Find a post by searching for ids containing a pattern, excluding noIndex posts.
 */
function findDynamicPostId(content, pattern) {
  // Find all id: 'something-with-pattern' occurrences
  const idRegex = /id:\s*'([^']*?)'/g;
  let match;
  const candidates = [];

  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    if (id.includes(pattern)) {
      candidates.push({ id, index: match.index });
    }
  }

  // Filter out noIndex posts
  for (const candidate of candidates) {
    const postBlock = findPostBlock(content, candidate.id);
    if (!postBlock) continue;
    if (/noIndex:\s*true/.test(postBlock.block)) {
      console.log(`  Skipping ${candidate.id} (noIndex: true)`);
      continue;
    }
    return candidate.id;
  }

  return null;
}

// ─── Main script ────────────────────────────────────────────────────────────

function main() {
  console.log('=== Blog Post Refresh Script ===');
  console.log(`Reading: ${BLOG_DATA_PATH}`);

  if (!fs.existsSync(BLOG_DATA_PATH)) {
    console.error(`ERROR: File not found: ${BLOG_DATA_PATH}`);
    process.exit(1);
  }

  let content = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');
  console.log(`File size: ${(content.length / 1024).toFixed(1)} KB`);
  console.log(`Line endings: ${content.includes('\r\n') ? 'CRLF (\\r\\n)' : 'LF (\\n)'}`);
  console.log('');

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  // Process the 18 fixed-id posts
  for (let i = 0; i < fixedPosts.length; i++) {
    const post = fixedPosts[i];
    const num = i + 1;
    console.log(`[${num}/20] Processing: ${post.id}`);

    const blockInfo = findPostBlock(content, post.id);
    if (!blockInfo) {
      console.log(`  WARNING: Post not found, skipping.`);
      skipped++;
      continue;
    }

    try {
      let newBlock = blockInfo.block;

      // Update title
      newBlock = updateStringField(newBlock, 'title', post.title);

      // Update excerpt
      newBlock = updateStringField(newBlock, 'excerpt', post.excerpt);

      // Add/update lastUpdated
      newBlock = upsertLastUpdated(newBlock, TODAY);

      // Add/update FAQ
      newBlock = upsertFaq(newBlock, post.faq);

      // Replace in content
      content = content.substring(0, blockInfo.start) + newBlock + content.substring(blockInfo.end + 1);

      console.log(`  OK - Title: "${post.title.substring(0, 60)}..."`);
      updated++;
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
      errors++;
    }
  }

  // Process dynamic posts (19 and 20)
  for (let i = 0; i < dynamicPosts.length; i++) {
    const dynPost = dynamicPosts[i];
    const num = 19 + i;
    console.log(`[${num}/20] Searching for ${dynPost.label} (pattern: "${dynPost.searchPattern}")`);

    const foundId = findDynamicPostId(content, dynPost.searchPattern);
    if (!foundId) {
      console.log(`  WARNING: No active (non-noIndex) post found matching "${dynPost.searchPattern}", skipping.`);
      skipped++;
      continue;
    }

    console.log(`  Found post: ${foundId}`);
    const blockInfo = findPostBlock(content, foundId);
    if (!blockInfo) {
      console.log(`  WARNING: Could not extract post block, skipping.`);
      skipped++;
      continue;
    }

    try {
      let newBlock = blockInfo.block;

      // Update title
      newBlock = updateStringField(newBlock, 'title', dynPost.title);

      // Update excerpt
      newBlock = updateStringField(newBlock, 'excerpt', dynPost.excerpt);

      // Add/update lastUpdated
      newBlock = upsertLastUpdated(newBlock, TODAY);

      // Add/update FAQ
      newBlock = upsertFaq(newBlock, dynPost.faq);

      // Replace in content
      content = content.substring(0, blockInfo.start) + newBlock + content.substring(blockInfo.end + 1);

      console.log(`  OK - Title: "${dynPost.title.substring(0, 60)}..."`);
      updated++;
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
      errors++;
    }
  }

  // Write file using openSync/writeSync (Windows large file gotcha)
  console.log('');
  console.log('Writing file...');
  try {
    const buf = Buffer.from(content, 'utf-8');
    const fd = fs.openSync(BLOG_DATA_PATH, 'w');
    fs.writeSync(fd, buf, 0, buf.length, 0);
    fs.closeSync(fd);
    console.log(`File written successfully (${(buf.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`FATAL: Failed to write file: ${err.message}`);
    process.exit(1);
  }

  // Summary
  console.log('');
  console.log('=== Summary ===');
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Errors:  ${errors}`);

  if (errors > 0) {
    process.exit(1);
  }
}

main();
