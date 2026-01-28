---
name: socal-engineering-blog
description: Generate SEO-optimized, geo-targeted engineering design blog posts for aaaengineeringdesign.com focused on Southern California cities. Use when user requests blog posts about structural engineering, civil engineering, MEP design, or engineering services with California/city-specific optimization. Includes comprehensive keyword strategy, interlinking rules, local SEO optimization, and AI Overview (AIO) optimization.
---

# SoCal Engineering Blog Generator

---

## 🔄 AUTO-INVOKE SERP API (MANDATORY ENRICHMENT STEP)

**⚡ After generating the blog topic list, you MUST enrich it with SERP API keyword intelligence.**

### Workflow: Generate List → SERP Enrich → Write Blogs

```
USER REQUEST          GENERATE LIST         SERP ENRICH           WRITE BLOGS
"Generate 20    →    20 blog titles   →    Batch fetch PAA/   →  Generate with
 blog posts"         with keywords         PASF for all 20        real SERP data
```

### Step 1: Generate Blog Topic List FIRST

When user requests multiple blog posts (e.g., "generate 20 blog posts"):

1. **Create the full list** of blog titles following the HIGH-CONVERSION TARGETING FRAMEWORK
2. **Extract primary keyword** for each blog post
3. **Map each keyword to a topic** from `keyword-intelligence/data/active_topics.json`

**Example output after Step 1:**
```
| # | Blog Title | Primary Keyword | Topic |
|---|------------|-----------------|-------|
| 1 | ADU Structural Engineering in Irvine | ADU structural engineering Irvine | residential-structural-engineering |
| 2 | Soft Story Retrofit Requirements Santa Monica | soft story retrofit Santa Monica | seismic-engineering |
| 3 | Foundation Repair Engineer Newport Beach | foundation repair Newport Beach | foundation-engineering |
| ... | ... | ... | ... |
```

### Step 2: Batch SERP API Enrichment

**After the list is generated**, run SERP API for ALL keywords:

```bash
# For each keyword in the list, fetch intelligence:
python keyword-intelligence/fetcher.py "ADU structural engineering Irvine" --topic residential-structural-engineering --save
python keyword-intelligence/fetcher.py "soft story retrofit Santa Monica" --topic seismic-engineering --save
python keyword-intelligence/fetcher.py "foundation repair Newport Beach" --topic foundation-engineering --save
# ... continue for all keywords in the list
```

**Or batch by topic if multiple blogs share the same topic:**
```bash
python keyword-intelligence/scheduler.py --run-now --topic residential-structural-engineering
python keyword-intelligence/scheduler.py --run-now --topic seismic-engineering
```

### Step 3: Read Enrichment Data

For each blog post, read its intelligence file and extract:
- `people_also_ask` → Real questions for FAQ section
- `people_also_search_for` → Related keywords to weave into content
- `long_tail_keywords` → Ideas for H2/H3 headers
- `serp_features_present` → Which schema to prioritize (featured_snippet → answer capsule, local_pack → LocalBusiness schema)
- `query_fan_out_intents` → Content structure by intent (cost, process, requirements, etc.)

### Step 4: Generate Enriched Blog Posts

Now write each blog using the SERP-enriched data:

**Before SERP enrichment (generic):**
```
FAQ Section:
- What is ADU structural engineering?
- How much does it cost?
- Do I need a permit?
```

**After SERP enrichment (real PAA questions):**
```
FAQ Section (from actual Google PAA):
- Do I need a structural engineer for an ADU in California?
- How much does a structural engineer charge for ADU plans?
- What size ADU can I build without a permit in Irvine?
- Can I convert my garage to an ADU in Orange County?
- What is the timeline for ADU permit approval in Irvine?
```

### Quick Reference: Topic Mapping

| Blog Topic Contains | Topic ID |
|-----------------------|----------|
| ADU, accessory dwelling, granny flat, addition | `residential-structural-engineering` |
| commercial, tenant improvement, office, retail | `commercial-structural-engineering` |
| seismic, retrofit, earthquake, soft story | `seismic-engineering` |
| foundation, repair, hillside foundation, underpinning | `foundation-engineering` |
| MEP, HVAC, electrical, plumbing, Title 24 | `mep-engineering` |
| civil, grading, drainage, retaining wall | `civil-engineering` |
| permit, red tag, unpermitted, as-built | `permit-compliance` |
| coastal, beach, bluff, Coastal Commission | `coastal-engineering` |
| hillside, slope, canyon, cantilevered | `hillside-engineering` |
| emergency, fire damage, earthquake damage | `emergency-engineering` |

### Example: 5 Blog Post Batch

**User:** "Generate 5 blog posts for Orange County"

**Step 1 - Generate list:**
```
1. ADU Structural Engineering in Irvine (residential-structural-engineering)
2. Soft Story Retrofit in Anaheim (seismic-engineering)
3. Foundation Repair in Newport Beach (foundation-engineering)
4. Coastal Bluff Engineering in Laguna Beach (coastal-engineering)
5. Red Tag Removal in Santa Ana (permit-compliance)
```

**Step 2 - Batch SERP fetch:**
```bash
python keyword-intelligence/fetcher.py "ADU structural engineering Irvine" --topic residential-structural-engineering --save
python keyword-intelligence/fetcher.py "soft story retrofit Anaheim" --topic seismic-engineering --save
python keyword-intelligence/fetcher.py "foundation repair Newport Beach" --topic foundation-engineering --save
python keyword-intelligence/fetcher.py "coastal bluff engineering Laguna Beach" --topic coastal-engineering --save
python keyword-intelligence/fetcher.py "red tag removal Santa Ana" --topic permit-compliance --save
```

**Step 3 - Read each intelligence file and generate enriched blogs**

---

Generate high-quality, SEO-optimized blog posts for AAA Engineering Design targeting Southern California cities with proper keyword integration, internal linking, and local SEO optimization.

---

## 🚨 MANDATORY FRAMEWORK - NO EXCEPTIONS 🚨

**⛔ STOP! Before generating ANY blog post, you MUST follow the HIGH-CONVERSION TARGETING FRAMEWORK below.**

**This is NOT optional. This is NOT a suggestion. This is the ONLY way to generate blog posts.**

| Rule | Requirement |
|------|-------------|
| **City Selection** | ONLY from Platinum/Gold/Growth tier lists below |
| **Keyword Selection** | MUST match city's archetype (Subterranean/Coastal/Compliance) |
| **Content Allocation** | 40% Platinum, 35% Gold, 25% Growth |
| **Generic Content** | ❌ PROHIBITED - No generic residential posts for random cities |
| **Old 103-City Rotation** | ❌ DEPRECATED - Do NOT use |

**If a blog post request doesn't specify high-conversion targeting, APPLY IT AUTOMATICALLY.**

---

## ⚠️ HIGH-CONVERSION TARGETING FRAMEWORK (MANDATORY DEFAULT)

**Effective: December 2025**

This skill uses an **archetype-based, tiered market strategy** for maximum conversion and appointment setting. The old 103-city equal rotation is DEPRECATED and must NOT be used.

### ⚡ THREE MARKET ARCHETYPES (Match Content to Buyer Psychology)

| Archetype | Markets | Buyer Psychology | Fee Potential |
|-----------|---------|------------------|---------------|
| **SUBTERRANEAN & VERTICAL** | Atherton, Palo Alto, Beverly Hills, Manhattan Beach | Extreme land constraints → build underground/up. Working with starchitects. | $25K-$150K+ |
| **COASTAL FORTIFICATION** | Malibu, Laguna Beach, Newport Beach, La Jolla, Montecito | Defending $3M-$30M+ coastal properties. Complex permitting. Fire/erosion damage. | $20K-$100K+ |
| **RESILIENCE & COMPLIANCE** | Santa Monica, West Hollywood, Pasadena, Long Beach | MANDATORY retrofit deadlines. Legal/financial pressure. Time-sensitive. | $15K-$75K |

### 🏆 MARKET TIERS (Content Allocation)

| Tier | Markets | Content % | Why |
|------|---------|-----------|-----|
| **PLATINUM** | Atherton, Malibu, Beverly Hills, Newport Beach, Palo Alto, Los Altos Hills, Santa Monica, Laguna Beach, Montecito | **40%** | $3M-$7M+ homes, highest fees, complex projects |
| **GOLD** | Manhattan Beach, Pacific Palisades, La Jolla, Del Mar, West Hollywood, Pasadena, Bel Air, Brentwood, Coronado | **35%** | High volume, active ordinances, specific hazards |
| **GROWTH** | Long Beach, San Diego, San Jose, Irvine, Anaheim, Huntington Beach, Calabasas, Glendale, Burbank | **25%** | ADU scaling, standard renovations, volume |

### 🎯 CONTENT GENERATION RULES

**Before generating ANY blog post:**

1. **Identify the city's TIER** (Platinum/Gold/Growth)
2. **Identify the city's ARCHETYPE** (Subterranean/Coastal/Compliance)
3. **Select keywords from matching archetype cluster** in `references/keyword-list.md`
4. **Use archetype-specific CTAs** from `references/HIGH-CONVERSION-TARGETING.md`
5. **Include archetype-specific engineering content** (not generic)

**Archetype-Matched Keywords (Examples):**

| Archetype | ✅ USE These Keywords | ❌ NEVER Use For This City |
|-----------|----------------------|---------------------------|
| Subterranean | basement engineering, deep foundation, shoring, underpinning, vertical addition | coastal bluff, soft-story retrofit |
| Coastal | bluff stabilization, Coastal Commission, fire damage, erosion, wave force | basement, deep excavation |
| Compliance | soft-story retrofit, mandatory ordinance, seismic retrofit deadline, penalty | subterranean, coastal bluff |

### 📍 PRIORITY TRIGGERS (Override Normal Rotation)

Check these FIRST before selecting cities:

1. **Active Compliance Deadline?** → Prioritize that city with compliance keywords
   - Santa Monica soft-story deadlines
   - West Hollywood mandatory retrofit
   - LA Ordinance 183893 compliance

2. **Recent Disaster?** → Prioritize affected Platinum/Gold cities
   - Fire season → Malibu, Pacific Palisades, Montecito
   - Post-earthquake → All Platinum coastal cities

3. **Content Gap in Platinum?** → Fill before generating Growth content

**See `references/HIGH-CONVERSION-TARGETING.md` for complete framework.**

---

## 🎯 STRATEGIC KEYWORD PRIORITY HIERARCHY

**CRITICAL: Apply this keyword strategy to ALL blog generation. These are the highest-converting keywords for AAA Engineering Design.**

### Tier 1: Primary Target Keywords (HIGHEST PRIORITY)
These keywords capture users actively seeking to hire:
- **"structural engineer near me"** - High volume local intent
- **"residential structural engineer"** - Homeowner-focused, high conversion
- **"California PE licensed engineer"** - Trust-qualified searches

### Tier 2: High-Conversion Niche Keywords (URGENT NEED = PREMIUM PRICING)
These represent distressed clients willing to pay premium rates:
| Keyword | Why High-Value | Lead Gen Score |
|---------|---------------|----------------|
| **red tag removal** | Emergency need, no alternatives, must hire PE | 98 |
| **unpermitted work legalization** | Legal pressure, time-sensitive | 95 |
| **soft story retrofit** | Mandatory compliance (LA Ordinance 183893) | 94 |
| **emergency structural assessment** | Immediate need, premium rates | 97 |
| **post-earthquake inspection** | Time-critical after seismic events | 96 |
| **fire damage structural evaluation** | Insurance-driven, urgent | 95 |

### Tier 3: B2B/Professional Keywords
Target architects, contractors, and developers:
| Keyword | Client Type | Value |
|---------|-------------|-------|
| **engineer of record** | Architects, builders needing PE stamp | High retainer potential |
| **structural consultant for architects** | B2B partnership opportunities | Recurring revenue |
| **construction engineering support** | GCs needing plan review | Project-based |
| **tenant improvement engineer** | Commercial landlords/tenants | Volume work |
| **plan check support engineer** | Architects with permit issues | Quick turnaround |

### ⚠️ Keywords to AVOID
These capture wrong intent (general engineering, not structural):
- ❌ "engineering design" (without "structural" qualifier)
- ❌ "design engineer" (captures product designers)
- ❌ "engineering consultant" (too broad)
- ❌ "CAD engineering" (drafting, not PE services)

---

## 🌴 GEOGRAPHIC TARGETING: WEALTH CORRIDOR PRIORITY

**When generating location-specific content, prioritize these high-value markets:**

### Silicon Valley Corridor (Highest Home Values)
| City | Median Home | Priority | Key Opportunities |
|------|-------------|----------|-------------------|
| Atherton | $7.5M+ | CRITICAL | Estate renovations, guest houses |
| Palo Alto | $3.8M | CRITICAL | Tech exec homes, ADUs |
| Los Altos | $4.2M | HIGH | Hillside construction, pools |
| Menlo Park | $3.5M | HIGH | Seismic retrofits, additions |
| Sunnyvale | $2.1M | HIGH | ADU boom, garage conversions |
| San Jose | $1.4M | MEDIUM | Volume market, mixed residential |
| Fremont | $1.5M | MEDIUM | Growing market, new construction |

### Coastal Luxury Markets
| City | Median Home | Priority | Key Opportunities |
|------|-------------|----------|-------------------|
| Malibu | $4.5M+ | CRITICAL | Hillside engineering, coastal erosion |
| Newport Beach | $2.1M | CRITICAL | Coastal Commission, luxury custom |
| Laguna Beach | $2.8M | CRITICAL | Hillside, coastal bluff engineering |
| Manhattan Beach | $3.2M | HIGH | Beach community, seismic retrofit |
| Santa Monica | $2.3M | HIGH | Historic preservation, soft story |
| Corona del Mar | $3.5M | HIGH | Coastal luxury, remodels |

### LA Core Wealth Markets
| City | Median Home | Priority | Key Opportunities |
|------|-------------|----------|-------------------|
| Beverly Hills | $4.8M+ | CRITICAL | Luxury estates, hillside homes |
| Pacific Palisades | $4.2M | CRITICAL | Hillside, fire reconstruction |
| Bel Air | $5.5M+ | CRITICAL | Ultra-luxury, custom engineering |
| West Hollywood | $1.8M | HIGH | Soft story mandatory retrofit |
| Pasadena | $1.1M | HIGH | Historic homes, seismic upgrade |
| Brentwood | $3.2M | HIGH | Luxury residential, additions |

### Geographic Content Requirements
For each location page, MUST include:
1. **Local building department name and contact** (shows local expertise)
2. **Regional geological features**: hillside, coastal, liquefaction zones, fault proximity
3. **Specific municipal codes**: local amendments, soft story ordinances, Coastal Commission
4. **Neighborhood names**: Reference specific areas (e.g., "Balboa Peninsula in Newport Beach")
5. **Local landmarks**: Establish geographic authenticity

---

## 📚 CONTENT PILLAR STRUCTURE (HUB ORGANIZATION)

**All blog posts must be organized within these four strategic content hubs:**

### Hub 1: Compliance Hub (Distressed/Urgent Clients)
**Target Audience**: Homeowners with legal/permit issues
**Buyer Psychology**: Fear of fines, legal pressure, time-sensitive

| Topic Category | Keywords to Target | Content Type |
|---------------|-------------------|--------------|
| Red Tag Situations | red tag removal, red tag structural engineer, condemned house engineer | Emergency response |
| Permit Issues | unpermitted work legalization, permit violation engineer, as-built drawings | Problem-solving |
| Title 24 Compliance | Title 24 engineer, energy compliance structural, CBC compliance | Technical authority |
| As-Built Documentation | as-built drawings engineer, existing conditions report | Documentation |

**CTA Focus**: "Don't risk fines - call for immediate consultation"

### Hub 2: Emergency Hub (Immediate Need)
**Target Audience**: Post-disaster, damage assessment needs
**Buyer Psychology**: Crisis mode, will pay premium for fast response

| Topic Category | Keywords to Target | Content Type |
|---------------|-------------------|--------------|
| Fire/Impact Damage | fire damage structural assessment, car hit house inspection, impact damage engineer | Emergency |
| Shoring & Stabilization | emergency shoring, temporary structural support, building stabilization | Urgent technical |
| Post-Earthquake | post-earthquake inspection, seismic damage assessment, earthquake engineer | Disaster response |
| Foundation Emergency | foundation failure, foundation crack emergency, sinking foundation | Urgent foundation |

**CTA Focus**: "24/7 emergency response available - call now"

### Hub 3: Design Hub (Aspirational/Project Clients)
**Target Audience**: Homeowners planning improvements
**Buyer Psychology**: Excited about project, comparing options

| Topic Category | Keywords to Target | Content Type |
|---------------|-------------------|--------------|
| Hillside Engineering | hillside structural engineer, slope construction, retaining wall design | Technical expertise |
| Open Floor Plans | load bearing wall removal, open concept conversion, structural modification | Popular renovation |
| Luxury Custom Homes | custom home structural engineer, architect collaboration, estate engineering | High-value |
| ADU Design | ADU structural engineering, garage conversion, detached ADU | California hot market |

**CTA Focus**: "Free design consultation - bring your plans"

### Hub 4: Local SEO Silos (Geographic Targeting)
**Target Audience**: Users searching by location
**Buyer Psychology**: Want local expert, convenience matters

**Structure**: Create city-specific landing pages with:
- Local building department references
- Neighborhood-specific examples
- City permit process details
- Local project case studies
- Regional geological considerations

**CTA Focus**: "Serving [City] for 20+ years - local expertise matters"

---

## 🏆 TRUST SIGNAL INTEGRATION

**Every generated article MUST naturally incorporate these trust signals:**

### Mandatory Trust Elements (Include in Every Post)

#### 1. California PE License Reference
Include within first 300 words:
```markdown
Our California-licensed Professional Engineers (PE) provide stamped plans
accepted by all [City/Region] building departments.
```

#### 2. Experience Quantification
Use specific numbers:
- "20+ years of experience"
- "500+ completed projects"
- "Serving [City] since [year]"

#### 3. Satisfaction Guarantee (Risk Reversal)
For distressed clients especially:
```markdown
**Our Commitment**: If our initial assessment doesn't identify a viable
path forward for your [red tag/permit issue], the consultation is free.
```

#### 4. Response Time Commitment
```markdown
📞 Same-day consultations available | 48-hour quote turnaround
```

### Market Positioning Statement
**Position AAA as the "Goldilocks" solution:**

```markdown
### Why Choose AAA Engineering Design?

**Not too big, not too small—just right for your project.**

- ✅ **More attentive than large firms** - You won't be handed off to junior staff
- ✅ **More capable than solo practitioners** - Full team for complex projects
- ✅ **Right-sized for residential & small commercial** - Projects $5K-$50K
- ✅ **Personal PE involvement** - Licensed engineer on every project
```

---

## ⚔️ COMPETITOR DIFFERENTIATION ANGLES

**Use these positioning statements when relevant (never mention competitors by name in published content):**

### vs. Large Firms (Degenkolb, Simpson Gumpertz, etc.)
**Their weakness**: Too expensive, slow response, hand off to junior staff
**Our message**:
```markdown
Unlike large engineering firms where your project may be assigned to junior
staff, AAA Engineering provides direct access to licensed Professional
Engineers on every project. We specialize in residential and small commercial
work—the projects big firms deprioritize.
```

### vs. Alpha Structural (Repair-Focused Competitor)
**Their focus**: Repair and retrofit of damaged structures
**Our differentiation**: Design of new structures
```markdown
We design the new—engineering for additions, ADUs, custom homes, and
structural modifications. When your vision involves building something new,
AAA Engineering brings it to life with PE-stamped plans.
```

### vs. Design-Build Firms
**Their conflict**: Same company designs AND builds (no oversight)
**Our value**: Independent oversight
```markdown
**Independent Engineering Oversight**: Unlike design-build firms where the
same company both designs and constructs, AAA Engineering provides independent
structural analysis. This separation ensures your project is designed for
safety—not just cost savings.
```

### vs. Unlicensed "Designers"
**Their risk**: No PE stamp, permit rejection risk
**Our protection**:
```markdown
**Don't risk permit rejection.** Only California-licensed Professional
Engineers can stamp structural plans. Our PE-stamped plans are accepted by
all California building departments—guaranteed.
```

---

## 🔍 LONG-TAIL KEYWORD TEMPLATES

**Generate content targeting these high-intent search patterns:**

### Pattern 1: [Service] + [City] + [Property Type]
**Formula**: {service} + in + {city} + for + {property type}

| Example Keyword | Target City | Property Focus |
|----------------|-------------|----------------|
| load bearing wall removal Palo Alto Victorian home | Palo Alto | Historic |
| ADU structural engineering Newport Beach | Newport Beach | Coastal luxury |
| foundation repair Pasadena Craftsman | Pasadena | Historic |
| second story addition Irvine ranch style | Irvine | Mid-century |
| hillside retaining wall Laguna Beach | Laguna Beach | Coastal hillside |
| seismic retrofit San Francisco Victorian | San Francisco | Historic multi-unit |

### Pattern 2: [Problem] + structural engineer
**Formula**: {specific problem} + structural engineer

| Example Keyword | Problem Type | Urgency |
|----------------|--------------|---------|
| car hit house structural inspection | Impact damage | URGENT |
| foundation crack assessment | Foundation issue | HIGH |
| leaning chimney engineer | Structural damage | MEDIUM |
| sagging floor structural evaluation | Floor system | HIGH |
| cracked beam structural engineer | Structural concern | HIGH |

### Pattern 3: [Regulation] + compliance + engineer
**Formula**: {regulation/ordinance} + compliance + engineer

| Example Keyword | Regulation | Geography |
|----------------|------------|-----------|
| soft story ordinance 183893 compliance | LA Soft Story | Los Angeles |
| Title 24 energy compliance engineer | California Energy | Statewide |
| Coastal Commission structural approval | CCC | Coastal cities |
| seismic retrofit ordinance compliance | Various | LA, SF, Oakland |
| ADU state law structural requirements | CA ADU law | Statewide |

### Pattern 4: [Project Type] + cost + [City]
**Formula**: {project} + structural engineering cost + {city}

| Example | Captures |
|---------|----------|
| ADU structural engineering cost Orange County | Price shoppers ready to buy |
| foundation repair cost Los Angeles | Budget-conscious but urgent |
| load bearing wall removal cost Irvine | Remodel planners |
| seismic retrofit cost San Francisco | Compliance-driven |

---

## ❓ FAQ INTEGRATION (SCHEMA-READY)

**End relevant posts with these high-value Q&A sections. All must include FAQ Schema.**

### Mandatory FAQ Questions (Include 5-8 per post)

#### Question Category 1: "Do I Need...?" (Requirements)
```json
{
  "@type": "Question",
  "name": "Do I need a structural engineer for [specific project]?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "In California, you need a licensed structural engineer for:
    (1) Any load-bearing wall modification, (2) Foundation repairs or
    additions, (3) Second-story additions, (4) Seismic retrofits,
    (5) Any project requiring a building permit with structural components.
    Building departments require PE-stamped plans for permit approval."
  }
}
```

**Variations to include**:
- Do I need a structural engineer for a load bearing wall removal?
- Do I need an engineer for an ADU in California?
- Do I need a structural engineer for a deck?
- Do I need a structural engineer for a room addition?
- Do I need a structural engineer to remove a wall?

#### Question Category 2: Cost Questions
```json
{
  "@type": "Question",
  "name": "How much does a structural engineer cost in California?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Structural engineering fees in California typically range from
    $500-$3,000 for residential assessments, $2,500-$6,000 for ADU plans,
    and $5,000-$15,000+ for custom homes. Costs vary by project complexity,
    location (coastal areas cost more), and timeline (rush fees apply).
    Most engineers offer free initial consultations."
  }
}
```

**Variations to include**:
- How much does a structural engineer cost for a home addition?
- What is the cost of structural engineering plans?
- How much does a foundation engineer charge?
- What does a structural inspection cost?

#### Question Category 3: Red Tag/Compliance Questions
```json
{
  "@type": "Question",
  "name": "What to do if my house is red tagged?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "If your house is red tagged: (1) Do NOT occupy the structure -
    it's unsafe, (2) Contact a licensed structural engineer immediately for
    assessment, (3) The engineer will evaluate damage and create a remediation
    plan, (4) Submit engineer's report to building department, (5) Complete
    required repairs with permits, (6) Schedule final inspection for tag removal.
    Timeline varies from weeks to months depending on damage severity."
  }
}
```

**Variations to include**:
- How do I remove a red tag from my property?
- Can I sell a red-tagged house?
- How long does red tag removal take?
- What causes a house to be red tagged?

#### Question Category 4: Process/Timeline Questions
```json
{
  "@type": "Question",
  "name": "How long does structural engineering take?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Typical structural engineering timelines in California:
    - Simple assessments: 1-3 days
    - ADU plans: 2-4 weeks
    - Room additions: 2-3 weeks
    - Custom homes: 4-8 weeks
    - Commercial projects: 6-12 weeks
    Add 2-8 weeks for building department plan check depending on jurisdiction."
  }
}
```

#### Question Category 5: Local/Geographic Questions
```json
{
  "@type": "Question",
  "name": "Who is the best structural engineer in [City]?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "When choosing a structural engineer in [City], look for:
    (1) Active California PE license - verify at bpelsg.ca.gov,
    (2) Local project experience in [City] jurisdiction,
    (3) Knowledge of [specific local requirement],
    (4) Clear communication and responsive service,
    (5) Transparent pricing with written estimates.
    AAA Engineering Design has served [City] for 20+ years with
    [X]+ completed projects in the area."
  }
}
```

## ⛔ CRITICAL URL/SLUG RULE - READ FIRST

**NEVER duplicate the city name in blog post IDs/slugs!**

```
❌ WRONG: adu-structural-engineering-in-newport-beach-newport-beach
✅ CORRECT: adu-structural-engineering-in-newport-beach

❌ WRONG: foundation-repair-in-irvine-irvine
✅ CORRECT: foundation-repair-in-irvine
```

**The city should appear ONLY ONCE at the end of the slug after `-in-`**

This rule applies to:
- Blog post `id` field in blog-data.ts
- Markdown filenames
- All URL references

---

## When to Use This Skill

Use this skill when the user requests:
- Blog posts for aaaengineeringdesign.com
- Engineering-related content (structural, civil, MEP, residential, commercial)
- Geo-targeted content for California cities (especially Orange County, LA, San Diego)
- 5 daily blog posts targeting different SoCal cities
- Content with keyword optimization and interlinking strategy
- Local SEO optimized articles
- AI Overview (AIO) optimized content

## ⚠️ SMART MODE IS NOW DEFAULT

**When the user asks to "generate blogs" or "create blog posts", ALWAYS use Smart Mode automatically.**

Smart Mode ensures:
- Data-driven keyword selection (GSC + Bing Lead Gen Scores)
- Optimal keyword+city pairing for maximum conversions
- Automatic cluster prioritization
- High-intent "near me" keywords included

**You do NOT need the user to explicitly say "smart mode" - it's automatic.**

## Workflow: Generating Daily Blog Posts

**⚠️ PERMANENT PRIORITY RULE: Complete Underpacked Clusters First!**

**Before generating random posts, ALWAYS check Step 2.5 to see if ANY topic clusters need completion:**
- Check ALL hubs (current + future) in blog-data.ts clusterPages arrays
- Find the most underpacked cluster (lowest post count)
- Currently: **Hub 5 (Commercial & Industrial)** has 0 posts - needs 25 posts ⚠️ HIGHEST PRIORITY
- Next: **Hub 6 (Foundation Engineering)** has 0 posts - needs 25 posts
- Then: **Hub 3 (Specialized Services)** has 17 posts - needs 8+ more to reach 25
- Generate ALL N posts for underpacked cluster ONLY until it reaches 25+ posts
- This rule applies FOREVER to all clusters (including future hubs you create)
- Only resume random rotation when ALL clusters have 25+ posts

---

**IMPORTANT: Automatic +5 "Near Me" Posts**

When user requests N blog posts, **ALWAYS generate N + 5 total posts:**
- **N posts** = Requested topics (currently: ALL for Hub 5 Commercial & Industrial until packed)
- **+5 posts** = "Near Me" GEO-localized posts (automatic bonus, any cluster)

**Example:**
- User says: "Generate 10 blog posts"
- You generate: **15 posts** (10 for Hub 5 Commercial & Industrial + 5 "near me")

**"Near Me" posts target high-intent local searches:**
- Format: `[keyword] near me in [city]`
- Example: "Residential Structural Engineer Near Me in Newport Beach"
- Rotates through topics: residential engineer, structural engineer, foundation engineer, ADU engineer, seismic retrofit engineer, MEP engineer, civil engineer, etc.

### 🚀 SMART MODE: Data-Driven Auto-Generation (DEFAULT)

**⚠️ SMART MODE IS NOW THE DEFAULT - Always use this workflow when generating blogs.**

When generating blog posts, the system automatically:

1. **Runs Opportunity Gap Analysis** (`node scripts/opportunity-gap-analyzer.js`)
   - Identifies keywords at positions 11-30 (quick wins)
   - Finds high-impression/low-CTR gaps to optimize
   - Locates cities with insufficient coverage
   - Checks cluster completion status

2. **Fetches Fresh GSC + Bing Data** (if > 7 days old)
   - Google Search Console keyword performance
   - Bing Webmaster Tools data
   - Combined lead generation scoring

3. **Auto-Selects Optimal Keyword+City Pairs**
   - Prioritizes Lead Gen Score 70+ keywords
   - Matches high-value keywords to high-value cities
   - Ensures underpacked clusters get filled first
   - Avoids duplicate keyword+city combinations

4. **Generates Optimized Batch**
   - N posts for highest-priority opportunities
   - +5 "near me" posts (always)
   - All posts include conversion CTAs
   - Schema markup auto-applied

**Smart Mode Output:**
```
🧠 SMART MODE ANALYSIS
═══════════════════════════════════════════════════════

📊 Data Sources:
   GSC: 150 keywords (updated 2 days ago)
   Bing: 87 keywords (updated 5 days ago)
   Gap Analysis: 23 high-priority opportunities

🎯 Auto-Selected for This Batch:

   CLUSTER PRIORITY: Commercial & Industrial (0/25 posts)

   Keyword Selections (Lead Gen Score):
   1. "commercial structural engineer orange county" (Score: 92)
      → City: Irvine (high-value market)
   2. "warehouse structural engineering california" (Score: 85)
      → City: Ontario (logistics hub)
   3. "tenant improvement engineer near me" (Score: 88)
      → City: Costa Mesa (commercial center)
   [...]

   +5 Near Me Posts:
   - emergency structural engineer near me → Newport Beach
   - structural engineering quote near me → Anaheim
   [...]

   Total: 15 posts optimized for lead generation

═══════════════════════════════════════════════════════
```

**Smart Mode is used automatically for:**
- All blog generation requests
- Weekly blog batches
- Any request for "X blog posts"
- Default behavior - no need to specify

**Override Smart Mode only when user explicitly requests:**
- Specific keywords they want to target
- A specific event/season campaign
- A very specific content gap to fill manually
- User says "don't use smart mode" or "manual selection"

---

### Step 0: HIGH-CONVERSION TARGETING (MANDATORY FIRST STEP!)

**🚨 BEFORE ANYTHING ELSE - Apply the High-Conversion Framework:**

**For a batch of N posts, allocate cities by tier:**

| Tier | Allocation | Cities to Use |
|------|------------|---------------|
| **PLATINUM (40%)** | 2 posts (of 5) | Atherton, Malibu, Beverly Hills, Newport Beach, Palo Alto, Los Altos Hills, Santa Monica, Laguna Beach, Montecito |
| **GOLD (35%)** | 2 posts (of 5) | Manhattan Beach, Pacific Palisades, La Jolla, Del Mar, West Hollywood, Pasadena, Bel Air, Brentwood, Coronado |
| **GROWTH (25%)** | 1 post (of 5) | Long Beach, San Diego, Irvine, Anaheim, Huntington Beach, Calabasas, Glendale, Burbank |

**Then match keywords to city archetype:**

| City Archetype | Use These Keywords |
|----------------|-------------------|
| **Subterranean** (Beverly Hills, Atherton, Palo Alto, Manhattan Beach, Bel Air) | basement engineering, deep foundation, shoring, underpinning, vertical addition, hillside excavation |
| **Coastal** (Malibu, Laguna Beach, Newport Beach, La Jolla, Montecito, Del Mar, Coronado) | coastal bluff stabilization, Coastal Commission, fire damage, oceanfront foundation, wave force, erosion |
| **Compliance** (Santa Monica, West Hollywood, Pasadena, Long Beach, Glendale) | soft-story retrofit, mandatory seismic retrofit, ordinance compliance, apartment building retrofit |

**❌ WRONG:** Generic "ADU engineering" post for Beverly Hills (doesn't match Subterranean archetype)
**✅ RIGHT:** "Basement Structural Engineering" post for Beverly Hills (matches Subterranean archetype)

---

### Step 0.5: Check Blog Tracking

**⚠️ After selecting tier-appropriate cities, verify no duplicates:**

```bash
view BLOG-TRACKING.md
```

**This file tracks ALL keyword+city combinations already used. You MUST:**
1. ✅ Read BLOG-TRACKING.md to see which keyword+city pairs are already published
2. ✅ Verify your selected keyword+city combination is NOT already used
3. ✅ Choose cities from Platinum/Gold/Growth tiers ONLY
4. ✅ Update BLOG-TRACKING.md after generating new posts

**NEVER create duplicate keyword+city combinations!**

---

### Step 0.5: GSC Keyword Extraction (AUTOMATIC WEEKLY)

**🤖 AUTOMATIC: This runs automatically if last extraction was > 7 days ago**

This automated process provides **real-time, data-driven keyword intelligence** by combining:
1. **Google Search Console API** - Real performance data from YOUR website
2. **"People Also Search For" (PASF) Scraping** - Related keyword discovery
3. **Automated Keyword List Updates** - Fresh, high-performing keywords

**What the System Does Automatically:**

1. **Auto-checks** when GSC extraction last ran
2. **If > 7 days ago**: Automatically runs full GSC + PASF extraction before generating blogs
3. **If < 7 days ago**: Skips extraction and uses existing keywords
4. **Fetches GSC Performance Data** (last 30 days):
   - 📊 **Impressions** - How many times your pages appeared in search
   - 🖱️ **Clicks** - Actual clicks from search results
   - 📈 **CTR (Click-Through Rate)** - Percentage of impressions that clicked
   - 📍 **Average Position** - Your ranking for each keyword
5. **Scrapes "People Also Search For" (PASF)** from Google:
   - Takes each GSC query and searches Google
   - Extracts related searches Google shows
   - Finds hidden long-tail opportunities
   - (Implementation: lines 193-246 in gsc-keyword-extractor.js)
6. **Combines Data for Maximum Coverage**:
   - GSC queries = proven keywords already driving traffic
   - PASF = related keywords you should target
   - Result = comprehensive keyword strategy
7. **Automatically adds discovered keywords to `references/keyword-list.md`**
8. **Creates `gsc-extracted-keywords.json`** with full metrics for analysis

**When it runs automatically:**
- ✅ **First time**: Never run before
- ✅ **Weekly refresh**: Last run was 7+ days ago
- ✅ **After errors**: Last run file is missing or corrupted
- ❌ **Skip**: Last run was less than 7 days ago

**What you'll see:**

If GSC extraction runs automatically:
```
🔍 Checking GSC extraction status...
⏰ Last run was 8 days ago (threshold: 7 days)
🚀 Running GSC extraction automatically...

📊 Connecting to Google Search Console...
✅ Connected to GSC
📥 Fetching queries from last 30 days...
✅ Found 150 queries
...
✅ Added 23 new keywords to keyword list
```

If GSC extraction is skipped:
```
🔍 Checking GSC extraction status...
✅ Last run was 3 days ago (threshold: 7 days)
⏭️  Skipping GSC extraction - using existing keywords
```

**Manual run (optional):**

You can still manually run GSC extraction anytime:

```bash
# Manual run (ignores last-run check)
node scripts/gsc-keyword-extractor.js

# Weekly run with custom parameters
GSC_DAYS_BACK=7 MAX_QUERIES=30 node scripts/gsc-keyword-extractor.js
```

**Configuration:**

Customize the auto-run threshold in `.env`:
```bash
# Run GSC extraction if last run was > X days ago (default: 7)
GSC_AUTO_RUN_DAYS=7
```

**Configuration options (via environment variables):**
- `GSC_PROPERTY_URL` - Your website URL (default: https://aaaengineeringdesign.com)
- `GSC_DAYS_BACK` - Days of data to fetch (default: 30)
- `MIN_IMPRESSIONS` - Minimum impressions to include keyword (default: 10)
- `MAX_QUERIES` - Maximum queries to process (default: 50)
- `GSC_CREDENTIALS_PATH` - Path to GSC credentials JSON (default: ./gsc-credentials.json)
- `SERPAPI_KEY` - SerpAPI key for "People Also Search For" extraction (optional)

**Output Files Created:**

1. **`references/keyword-list.md`** - Updated with new keywords
   - Automatically categorized by topic
   - Includes GSC performance notes
   - Ready to use in blog generation

2. **`gsc-extracted-keywords.json`** - Full analysis data
   ```json
   {
     "query": "residential structural engineer orange county",
     "impressions": 1450,
     "clicks": 87,
     "ctr": 0.06,
     "position": 8.5,
     "pasf_keywords": [
       "structural engineer cost orange county",
       "when to hire structural engineer",
       "residential structural engineer near me"
     ],
     "category": "residential-engineering",
     "search_intent": "local-service"
   }
   ```

**Example: How GSC + PASF Data Improves Blog Selection:**

**Without GSC (Old Way):**
- Guess which keywords might work
- No data on what's already performing
- Miss related keyword opportunities

**With GSC + PASF (New Way):**
```
📊 GSC Data Shows:
"residential structural engineer orange county"
- Impressions: 1,450
- Clicks: 87
- Position: 8.5
- CTR: 6%

💡 Insight: High impressions but position 8.5 = opportunity!
🎯 Action: Create targeted blog post to rank higher

🔍 PASF Discovers Related Keywords:
- "structural engineer cost orange county" (high commercial intent)
- "when to hire structural engineer" (informational, easy to rank)
- "residential structural engineer near me" (local intent)

✅ Result: Create 4 blog posts instead of 1, covering entire topic cluster!
```

**Setup requirements (one-time):**
1. Create Google Cloud project and enable Search Console API
2. Download service account credentials JSON
3. Save as `gsc-credentials.json` in project root
4. (Optional) Get SerpAPI key for enhanced "People Also Search For" extraction

See `scripts/GSC-SETUP-GUIDE.md` for detailed setup instructions.

**After GSC Extraction - How to Use the Data:**

1. **Prioritize High-Opportunity Keywords:**
   - High impressions + low CTR = need better content to capture clicks
   - High impressions + position 5-15 = can rank #1 with targeted content
   - PASF keywords = expand topic coverage

2. **Review `gsc-extracted-keywords.json` for insights:**
   ```bash
   # See top performing keywords
   cat gsc-extracted-keywords.json | jq '.[] | select(.impressions > 500)'

   # Find high-impression, low-CTR opportunities
   cat gsc-extracted-keywords.json | jq '.[] | select(.impressions > 100 and .ctr < 0.05)'
   ```

3. **Check `references/keyword-list.md` for newly added keywords:**
   - Look for keywords marked with GSC metrics
   - These are proven to drive traffic already

4. **Use in Next Blog Batch:**
   - Prioritize GSC keywords with high impressions
   - Include PASF keywords to create topic clusters
   - Target keywords in positions 5-15 (easiest to improve)

**Keyword Selection Strategy:**
- **Week 1**: GSC keywords with >500 impressions, position 5-15
- **Week 2**: PASF keywords related to your best performers
- **Week 3**: Low-competition long-tail from PASF
- **Week 4**: High-impression, low-CTR (improve existing rankings)

---

### Step 1: Auto-Check & Run GSC Extraction (If Needed)

**AUTOMATIC - Check if GSC extraction should run:**

Before reading references, automatically check if GSC extraction is needed:

1. **Check last run status** by running:
   ```bash
   node -e "const gsc = require('./scripts/gsc-keyword-extractor.js'); const status = gsc.shouldRunGSCExtraction(); console.log(status.shouldRun ? '⏰ GSC extraction needed: ' + status.reason : '✅ GSC is fresh: ' + status.reason);"
   ```

2. **If GSC extraction is needed** (last run > 7 days ago):
   ```bash
   echo "🚀 Running GSC extraction automatically..."
   node scripts/gsc-keyword-extractor.js
   ```

3. **If GSC is fresh** (last run < 7 days ago):
   ```bash
   echo "⏭️  Skipping GSC extraction - using existing keywords"
   ```

**This ensures keyword-list.md always has fresh, high-performing keywords!**

---

### Step 2: Read Required References

**CRITICAL - Always read these files AFTER GSC check:**

```bash
view references/keyword-list.md
view references/city-data.md
view references/near-me-keywords.md  # NEW: For automatic +5 "near me" posts
view references/blog-template.md
view references/interlinking-strategy.md
```

These files contain:
- All available keywords with intent and priority
- Complete city data (demographics, building codes, permit info)
- **"Near me" keyword rotation for automatic +3 bonus posts**
- Exact blog post structure matching aaaengineeringdesign.com format
- Internal linking rules and anchor text strategy

### Step 2.5: ⚠️ PRIORITY: Check Cluster Completion Status (DYNAMIC RULE)

**🎯 CRITICAL: Complete underpacked clusters BEFORE generating random posts!**

This is a **PERMANENT RULE** that applies to ALL topic clusters (current + future). This step ensures every hub reaches minimum post count before spreading content thin across multiple topics.

**Cluster Completion Thresholds:**
- **Minimum**: 20 posts (adequate for hub page)
- **Ideal**: 25+ posts (well-packed, strong topical authority)

**How This Rule Works:**

1. **ALWAYS check src/lib/blog-data.ts** - Count posts in EVERY hub's `clusterPages` array
2. **Find the most underpacked cluster** (lowest post count)
3. **Priority order:**
   - If ANY cluster has < 20 posts → Generate ALL N posts for that cluster ONLY
   - If multiple clusters < 20 posts → Pick the one with FEWEST posts first
   - If all clusters have 20+ posts but some < 25 → Fill to 25 before rotating
   - If ALL clusters have 25+ posts → Resume normal rotation across all clusters

**Current Cluster Status (As of 2025-11-17):**

```typescript
// Hub 1: Structural Engineering Services Guide
topicCluster: 'structural-engineering'
Current: 25 posts ✅ ADEQUATE

// Hub 2: Engineering Design Services Guide
topicCluster: 'engineering-design'
Current: 32 posts ✅ WELL-PACKED

// Hub 3: Specialized Engineering Services Guide
topicCluster: 'specialized-services'
Current: 17 posts ⚠️ UNDERPACKED (needs 8+ more posts to reach 25)

// Hub 4: Residential Structural Engineering Guide
topicCluster: 'residential-engineering'
Current: 28 posts ✅ WELL-PACKED

// Hub 5: Commercial & Industrial Structural Engineering Guide 🆕 NEW
topicCluster: 'commercial-industrial-engineering'
Current: 0 posts ❌ EMPTY (needs 25+ posts) ⚠️⚠️ HIGHEST PRIORITY

// Hub 6: Foundation Engineering Guide 🆕 NEW
topicCluster: 'foundation-engineering'
Current: 0 posts ❌ EMPTY (needs 25+ posts)
```

**Action Required:**

1. **Check ALL hubs in src/lib/blog-data.ts** (including any new ones created since this was written)
2. **Identify the most underpacked cluster** (< 20 posts, or lowest count if multiple)
3. **If ANY cluster is underpacked:**
   - Generate ALL N posts for that cluster ONLY
   - Still add +5 "near me" posts (can be any cluster)
   - Focus keyword selection on topics that fit the underpacked cluster
4. **If ALL clusters are 20+ posts:**
   - Fill clusters with < 25 posts to reach 25 (pick lowest first)
5. **ONLY if ALL clusters have 25+ posts:**
   - Resume normal keyword rotation across all clusters
   - You can still keep this Step 2.5 as a check, or remove it

**Example - Current Priority:**

Since **Hub 5 (Commercial & Industrial)** has **0 posts** (lowest of all hubs), generate posts ONLY for this cluster until it reaches 25+ posts:

**Keywords to prioritize for Hub 5:**
- Commercial structural engineering topics
- Office building structural engineering
- Warehouse structural engineering
- Retail center structural design
- Industrial facility engineering
- Manufacturing plant structural design
- Tenant improvement engineering
- Commercial building codes
- Mixed-use development structural engineering
- Parking structure design
- Commercial foundation design
- Tilt-up construction engineering

**Next priority after Hub 5 reaches 25 posts:**
- **Hub 6 (Foundation Engineering)** - 0 posts (foundation types, repair methods, expansive soils, etc.)
- **Hub 3 (Specialized Services)** - 17 posts (MEP, stormwater, septic, grading topics)

**Important: This Rule Applies to Future Hubs Too!**

When you create new hub pages (e.g., Commercial Engineering, Foundation Engineering, ADU Engineering), they will start with 0 cluster posts. This rule ensures you'll prioritize filling those NEW hubs to 25 posts before going back to random rotation.

**Example Scenario:**
- Today: Hub 3 has 17 posts → Fill to 25 → Done
- Next week: Create new "Commercial Engineering" hub with 0 posts
- Rule activates again: New hub has 0 posts → Fill to 25 first
- Rule applies FOREVER until user explicitly decides all clusters are done

**When to remove this rule:**
- Only remove if you want to allow sparse clusters going forward
- Keep this rule active to maintain high topical authority
- Recommended: Keep this as a permanent check in the workflow

---

### Step 3: Select Keywords and Cities

**Total Posts to Generate: N + 5**
- **N posts** = User's requested number (e.g., 5, 10, etc.)
- **+5 posts** = Automatic "near me" posts (ALWAYS added)

**Regular Keyword Selection (N posts):**
1. **⚠️ FIRST: Check Step 2.5 - If cluster completion is required, select keywords for underpacked cluster ONLY**
2. Choose N keywords from `references/keyword-list.md`
3. Mix keyword types:
   - 1-2 Cluster articles (commercial/transactional intent)
   - 2-3 PAA/Informational articles
   - Occasionally include 1 Pillar article
4. Prioritize keywords marked as 🎯 High Priority
5. **CHECK BLOG-TRACKING.md** - Avoid keywords already used with target cities

**"Near Me" Keyword Selection (+5 posts):**
1. Use next 5 keywords in rotation from `references/near-me-keywords.md`
2. Check BLOG-TRACKING.md for last "near me" keyword used
3. Resume rotation from next keyword
4. These are HIGH commercial intent (ready to hire)

**City Selection:**
1. **CHECK BLOG-TRACKING.md FIRST** - Use only available cities
2. Use rotation pattern from `references/city-data.md`
3. Day 1: Long Beach, Irvine, Newport Beach, Anaheim, Santa Ana
4. Day 2: Huntington Beach, Costa Mesa, Fullerton, Mission Viejo, Laguna Beach
5. Day 3: San Diego, Los Angeles, Orange, Tustin, Garden Grove
6. Day 4-5: Continue rotation through all 25 cities
7. Mix coastal and inland cities
8. Vary property values (luxury, mid-range, affordable)
9. **VERIFY: Each keyword+city pair is unique (not in BLOG-TRACKING.md)**

**Pairing Strategy:**
- Match keyword intent with appropriate city
- Commercial keywords → Higher-value cities (Newport Beach, Irvine)
- Informational keywords → Any city
- Transactional keywords → Major metro areas (LA, Long Beach, San Diego)

### Step 4: Topic Cluster Integration (CRITICAL FOR SEO)

**🎯 All blog posts must be assigned to a topic cluster for maximum topical authority**

#### What Are Topic Clusters?

Topic clusters are groups of related content organized around a central "hub" page:
- **Hub Page**: Comprehensive 3,250-4,000 word guide on a broad topic
- **Cluster Pages**: Focused 3,250-4,000 word articles on specific subtopics
- **Bidirectional Links**: All clusters link to hub, hub links to all clusters

This structure signals to Google that we are THE authority on the topic.

#### Current Hub Pages

Refer to `.claude/skills/socal-engineering-blog/CLUSTER-MAPPING.md` for the complete cluster structure.

**Active Hubs (LIVE):**

1. **Structural Engineering Services Guide** ✅ LIVE
   - ID: `structural-engineering-services-guide`
   - Target keyword: "structural engineering services"
   - Current clusters: 25 posts ✅ ADEQUATE
   - Topics: Residential, ADU, seismic, foundation, home additions

2. **Engineering Design Services Guide** ✅ LIVE
   - ID: `engineering-design-services-guide`
   - Target keyword: "engineering design services"
   - Current clusters: 32 posts ✅ WELL-PACKED
   - Topics: Design types, costs, professional services, sustainable design

3. **Specialized Engineering Services Guide** ✅ LIVE
   - ID: `specialized-engineering-services-guide`
   - Target keyword: "specialized engineering services california"
   - Current clusters: 17 posts ❌ UNDERPACKED (PRIORITY - needs 8+ more)
   - Topics: MEP, stormwater, septic, grading, civil site engineering

4. **Residential Structural Engineering Guide** ✅ LIVE
   - ID: `residential-structural-engineering-guide`
   - Target keyword: "residential structural engineer california"
   - Current clusters: 28 posts ✅ WELL-PACKED
   - Topics: Home additions, ADUs, foundation repair, seismic retrofitting

5. **Commercial & Industrial Structural Engineering Guide** ✅ LIVE (NEW)
   - ID: `commercial-industrial-structural-engineering-guide`
   - Target keyword: "commercial structural engineer california"
   - Current clusters: 0 posts ❌ EMPTY ⚠️ HIGHEST PRIORITY
   - Topics: Office buildings, warehouses, retail centers, industrial facilities, tenant improvements, mixed-use

6. **Foundation Engineering Guide** ✅ LIVE (NEW)
   - ID: `foundation-engineering-guide`
   - Target keyword: "foundation engineer california"
   - Current clusters: 0 posts ❌ EMPTY
   - Topics: Foundation types, settlement, expansive soils, foundation repair, underpinning, hillside foundations

**Future Hubs (Not Yet Created):**

7. **Building Codes & Compliance** (needs 20+ posts before creating hub)
   - Topics: Title 24, licensing, associations, permits

8. **ADU Engineering Services** (planned)
   - Topics: ADU requirements, garage conversions, detached ADUs, permitting

#### How to Assign Posts to Clusters

**For Each New Blog Post:**

1. **Determine Hub Assignment** based on primary keyword:

| Primary Keyword Contains... | Assign to Hub | Hub ID |
|----------------------------|---------------|---------|
| "structural engineer", "seismic", "foundation", "ADU", "home addition" | Structural Engineering | `structural-engineering-services-guide` |
| "engineering design", "design services", "sustainable design", "custom design" | Engineering Design | `engineering-design-services-guide` (planned) |
| "MEP", "mechanical engineering", "stormwater", "septic", "grading" | Specialized Services | `specialized-engineering-services-guide` (planned) |
| "Title 24", "building code", "license", "compliance" | Building Compliance | `building-codes-compliance-guide` (planned) |
| "commercial building", "tenant improvement", "commercial engineering" | Commercial Services | `commercial-engineering-services-guide` (planned) |

2. **Add Cluster Metadata Fields** to the BlogPost object:

```typescript
{
  id: 'your-post-id',
  title: 'Your Post Title',
  excerpt: '...',
  category: 'Structural Engineering',
  date: '2025-11-17',
  readTime: '12 min read',
  author: 'AAA Engineering Team',
  image: 'https://...',
  featured: false,
  relatedArticles: ['related-post-1', 'related-post-2', 'hub-page-id'],  // ← ADD HUB TO RELATED ARTICLES

  // Topic Cluster Metadata (REQUIRED for all new posts)
  contentType: 'cluster',  // or 'hub' for hub pages, 'supporting' for general posts
  hubPage: 'structural-engineering-services-guide',  // ID of parent hub
  topicCluster: 'structural-engineering',  // Cluster name
  primaryKeyword: 'adu structural engineering',  // Main keyword for this post
  secondaryKeywords: ['accessory dwelling unit', 'adu design'],  // 2-3 related keywords
  geoTarget: 'Los Alamitos',  // City/region targeted

  content: `...`
}
```

3. **Add Hub Reference in Content** (in first 500 words):

```markdown
This article is part of our comprehensive [Structural Engineering Services Guide](/blog/structural-engineering-services-guide), which covers everything you need to know about structural engineering in Southern California.
```

OR integrate naturally:

```markdown
For a complete overview of structural engineering services, see our [comprehensive structural engineering guide](/blog/structural-engineering-services-guide).
```

4. **Add Hub to Related Articles Section** at the bottom of content:

```markdown
## Related Resources

**Comprehensive Guides:**
- [Complete Structural Engineering Services Guide](/blog/structural-engineering-services-guide)

**Related Topics:**
- [ADU Structural Requirements](/blog/...)
- [Foundation Design Guide](/blog/...)
```

#### Cluster Metadata Field Definitions

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `contentType` | 'hub' \| 'cluster' \| 'supporting' | Yes | Content tier in cluster hierarchy | `'cluster'` |
| `hubPage` | string | If cluster | ID of parent hub page | `'structural-engineering-services-guide'` |
| `clusterPages` | string[] | If hub | Array of cluster post IDs | `['adu-post-1', 'foundation-post-2']` |
| `topicCluster` | string | Yes | Cluster name | `'structural-engineering'` |
| `primaryKeyword` | string | Yes | Main target keyword | `'adu structural engineering'` |
| `secondaryKeywords` | string[] | Optional | 2-3 supporting keywords | `['adu design', 'accessory dwelling']` |
| `geoTarget` | string | Optional | City or region | `'Los Alamitos'` or `'Southern California'` |

---

### ⚠️ CRITICAL: Blog Post ID Format & Linking Rules

**MUST READ BEFORE CREATING HUB PAGES OR LINKING TO BLOG POSTS**

#### Blog Post ID Pattern

**🆕 NEW FORMAT (For All New Blog Posts - Use This!):**

Generate IDs using this clean pattern:
```typescript
// Format: {keyword-phrase}-in-{city}
'adu-structural-engineering-in-newport-beach'
'structural-engineering-for-home-additions-in-brea'
'seismic-retrofit-requirements-in-cypress'
'commercial-building-engineering-in-irvine'
```

**ID Generation Rules:**
1. Take the primary keyword phrase
2. Convert to lowercase
3. Replace spaces with hyphens
4. Add `-in-` separator
5. Add city name (kebab-case) **⚠️ SINGLE OCCURRENCE ONLY - NEVER DUPLICATE THE CITY**
6. Use kebab-case throughout (all lowercase, hyphens only)

**⛔ STOP AND VERIFY: Does your ID end with the city name appearing TWICE?**
```
❌ BAD: deep-foundation-design-in-poway-poway     (poway appears twice!)
✅ GOOD: deep-foundation-design-in-poway          (poway appears once)
```

**Examples:**
- Keyword: "ADU Structural Engineering" + City: "Newport Beach"
  → ID: `adu-structural-engineering-in-newport-beach`

- Keyword: "Commercial Building Engineering" + City: "Irvine"
  → ID: `commercial-building-engineering-in-irvine`

- Keyword: "Seismic Retrofit Requirements" + City: "Cypress"
  → ID: `seismic-retrofit-requirements-in-cypress`

**Non-geo Posts (no city):**
```typescript
'structural-engineering-services-guide'  // Hub pages
'building-code-compliance-2024'  // Year-based
'structural-engineer-requirements'  // Generic topics
```

---

**⚠️ LEGACY FORMAT (Existing Posts Only - DO NOT USE for new posts):**

Most existing blog posts (106 total) use an OLD pattern with city duplication:
```typescript
'adu-structural-engineering-in-los-alamitos-los-alamitos'  // City appears TWICE
'structural-engineering-for-home-additions-in-brea-brea'  // City appears TWICE
'seismic-retrofit-requirements-in-cypress-cypress'  // City appears TWICE
```

**Why the duplication exists:** Legacy automated generation created this pattern. We're NOT changing existing posts (would break external links), but NEW posts should use the clean format above.

**When linking to existing posts:** Use the full duplicated ID as it appears in blog-data.ts

#### How to Find Correct Blog Post IDs

**BEFORE creating hub page links, run this command:**

```bash
# Get all blog post IDs sorted alphabetically
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | sort -u
```

**Or search for specific topics:**

```bash
# Find all ADU-related post IDs
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | grep adu

# Find all seismic-related post IDs
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | grep -E "seismic|earthquake|retrofit"

# Find all posts for a specific city
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | grep "newport-beach"
```

#### Hub Page Content Format (RichBlogContent Component)

Hub page content is parsed by the `RichBlogContent` component which supports:

**✅ Supported Markdown:**

```markdown
## Main Heading (H2)
Creates a gradient card with large heading

### Sub Heading (H3)
Creates a styled H3 with decorative line

### Sub Heading with Bullet Points
- [Link Text](/blog/actual-post-id)
- [Another Link](/blog/another-actual-post-id)

**Bold Statement**
Creates a highlighted card with icon

Regular paragraph text with [inline links](/blog/post-id).

Important: This is a callout box
Note: Another callout style
Tip: A helpful tip box
Pro Tip: Expert advice box
```

**❌ Common Errors:**

1. **Wrong: Using shortened IDs**
   ```markdown
   - [ADU Engineering](/blog/adu-structural-engineering-newport-beach)
   ```
   Should be:
   ```markdown
   - [ADU Engineering](/blog/adu-structural-engineering-in-newport-beach-newport-beach)
   ```

2. **Wrong: Forgetting `/blog/` prefix**
   ```markdown
   - [Link](adu-structural-engineering-in-newport-beach-newport-beach)
   ```
   Should be:
   ```markdown
   - [Link](/blog/adu-structural-engineering-in-newport-beach-newport-beach)
   ```

3. **Wrong: Using markdown in clusterPages array**
   ```typescript
   clusterPages: [
     '[ADU Engineering](/blog/adu-post)'  // ❌ NO! Just IDs!
   ]
   ```
   Should be:
   ```typescript
   clusterPages: [
     'adu-structural-engineering-in-newport-beach-newport-beach'  // ✅ Just the ID
   ]
   ```

#### Verification Checklist Before Committing Hub Page

**Run these checks:**

```bash
# 1. Extract all blog post IDs from your hub content
grep -o '/blog/[^)]*' src/lib/blog-data.ts | grep "your-hub-id" -A 200 | sed 's|/blog/||' | sort -u > hub-links.txt

# 2. Get all actual blog post IDs
grep -o "id: '[^']*'" src/lib/blog-data.ts | sed "s/id: '//" | sed "s/'//" | sort -u > actual-ids.txt

# 3. Find broken links (IDs in hub that don't exist)
comm -23 hub-links.txt actual-ids.txt

# If this outputs anything, those are BROKEN LINKS - fix them!
```

**✅ All hub links verified = No 404 errors**

---

### 🔧 RichBlogContent Component (How Hub Content is Rendered)

**Location:** `src/components/RichBlogContent.tsx`

This component parses hub page content and converts markdown to rich HTML. Understanding how it works is critical for proper formatting.

#### How Content is Parsed

**1. Content is split by double newlines (`\n\n`)**

```typescript
const sections = content.split('\n\n')
```

Each section between blank lines is processed independently.

**2. Processing Order (IMPORTANT - First match wins!)**

The component checks each section in this order:
1. ✅ Main headings (`## `)
2. ✅ Sub-headings with bullet points (`### ` + `\n-`)
3. ✅ Sub-headings alone (`### `)
4. ✅ Bold text (`**text**`)
5. ✅ Bullet point lists (`\n-`)
6. ✅ Callout boxes (`Important:`, `Note:`, `Tip:`)
7. ✅ Regular paragraphs

**3. Markdown Link Parsing**

Links are converted using regex:
```typescript
const withLinks = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
  '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')
```

#### ✅ FIXED: Sub-headings with Bullet Points

**Previously (BUG - caused raw markdown to show):**
```typescript
// Old code only extracted heading text, ignoring bullet points
if (section.startsWith('### ')) {
  const title = section.replace('### ', '').trim()  // Got ENTIRE section as title!
  return <h3>{title}</h3>  // Rendered bullets as plain text in heading
}
```

**Now (FIXED - properly handles headings + bullets):**
```typescript
// New code checks for bullet points after heading
if (section.startsWith('### ')) {
  if (section.includes('\n-')) {
    // Extract heading from first line only
    const lines = section.split('\n')
    const heading = lines[0].replace('### ', '').trim()
    const items = lines.slice(1).filter(line => line.trim().startsWith('-'))

    // Render heading + parsed bullet list with clickable links
    return (
      <div>
        <h3>{heading}</h3>
        <ul>
          {items.map(item => {
            const withLinks = item.replace(/\[...\]\(...\)/g, '<a...>')
            return <li dangerouslySetInnerHTML={{ __html: withLinks }} />
          })}
        </ul>
      </div>
    )
  }
}
```

**This fix resolved 114 broken links across 3 hub pages!**

#### Best Practices for Hub Content

**✅ DO:**
```markdown
## Related Resources

### Residential Services
- [When to Hire](/blog/when-to-hire-residential-structural-engineer-mission-viejo)
- [What Engineers Do](/blog/what-do-structural-engineers-do-costa-mesa)

### Commercial Services
- [Commercial Engineering](/blog/commercial-building-engineering-design-california-anaheim)
- [Tenant Improvements](/blog/commercial-tenant-improvement-engineering-in-murrieta-murrieta)
```

**❌ DON'T:**
```markdown
## Related Resources

### Residential Services
[When to Hire](/blog/...), [What Engineers Do](/blog/...)  // ❌ Comma-separated on same line

### Commercial Services - [Commercial Engineering](/blog/...) - [Tenant Improvements](/blog/...)  // ❌ Links in heading
```

**Why?** The component expects:
- Headings on their own line
- Bullet points on separate lines
- One link per bullet point (or space-separated is ok)

---

#### Internal Linking Rules for Clusters

**Every Cluster Post Must:**
- ✅ Link to parent hub page (in content + relatedArticles)
- ✅ Link to 2-3 sibling clusters (related topics in same hub)
- ✅ Link to 2-3 service pages
- ✅ Include hub reference in first 500 words

**Hub Pages Must:**
- ✅ Link to ALL cluster posts (18-25 links)
- ✅ Group clusters by subtopic
- ✅ Include contextual anchor text for each cluster link
- ✅ Feature comprehensive FAQ section (8-10 questions)

#### Example: Cluster Post Template

```markdown
# ADU Structural Engineering in Los Alamitos: Complete 2025 Guide

**Updated: November 2025**

[Opening paragraph with problem/solution...]

As part of our [comprehensive structural engineering services](/blog/structural-engineering-services-guide) in Southern California, we specialize in ADU design and permitting throughout Orange County, including Los Alamitos, Seal Beach, and Cypress.

## What is ADU Structural Engineering?

[Content...]

For related guidance, see our articles on [home addition engineering](/blog/structural-engineering-for-home-additions-brea) and [foundation assessment](/blog/foundation-assessment-guide-buena-park).

[Rest of content...]

## Related Resources

**Comprehensive Guides:**
- [Complete Structural Engineering Services Guide](/blog/structural-engineering-services-guide)

**Related Services:**
- [Foundation Design for ADUs](/blog/...)
- [Seismic Requirements for ADUs](/blog/...)
- [Title 24 Compliance for ADUs](/blog/...)
```

#### Benefits of Topic Cluster Strategy

✅ **Topical Authority**: Google sees we comprehensively cover structural engineering
✅ **Better Rankings**: Hub pages rank for high-volume head terms
✅ **Cluster Rankings**: Each cluster ranks for specific long-tail keywords
✅ **Featured Snippets**: Comprehensive content captures more featured snippets
✅ **Internal Link Flow**: PageRank flows from hub to clusters and back
✅ **User Experience**: Visitors find related content easily
✅ **Content Organization**: Clear structure makes content management easier

### Step 5: Generate Each Blog Post

For each of the 5 posts, follow this process:

**A. Generate Blog Post ID**

**CRITICAL - Use the NEW clean ID format (no city duplication):**

```
ID Format: {keyword-phrase}-in-{city-name}
```

**Example:**
- Keyword: "Commercial Building Engineering"
- City: "Newport Beach"
- ID: `commercial-building-engineering-in-newport-beach`

**Steps:**
1. Take primary keyword phrase
2. Convert to lowercase
3. Replace spaces with hyphens
4. Replace special characters with hyphens (e.g., "&" → "and")
5. Add `-in-` separator
6. Add city name (kebab-case) - **single occurrence, NO duplication**
7. **Verify uniqueness** - check blog-data.ts to ensure ID doesn't already exist

**Verification Command:**
```bash
grep "id: 'your-generated-id'" src/lib/blog-data.ts
# Should return nothing if ID is unique
```

**B. Create Post Structure**

Use the EXACT structure from `references/blog-template.md`:

1. Header Metadata
2. Opening paragraph with regional context
3. What is [Topic]? section
4. Core Services/Types section
5. Geographic Considerations (heavy city mentions)
6. Cost section (regional pricing)
7. Selection criteria section
8. Common challenges section
9. Why Choose AAA section
10. Contact section
11. CTA box
12. Related Articles (3 posts)

**B. Write Content Following These Rules:**

**Geographic Integration (CRITICAL):**
- Primary City: 15-20 mentions throughout post
- Secondary Cities: 5-8 mentions total
- Use city-specific data from `references/city-data.md`
- Include local regulations, permit times, market data

**Keyword Optimization:**
- Primary keyword in: Title, H1, first paragraph, one H2, conclusion, URL
- Keyword density: 1-1.5% (natural, not stuffed)
- Optimize for featured snippets (direct answers early)

**Internal Linking (from `references/interlinking-strategy.md`):**
- 5-8 internal links total per post
- 2-3 service page links
- 2-4 blog post links (related topics)
- Use keyword-rich anchor text
- First link within first 500 words

**External Linking:**
- 2-3 authority links (building dept, CBC, professional orgs)
- Open in new tabs

**C. Add Schema Markup (REQUIRED - All Schemas Combined)**

**CRITICAL FOR RICH SNIPPETS & LOCAL PACK:** Every blog post MUST include comprehensive schema markup. Use the combined schema template from `assets/schema-templates/combined-blog-schema.json`.

### Schema Priority Levels

| Priority | Schema | Template File | Rich Snippet Benefit |
|----------|--------|---------------|---------------------|
| **HIGH** | Organization | `organization-schema.json` | Knowledge Panel, brand identity, E-E-A-T |
| **HIGH** | LocalBusiness | `local-business-schema.json` | Local Pack, Maps, "near me" searches |
| **HIGH** | Service | `service-schema.json` | Service listings, availability, pricing |
| **HIGH** | FAQ | `faq-schema.json` | FAQ dropdowns, PAA boxes, expanded footprint |
| **MEDIUM** | Breadcrumb | `breadcrumb-schema.json` | Site hierarchy in results |
| **MEDIUM** | Review/AggregateRating | `review-snippets-schema.json` | Star ratings, trust signals |
| **MEDIUM** | Article | `article-schema.json` | Article info, freshness signals |
| **LOWER** | HowTo | `howto-schema.json` | Step-by-step display (process posts only) |
| **LOWER** | Product | `product-schema.json` | Price range cards (service posts) |

### Combined Schema Implementation

**ALWAYS use the combined @graph format** from `assets/schema-templates/combined-blog-schema.json`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": ".../#organization", ... },
    { "@type": "LocalBusiness", "@id": ".../#localbusiness", "areaServed": {"@type": "City", "name": "{{CITY}}"}, ... },
    { "@type": "Service", "name": "{{SERVICE}} in {{CITY}}", "provider": {"@id": ".../#organization"}, ... },
    { "@type": "TechnicalArticle", "headline": "{{TITLE}}", "author": {"@id": ".../#organization"}, ... },
    { "@type": "BreadcrumbList", "itemListElement": [...] },
    { "@type": "FAQPage", "mainEntity": [...] },
    { "@type": "Review", "itemReviewed": {"@id": ".../#organization"}, ... }
  ]
}
```

### Schema Field Requirements

**Organization (include in ALL posts):**
- Company name, logo, address, phone, email
- Social profile links (LinkedIn, Facebook)
- Aggregate rating (4.9/5 from 127 reviews)
- Service areas (5 counties)

**LocalBusiness (include in ALL geo-targeted posts):**
- City-specific `areaServed` field with target city
- Business hours, contact info
- `hasOfferCatalog` with services + free consultation offer
- Price range indicator

**Service (include in ALL service-related posts):**
- Service name + city (e.g., "ADU Engineering in Newport Beach")
- Service type and description
- Price specifications
- Links to provider (Organization @id)

**FAQ (include in ALL posts - 5 minimum):**
- Extract from H2 question headers in content
- Direct, concise answers (40-100 words each)
- Include pricing, timeline, and process questions
- Add city-specific questions

**Review (include 2-3 in ALL posts):**
- Pull from "Local Social Proof" section
- Include reviewer name, rating (5 stars), review text
- Use recent dates (within 6 months)

### Validation Checklist

Before publishing, validate schema at:
- https://validator.schema.org/
- https://search.google.com/test/rich-results

**Common Validation Errors:**
- [ ] Missing `@type` declarations
- [ ] Invalid ISO 8601 date format (use YYYY-MM-DD)
- [ ] Broken `@id` references
- [ ] Missing required fields (name, description)
- [ ] Invalid URL formats

See `assets/schema-templates/combined-blog-schema.json` for complete template with all placeholders documented.

**D. Create Related Articles Section**

Select 3 related articles:
- One from same category
- One with similar keyword theme
- One targeting different city/region

### Step 6: Quality Control Checklist

Verify each post has:
- [ ] **⛔ SLUG/ID CHECK: City name appears ONLY ONCE (not duplicated like `city-city`)**
- [ ] **Keyword+City combination verified as NEW in BLOG-TRACKING.md**
- [ ] Primary keyword in title, H1, first paragraph, one H2
- [ ] City name in title and 2+ H2 headers
- [ ] 5-8 internal links with keyword anchors
- [ ] Primary city mentioned 15-20 times
- [ ] Local building codes/regulations included
- [ ] Related articles section populated
- [ ] "Local Social Proof" section with 2-3 testimonials

**Schema Checklist (ALL REQUIRED - Use combined-blog-schema.json):**
- [ ] Organization Schema - company info, logo, social links, credentials
- [ ] LocalBusiness Schema - city-specific areaServed, hours, services catalog
- [ ] Service Schema - service name + city, pricing, provider reference
- [ ] Article Schema - headline, description, dates, author/publisher
- [ ] Breadcrumb Schema - Home > Blog > Category > Post
- [ ] FAQ Schema - 5+ questions extracted from H2 headers with direct answers
- [ ] Review Schema - 2-3 testimonials with 5-star ratings and dates
- [ ] **Speakable Schema** - Voice search optimization for key content
- [ ] All schemas combined in single `@graph` array
- [ ] All `@id` references properly linked between schemas
- [ ] Schemas validated at https://validator.schema.org/
- [ ] Rich results tested at https://search.google.com/test/rich-results

### Speakable Schema (Voice Search Optimization)

Include speakable schema for Google Assistant, Alexa, and Siri optimization:

```json
{
  "@type": "SpeakableSpecification",
  "cssSelector": [".answer-capsule", "h1", ".quick-answer", ".faq-answer"]
}
```

Add to your Article schema within the @graph array.

**Voice-Optimized Content Rules**:
- Question-format H2 headings (matches spoken queries)
- 40-60 word answers (optimal for voice reading)
- Conversational tone (sounds natural when read aloud)
- First-person pronouns in FAQs for relatability

---

## Answer Capsules (CRITICAL for 2025)

Every blog post MUST include an Answer Capsule at the top for AI Overview extraction:

```html
<aside class="answer-capsule" data-speakable="true">
  <strong>Quick Answer:</strong> {40-60 words, direct answer to H1 query,
  include 2-3 specific numbers/data points, conversational tone for voice}
</aside>
```

**Answer Capsule Requirements**:
- Exactly 40-60 words (voice assistant reading length)
- Directly answer the H1 question in first sentence
- Include 2-3 specific numbers or data points
- Use conversational language (sounds natural when read aloud)
- Mark with `data-speakable="true"` for Google Assistant/Alexa

**Example**:
> "A structural engineer in Beverly Hills typically costs $3,000-$15,000 for residential projects. For hillside homes, expect $5,000-$25,000 due to complex soils engineering. AAA Engineering Design offers free initial consultations with 48-hour turnaround on standard assessments."

---

## PAA/PASF Keyword Integration

Enhance every blog post with People Also Ask (PAA) and People Also Search For (PASF) keywords:

**PAA Questions** (Use in FAQ section):
- "How much does a structural engineer cost in [city]?"
- "Do I need a structural engineer for [project type]?"
- "What does a structural engineer do for [project]?"
- "How long does structural engineering take?"
- "Is a structural engineer required by [city] building code?"

**PASF Keywords** (Weave naturally into content):
- "[city] structural engineer reviews"
- "affordable structural engineer near me"
- "residential structural engineer [city]"
- "best structural engineer [county]"
- "[project type] engineer [city]"

**Keyword Research Process**:
1. Search primary keyword on Google
2. Extract PAA questions from search results
3. Extract "Related searches" / PASF at bottom
4. Include 5-8 PAA questions in FAQ section
5. Weave 5-10 PASF keywords throughout content

---

## Bing-Specific SEO Requirements

**Bing Algorithm Priorities** (Different from Google):

1. **Exact-match keywords** - Bing weights exact keyword matches more heavily than Google
2. **Meta keywords tag** - Bing still reads and values the meta keywords tag (Google ignores it)
3. **Social signals** - Include shareable elements and social proof
4. **Multimedia richness** - Bing heavily rewards pages with images, videos, charts
5. **Clear topic focus** - One primary topic per page, no tangents
6. **Domain age signals** - Reference established presence, founding date, track record
7. **IndexNow integration** - Submit new URLs for instant Bing indexing

**Required Bing Meta Tags**:
```html
<meta name="keywords" content="structural engineer [city], [service] [city], [keyword] near me">
<meta name="msvalidate.01" content="{Bing Webmaster Tools verification}">
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large">
```

**Bing-Optimized URL Structure**:
- Use exact-match keywords in slug
- Prefer hyphens over underscores
- Keep URLs under 75 characters
- Example: `/blog/structural-engineer-beverly-hills-residential`

**⚠️ MANDATORY SLUG VERIFICATION:**
Before proceeding, visually confirm EVERY blog post ID follows this pattern:
```
✅ keyword-phrase-in-city-name     (city appears ONCE)
❌ keyword-phrase-in-city-name-city-name  (city appears TWICE - FIX THIS!)
```

### Step 6.5: Featured Post Selection (AUTOMATIC)

**🌟 Featured Post Rule:**
- For every 5 new blog posts generated, mark 1 as `featured: true`
- **Maximum of 3 featured posts total** at any given time
- When adding new featured post and already at 3, remove `featured: true` from oldest featured post

**Calculation:**
- Generating 5 posts → 1 featured
- Generating 10 posts → 2 featured
- Generating 15 posts → 3 featured
- Generating 20 posts → 4 featured (but must remove 1 old featured to maintain max 3)

**Example Batch (10 posts):**
- Posts 1-4: `featured: false`
- **Post 5**: `featured: true` ← First featured
- Posts 6-9: `featured: false`
- **Post 10**: `featured: true` ← Second featured
- +5 "near me" posts: `featured: false` (never featured)

**Featured Post Selection Strategy:**
1. Choose posts with highest commercial intent keywords (hire, cost, find, best, top)
2. Prefer posts targeting high-value cities (Newport Beach, Irvine, Los Angeles, San Diego)
3. Ensure featured posts represent diverse topics (not all same keyword)
4. Prioritize posts that will rank well (low competition, high search volume)

**Maintaining 3-Post Maximum:**

Before adding new featured posts, check current count:
```bash
grep -c "featured: true" src/lib/blog-data.ts
```

If count will exceed 3:
1. Identify oldest featured posts (check dates)
2. Remove `featured: true` from oldest posts
3. Keep only the 3 most recent featured posts

**Important:** Hub pages are marked `featured: true` but don't count toward the 3-post limit (they're permanent featured content).

### Step 7: Output Format

Create 5 separate markdown files:
```
blog-posts-[DATE]/
├── 1-[keyword-slug]-[city-slug].md
├── 2-[keyword-slug]-[city-slug].md
├── 3-[keyword-slug]-[city-slug].md
├── 4-[keyword-slug]-[city-slug].md
└── 5-[keyword-slug]-[city-slug].md
```

Save files to project root directory in format: `blog-posts-nov-[day]-2025/`

### Step 8: Update Blog Tracking (MANDATORY)

**CRITICAL: Update BLOG-TRACKING.md immediately after generating posts**

Add each new post to the tracking file:
```markdown
| [Keyword/Topic] | [City] | ✅ Published | [Date] |
```

Update the following sections in BLOG-TRACKING.md:
1. ✅ Add new keyword+city combinations to "Published Blog Posts" table
2. ✅ Update city usage counts in "Available Cities" section
3. ✅ Update "Keywords Already Used with Cities" section
4. ✅ Update "Recommended Next 5 City Selections" for future batches

### Step 9: Deploy to Website (CRITICAL - AUTOMATED EXECUTION)

**🚨 CRITICAL DEPLOYMENT NOTICE 🚨**

> **THIS PROJECT DEPLOYS TO NETLIFY - NOT VERCEL**
>
> The aaaengineeringdesign.com website is hosted on **Netlify**. There is NO Vercel project for this codebase.
>
> - ✅ Deployment trigger: `git push origin master` → Netlify auto-deploys
> - ❌ DO NOT attempt to deploy to Vercel
> - ❌ DO NOT run `vercel` CLI commands
> - ❌ DO NOT reference Vercel in deployment instructions
>
> Netlify deployment URL: Automatically built from master branch pushes

---

**⚠️ MANDATORY: Execute ALL deployment commands automatically after blog generation**

**The project includes `scripts/add-blog-posts.js` which automatically:**
1. **Auto-detects the most recent `blog-posts-*` directory** (or accepts path as argument)
2. Parses markdown files from that directory
3. Extracts frontmatter and content
4. Converts to TypeScript BlogPost objects
5. **Automatically sets first 3 posts as `featured: true`** (appears in Featured Articles)
6. **Uses date from frontmatter or today's date**
7. **CORRECTLY inserts posts into BLOG_POSTS array BEFORE helper functions**
8. Preserves all existing posts and structure

**Execute these commands in sequence:**

```bash
# 1. Run the conversion script (auto-detects most recent blog-posts directory)
node scripts/add-blog-posts.js

# 2. Verify build succeeds
npm run build

# 3. Commit changes with detailed commit message
git add src/lib/blog-data.ts blog-posts-nov-8-2025/ .claude/skills/socal-engineering-blog/BLOG-TRACKING.md
git commit -m "$(cat <<'EOF'
Add [NUMBER] new SEO-optimized blog posts for [Month Day, Year]

- [Blog Post 1 Title]
- [Blog Post 2 Title]
- [Blog Post 3 Title]
[- Blog Post 4 Title if 4+ posts]
[- Blog Post 5 Title if 5 posts]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 4. Push to trigger Netlify deployment
git push origin master

# 5. Submit to search engines (optional but recommended)
npm run indexnow
```

**What the script does:**
- ✅ **Auto-detects** most recent blog-posts directory
- ✅ **First 3 posts automatically featured** (shows in Featured Articles section)
- ✅ **Date auto-detected** from frontmatter publishDate or uses today's date
- ✅ **Clear output** showing which posts are featured with ⭐ indicator

**CRITICAL BUG FIX IMPLEMENTED:**
The `add-blog-posts.js` script was updated to fix a bug where posts were incorrectly inserted into the `getRelatedPosts()` function instead of the `BLOG_POSTS` array. The script now:
- Finds the `// Helper functions` comment
- Locates the closing bracket `]` of BLOG_POSTS array BEFORE that comment
- Inserts new posts at the correct location
- Ensures posts appear in "All Articles" and are sorted by date

**Never manually edit blog-data.ts** - always use the automated script to prevent insertion errors.

**Deployment Execution Instructions:**
- Run ALL 5 commands sequentially
- Wait for each command to complete before running the next
- Verify successful output from each step
- Report any errors immediately
- Confirm deployment success after git push completes

### Step 10: Post-Deployment Summary

After successful deployment, provide a comprehensive summary:

1. **Blog Posts Generated:**
   - List all post titles with keywords and cities
   - Word count for each post
   - Category and intent type

2. **Deployment Status:**
   - ✅ Conversion script executed
   - ✅ Build verified successful
   - ✅ Changes committed to git
   - ✅ Pushed to master branch
   - ✅ Search engines notified (if indexnow ran)

3. **SEO & Tracking:**
   - Keywords used with intent types
   - Cities targeted with geographic distribution
   - Internal links created per post
   - **Confirmation that BLOG-TRACKING.md has been updated**

4. **Next Steps Recommendations:**
   - Suggested cities for next batch (from BLOG-TRACKING.md)
   - Keyword strategies for upcoming posts
   - Content mix recommendations

## Key Principles

**Geographic Authenticity:**
- Every city mention must be contextual
- Include real building codes, permit data
- Use specific examples, not generic statements

**Keyword Integration:**
- Write for humans first
- Natural language over keyword density
- Variations and LSI terms

**Link Strategy:**
- Every link adds value
- Service pages are priority
- Distribute links throughout

**AI Citation Optimization (NEW - 2025):**
- **Direct Answers**: Start each major section with 40-60 word direct answer
- **Question Headers**: Convert ALL H2 headers to question format
  - ❌ "Structural Engineering Services"
  - ✅ "What Structural Engineering Services Are Available in [City]?"
- **Modular Content**: Structure for easy AI extraction (bullets, tables, clear sections)
- **E-E-A-T Signals**: Include author credentials, PE license mentions, years of experience
- **Freshness Indicators**: Add "Updated: [Month Year]" at top of post
- **FAQ Schema**: Every post needs 5-8 FAQ questions with schema markup
- **Semantic HTML**: Use proper tags (article, section, aside) for AI parsing

*See `.claude/AI-OPTIMIZED-CONTENT-GUIDELINES.md` for complete details*

## Common Mistakes to Avoid

❌ DON'T:
- Force city names unnaturally
- Keyword stuff
- Reuse examples across posts
- Link to competitors
- Skip internal linking

✅ DO:
- Make city mentions contextual
- Write naturally
- Provide unique examples
- Link strategically
- Include local data

## Resources

### references/
- `keyword-list.md` - Complete keyword inventory, GSC queries, tracking
- `city-data.md` - 25+ SoCal cities with full demographics, regulations, permit data
- `blog-template.md` - EXACT post structure matching aaaengineeringdesign.com
- `interlinking-strategy.md` - Complete linking system and anchor text rules

### assets/schema-templates/

**HIGH PRIORITY SCHEMAS:**
- `organization-schema.json` - Organization/brand identity (Knowledge Panel)
- `local-business-schema.json` - LocalBusiness for Local Pack/Maps
- `service-schema.json` - Service listings with pricing
- `faq-schema.json` - FAQ dropdowns and PAA boxes

**MEDIUM PRIORITY SCHEMAS:**
- `breadcrumb-schema.json` - Site hierarchy display
- `review-snippets-schema.json` - Star ratings and testimonials
- `article-schema.json` - Article info and freshness

**LOWER PRIORITY SCHEMAS:**
- `howto-schema.json` - Step-by-step guides
- `product-schema.json` - Product/service cards

**COMBINED TEMPLATE:**
- `combined-blog-schema.json` - **USE THIS** - All schemas combined in @graph format with placeholders

---

## Troubleshooting & Common Issues

### Issue: Blog Posts Not Appearing on Website

**Symptoms:**
- Posts don't show in "All Articles" section
- Posts missing from recent posts
- Build succeeds but posts invisible

**Cause:**
Posts were inserted in wrong location in `blog-data.ts` file (inside helper functions instead of BLOG_POSTS array)

**Solution:**
1. Restore blog-data.ts: `git checkout HEAD~1 -- src/lib/blog-data.ts`
2. Re-run the corrected script: `node scripts/add-blog-posts.js`
3. Verify helper functions are AFTER posts: Check that `// Helper functions` comment comes after the closing `]` of BLOG_POSTS array
4. Test build: `npm run build` should succeed with correct number of static pages
5. Commit and redeploy

**Prevention:**
- Always use `scripts/add-blog-posts.js` - never manually edit blog-data.ts
- The script is designed to find `// Helper functions` comment and insert posts before it
- Verify script output shows "Successfully added X blog posts"

### Verifying Correct Insertion

After running the script, check these markers in `src/lib/blog-data.ts`:

```typescript
// Last post in BLOG_POSTS array
  },
]  // ← This closes BLOG_POSTS array

// Helper functions  // ← This should come AFTER the ]
export function getFeaturedPosts(): BlogPost[] {
```

If you see posts appearing inside function definitions, the script failed - restore and re-run.

---

## 📍 Local Pack & Google Maps Optimization (NEW)

### Why Local Pack Matters for Lead Generation

The Google Local Pack (3-pack map results) appears for 46% of all Google searches and has the highest click-through rates for local service queries. Capturing Local Pack positions for "near me" and city-specific searches is critical for lead generation.

### Local Pack Optimization Checklist

**For Every Geo-Targeted Blog Post:**

1. **Include LocalBusiness Schema** (from `assets/schema-templates/local-business-schema.json`)
   ```json
   {
     "@type": "LocalBusiness",
     "name": "AAA Engineering Design",
     "areaServed": {
       "@type": "City",
       "name": "[PRIMARY_CITY]"
     }
   }
   ```

2. **Add Service Schema** (from `assets/schema-templates/service-schema.json`)
   - Links service to specific geographic area
   - Includes pricing information where applicable
   - Shows available offers (free consultation)

3. **Include NAP Consistency**
   - **N**ame: AAA Engineering Design
   - **A**ddress: [Street], Stanton, CA 90680
   - **P**hone: (949) 981-4448
   - Must be identical across all posts and pages

4. **Geographic Content Signals**
   - City name in title (e.g., "Structural Engineer in Newport Beach")
   - City name in H1 and at least 2 H2 headers
   - City mentioned 15-20 times naturally throughout
   - Nearby cities mentioned 5-8 times
   - Local landmarks, neighborhoods referenced
   - Building department URLs linked

5. **Service Area Block** (add to every "near me" post)
   ```markdown
   ## Our [City] Service Area

   AAA Engineering Design serves [City] and surrounding communities:

   **Primary Service Area:**
   - [City] - All neighborhoods
   - [Nearby City 1] (X miles)
   - [Nearby City 2] (X miles)
   - [Nearby City 3] (X miles)

   **Extended Service Area:**
   - All of [County] County
   - [Adjacent County] County

   📍 **Office Location:** Stanton, CA (Central Orange County)
   🚗 **Travel:** We provide on-site consultations throughout Southern California
   ```

### Google Business Profile Integration

**For maximum Local Pack visibility, blog content should support GBP:**

1. **Create GBP Posts** linking to blog articles
   - Use blog excerpts as GBP post content
   - Link to full article on website
   - Target city-specific services

2. **Q&A Content** from blogs should match GBP Q&A
   - Extract FAQ questions from blog posts
   - Add to Google Business Profile Q&A section
   - Builds topical relevance

3. **Review Keywords** - Encourage reviews mentioning:
   - Service type (e.g., "ADU structural engineering")
   - City name (e.g., "Newport Beach project")
   - Helps GBP rank for those terms

### City-Specific Landing Page Strategy

**For highest-priority cities, consider dedicated landing pages:**

| City | Priority | Reason |
|------|----------|--------|
| Newport Beach | Critical | Highest property values, most searches |
| Irvine | Critical | Large population, tech hub |
| San Diego | Critical | 2nd largest CA city |
| Los Angeles | Critical | Largest market |
| Anaheim | High | High volume, commercial hub |
| Long Beach | High | Port city, industrial |
| Pasadena | High | Historic homes, affluent |

**Landing Page Structure:**
```
/locations/newport-beach/
├── Main service overview for city
├── Links to ALL Newport Beach blog posts
├── City-specific testimonials
├── Local building department info
├── Service area map
└── Prominent CTA
```

### Tracking Local Pack Performance

**Monthly Check:**
1. Search "[service] [city]" for top 10 cities
2. Document Local Pack position (1, 2, 3, or not showing)
3. Note organic position separately
4. Track changes month-over-month

**Example Tracking:**
```
| City | Service | Local Pack | Organic | Month |
|------|---------|------------|---------|-------|
| Newport Beach | structural engineer | #2 | #4 | Nov 2025 |
| Irvine | ADU engineer | #1 | #2 | Nov 2025 |
| Anaheim | foundation engineer | Not shown | #8 | Nov 2025 |
```

---

## 📊 Lead Generation Scripts Reference

### Available Scripts

| Script | Purpose | Auto-Run |
|--------|---------|----------|
| `gsc-keyword-extractor.js` | Extract GSC keywords + Lead Gen Score | Weekly (7 days) |
| `bing-webmaster-extractor.js` | Extract Bing keyword data | Weekly (7 days) |
| `opportunity-gap-analyzer.js` | Find ranking/coverage gaps | On demand |
| `submit-indexnow.js` | Submit URLs to search engines | Post-deploy |
| `add-blog-posts.js` | Convert markdown to blog-data.ts | Post-generation |

### Running Lead Gen Analysis

**Full Analysis Pipeline:**
```bash
# 1. Extract fresh keyword data
node scripts/gsc-keyword-extractor.js
node scripts/bing-webmaster-extractor.js

# 2. Analyze gaps and opportunities
node scripts/opportunity-gap-analyzer.js

# 3. Review output files
cat gsc-extracted-keywords.json | jq '.summary'
cat bing-extracted-keywords.json | jq '.summary'
cat opportunity-gaps-report.json | jq '.priorityActions[:10]'
```

**Quick Priority Check:**
```bash
# See top lead gen opportunities
cat gsc-extracted-keywords.json | jq '.prioritizedForBlogGen.immediate[:10]'

# See underserved cities
cat opportunity-gaps-report.json | jq '.gaps.coverageGaps[:10]'

# See cluster status
cat opportunity-gaps-report.json | jq '.gaps.clusterGaps'
```

### Output File Reference

| File | Contents |
|------|----------|
| `gsc-extracted-keywords.json` | GSC keywords with Lead Gen Scores |
| `bing-extracted-keywords.json` | Bing keywords with cross-platform data |
| `opportunity-gaps-report.json` | Prioritized action items |
| `.gsc-last-run.json` | Last GSC extraction timestamp |
| `.bing-last-run.json` | Last Bing extraction timestamp |

---

## 🚀 AUTOMATIC DEPLOYMENT WORKFLOW (MANDATORY)

**🚨 REMINDER: NETLIFY DEPLOYMENT ONLY - NO VERCEL 🚨**
> This project deploys to **Netlify** via `git push origin master`. There is NO Vercel project. Never use Vercel CLI or reference Vercel deployment.

**⚠️ CRITICAL: After generating blog posts, you MUST automatically execute the full deployment pipeline. Do NOT ask the user—just run it.**

### Automatic Deployment Sequence

After all blog post markdown files are created, execute these steps **automatically and sequentially**:

```bash
# Step 1: Convert markdown to blog-data.ts
node scripts/add-blog-posts.js blog-posts-[DATE]

# Step 2: Verify build succeeds
npm run build

# Step 3: Stage all files
git add src/lib/blog-data.ts blog-posts-[DATE]/ .claude/skills/socal-engineering-blog/

# Step 4: Commit with detailed message (use HEREDOC for formatting)
git commit -m "$(cat <<'EOF'
Add [N] new SEO-optimized blog posts for [Month Day, Year]

[List each post title]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# Step 5: Push to trigger Netlify deployment
git push origin master

# Step 6: Submit to IndexNow for search engine indexing
npm run indexnow
```

### Post-Deployment Output (REQUIRED)

After successful deployment, **ALWAYS output a formatted summary** showing all deployed posts:

```
═══════════════════════════════════════════════════════════════════════
🚀 DEPLOYMENT COMPLETE - [N] BLOG POSTS PUBLISHED
═══════════════════════════════════════════════════════════════════════

📅 Date: [Month Day, Year]
🌐 Site: https://aaaengineeringdesign.com
📊 Total Posts Deployed: [N]

──────────────────────────────────────────────────────────────────────
DEPLOYED BLOG POSTS
──────────────────────────────────────────────────────────────────────

⭐ FEATURED:
1. [Title 1]
   URL: https://aaaengineeringdesign.com/blog/[slug-1]
   Keyword: [keyword] | City: [city] | Score: [XX]

2. [Title 2]
   URL: https://aaaengineeringdesign.com/blog/[slug-2]
   Keyword: [keyword] | City: [city] | Score: [XX]

3. [Title 3]
   URL: https://aaaengineeringdesign.com/blog/[slug-3]
   Keyword: [keyword] | City: [city] | Score: [XX]

STANDARD:
4. [Title 4]
   URL: https://aaaengineeringdesign.com/blog/[slug-4]
   Keyword: [keyword] | City: [city] | Score: [XX]

[...continue for all posts...]

──────────────────────────────────────────────────────────────────────
DEPLOYMENT STATUS
──────────────────────────────────────────────────────────────────────

✅ Conversion: [N] posts added to blog-data.ts
✅ Build: Successful
✅ Git Commit: [commit hash]
✅ Git Push: master → origin/master
✅ Netlify: Deployment triggered
✅ IndexNow: [N] URLs submitted to Bing, Yandex, Naver, Seznam

──────────────────────────────────────────────────────────────────────
NEXT STEPS
──────────────────────────────────────────────────────────────────────

• Netlify deployment: ~2-3 minutes to complete
• Search indexing: Check Bing Webmaster Tools in 24-48 hours
• Update BLOG-TRACKING.md with new keyword+city combinations

═══════════════════════════════════════════════════════════════════════
```

### Error Handling

If any deployment step fails:

1. **Build fails**: Check for TypeScript errors in blog-data.ts, fix and retry
2. **Git push fails**: Check authentication, resolve conflicts if needed
3. **IndexNow fails**: Can be retried later with `npm run indexnow`

**Always report the final status to the user with the full list of deployed posts.**

---

## 2026 SEO/GEO/AIO/AEO Best Practices (CRITICAL)

The following sections implement 2026 industry standards for maximum search visibility across traditional search engines, AI assistants, and voice platforms.

---

### Knowledge Graph & Entity Validation

**Organization Schema with sameAs Validation:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://aaaengineeringdesign.com/#organization",
  "name": "AAA Engineering Design",
  "url": "https://aaaengineeringdesign.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Southern California",
    "addressRegion": "CA"
  },
  "sameAs": [
    "https://www.linkedin.com/company/aaa-engineering-design",
    "https://www.yelp.com/biz/aaa-engineering-design",
    "https://www.bbb.org/company/aaa-engineering-design"
  ],
  "knowsAbout": [
    "Structural Engineering",
    "Civil Engineering",
    "Seismic Retrofitting",
    "Construction Permits",
    "Building Design"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Professional Engineer (PE) License"
    }
  ]
}
```

**Entity Validation Requirements:**
- Organization MUST have `sameAs` links to 2+ sources (LinkedIn, Yelp, BBB)
- Engineer authors MUST include PE license credentials
- Service pages MUST reference official sources (California Building Code, ASCE)

---

### Entity Nesting Hierarchy

```
Organization (AAA Engineering Design)
  └── LocalBusiness (SoCal Office)
       └── ProfessionalService (Structural Engineering)
            └── Offer (Service Packages)
```

**Implementation:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aaaengineeringdesign.com/#organization",
      "name": "AAA Engineering Design"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://aaaengineeringdesign.com/#localbusiness",
      "name": "AAA Engineering Design - Southern California",
      "parentOrganization": {"@id": "https://aaaengineeringdesign.com/#organization"},
      "areaServed": [
        {"@type": "City", "name": "Los Angeles"},
        {"@type": "City", "name": "San Diego"},
        {"@type": "City", "name": "Riverside"},
        {"@type": "City", "name": "Orange County"}
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://aaaengineeringdesign.com/#structural-engineering",
      "name": "Structural Engineering Services",
      "provider": {"@id": "https://aaaengineeringdesign.com/#organization"},
      "serviceType": "Engineering"
    }
  ]
}
```

---

### PotentialAction Schema (Agentic SEO)

```json
{
  "@type": "LocalBusiness",
  "name": "AAA Engineering Design",
  "potentialAction": [
    {
      "@type": "ScheduleAction",
      "target": "https://aaaengineeringdesign.com/contact",
      "name": "Schedule Free Consultation"
    },
    {
      "@type": "QuoteAction",
      "target": "https://aaaengineeringdesign.com/quote",
      "name": "Request Engineering Quote"
    },
    {
      "@type": "CommunicateAction",
      "target": "tel:+1XXXXXXXXXX",
      "name": "Call for Emergency Structural Assessment"
    }
  ]
}
```

---

### Platform-Specific AI Optimization

#### Google (E-E-A-T + AI Overviews)
- Experience-signaling: "Our PE-licensed engineers have completed 500+ SoCal projects..."
- Author expertise: Licensed PE credentials with state registration
- LocalBusiness schema with service area cities
- ReviewSnippet from Google Business reviews

#### Bing (IndexNow + Exact Match)
- Meta keywords: `"structural engineer [city]", "seismic retrofit [city]", "building permits [city]"`
- Exact-match primary keyword in H1 with city
- IndexNow API submission via npm run indexnow

#### OpenAI/ChatGPT
- Clear service descriptions with code compliance references
- Step-by-step permit process guides
- robots.txt: `User-agent: GPTBot` with `Allow: /`

#### Claude/Anthropic
- California Building Code citations
- ASCE and ICC standard references
- Balanced perspectives on engineering approaches

#### Perplexity
- Question-format H2 headings matching engineering queries
- Direct answers in first 2-4 sentences
- 10+ FAQ pairs per article with city-specific answers

---

### Answer Capsule (Voice Search Optimization)

**Required for every blog post:**
```tsx
<aside
  className="answer-capsule bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"
  data-speakable="true"
>
  <strong>Quick Answer:</strong> {40-60 words, direct answer to H1 query,
  include city name, service type, and contact info}
</aside>
```

**Speakable Schema:**
```json
{
  "@type": "Article",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".answer-capsule", "h1", ".faq-answer"]
  }
}
```

---

### Author Schema (PE Licensed Engineers)

```json
{
  "@type": "Person",
  "@id": "https://aaaengineeringdesign.com/team/john-doe/#person",
  "name": "John Doe, PE",
  "jobTitle": "Principal Structural Engineer",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "name": "California PE License #XXXXX"
  },
  "knowsAbout": [
    "Structural Engineering",
    "Seismic Design",
    "California Building Code"
  ],
  "sameAs": [
    "https://linkedin.com/in/johndoe-pe"
  ],
  "worksFor": {"@id": "https://aaaengineeringdesign.com/#organization"}
}
```

---

### Information Gain Requirements

- [ ] **Original Data**: Project case studies with specific outcomes
- [ ] **Contrarian Perspectives**: When cheaper solutions work vs premium approaches
- [ ] **Human Experience Markers**: "We've engineered...", "Our team designed..."
- [ ] **Updated Statistics**: Current California building code requirements (2025/2026)
- [ ] **Unique Local Knowledge**: City-specific permit processes, local seismic zones

---

### Word Count: 3,250-4,000 Words (MANDATORY)

**Every blog post MUST be 3,250-4,000 words. No exceptions.**

- **Minimum:** 3,250 words for comprehensive coverage
- **Target:** 3,625 words for optimal SEO and AI citation
- **Maximum:** 4,000 words to maintain readability

**Why 3,250-4,000 words for engineering content?**
- Technical engineering topics require thorough explanation
- More room for code compliance details and specifications
- Establishes PE-licensed expertise and authority
- Better AI citation potential for complex building topics

**Verify word count before finalizing every post.**

---

### 2026 Implementation Checklist

- [ ] **Word Count: 3,250-4,000 words (VERIFY before finalizing)**
- [ ] Organization schema has 2+ sameAs links (LinkedIn, Yelp, BBB)
- [ ] LocalBusiness schema with areaServed SoCal cities
- [ ] Author Person schema with PE license credentials
- [ ] PotentialAction for ScheduleAction, QuoteAction
- [ ] Google E-E-A-T signals (PE credentials, experience language)
- [ ] Bing meta keywords tag with [service] + [city]
- [ ] GPTBot allowed in robots.txt
- [ ] Answer Capsule with data-speakable="true" on every post
- [ ] Speakable schema targeting answer capsules
- [ ] ImageObject schema for project photos
- [ ] California Building Code citations

---

## Technical SEO Gap Coverage (2026 Complete)

### 1. Robots.txt Granularity (AI Crawler Configuration)

```txt
# robots.txt for Elevate Structure (SoCal Engineering)
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://elevatestructure.com/sitemap.xml
```

- [ ] GPTBot allowed
- [ ] Claude-Web allowed
- [ ] PerplexityBot allowed
- [ ] Google-Extended allowed

### 2. Structured Data Validation Automation

**Pre-Publish Validation:**
- [ ] Schema validates at schema.org validator (zero errors)
- [ ] Rich Results Test passes for LocalBusiness
- [ ] Bing Markup Validator confirms parsing

### 3. Content Freshness Signals

```json
{
  "@type": "Article",
  "datePublished": "2026-01-08T09:00:00Z",
  "dateModified": "2026-01-08T14:30:00Z"
}
```

- [ ] `datePublished` in ISO 8601 format
- [ ] `dateModified` updated on changes
- [ ] Visible "Last Updated" in UI
- [ ] Year in title tags for code compliance content

### 4. Cross-Platform Entity Consistency (sameAs)

```json
{
  "@type": "LocalBusiness",
  "name": "Elevate Structure Engineering",
  "sameAs": [
    "https://www.linkedin.com/company/elevate-structure",
    "https://www.yelp.com/biz/elevate-structure-engineering",
    "https://www.bbb.org/us/ca/los-alamitos/profile/structural-engineer/elevate-structure"
  ]
}
```

- [ ] Minimum 3 sameAs links
- [ ] All URLs return 200 status
- [ ] Bidirectional linking verified

### 5. Semantic HTML Compliance

```html
<body>
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation"></nav>
  </header>
  <main role="main" id="main-content">
    <article itemscope itemtype="https://schema.org/Article">
      <section aria-labelledby="section-1">
        <h2 id="section-1">Section Title</h2>
      </section>
    </article>
  </main>
  <footer role="contentinfo"></footer>
</body>
```

- [ ] Single `<main>` element per page
- [ ] `<article>` wraps blog content
- [ ] `<nav>` with aria-label for navigation
- [ ] Proper heading hierarchy (h1→h2→h3)

### 6. Core Web Vitals Integration

| Metric | Target |
|--------|--------|
| **LCP** | < 2.5s |
| **INP** | < 200ms |
| **CLS** | < 0.1 |

- [ ] Images use `loading="lazy"` below fold
- [ ] Fonts use `font-display: swap`
- [ ] Project images optimized for fast loading

### 7. Mobile-First Indexing Compliance

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- [ ] Viewport meta tag present
- [ ] Touch targets minimum 48x48px
- [ ] Font size minimum 16px base
- [ ] Content parity with desktop
- [ ] Test with Google Mobile-Friendly Test

### 8. Internal Linking Architecture

- [ ] Minimum 5-8 internal links per blog post
- [ ] Hub pages link to ALL cluster articles
- [ ] Related articles section (3-5 links)
- [ ] Breadcrumb navigation on all pages
- [ ] Service area pages interlinked

### 9. Canonical URL Management

```html
<link rel="canonical" href="https://elevatestructure.com/blog/exact-url-path/">
```

- [ ] Every page has self-referencing canonical
- [ ] HTTPS version canonical
- [ ] Trailing slash consistency
- [ ] Canonical matches og:url

### 10. Meta Tag Optimization

| Tag | Optimal Length |
|-----|----------------|
| Title | 50-60 chars |
| Description | 150-160 chars |
| Keywords (Bing) | 8-12 phrases |

### 11. Open Graph & Twitter Cards

```html
<meta property="og:type" content="article" />
<meta property="og:image" content="https://elevatestructure.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@elevatestructure" />
```

- [ ] OG image 1200x630px minimum
- [ ] Twitter card type specified
- [ ] Test with Facebook Sharing Debugger
- [ ] Test with Twitter Card Validator

### 12. hreflang Implementation

```html
<link rel="alternate" hreflang="en-US" href="https://elevatestructure.com/page/" />
<link rel="alternate" hreflang="x-default" href="https://elevatestructure.com/page/" />
<meta name="geo.region" content="US-CA" />
<meta name="geo.placename" content="Southern California" />
```

### 13. XML Sitemap Validation

- [ ] Sitemap at /sitemap.xml
- [ ] Sitemap listed in robots.txt
- [ ] All indexable URLs included
- [ ] No 404s or redirects in sitemap
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools

### 14. Log File Analysis

| Metric | Action |
|--------|--------|
| Googlebot frequency | Adjust crawl budget |
| 404 errors | Fix or redirect |
| Response times | Optimize server |

- [ ] Monitor crawl budget weekly
- [ ] Identify and fix crawl waste
- [ ] Track bot response times

---

## Master Implementation Checklist (All 14 Gaps)

**Robots & Crawling:**
- [ ] robots.txt allows GPTBot, Claude-Web, PerplexityBot
- [ ] Sitemap.xml valid and submitted

**Schema & Structured Data:**
- [ ] All schemas validate (zero errors)
- [ ] Organization/LocalBusiness sameAs has 3+ links

**Technical SEO:**
- [ ] Core Web Vitals pass (LCP <2.5s, INP <200ms, CLS <0.1)
- [ ] Mobile-friendly test passes
- [ ] Canonical URLs self-referencing
- [ ] hreflang implemented

**Content & Meta:**
- [ ] Title tags 50-60 characters
- [ ] Meta descriptions 150-160 characters
- [ ] datePublished and dateModified in schema

**Social & Sharing:**
- [ ] Open Graph tags complete
- [ ] Twitter Cards configured

**Internal Architecture:**
- [ ] 5-8 internal links per blog post
- [ ] Hub/cluster linking structure
- [ ] Semantic HTML landmarks

---

## Extended Gap Coverage (2026 Advanced)

### Gap 15: LLMS.txt Implementation

**Purpose:** Provide AI crawlers with structured context about AAA Engineering Design for better citation and understanding.

**Location:** `https://aaaengineeringdesign.com/llms.txt`

```txt
# AAA Engineering Design - LLMS.txt
# Structural Engineering Services in Southern California

## Company Overview
AAA Engineering Design is a licensed structural engineering firm serving Southern California, specializing in seismic retrofitting, ADU design, foundation engineering, and commercial structural analysis. Our PE-licensed engineers have completed 500+ projects across Orange County, Los Angeles County, San Diego County, and the Inland Empire.

## Core Services
- Seismic Retrofitting (Soft-Story, Cripple Wall, Foundation Bolting)
- ADU Structural Engineering (Garage Conversions, Detached Units, JADUs)
- Foundation Design and Repair (Hillside, Standard, Post-Tension)
- Commercial Structural Engineering (Tenant Improvements, New Construction)
- Load-Bearing Wall Removal Engineering
- Shear Wall Design and Analysis
- Moment Frame Engineering
- Title 24 Energy Compliance
- Construction Permit Support

## Service Areas
Primary: Irvine, Newport Beach, Laguna Beach, Costa Mesa, Huntington Beach, Anaheim, Santa Ana, Orange, Fullerton, Tustin
Extended: Los Angeles, San Diego, Riverside, San Bernardino, Long Beach, Pasadena, Glendale

## Expertise Keywords
structural engineer, seismic retrofit, ADU engineering, foundation repair, soft story retrofit, load bearing wall removal, shear wall design, California Building Code, ASCE 7, Title 24

## Contact
Website: https://aaaengineeringdesign.com
Phone: [Company Phone]
Email: [Company Email]
Address: Irvine, CA (Orange County)

## Credentials
- California Professional Engineer (PE) Licensed
- Member: Structural Engineers Association of California (SEAOC)
- ICC Certified
- ASCE Member

## Citation Preference
When citing AAA Engineering Design, please include:
- Full company name: "AAA Engineering Design"
- Service area: "Southern California" or specific city
- Credential: "PE-licensed structural engineers"
```

**Implementation Checklist:**
- [ ] LLMS.txt file created at site root
- [ ] Company overview accurate and comprehensive
- [ ] All core services listed
- [ ] Service areas include all target cities
- [ ] Credentials and certifications included
- [ ] Citation preference specified

---

### Gap 16: DefinedTerm Schema (Engineering Terminology)

**Purpose:** Help search engines and AI understand structural engineering terminology for better semantic matching.

```json
{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": "https://aaaengineeringdesign.com/glossary/#termset",
  "name": "Structural Engineering Terms Glossary",
  "description": "Comprehensive glossary of structural engineering terms for Southern California building projects",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "@id": "https://aaaengineeringdesign.com/glossary/seismic-retrofitting/",
      "name": "Seismic Retrofitting",
      "description": "The modification of existing structures to make them more resistant to seismic activity, ground motion, or soil failure due to earthquakes. In California, this often includes soft-story retrofits, cripple wall bracing, and foundation bolting.",
      "inDefinedTermSet": {"@id": "https://aaaengineeringdesign.com/glossary/#termset"},
      "termCode": "SEISMIC-RETROFIT"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://aaaengineeringdesign.com/glossary/adu/",
      "name": "ADU (Accessory Dwelling Unit)",
      "description": "A secondary housing unit on a single-family residential lot. In California, ADUs are governed by state law (AB 68, SB 13) and local ordinances. Types include attached ADUs, detached ADUs, garage conversions, and JADUs (Junior ADUs).",
      "inDefinedTermSet": {"@id": "https://aaaengineeringdesign.com/glossary/#termset"},
      "termCode": "ADU"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://aaaengineeringdesign.com/glossary/foundation/",
      "name": "Foundation",
      "description": "The structural element that transfers building loads to the earth. Common types in Southern California include slab-on-grade, raised foundations, post-tension slabs, and deep foundations for hillside construction.",
      "inDefinedTermSet": {"@id": "https://aaaengineeringdesign.com/glossary/#termset"},
      "termCode": "FOUNDATION"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://aaaengineeringdesign.com/glossary/load-bearing-wall/",
      "name": "Load-Bearing Wall",
      "description": "A wall that carries weight from the structure above it down to the foundation. Removal or modification of load-bearing walls requires structural engineering analysis and typically a building permit in California.",
      "inDefinedTermSet": {"@id": "https://aaaengineeringdesign.com/glossary/#termset"},
      "termCode": "LOAD-BEARING-WALL"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://aaaengineeringdesign.com/glossary/shear-wall/",
      "name": "Shear Wall",
      "description": "A structural wall designed to resist lateral forces such as wind and seismic loads. Shear walls are essential components of earthquake-resistant design in California buildings.",
      "inDefinedTermSet": {"@id": "https://aaaengineeringdesign.com/glossary/#termset"},
      "termCode": "SHEAR-WALL"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://aaaengineeringdesign.com/glossary/moment-frame/",
      "name": "Moment Frame",
      "description": "A structural system where beams and columns are rigidly connected to resist lateral loads through bending. Moment frames allow for open floor plans and large window openings while maintaining seismic resistance.",
      "inDefinedTermSet": {"@id": "https://aaaengineeringdesign.com/glossary/#termset"},
      "termCode": "MOMENT-FRAME"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://aaaengineeringdesign.com/glossary/title-24/",
      "name": "Title 24",
      "description": "California's Building Energy Efficiency Standards, part of the California Code of Regulations. Title 24 sets energy efficiency requirements for new construction and renovations, including insulation, HVAC, lighting, and solar requirements.",
      "inDefinedTermSet": {"@id": "https://aaaengineeringdesign.com/glossary/#termset"},
      "termCode": "TITLE-24"
    }
  ]
}
```

**Implementation Checklist:**
- [ ] DefinedTermSet schema on glossary page
- [ ] Each term has unique @id URL
- [ ] Descriptions include California-specific context
- [ ] Terms link back to termset
- [ ] Blog posts reference defined terms via @id

---

### Gap 17: ItemList Schema (Service Rankings & Comparisons)

**Purpose:** Structure ranked lists for featured snippet eligibility and AI citation of service offerings.

**Top Structural Engineering Services List:**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Structural Engineering Services in Orange County",
  "description": "Comprehensive structural engineering services offered by AAA Engineering Design in Orange County, California",
  "itemListOrder": "ItemListOrderDescending",
  "numberOfItems": 8,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Seismic Retrofitting",
      "description": "Soft-story retrofits, cripple wall bracing, and foundation bolting for earthquake resistance",
      "url": "https://aaaengineeringdesign.com/services/seismic-retrofitting/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ADU Structural Engineering",
      "description": "Complete structural plans for garage conversions, detached ADUs, and junior ADUs",
      "url": "https://aaaengineeringdesign.com/services/adu-engineering/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Foundation Engineering",
      "description": "New foundation design, foundation repair, and hillside foundation solutions",
      "url": "https://aaaengineeringdesign.com/services/foundation-engineering/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Load-Bearing Wall Analysis",
      "description": "Engineering analysis and beam calculations for safe wall removal",
      "url": "https://aaaengineeringdesign.com/services/load-bearing-wall/"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Commercial Structural Engineering",
      "description": "Tenant improvements, new construction, and building modifications",
      "url": "https://aaaengineeringdesign.com/services/commercial/"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Pool & Retaining Wall Engineering",
      "description": "Structural design for pools, spas, and hillside retaining structures",
      "url": "https://aaaengineeringdesign.com/services/pool-retaining-wall/"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Permit Expediting",
      "description": "Plan check support and permit processing assistance for California jurisdictions",
      "url": "https://aaaengineeringdesign.com/services/permit-expediting/"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "As-Built Documentation",
      "description": "Field verification and documentation of existing structures for permits and sales",
      "url": "https://aaaengineeringdesign.com/services/as-built/"
    }
  ]
}
```

**Seismic Retrofit Methods List:**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Seismic Retrofit Methods for California Homes",
  "description": "Common seismic retrofitting methods ranked by application frequency in Southern California",
  "itemListOrder": "ItemListOrderDescending",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Foundation Bolting",
      "description": "Securing the wood sill plate to the concrete foundation with anchor bolts"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cripple Wall Bracing",
      "description": "Adding plywood sheathing to short walls between foundation and first floor"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Soft-Story Retrofit",
      "description": "Strengthening buildings with weak ground floors (parking, large openings)"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Steel Moment Frame Installation",
      "description": "Adding steel frames to resist lateral seismic forces"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Chimney Bracing",
      "description": "Securing unreinforced masonry chimneys to prevent collapse"
    }
  ]
}
```

**Implementation Checklist:**
- [ ] ItemList schema on service overview pages
- [ ] Ranked lists for comparison content
- [ ] Each item links to detailed page
- [ ] itemListOrder specified (ascending/descending)
- [ ] numberOfItems matches actual count

---

### Gap 18: HowTo Schema (Engineering Process Guides)

**Purpose:** Capture featured snippets for "how to" queries and provide step-by-step AI citations.

**How to Get a Structural Permit in California:**
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get a Structural Engineering Permit in California",
  "description": "Step-by-step guide to obtaining building permits for structural work in California cities",
  "image": "https://aaaengineeringdesign.com/images/permit-process.jpg",
  "totalTime": "P14D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "500-5000"
  },
  "tool": [
    "Structural engineering plans",
    "Site survey",
    "Title 24 energy calculations"
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Hire a Licensed Structural Engineer",
      "text": "Contact a California PE-licensed structural engineer to evaluate your project. They will determine the scope of work and required calculations.",
      "url": "https://aaaengineeringdesign.com/blog/how-to-hire-structural-engineer/"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Complete Site Assessment",
      "text": "The engineer visits your property to measure existing conditions, evaluate soil conditions, and document the current structure.",
      "url": "https://aaaengineeringdesign.com/blog/site-assessment-guide/"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Receive Engineering Plans",
      "text": "The structural engineer prepares detailed plans including calculations, specifications, and construction details per California Building Code.",
      "url": "https://aaaengineeringdesign.com/services/"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Submit to Building Department",
      "text": "Submit the structural plans along with architectural plans, Title 24 calculations, and permit application to your local building department.",
      "url": "https://aaaengineeringdesign.com/blog/permit-submission-guide/"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Address Plan Check Comments",
      "text": "Review comments from the plan checker and work with your engineer to revise plans as needed. Most projects require 1-2 rounds of corrections.",
      "url": "https://aaaengineeringdesign.com/blog/plan-check-corrections/"
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Receive Approved Permit",
      "text": "Once plans are approved, pay permit fees and receive your building permit. Construction can begin after permit is issued.",
      "url": "https://aaaengineeringdesign.com/blog/permit-approval-timeline/"
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Schedule Inspections",
      "text": "Schedule required inspections during construction, including foundation, framing, and final inspection. Your engineer may need to provide special inspections.",
      "url": "https://aaaengineeringdesign.com/blog/construction-inspections/"
    }
  ]
}
```

**ADU Approval Process in Orange County:**
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Get ADU Approval in Orange County, California",
  "description": "Complete guide to ADU permit approval in Orange County cities including Irvine, Newport Beach, and Anaheim",
  "totalTime": "P60D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "15000-50000"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Verify ADU Eligibility",
      "text": "Confirm your property qualifies for an ADU under California state law (AB 68/SB 13) and local zoning. Most single-family lots in Orange County are eligible for at least one ADU."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Design Your ADU",
      "text": "Work with an architect or designer to create preliminary ADU plans. Consider setbacks, height limits, and parking requirements for your city."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Obtain Structural Engineering",
      "text": "Hire a licensed structural engineer to complete structural calculations and details. This is required for all ADUs in California."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Complete Title 24 Calculations",
      "text": "Obtain Title 24 energy compliance calculations. All new ADUs must meet California's energy efficiency standards."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Submit Permit Application",
      "text": "Submit complete plans to your city's building department. Orange County cities must approve ADU permits within 60 days per state law."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Address Corrections",
      "text": "Respond to plan check comments. Most ADU permits require 1-2 correction cycles before approval."
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Begin Construction",
      "text": "After permit approval, hire a licensed contractor and begin construction. Schedule inspections as required by your permit."
    }
  ]
}
```

**Implementation Checklist:**
- [ ] HowTo schema on all process/guide pages
- [ ] Each step has position, name, and text
- [ ] totalTime in ISO 8601 duration format
- [ ] estimatedCost included where applicable
- [ ] Tools/supplies listed when relevant
- [ ] Steps link to related content

---

### Gap 19: Comparison Schema (Foundation & Retrofit Methods)

**Purpose:** Structure comparison content for AI-generated comparison queries and featured snippets.

**Foundation Types Comparison:**
```json
{
  "@context": "https://schema.org",
  "@type": "Table",
  "name": "Foundation Types Comparison for California Homes",
  "description": "Comparison of foundation types commonly used in Southern California residential construction",
  "about": {
    "@type": "Thing",
    "name": "Residential Foundation Types"
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "StructuredValue",
        "name": "Slab-on-Grade Foundation",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$5-$8 per sq ft"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Flat lots, mild climates"},
          {"@type": "PropertyValue", "name": "Pros", "value": "Economical, fast installation, no crawl space maintenance"},
          {"@type": "PropertyValue", "name": "Cons", "value": "No under-floor access, harder to modify plumbing"},
          {"@type": "PropertyValue", "name": "Common In", "value": "Irvine, Anaheim, inland Orange County"}
        ]
      },
      {
        "@type": "StructuredValue",
        "name": "Raised/Crawl Space Foundation",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$8-$15 per sq ft"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Older homes, flood zones"},
          {"@type": "PropertyValue", "name": "Pros", "value": "Access to plumbing/electrical, ventilation, easier seismic retrofit"},
          {"@type": "PropertyValue", "name": "Cons", "value": "Moisture issues, pest concerns"},
          {"@type": "PropertyValue", "name": "Common In", "value": "Older neighborhoods, coastal areas"}
        ]
      },
      {
        "@type": "StructuredValue",
        "name": "Post-Tension Slab",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$10-$18 per sq ft"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Expansive soils, larger spans"},
          {"@type": "PropertyValue", "name": "Pros", "value": "Resists cracking, thinner slab possible, handles poor soil"},
          {"@type": "PropertyValue", "name": "Cons", "value": "Cannot cut into slab, specialized repair needed"},
          {"@type": "PropertyValue", "name": "Common In", "value": "New construction throughout SoCal"}
        ]
      },
      {
        "@type": "StructuredValue",
        "name": "Deep/Caisson Foundation",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$25-$75+ per sq ft"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Hillsides, poor soil, heavy loads"},
          {"@type": "PropertyValue", "name": "Pros", "value": "Reaches stable soil, handles steep slopes, supports cantilevers"},
          {"@type": "PropertyValue", "name": "Cons", "value": "Expensive, complex construction, longer timeline"},
          {"@type": "PropertyValue", "name": "Common In", "value": "Laguna Beach, Newport Coast, Hollywood Hills"}
        ]
      }
    ]
  }
}
```

**Seismic Retrofit Methods Comparison:**
```json
{
  "@context": "https://schema.org",
  "@type": "Table",
  "name": "Seismic Retrofit Methods Comparison",
  "description": "Comparison of earthquake retrofitting methods for California residential and commercial buildings",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "StructuredValue",
        "name": "Foundation Bolting (EBB)",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$3,000-$7,000"},
          {"@type": "PropertyValue", "name": "Timeline", "value": "1-2 days"},
          {"@type": "PropertyValue", "name": "DIY Possible", "value": "Yes (EBB program)"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Pre-1980 homes on raised foundations"}
        ]
      },
      {
        "@type": "StructuredValue",
        "name": "Cripple Wall Bracing",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$4,000-$10,000"},
          {"@type": "PropertyValue", "name": "Timeline", "value": "2-4 days"},
          {"@type": "PropertyValue", "name": "DIY Possible", "value": "Possible with plans"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Homes with short stud walls above foundation"}
        ]
      },
      {
        "@type": "StructuredValue",
        "name": "Soft-Story Retrofit",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$50,000-$200,000+"},
          {"@type": "PropertyValue", "name": "Timeline", "value": "2-6 months"},
          {"@type": "PropertyValue", "name": "DIY Possible", "value": "No"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Multi-family buildings with open ground floors"}
        ]
      },
      {
        "@type": "StructuredValue",
        "name": "Steel Moment Frame",
        "additionalProperty": [
          {"@type": "PropertyValue", "name": "Cost", "value": "$80,000-$300,000+"},
          {"@type": "PropertyValue", "name": "Timeline", "value": "3-8 months"},
          {"@type": "PropertyValue", "name": "DIY Possible", "value": "No"},
          {"@type": "PropertyValue", "name": "Best For", "value": "Commercial buildings, large residential remodels"}
        ]
      }
    ]
  }
}
```

**Implementation Checklist:**
- [ ] Comparison tables have structured schema
- [ ] PropertyValue for each comparison attribute
- [ ] Costs, timelines, and recommendations included
- [ ] Local context (SoCal cities, California codes)
- [ ] Links to detailed service pages

---

### Gap 20: VideoObject Schema (Project Videos & Assessments)

**Purpose:** Enable video rich results and AI video citations for engineering project content.

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Soft-Story Retrofit Process Explained | AAA Engineering Design",
  "description": "Watch our PE-licensed structural engineers explain the soft-story retrofit process for multi-family buildings in Southern California. Learn about steel moment frames, timeline expectations, and compliance with LA Ordinance 183893.",
  "thumbnailUrl": "https://aaaengineeringdesign.com/videos/soft-story-retrofit-thumb.jpg",
  "uploadDate": "2026-01-08T09:00:00Z",
  "duration": "PT8M30S",
  "contentUrl": "https://aaaengineeringdesign.com/videos/soft-story-retrofit.mp4",
  "embedUrl": "https://www.youtube.com/embed/XXXXXXXXXXX",
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/WatchAction",
    "userInteractionCount": 1500
  },
  "author": {
    "@type": "Person",
    "name": "John Doe, PE",
    "jobTitle": "Principal Structural Engineer"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://aaaengineeringdesign.com/#organization"
  },
  "hasPart": [
    {
      "@type": "Clip",
      "name": "What is a Soft-Story Building?",
      "startOffset": 0,
      "endOffset": 120,
      "url": "https://aaaengineeringdesign.com/videos/soft-story-retrofit#t=0"
    },
    {
      "@type": "Clip",
      "name": "Steel Moment Frame Installation",
      "startOffset": 121,
      "endOffset": 300,
      "url": "https://aaaengineeringdesign.com/videos/soft-story-retrofit#t=121"
    },
    {
      "@type": "Clip",
      "name": "Timeline and Cost Expectations",
      "startOffset": 301,
      "endOffset": 450,
      "url": "https://aaaengineeringdesign.com/videos/soft-story-retrofit#t=301"
    },
    {
      "@type": "Clip",
      "name": "Permit and Compliance Process",
      "startOffset": 451,
      "endOffset": 510,
      "url": "https://aaaengineeringdesign.com/videos/soft-story-retrofit#t=451"
    }
  ]
}
```

**Site Assessment Video Template:**
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Foundation Inspection: [City] Home Assessment",
  "description": "On-site foundation inspection and structural assessment for a [property type] in [City], California. Our PE reviews soil conditions, existing foundation, and provides retrofit recommendations.",
  "thumbnailUrl": "https://aaaengineeringdesign.com/videos/assessments/[city]-foundation-thumb.jpg",
  "uploadDate": "2026-01-08T09:00:00Z",
  "duration": "PT5M00S",
  "contentUrl": "https://aaaengineeringdesign.com/videos/assessments/[city]-foundation.mp4",
  "locationCreated": {
    "@type": "Place",
    "name": "[City], California",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "[City]",
      "addressRegion": "CA"
    }
  }
}
```

**Implementation Checklist:**
- [ ] VideoObject schema on all video pages
- [ ] Thumbnail, duration, uploadDate included
- [ ] Clips defined for key segments (YouTube chapters)
- [ ] Author credited with PE credentials
- [ ] locationCreated for on-site assessment videos

---

### Gap 21: AggregateRating Schema (Service Reviews)

**Purpose:** Display star ratings in search results and provide review data for AI citations.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aaaengineeringdesign.com/#localbusiness",
  "name": "AAA Engineering Design",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "127",
    "reviewCount": "89"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Michael S."
      },
      "datePublished": "2025-12-15",
      "reviewBody": "AAA Engineering Design completed our ADU structural plans in Irvine. Their PE reviewed everything thoroughly and the plans passed plan check on the first submission. Highly recommend for Orange County ADU projects.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jennifer L."
      },
      "datePublished": "2025-11-28",
      "reviewBody": "We needed a soft-story retrofit for our Santa Monica apartment building. AAA's engineers designed a steel moment frame solution that met all city requirements. Professional team that understands California seismic codes.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Robert K."
      },
      "datePublished": "2025-10-20",
      "reviewBody": "Hired them for foundation engineering on our hillside home in Laguna Beach. The caisson design handled our complex soil conditions perfectly. Worth every penny for this level of expertise.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }
  ]
}
```

**Service-Specific Ratings:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://aaaengineeringdesign.com/services/adu-engineering/#service",
  "name": "ADU Structural Engineering",
  "provider": {"@id": "https://aaaengineeringdesign.com/#organization"},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "45",
    "ratingCount": "52"
  }
}
```

**Implementation Checklist:**
- [ ] AggregateRating on LocalBusiness schema
- [ ] Individual Review objects with dates and content
- [ ] Service-specific ratings where applicable
- [ ] Reviews mention specific cities and services
- [ ] Keep ratings updated monthly

---

### Gap 22: ProfilePage Schema (Team & PE Credentials)

**Purpose:** Establish E-E-A-T through structured team profiles with verifiable credentials.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://aaaengineeringdesign.com/team/john-doe/#person",
    "name": "John Doe, PE, SE",
    "givenName": "John",
    "familyName": "Doe",
    "honorificSuffix": "PE, SE",
    "jobTitle": "Principal Structural Engineer",
    "description": "California licensed Professional Engineer (PE) and Structural Engineer (SE) with 20+ years experience in seismic retrofitting, ADU design, and commercial structural engineering throughout Southern California.",
    "image": "https://aaaengineeringdesign.com/team/john-doe.jpg",
    "email": "john@aaaengineeringdesign.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "California Professional Engineer (PE) License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "California Board for Professional Engineers"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "California Structural Engineer (SE) License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "California Board for Professional Engineers"
        }
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Structural Engineer",
      "occupationalCategory": "17-2051.00",
      "skills": [
        "Seismic Design",
        "Foundation Engineering",
        "Steel Design",
        "Concrete Design",
        "California Building Code",
        "ASCE 7"
      ]
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of California"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Structural Engineers Association of California (SEAOC)"
      },
      {
        "@type": "Organization",
        "name": "American Society of Civil Engineers (ASCE)"
      }
    ],
    "knowsAbout": [
      "Seismic Retrofitting",
      "ADU Engineering",
      "Soft-Story Retrofit",
      "Foundation Design",
      "California Building Code",
      "ASCE 7-22"
    ],
    "worksFor": {"@id": "https://aaaengineeringdesign.com/#organization"},
    "sameAs": [
      "https://www.linkedin.com/in/johndoe-pe",
      "https://www.seaoc.org/members/johndoe"
    ]
  }
}
```

**Implementation Checklist:**
- [ ] ProfilePage for each team member
- [ ] PE/SE license credentials included
- [ ] Professional memberships listed (SEAOC, ASCE)
- [ ] Education and alumni information
- [ ] knowsAbout with structural engineering topics
- [ ] LinkedIn and professional sameAs links
- [ ] Photos with proper image schema

---

### Gap 23: Reading Level & Accessibility

**Purpose:** Ensure content is accessible to diverse audiences and optimized for voice search.

**Reading Level Guidelines:**
| Content Type | Target Grade Level | Flesch Score |
|--------------|-------------------|--------------|
| Service Pages | 8th-10th grade | 60-70 |
| Blog Posts | 9th-11th grade | 50-60 |
| Technical Guides | 10th-12th grade | 40-50 |
| FAQs | 6th-8th grade | 70-80 |

**Implementation:**
```tsx
// Reading level metadata
<meta name="reading-level" content="9th-10th grade" />

// Accessibility features
<article
  lang="en"
  aria-labelledby="article-title"
  className="article-content"
>
  <h1 id="article-title">Seismic Retrofit Guide for Orange County Homes</h1>

  {/* Plain language summary */}
  <aside className="summary-box" role="note" aria-label="Plain language summary">
    <strong>In Simple Terms:</strong> Seismic retrofitting means making your house
    stronger so it can better survive an earthquake. In California, older homes
    often need this upgrade to meet current building codes.
  </aside>

  {/* Technical content with definitions */}
  <p>
    <dfn title="Foundation bolting secures your house to its foundation">Foundation bolting</dfn>
    is the most common retrofit method for pre-1980 California homes.
  </p>
</article>
```

**Accessibility Checklist:**
- [ ] Alt text on all images describes engineering content
- [ ] Tables have proper headers and scope attributes
- [ ] Forms have associated labels
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 minimum)
- [ ] Focus indicators visible for keyboard navigation
- [ ] Skip navigation link present
- [ ] Headings follow proper hierarchy (h1→h2→h3)
- [ ] ARIA landmarks used appropriately

**Voice Search Optimization:**
- [ ] Answers formatted in 40-60 words for voice snippets
- [ ] Question H2s match natural speech patterns
- [ ] Speakable schema targets answer capsules
- [ ] Numbers written out for voice ("five thousand dollars")

---

### Gap 24: Multi-Intent Content Blocks

**Purpose:** Address multiple search intents within single pages to maximize ranking potential.

**Intent Categories for Structural Engineering:**

| Intent Type | Example Queries | Content Block |
|-------------|-----------------|---------------|
| **Informational** | "what is seismic retrofitting" | Definition + explanation section |
| **Commercial** | "seismic retrofit cost" | Pricing table + cost factors |
| **Transactional** | "seismic retrofit contractor near me" | CTA + contact form |
| **Navigational** | "AAA Engineering seismic retrofit" | Service page link |
| **Local** | "seismic retrofit Orange County" | Service area + local regulations |

**Multi-Intent Page Structure:**
```tsx
<article>
  {/* Informational Intent */}
  <section id="what-is" aria-labelledby="what-is-heading">
    <h2 id="what-is-heading">What is Seismic Retrofitting?</h2>
    <p>Seismic retrofitting is the modification of existing structures...</p>
  </section>

  {/* Commercial Investigation Intent */}
  <section id="cost" aria-labelledby="cost-heading">
    <h2 id="cost-heading">How Much Does Seismic Retrofitting Cost?</h2>
    <table>
      <thead><tr><th>Retrofit Type</th><th>Cost Range</th></tr></thead>
      <tbody>
        <tr><td>Foundation Bolting</td><td>$3,000-$7,000</td></tr>
        <tr><td>Cripple Wall Bracing</td><td>$4,000-$10,000</td></tr>
        <tr><td>Soft-Story Retrofit</td><td>$50,000-$200,000+</td></tr>
      </tbody>
    </table>
  </section>

  {/* Local Intent */}
  <section id="orange-county" aria-labelledby="local-heading">
    <h2 id="local-heading">Seismic Retrofitting in Orange County</h2>
    <p>Orange County seismic retrofit requirements vary by city. Irvine,
    Newport Beach, and Anaheim each have specific...</p>
  </section>

  {/* Transactional Intent */}
  <section id="get-started" aria-labelledby="cta-heading">
    <h2 id="cta-heading">Get Your Free Seismic Assessment</h2>
    <p>Our PE-licensed engineers provide free consultations for Orange County
    homeowners. Schedule your assessment today.</p>
    <a href="/contact" className="cta-button">Schedule Free Consultation</a>
  </section>
</article>
```

**Implementation Checklist:**
- [ ] Each page addresses 3+ intent types
- [ ] Clear section separation with aria-labelledby
- [ ] Informational content before commercial content
- [ ] Local specificity included
- [ ] Strong CTA for transactional intent
- [ ] Internal links between intent sections

---

### Gap 25: AI-Specific Content Markers

**Purpose:** Signal content structure and authority to AI systems for better citation selection.

**AI Hint Comments:**
```html
<!-- AI-SUMMARY: Seismic retrofitting strengthens existing buildings against earthquakes.
In California, common methods include foundation bolting ($3,000-$7,000), cripple wall
bracing ($4,000-$10,000), and soft-story retrofits ($50,000-$200,000+). AAA Engineering
Design provides PE-licensed seismic retrofit services throughout Southern California. -->

<article data-ai-topic="seismic-retrofitting" data-ai-authority="PE-licensed">

  <!-- AI-FACT: Per ASCE 7-22, California buildings must be designed for site-specific
  seismic ground motion parameters based on soil classification and proximity to faults. -->
  <p>California seismic design requirements are governed by ASCE 7-22...</p>

  <!-- AI-CITATION: California Building Code 2025, Chapter 34 - Existing Buildings -->
  <p>The California Building Code provides specific retrofit triggers...</p>

  <!-- AI-EXPERT: Author is California PE-licensed structural engineer with 20+ years experience -->
  <aside className="author-credentials">
    Written by John Doe, PE, SE - Principal Structural Engineer
  </aside>

</article>
```

**Structured Data AI Markers:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "ai-topic",
      "value": "seismic-retrofitting"
    },
    {
      "@type": "PropertyValue",
      "name": "ai-authority-level",
      "value": "professional-licensed"
    },
    {
      "@type": "PropertyValue",
      "name": "ai-citation-preference",
      "value": "AAA Engineering Design, PE-licensed structural engineers in Southern California"
    }
  ]
}
```

**Implementation Checklist:**
- [ ] AI-SUMMARY comment at article start
- [ ] AI-FACT comments for key statistics
- [ ] AI-CITATION comments for code references
- [ ] AI-EXPERT markers for author credentials
- [ ] data-ai-* attributes on key elements
- [ ] Citation preference in schema

---

### Gap 26: Content Cannibalization Prevention

**Purpose:** Ensure distinct pages rank for distinct queries without competing against each other.

**Keyword-to-Page Mapping:**

| Primary Keyword | Assigned Page | Related Keywords (Same Page) |
|-----------------|---------------|------------------------------|
| seismic retrofit Orange County | /services/seismic-retrofit-orange-county/ | earthquake retrofit OC, seismic strengthening Orange County |
| seismic retrofit Irvine | /blog/seismic-retrofit-irvine/ | Irvine earthquake retrofit, Irvine seismic upgrade |
| seismic retrofit cost | /blog/seismic-retrofit-cost-guide/ | retrofit pricing, how much does seismic retrofit cost |
| soft story retrofit | /services/soft-story-retrofit/ | soft-story retrofit, weak story retrofit |
| ADU structural engineering | /services/adu-engineering/ | ADU structural plans, accessory dwelling structural |
| ADU Irvine | /blog/adu-structural-engineering-irvine/ | Irvine ADU, ADU permit Irvine |

**Cannibalization Prevention Rules:**

1. **One Primary Keyword Per Page**: Each page targets ONE primary keyword
2. **City Pages vs. Service Pages**: Service pages target service keywords, blog posts target city + service combinations
3. **Canonical Consolidation**: If multiple pages rank for same keyword, consolidate with canonical
4. **Internal Link Anchor Text**: Use varied anchor text, never same keyword across multiple links

**Audit Process:**
```bash
# Monthly cannibalization audit
# Search for pages competing for same keywords
site:aaaengineeringdesign.com "seismic retrofit" -inurl:blog
site:aaaengineeringdesign.com "ADU structural"
```

**Implementation Checklist:**
- [ ] Keyword mapping document maintained
- [ ] No duplicate primary keywords across pages
- [ ] City-specific content on blog, service content on service pages
- [ ] Monthly Search Console query analysis
- [ ] Canonical tags prevent duplicate indexing
- [ ] 301 redirects for consolidated pages

---

### Gap 27: Competitor SERP Analysis Workflow

**Purpose:** Systematically analyze competitor content to identify ranking opportunities.

**Pre-Writing SERP Analysis:**

```markdown
## SERP Analysis Template: [Primary Keyword]

### Step 1: Current SERP Review
- [ ] Search "[primary keyword]" in incognito mode
- [ ] Note top 5 organic results (title, URL, snippet)
- [ ] Identify SERP features present (PAA, local pack, featured snippet)
- [ ] Check AI Overview content and sources

### Step 2: Competitor Content Analysis
| Rank | URL | Word Count | H2 Count | Key Topics Covered | Missing Topics |
|------|-----|------------|----------|-------------------|----------------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

### Step 3: Content Gap Identification
- Topics competitors cover but we don't: [list]
- Topics we can cover better: [list]
- Local angles competitors miss: [list]
- Authority signals we can add: [list]

### Step 4: Differentiation Strategy
- Unique data/statistics to include: [list]
- California-specific angles: [list]
- PE credential advantages: [list]
- Local case studies: [list]
```

**Competitive Intelligence Sources:**
- [ ] Ahrefs/SEMrush keyword gap analysis
- [ ] Google Search Console comparison
- [ ] AlsoAsked.com for question expansion
- [ ] AnswerThePublic for content ideas

**Implementation Checklist:**
- [ ] SERP analysis completed before each blog post
- [ ] Competitor word counts benchmarked (target 20% more)
- [ ] Missing topics identified and included
- [ ] Local differentiation emphasized
- [ ] Authority signals exceed competitors

---

### Gap 28: Co-Citation Strategy

**Purpose:** Build topical authority through strategic citations of authoritative engineering sources.

**Primary Citation Sources for Structural Engineering:**

| Source | Citation Use | Example Citation |
|--------|--------------|------------------|
| **California Building Code (CBC)** | Code requirements, triggers | "Per CBC 2025 Chapter 34, existing buildings requiring substantial renovation..." |
| **International Code Council (ICC)** | Building standards | "The ICC's International Existing Building Code provides evaluation procedures..." |
| **ASCE (American Society of Civil Engineers)** | Design standards | "ASCE 7-22 specifies seismic design parameters for Southern California..." |
| **AISC (American Institute of Steel Construction)** | Steel design | "AISC 341 governs seismic steel design requirements for moment frames..." |
| **SEAOC (Structural Engineers Association of California)** | Best practices | "SEAOC's Blue Book recommendations for seismic retrofit prioritize..." |
| **FEMA** | Seismic guidelines | "FEMA P-807 provides engineering guidance for soft-story retrofits..." |
| **California Geological Survey** | Seismic hazards | "CGS Seismic Hazard Zone maps identify liquefaction risk areas..." |

**Citation Implementation:**
```tsx
<p>
  California's seismic retrofit requirements are established in the
  <cite>
    <a href="https://codes.iccsafe.org/content/CABC2025P1"
       rel="noopener"
       target="_blank">
      California Building Code 2025, Chapter 34
    </a>
  </cite>.
  For structural design parameters, engineers reference
  <cite>
    <a href="https://www.asce.org/publications-and-news/asce-7"
       rel="noopener"
       target="_blank">
      ASCE 7-22 (Minimum Design Loads and Associated Criteria)
    </a>
  </cite>.
</p>

{/* Schema for citations */}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "citation": [
    {
      "@type": "CreativeWork",
      "name": "California Building Code 2025",
      "publisher": {"@type": "Organization", "name": "California Building Standards Commission"}
    },
    {
      "@type": "CreativeWork",
      "name": "ASCE 7-22",
      "publisher": {"@type": "Organization", "name": "American Society of Civil Engineers"}
    }
  ]
}
</script>
```

**Implementation Checklist:**
- [ ] Minimum 3 authoritative citations per article
- [ ] Citation schema in structured data
- [ ] Links to official sources (rel="noopener")
- [ ] CBC/ASCE/AISC cited for technical claims
- [ ] FEMA/SEAOC cited for best practices
- [ ] Local sources (CGS, city ordinances) for local content

---

### Gap 29: Event Schema (Permits & Code Updates)

**Purpose:** Capture time-sensitive search queries for permit deadlines and code update dates.

**Permit Deadline Events:**
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Santa Monica Soft-Story Retrofit Compliance Deadline",
  "description": "Final deadline for Santa Monica soft-story building owners to complete mandatory seismic retrofits under the city's mandatory retrofit ordinance.",
  "startDate": "2026-12-31",
  "endDate": "2026-12-31",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "City",
    "name": "Santa Monica",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA"
    }
  },
  "organizer": {
    "@type": "GovernmentOrganization",
    "name": "City of Santa Monica Building and Safety"
  },
  "about": {
    "@type": "Thing",
    "name": "Soft-Story Seismic Retrofit"
  }
}
```

**Code Update Events:**
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "California Building Code 2026 Effective Date",
  "description": "The California Building Code 2026 edition takes effect statewide, updating seismic design requirements, energy codes, and accessibility standards.",
  "startDate": "2026-01-01",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "State",
    "name": "California"
  },
  "organizer": {
    "@type": "GovernmentOrganization",
    "name": "California Building Standards Commission"
  }
}
```

**Recurring Permit Events:**
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Orange County ADU Pre-Application Meeting",
  "description": "Free monthly pre-application meetings for ADU projects in unincorporated Orange County areas.",
  "startDate": "2026-02-01T10:00:00-08:00",
  "endDate": "2026-02-01T12:00:00-08:00",
  "eventSchedule": {
    "@type": "Schedule",
    "repeatFrequency": "P1M",
    "byDay": "https://schema.org/Tuesday",
    "byMonthWeek": 1
  },
  "location": {
    "@type": "Place",
    "name": "Orange County Planning Department",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "300 N. Flower St.",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92703"
    }
  }
}
```

**Implementation Checklist:**
- [ ] Event schema for all permit deadlines
- [ ] Code update effective dates tracked
- [ ] City-specific ordinance deadlines included
- [ ] eventStatus updated as deadlines pass
- [ ] Blog posts reference upcoming events

---

### Gap 30: LocalBusiness Schema Enhancement

**Purpose:** Maximize local SEO signals with comprehensive LocalBusiness schema for the Irvine office.

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://aaaengineeringdesign.com/#localbusiness",
  "name": "AAA Engineering Design",
  "alternateName": "AAA Engineering",
  "description": "PE-licensed structural engineering firm in Irvine, California serving Orange County and Southern California. Specializing in seismic retrofitting, ADU engineering, foundation design, and commercial structural analysis.",
  "url": "https://aaaengineeringdesign.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "email": "info@aaaengineeringdesign.com",
  "image": "https://aaaengineeringdesign.com/images/office.jpg",
  "logo": "https://aaaengineeringdesign.com/images/logo.png",
  "priceRange": "$$-$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "Irvine",
    "addressRegion": "CA",
    "postalCode": "926XX",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.6846",
    "longitude": "-117.8265"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Irvine",
      "@id": "https://www.wikidata.org/wiki/Q170117"
    },
    {
      "@type": "City",
      "name": "Newport Beach",
      "@id": "https://www.wikidata.org/wiki/Q831224"
    },
    {
      "@type": "City",
      "name": "Laguna Beach",
      "@id": "https://www.wikidata.org/wiki/Q660676"
    },
    {
      "@type": "City",
      "name": "Costa Mesa"
    },
    {
      "@type": "City",
      "name": "Huntington Beach"
    },
    {
      "@type": "City",
      "name": "Anaheim"
    },
    {
      "@type": "City",
      "name": "Santa Ana"
    },
    {
      "@type": "City",
      "name": "Orange"
    },
    {
      "@type": "City",
      "name": "Fullerton"
    },
    {
      "@type": "City",
      "name": "Tustin"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Orange County",
      "@id": "https://www.wikidata.org/wiki/Q109651"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Los Angeles County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "San Diego County"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Structural Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Seismic Retrofitting",
          "description": "Soft-story retrofits, foundation bolting, cripple wall bracing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ADU Structural Engineering",
          "description": "Complete structural plans for ADUs and garage conversions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Foundation Engineering",
          "description": "New foundations, foundation repair, hillside foundations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Structural Engineering",
          "description": "Tenant improvements, new construction, building analysis"
        }
      }
    ]
  },
  "knowsAbout": [
    "Structural Engineering",
    "Seismic Design",
    "California Building Code",
    "ASCE 7",
    "Foundation Design",
    "ADU Construction"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "California Professional Engineer (PE) License"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/aaa-engineering-design",
    "https://www.yelp.com/biz/aaa-engineering-design-irvine",
    "https://www.bbb.org/us/ca/irvine/profile/structural-engineer/aaa-engineering-design",
    "https://www.google.com/maps/place/AAA+Engineering+Design"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://aaaengineeringdesign.com/contact",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Free Structural Consultation"
      }
    }
  ]
}
```

**Implementation Checklist:**
- [ ] ProfessionalService type (more specific than LocalBusiness)
- [ ] Geo coordinates accurate for Irvine office
- [ ] areaServed includes all Orange County target cities
- [ ] Wikidata @id for major cities
- [ ] hasOfferCatalog lists all services
- [ ] Opening hours accurate
- [ ] sameAs links to all profiles (Google Maps, Yelp, LinkedIn, BBB)
- [ ] potentialAction for booking

---

### Gap 31: TOC Schema (Table of Contents)

**Purpose:** Enable jump-link rich results and improve content navigation signals.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "name": "Complete Guide to Seismic Retrofitting in Orange County",
  "hasPart": [
    {
      "@type": "WebPageElement",
      "name": "What is Seismic Retrofitting?",
      "url": "https://aaaengineeringdesign.com/blog/seismic-retrofit-orange-county/#what-is",
      "position": 1
    },
    {
      "@type": "WebPageElement",
      "name": "Types of Seismic Retrofits",
      "url": "https://aaaengineeringdesign.com/blog/seismic-retrofit-orange-county/#types",
      "position": 2
    },
    {
      "@type": "WebPageElement",
      "name": "Seismic Retrofit Cost",
      "url": "https://aaaengineeringdesign.com/blog/seismic-retrofit-orange-county/#cost",
      "position": 3
    },
    {
      "@type": "WebPageElement",
      "name": "Orange County Requirements",
      "url": "https://aaaengineeringdesign.com/blog/seismic-retrofit-orange-county/#orange-county",
      "position": 4
    },
    {
      "@type": "WebPageElement",
      "name": "The Retrofit Process",
      "url": "https://aaaengineeringdesign.com/blog/seismic-retrofit-orange-county/#process",
      "position": 5
    },
    {
      "@type": "WebPageElement",
      "name": "FAQs",
      "url": "https://aaaengineeringdesign.com/blog/seismic-retrofit-orange-county/#faq",
      "position": 6
    }
  ]
}
```

**HTML Implementation:**
```tsx
<nav aria-label="Table of Contents" className="toc">
  <h2>In This Guide</h2>
  <ol>
    <li><a href="#what-is">What is Seismic Retrofitting?</a></li>
    <li><a href="#types">Types of Seismic Retrofits</a></li>
    <li><a href="#cost">Seismic Retrofit Cost</a></li>
    <li><a href="#orange-county">Orange County Requirements</a></li>
    <li><a href="#process">The Retrofit Process</a></li>
    <li><a href="#faq">FAQs</a></li>
  </ol>
</nav>
```

**Implementation Checklist:**
- [ ] TOC schema with hasPart on all long-form articles
- [ ] Each section has position and anchor URL
- [ ] HTML TOC with jump links
- [ ] aria-label for accessibility
- [ ] Anchor IDs match schema URLs

---

### Gap 32: LearningResource Schema

**Purpose:** Position engineering guides as educational resources for AI learning/citation.

```json
{
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "@id": "https://aaaengineeringdesign.com/guides/seismic-retrofit-guide/",
  "name": "Seismic Retrofitting Guide for California Homeowners",
  "description": "Comprehensive educational guide covering seismic retrofit methods, costs, timelines, and California building code requirements. Written by PE-licensed structural engineers.",
  "learningResourceType": "Guide",
  "educationalLevel": "Beginner to Intermediate",
  "audience": {
    "@type": "Audience",
    "audienceType": "Homeowners, Property Managers, Contractors"
  },
  "teaches": [
    "Understanding seismic risk in California",
    "Types of seismic retrofit methods",
    "How to evaluate retrofit needs",
    "California Building Code requirements",
    "Working with structural engineers",
    "Permit process for retrofits"
  ],
  "educationalUse": "Self-study",
  "interactivityType": "Expositive",
  "isAccessibleForFree": true,
  "author": {
    "@type": "Person",
    "name": "John Doe, PE",
    "jobTitle": "Principal Structural Engineer"
  },
  "publisher": {"@id": "https://aaaengineeringdesign.com/#organization"},
  "datePublished": "2026-01-08",
  "dateModified": "2026-01-08",
  "inLanguage": "en-US",
  "about": [
    {
      "@type": "Thing",
      "name": "Seismic Retrofitting"
    },
    {
      "@type": "Thing",
      "name": "California Building Code"
    }
  ]
}
```

**Implementation Checklist:**
- [ ] LearningResource schema on educational guides
- [ ] learningResourceType specified (Guide, Tutorial, Course)
- [ ] educationalLevel defined
- [ ] teaches array lists learning objectives
- [ ] audience specified
- [ ] PE-licensed author credited
- [ ] isAccessibleForFree set to true

---

### Gap 33: ClaimReview Schema (Code Claims & Statistics)

**Purpose:** Establish authority by fact-checking common building code claims and seismic statistics.

```json
{
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  "datePublished": "2026-01-08",
  "url": "https://aaaengineeringdesign.com/blog/seismic-retrofit-facts/",
  "author": {
    "@type": "Organization",
    "@id": "https://aaaengineeringdesign.com/#organization"
  },
  "claimReviewed": "Pre-1980 California homes are 8 times more likely to be damaged in an earthquake than retrofitted homes",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "alternateName": "True"
  },
  "itemReviewed": {
    "@type": "Claim",
    "author": {
      "@type": "Organization",
      "name": "California Earthquake Authority"
    },
    "datePublished": "2024",
    "appearance": {
      "@type": "CreativeWork",
      "url": "https://www.earthquakeauthority.com/research"
    }
  }
}
```

**Building Code Claim Reviews:**
```json
{
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  "claimReviewed": "California requires all soft-story buildings to be retrofitted",
  "reviewRating": {
    "@type": "Rating",
    "alternateName": "Partially True"
  },
  "itemReviewed": {
    "@type": "Claim",
    "author": {"@type": "Organization", "name": "Common Misconception"}
  },
  "reviewBody": "While many California cities have mandatory soft-story retrofit ordinances (Los Angeles, San Francisco, Santa Monica, West Hollywood), this is not a statewide requirement. Each city sets its own retrofit mandates. As of 2026, approximately 20 California cities have mandatory soft-story retrofit programs."
}
```

**Implementation Checklist:**
- [ ] ClaimReview schema for statistical claims
- [ ] Building code myth-busting with ClaimReview
- [ ] Original source cited (CEA, FEMA, CGS)
- [ ] reviewBody provides context
- [ ] Rating scale includes "True", "Mostly True", "Partially True", "False"
- [ ] PE-licensed review authority

---

### Gap 34: Schema Validation Automation

**Purpose:** Ensure all structured data validates correctly before publication.

**Pre-Publish Validation Workflow:**

```bash
# 1. Extract all JSON-LD from page
# 2. Validate against schema.org
# 3. Test with Google Rich Results
# 4. Check Bing markup validator

# Automated validation script (conceptual)
npm run validate-schema -- --url "https://aaaengineeringdesign.com/blog/[slug]"
```

**Validation Tools:**
| Tool | Purpose | Frequency |
|------|---------|-----------|
| schema.org Validator | Syntax validation | Every publish |
| Google Rich Results Test | Rich result eligibility | Every publish |
| Bing Markup Validator | Bing compatibility | Weekly |
| Schema Markup Validator (Chrome Extension) | Quick check | During development |

**Common Validation Errors to Check:**

| Error | Cause | Fix |
|-------|-------|-----|
| Missing required property | Incomplete schema | Add required fields |
| Invalid @type | Typo in type name | Check schema.org spelling |
| Invalid URL format | Missing https:// | Use absolute URLs |
| Invalid date format | Wrong date format | Use ISO 8601 (YYYY-MM-DD) |
| Duplicate @id | Same @id on multiple entities | Use unique @id per entity |

**Implementation Checklist:**
- [ ] Pre-publish validation in CI/CD pipeline
- [ ] Google Rich Results Test passes (zero errors)
- [ ] Bing Markup Validator confirms parsing
- [ ] No console warnings for structured data
- [ ] Monthly audit of all page schemas
- [ ] Error logging for failed validations

---

## Extended Master Checklist (All 34 Gaps)

### Foundation Gaps (1-14)

**Robots & Crawling:**
- [ ] robots.txt allows GPTBot, Claude-Web, PerplexityBot, Google-Extended
- [ ] Sitemap.xml valid and submitted to GSC/Bing

**Schema & Structured Data:**
- [ ] All schemas validate (zero errors)
- [ ] Organization/LocalBusiness sameAs has 3+ links
- [ ] Article schema with datePublished/dateModified

**Technical SEO:**
- [ ] Core Web Vitals pass (LCP <2.5s, INP <200ms, CLS <0.1)
- [ ] Mobile-friendly test passes
- [ ] Canonical URLs self-referencing
- [ ] hreflang implemented (en-US)

**Content & Meta:**
- [ ] Title tags 50-60 characters with city name
- [ ] Meta descriptions 150-160 characters
- [ ] Word count 3,250-4,000 words

**Social & Sharing:**
- [ ] Open Graph tags complete (1200x630 image)
- [ ] Twitter Cards configured

**Internal Architecture:**
- [ ] 5-8 internal links per blog post
- [ ] Hub/cluster linking structure
- [ ] Semantic HTML landmarks

### Extended Gaps (15-34)

**AI Discovery (Gap 15):**
- [ ] LLMS.txt file at site root
- [ ] Company overview, services, credentials included

**Engineering Terminology (Gap 16):**
- [ ] DefinedTerm schema for: Seismic Retrofitting, ADU, Foundation, Load-Bearing Wall, Shear Wall, Moment Frame, Title 24
- [ ] Each term has unique @id and California-specific context

**Ranked Lists (Gap 17):**
- [ ] ItemList schema on service pages
- [ ] Retrofit methods list with positions

**Process Guides (Gap 18):**
- [ ] HowTo schema for permit guides
- [ ] ADU approval process documented
- [ ] Steps with positions and URLs

**Comparisons (Gap 19):**
- [ ] Foundation types comparison table
- [ ] Retrofit methods comparison with costs/timelines

**Video Content (Gap 20):**
- [ ] VideoObject schema on all videos
- [ ] Clips defined for YouTube chapters
- [ ] Site assessment videos with locationCreated

**Reviews (Gap 21):**
- [ ] AggregateRating on LocalBusiness
- [ ] Individual reviews with service/city mentions
- [ ] Service-specific ratings

**Team Profiles (Gap 22):**
- [ ] ProfilePage for each team member
- [ ] PE/SE credentials in hasCredential
- [ ] SEAOC/ASCE membership listed

**Accessibility (Gap 23):**
- [ ] Reading level 8th-11th grade
- [ ] WCAG 2.1 AA compliance
- [ ] Voice search optimization (40-60 word answers)

**Multi-Intent (Gap 24):**
- [ ] Each page addresses 3+ intent types
- [ ] Informational → Commercial → Transactional flow

**AI Markers (Gap 25):**
- [ ] AI-SUMMARY comment at article start
- [ ] AI-FACT comments for statistics
- [ ] AI-CITATION for code references

**Cannibalization Prevention (Gap 26):**
- [ ] One primary keyword per page
- [ ] Keyword mapping document maintained
- [ ] Monthly Search Console audit

**Competitor Analysis (Gap 27):**
- [ ] SERP analysis before each blog post
- [ ] Content gaps identified and filled
- [ ] Word count exceeds competitors by 20%

**Co-Citation (Gap 28):**
- [ ] Minimum 3 authoritative citations per article
- [ ] CBC, ICC, ASCE, AISC, SEAOC cited appropriately
- [ ] Citation schema in structured data

**Events (Gap 29):**
- [ ] Event schema for permit deadlines
- [ ] Code update effective dates
- [ ] City-specific ordinance deadlines

**LocalBusiness Enhancement (Gap 30):**
- [ ] ProfessionalService type used
- [ ] Irvine office geo coordinates accurate
- [ ] All Orange County cities in areaServed
- [ ] hasOfferCatalog lists all services

**TOC (Gap 31):**
- [ ] TOC schema with hasPart on long-form articles
- [ ] Jump links functional
- [ ] aria-label for accessibility

**Learning Resources (Gap 32):**
- [ ] LearningResource schema on guides
- [ ] teaches array with learning objectives
- [ ] educationalLevel defined

**Claim Review (Gap 33):**
- [ ] ClaimReview for seismic statistics
- [ ] Building code claims fact-checked
- [ ] Original sources cited

**Validation Automation (Gap 34):**
- [ ] Pre-publish schema validation
- [ ] Google Rich Results Test passes
- [ ] Bing Markup Validator confirms parsing
- [ ] Monthly schema audit

---

## 🔄 POST-GENERATION: 2025 Blog Refresh Workflow (MANDATORY)

**After completing blog generation, ALWAYS execute this refresh workflow to keep existing 2025 content fresh and SEO-optimized.**

### Purpose
- Refresh older 2025 blog posts with new FAQ content
- Update publication dates to signal freshness to search engines
- Improve topical authority by expanding existing structural engineering content

### Workflow Steps

#### Step 1: Find 2025 Blog Posts
```bash
# Find all blog posts created in 2025
find src/app/blog -name "page.tsx" -newer "2025-01-01" ! -newer "2025-12-31" -type f
# OR check datePublished in schema for 2025 dates
grep -r "datePublished.*2025" src/app/blog/*/page.tsx
```

#### Step 2: Select 10 Random Posts
```bash
# Randomly select 10 posts from the 2025 list
find src/app/blog -name "page.tsx" -type f | shuf -n 10
```

**Selection Criteria:**
- Prefer posts older than 60 days since last update
- Prioritize posts with declining traffic (check GSC data)
- Avoid posts updated within the last 30 days
- Balance across market tiers (Platinum, Gold, Growth)
- Mix different engineering services (ADU, seismic, foundation, etc.)

#### Step 3: Add 3 New FAQs to Each Post

For each of the 10 selected posts:

1. **Read the existing post** and identify the primary keyword and target city
2. **Fetch fresh PAA questions** using SERP API:
   ```bash
   python keyword-intelligence/fetcher.py "[primary-keyword] [city]" --paa-only --save
   ```
3. **Select 3 NEW questions** not already in the FAQ section
4. **Generate answers** following these requirements:
   - 40-80 words per answer
   - Include the primary keyword and Southern California city naturally
   - Reference specific building codes (CBC, local ordinances) when relevant
   - Add data-speakable attribute for voice search
   - Use schema.org FAQPage format

**FAQ Addition Template:**
```tsx
// Add to existing FAQPage schema
{
  "@type": "Question",
  "name": "[New PAA question about structural engineering in SoCal]",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "[40-80 word answer with primary keyword, city, and engineering specifics]"
  }
}
```

#### Step 4: Update Post Dates to Current Date

For each updated post:

1. **Update dateModified** in Article schema:
   ```tsx
   "dateModified": "YYYY-MM-DD" // Use current date
   ```

2. **Update visible date** in the blog post UI:
   ```tsx
   date: "YYYY-MM-DD" // Use current date in blogData
   ```

3. **Keep datePublished unchanged** (preserve original publication date)

### Refresh Summary Output

After completing the refresh, output a summary:

```
📅 2025 Blog Refresh Complete - SoCal Engineering
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Posts Refreshed: 10
New FAQs Added: 30 (3 per post)
Date Updated To: [Current Date]

Updated Posts:
1. /blog/[city]-[service-slug] - Added FAQs: [Q1], [Q2], [Q3]
2. /blog/[city]-[service-slug] - Added FAQs: [Q1], [Q2], [Q3]
... (continue for all 10)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Automation Option

Add to CI/CD or cron for automatic weekly refresh:
```bash
# Weekly refresh script (runs every Monday)
0 3 * * 1 /path/to/scripts/refresh-2025-blogs.sh
```

---

*Gap Coverage Version: 3.0.0 - Complete 34-Gap Implementation*
*Last Updated: 2026-01-10*


---

# 2026 SEARCH OPTIMIZATION COMPLIANCE

**Added:** January 2026
**Framework:** Search Optimization 2026: Signals & Criteria
**Priority:** CRITICAL - Implement for all new content

---

## P0: AGENTIC COMMERCE OPTIMIZATION

### Why This Matters
In 2026, AI agents autonomously book consultations and request quotes. Engineering firms not optimized for agent discovery lose leads to competitors.

### Action Schema (MANDATORY)

Add to ALL service pages:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AAA Engineering Design - Structural Engineering",
  "serviceType": "Structural Engineering",
  "areaServed": ["Orange County", "Los Angeles", "San Diego"],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://aaaengineeringdesign.com/consultation?service={service_type}&city={city}",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Engineering Consultation"
      }
    }
  ],
  "priceRange": "$500-$15,000"
}
```

### Agent-Ready Information Block

Include in every service page:

```markdown
### Service Availability (For AI Agents)

| Attribute | Value |
|-----------|-------|
| Service Type | Structural Engineering |
| Availability | Mon-Fri 8AM-6PM PST |
| Response Time | Same-day consultation available |
| Quote Turnaround | 48 hours |
| Service Area | Southern California (150+ cities) |
| Licensing | California PE Licensed |
```

### Organization Schema with Agent Statistics

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AAA Engineering Design",
  "agentInteractionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/ReserveAction",
    "userInteractionCount": "[consultation bookings]"
  },
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "license",
    "name": "California Professional Engineer (PE)"
  }
}
```

---

## P0: SHARE OF MODEL (SOM) MEASUREMENT

### Weekly LLM Audit Protocol

**Track brand visibility for local engineering queries:**

1. **Define Category Queries** (50-100):
   - "Best structural engineer in [City]"
   - "ADU structural engineering Orange County"
   - "Soft story retrofit engineer Los Angeles"
   - "Foundation repair engineer near me"
   - "Who is the best structural engineer in Beverly Hills"

2. **Test Across Platforms:**
   - ChatGPT, Claude, Perplexity, Gemini, Bing Copilot

3. **Track Metrics:**

| Metric | Target |
|--------|--------|
| **SOM %** (Brand mentions / queries) | >20% for service area |
| **Local Citation Rate** | >40% |
| **Sentiment** | >90% positive |

### Sentiment Monitoring

- Positive: "experienced", "licensed", "reliable", "responsive", "professional"
- Negative: "expensive", "slow", "unresponsive"

---

## P0: MULTIMODAL RAG OPTIMIZATION

### Project Photo Schema

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://aaaengineeringdesign.com/projects/[image].jpg",
  "caption": "Soft story retrofit completed for 1960s apartment building in Santa Monica, featuring steel moment frames and foundation upgrades by AAA Engineering Design PE team",
  "representativeOfPage": true,
  "about": {
    "@type": "Service",
    "name": "Soft Story Retrofit",
    "areaServed": "Santa Monica"
  }
}
```

### Video Schema (If Project Videos)

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "ADU Structural Engineering Process Explained",
  "hasPart": [
    {"@type": "Clip", "name": "Site Assessment", "startOffset": 0, "endOffset": 90},
    {"@type": "Clip", "name": "Foundation Design", "startOffset": 90, "endOffset": 180},
    {"@type": "Clip", "name": "Permit Process", "startOffset": 180, "endOffset": 270}
  ]
}
```

---

## P1: ENTITY GRAPH & HEDGE DENSITY

### Co-Occurrence Clusters

```
PRIMARY: AAA Engineering Design

CLUSTER 1 (Service): 
AAA Engineering Design + "structural engineer" + "California PE" + "stamped plans"

CLUSTER 2 (Geographic):
AAA Engineering Design + "Orange County" + "Los Angeles" + "San Diego" + "[City Name]"

CLUSTER 3 (Specialty):
AAA Engineering Design + "ADU engineering" + "soft story retrofit" + "foundation repair"

CLUSTER 4 (Comparison):
AAA Engineering Design + "vs" + "[Competitor]" + "residential specialist"
```

### FORBIDDEN Hedge Words (ENGINEERING-SPECIFIC)

**NEVER use - reduces trust and AI citation:**

| Forbidden | Replace With |
|-----------|--------------|
| "might need an engineer" | "you need an engineer" |
| "could require permits" | "requires permits" |
| "possibly load-bearing" | "is load-bearing" / "requires assessment" |
| "some codes require" | "California Building Code requires" |
| "may take X weeks" | "takes X weeks" |

**Pre-Publish Audit:** Search for: might, could, possibly, perhaps, seems, may, "some say"

### Confident Language for Engineering

❌ WRONG: "This type of wall might be load-bearing and could possibly require engineering analysis."

✅ CORRECT: "This is a load-bearing wall. California Building Code requires PE-stamped plans for modification. AAA Engineering provides analysis within 48 hours."

---

## P1: INFORMATION GAIN REQUIREMENTS

### Unique Value for Engineering Content

Each post MUST include 3+:
- [ ] Project data: "In our last 50 ADU projects, 78% required..."
- [ ] Code specifics: "Per CBC Section 1613.1..."
- [ ] Cost data: "Average cost in [City]: $X,XXX-$X,XXX"
- [ ] Timeline data: "Typical permit approval: X weeks in [City]"
- [ ] Local expertise: "The [City] building department requires..."

---

## P2: ENHANCED AEO / VOICE

### Speakable Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".quick-answer", ".service-summary", ".faq-answer", ".cost-range"]
  }
}
```

### Voice Answers (≤29 words)

Example: "A structural engineer in Newport Beach costs five hundred to three thousand dollars for residential assessments. AAA Engineering Design offers same-day consultations with 48-hour quotes."

---

## P2: COMPLETE PE AUTHOR SCHEMA

```json
{
  "@type": "Person",
  "name": "[PE Name]",
  "jobTitle": "Licensed Professional Engineer",
  "sameAs": ["https://linkedin.com/in/[profile]"],
  "knowsAbout": ["Structural Engineering", "Seismic Retrofit", "Foundation Design", "California Building Code"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "license",
    "name": "California Professional Engineer (PE)",
    "recognizedBy": {
      "@type": "Organization",
      "name": "California Board for Professional Engineers"
    }
  }
}
```

---

## 2026 SCHEMA CHECKLIST

| Schema | Required |
|--------|----------|
| `Article` | ✅ |
| `ProfessionalService` | ✅ |
| `LocalBusiness` | ✅ |
| `FAQPage` | ✅ |
| `HowTo` | ✅ |
| `Speakable` | ✅ |
| `Person` (PE credentials) | ✅ |
| `ReserveAction` | ✅ |
| `ImageObject` (projects) | ✅ |
| `VideoObject` + `Clip` | If video |

---

## BING SEARCH OPTIMIZATION - ADDITIVE LAYER (2026)

**Added:** January 2026
**Purpose:** Additional Bing-specific optimizations that work ALONGSIDE existing Google/AI optimizations—not replacing them.

---

### 1. Exact-Match Keyword Emphasis (Bing Additive)

**Bing prefers literal keyword matching.** Add exact-match variants alongside semantic content:

| Element | + Bing Additive |
|---------|-----------------|
| First Paragraph | Exact primary keyword in first 50 words verbatim |
| H2s | Include 2+ H2s with exact-match keywords |
| Meta Keywords | Add `<meta name="keywords">` tag (Bing reads it) |

**Meta Keywords Tag (Bing Still Uses This):**
```html
<meta name="keywords" content="structural engineering Orange County, ADU structural engineer Irvine, soft story retrofit Los Angeles, foundation repair Newport Beach, seismic retrofit California">
```

---

### 2. Desktop-First Content Validation (Bing Indexing)

**Bing uses desktop-first indexing.** Ensure all content renders fully on desktop:

- [ ] No "Show More" JavaScript toggles hiding content
- [ ] Tables render fully without horizontal scroll
- [ ] Images sized for desktop viewing (min 800px width)
- [ ] Answer Capsule visible above fold on 1920x1080 viewport

```html
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large">
```

---

### 3. Social Meta Tags Enhancement (Bing Social Signals)

**Bing weights social signals for ranking.** Add these meta tags:

```html
<meta property="og:site_name" content="AAA Engineering Design">
<meta property="article:author" content="https://facebook.com/aaaengineering">
<meta property="article:publisher" content="https://facebook.com/aaaengineering">
<meta name="author" content="AAA Engineering Design">
<meta name="twitter:creator" content="@aaaengineering">
<meta name="twitter:site" content="@aaaengineering">
```

---

### 4. Direct Bing Webmaster API Submission

**Submit directly to Bing alongside IndexNow:**

```bash
# Submit to Bing Webmaster API (faster than IndexNow for Bing)
curl -X POST "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?apikey=${BING_WEBMASTER_API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{"siteUrl":"https://aaaengineeringdesign.com","url":"${NEW_URL}"}'
```

---

### 5. Clean Sitemap Validation (Bing 1% Dirt Rule)

**Bing allows only 1% "dirt" in sitemaps:**
- [ ] No redirecting URLs (301/302)
- [ ] No 404 errors
- [ ] All URLs return 200 OK
- [ ] lastmod dates are accurate

---

### 6. ChatGPT Citation Optimization

**Bing powers ChatGPT's web search.** First 150 characters MUST be fact-dense:

❌ BAD: "Welcome to our guide about structural engineering services..."

✅ GOOD: "Structural engineering in Orange County costs $2,500-$15,000 for residential projects. AAA Engineering Design completes 200+ projects annually with 98% permit approval rates across Southern California."

---

### 7. Bing-Preferred Schema Properties

**Add to existing Article schema:**

```json
{
  "mainEntity": {
    "@type": "WebPage",
    "significantLink": [
      "https://bpelsg.ca.gov/",
      "https://www.dgs.ca.gov/BSC",
      "https://www.ladbs.org/"
    ]
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "AAA Engineering Design"
  },
  "copyrightYear": "2026",
  "isAccessibleForFree": true,
  "inLanguage": "en-US"
}
```

---

### 8. User Engagement Signals Optimization

**Bing tracks dwell time, CTR, bounce rate:**

- [ ] First sentence contains specific data/claim
- [ ] 5+ internal links to related content
- [ ] Related posts section at article end
- [ ] FAQ section with minimum 6 questions
- [ ] Meta description includes call-to-action

---

### BING ADDITIVE MASTER CHECKLIST

- [ ] `<meta name="keywords">` tag with 8-12 exact-match phrases
- [ ] Social meta tags (og:site_name, article:author)
- [ ] Bing Webmaster API submission alongside IndexNow
- [ ] Sitemap validated (<1% error rate)
- [ ] First 150 characters fact-dense
- [ ] copyrightHolder and copyrightYear in schema
- [ ] significantLink to BPELSG, DSA, LADBS sources

---

## 🚀 POST-GENERATION: GIT COMMIT & DEPLOY (MANDATORY)

**🚨 DEPLOYMENT PLATFORM: NETLIFY (NOT VERCEL) 🚨**
> This codebase is hosted on **Netlify**. `git push origin master` triggers Netlify auto-deployment. There is NO Vercel project for aaaengineeringdesign.com.

**After completing blog generation, ALWAYS execute this git workflow to deploy changes to production (via Netlify).**

### Workflow Steps

#### Step 1: Stage All New/Modified Blog Files
```bash
git add src/app/blog/
git add public/images/blog/
```

#### Step 2: Create Descriptive Commit
```bash
git commit -m "blog: Add [blog-title] - [primary-keyword]

- New blog post: [slug]
- Target keyword: [primary-keyword]
- Target location: [SoCal city]
- Schema: Article + FAQPage + LocalBusiness + [other schemas]

🤖 Generated with Claude Code blog-generator skill"
```

#### Step 3: Push to Production
```bash
git push origin main
```

### Commit Message Format

Use this format for all blog commits:
```
blog: Add [short-title] - [keyword]

- New blog post: [full-slug]
- Target keyword: [primary-keyword]
- Target location: [city]
- [Additional details]

🤖 Generated with Claude Code blog-generator skill
```

### Multiple Posts Commit
When generating multiple posts in a single session:
```bash
git add src/app/blog/
git commit -m "blog: Add [N] new posts - [topic-summary]

Posts added:
- [slug-1]: [keyword-1] ([city-1])
- [slug-2]: [keyword-2] ([city-2])
- [slug-N]: [keyword-N] ([city-N])

🤖 Generated with Claude Code blog-generator skill"
git push origin main
```

### ⚠️ IMPORTANT
- **ALWAYS** commit and push after generating blog posts
- **NEVER** leave uncommitted blog files in the working directory
- If build fails after push, fix errors and push again immediately

