# Blog Generator Skill - 2025 SEO/GEO/AEO Optimized

**Domain**: Structural Engineering (elevate-structure-web)
**Version**: 2.0 (2025 Standards)
**Last Updated**: December 23, 2024

---

## Skill Purpose

Generate 2025-optimized blog posts for structural engineering niche that:
- Capture AI Overview citations
- Win featured snippets
- Dominate People Also Ask boxes
- Rank in Local Pack for "near me" searches
- Optimize for voice search (Google Assistant, Siri)
- Provide LLM-friendly content for ChatGPT/Claude citations

---

## Prerequisites

Before using this skill, ensure:

1. **Python environment** with required packages:
   ```bash
   pip install -r keyword-intelligence/requirements.txt
   pip install -r scripts/requirements.txt
   ```

2. **API Keys configured**:
   - `SERPAPI_KEY` - Get from https://serpapi.com/ (100 free searches/month)
   - `INDEXNOW_KEY` - Auto-generated or custom UUID

3. **Topics configured**:
   - Edit `keyword-intelligence/data/active_topics.json`
   - Default: 10 topics with 70 structural engineering keywords

4. **Scheduler running** (optional):
   ```bash
   python keyword-intelligence/scheduler.py --start
   ```

---

## Complete Blog Generation Workflow

### Step 1: Update Keyword Intelligence

**Option A: Automatic (Weekly)**
```bash
# Start scheduler (runs every Monday 3 AM)
python keyword-intelligence/scheduler.py --start
```

**Option B: Manual Trigger**
```bash
# Run immediately for all topics
python keyword-intelligence/scheduler.py --run-now

# Run for specific topic
python keyword-intelligence/scheduler.py --run-now --topic residential-structural-engineering
```

**Option C: Single Keyword**
```bash
python keyword-intelligence/fetcher.py "ADU structural engineering" \
  --topic residential-structural-engineering \
  --save
```

**What this does:**
- Fetches PAA (People Also Ask) questions
- Extracts PASF (People Also Search For) keywords
- Generates long-tail variations
- Analyzes query intent clusters
- Detects SERP features (featured snippet, local pack, etc.)
- Saves to `keyword-intelligence/data/{topic}-{keyword}.json`

---

### Step 2: Generate Content Brief

```bash
python keyword-intelligence/analyzer.py \
  --brief "ADU structural engineering orange county" \
  residential-structural-engineering \
  > content-briefs/adu-engineering-oc.json
```

**Output includes:**
- 4 title suggestions
- 5-8 H2 headers (question format)
- 8 FAQ questions (from PAA)
- 20 related keywords
- Schema requirements
- Word count recommendation (1500-2500 words)
- Answer capsule guide

**Review the brief:**
```bash
cat content-briefs/adu-engineering-oc.json | python -m json.tool
```

---

### Step 3: Write Blog Post

Using the content brief, write blog post following **2025 Content Structure**.

#### Required Structure:

```html
<article>
  <header>
    <h1>ADU Structural Engineering in Orange County: Complete 2025 Guide</h1>

    <!-- ANSWER CAPSULE - 40-60 words -->
    <aside class="answer-capsule" role="complementary">
      <strong>Quick Answer:</strong>
      ADU structural engineering in Orange County requires PE-stamped plans,
      foundation design, and seismic calculations for building permits. Licensed
      Professional Engineers provide structural plans for detached and attached
      ADUs, ensuring California Building Code compliance. Costs range $2,500-$6,000
      for standard projects under 1,200 sq ft.
    </aside>
  </header>

  <!-- QUESTION-FORMAT SECTIONS -->
  <section id="what">
    <h2>What is ADU Structural Engineering in Orange County?</h2>
    <p>
      In our 15+ years designing ADUs across Orange County, we've completed
      over 300 accessory dwelling unit projects...
      <!-- E-E-A-T SIGNAL: Experience + First-person -->
    </p>
  </section>

  <section id="cost">
    <h2>How Much Does ADU Structural Engineering Cost in Orange County?</h2>
    <p>
      From our analysis of 300+ ADU projects in Orange County, structural
      engineering fees typically range...
      <!-- E-E-A-T SIGNAL: Authority + Data -->
    </p>
  </section>

  <section id="requirements">
    <h2>What Are the Requirements for ADU Structural Plans in Orange County?</h2>
    <p>
      As California-licensed Professional Engineers (PE), we ensure all ADU
      structural plans meet...
      <!-- E-E-A-T SIGNAL: Expertise + Credentials -->
    </p>
  </section>

  <section id="process">
    <h2>How Does the ADU Structural Engineering Process Work?</h2>
    <ol>
      <li><strong>Site Assessment</strong> - We visit the property...</li>
      <li><strong>Foundation Design</strong> - Based on soil conditions...</li>
      <li><strong>Structural Calculations</strong> - Seismic analysis...</li>
    </ol>
  </section>

  <!-- FAQ SECTION - 5-8 questions from PAA -->
  <section id="faq">
    <h2>Frequently Asked Questions</h2>

    <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">Do I need a structural engineer for an ADU in Orange County?</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text" class="faq-answer">
          Yes, all ADUs in Orange County require PE-stamped structural plans...
        </div>
      </div>
    </div>

    <!-- More FAQ items from PAA data -->
  </section>

  <aside class="cta">
    <h3>Need ADU Structural Engineering in Orange County?</h3>
    <p>Get a free consultation from our licensed PE team...</p>
  </aside>

  <footer>
    <div class="author-bio">
      <p>
        Written by the AAA Engineering Design team. Our California-licensed
        Professional Engineers specialize in ADU structural design across
        Orange County. Verify our PE license at bpelsg.ca.gov.
      </p>
    </div>

    <!-- SCHEMA MARKUP -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": "ADU Structural Engineering in Orange County",
          "about": {
            "@type": "Service",
            "name": "ADU Structural Engineering",
            "description": "Professional engineering services for accessory dwelling units"
          },
          "mentions": [
            {
              "@type": "Place",
              "name": "Orange County, California"
            },
            {
              "@type": "Thing",
              "name": "California Building Code"
            }
          ],
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".answer-capsule", "h1", ".faq-answer"]
          },
          "author": {
            "@type": "Person",
            "name": "AAA Engineering Team",
            "jobTitle": "Principal Structural Engineers",
            "sameAs": [
              "https://www.linkedin.com/company/aaa-engineering-design",
              "https://bpelsg.ca.gov/verify/[license_number]"
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [...]
        },
        {
          "@type": "LocalBusiness",
          "name": "AAA Engineering Design",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "CA",
            "addressLocality": "Orange County"
          }
        }
      ]
    }
    </script>
  </footer>
</article>
```

#### 2025 Content Requirements Checklist:

- [ ] **Answer Capsule** - 40-60 words immediately after H1
- [ ] **Question Headers** - ALL H2/H3 in question format
- [ ] **Semantic HTML** - `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`
- [ ] **E-E-A-T Signals** - Minimum 3 expertise statements
  - [ ] Experience: "In our X years...", "We've completed X projects..."
  - [ ] Expertise: "As licensed PEs...", "Our team specializes in..."
  - [ ] Authority: "Per our analysis of X projects...", "According to CBC..."
  - [ ] Trust: "Verify our PE license...", "A+ BBB rating..."
- [ ] **First-Person Language** - "We", "our", "in our testing"
- [ ] **FAQ Section** - 5-8 questions from PAA data
- [ ] **Schema Markup** - Article, FAQPage, LocalBusiness, Author Person
- [ ] **Speakable Property** - Voice search optimization
- [ ] **About & Mentions** - Entity relationships in Article schema

---

### Step 4: Generate All Output Files

```bash
python scripts/generate-blog-outputs.py \
  blog-posts/adu-structural-engineering-orange-county.html \
  --output-dir public/blog/adu-structural-engineering-orange-county/ \
  --keyword-intelligence keyword-intelligence/data/residential-structural-engineering-adu-structural-engineering-orange-county.json \
  --indexnow-key $INDEXNOW_KEY \
  --site-url https://aaaengineeringdesign.com
```

**Output files created:**

1. **adu-structural-engineering-orange-county.html** - Optimized blog HTML
2. **adu-structural-engineering-orange-county.schema.json** - Standalone JSON-LD
3. **adu-structural-engineering-orange-county.keywords.json** - Keyword snapshot
4. **adu-structural-engineering-orange-county.llms.txt** - LLM-friendly plain text
5. **indexnow-payload.json** - IndexNow submission payload

---

### Step 5: Validate Schema

```bash
# Validate schema against schema.org
curl -X POST https://validator.schema.org/validate \
  -H "Content-Type: application/json" \
  -d @public/blog/adu-structural-engineering-orange-county/adu-structural-engineering-orange-county.schema.json

# Test rich results
# Visit: https://search.google.com/test/rich-results
# Paste URL or HTML
```

**Common validation issues:**
- Missing required fields (`@type`, `name`, `url`)
- Invalid date formats (use ISO 8601: `2025-01-06T10:00:00-08:00`)
- Broken `@id` references
- Missing `sameAs` URLs

---

### Step 6: Submit to IndexNow

```bash
# Submit to all IndexNow endpoints
curl -X POST https://www.bing.com/indexnow \
  -H "Content-Type: application/json" \
  -d @public/blog/adu-structural-engineering-orange-county/indexnow-payload.json

# Also submits to:
# - Yandex
# - Naver
# - Seznam
```

**Verify IndexNow key file exists:**
```bash
# Key file must be at domain root
curl https://aaaengineeringdesign.com/[indexnow-key].txt
```

---

### Step 7: Deploy to Production

```bash
# Build Next.js site
npm run build

# Deploy (adjust for your hosting)
npm run deploy

# Or via Git
git add .
git commit -m "Add 2025-optimized blog post: ADU structural engineering Orange County"
git push origin main
```

---

## Schema Templates

### Article Schema (2025 Enhanced)

```json
{
  "@type": "Article",
  "headline": "Blog Post Title Here",
  "description": "Meta description here",
  "image": "https://aaaengineeringdesign.com/images/blog/featured.jpg",
  "datePublished": "2025-01-06T10:00:00-08:00",
  "dateModified": "2025-01-06T10:00:00-08:00",
  "author": {
    "@type": "Person",
    "name": "AAA Engineering Team",
    "jobTitle": "Principal Structural Engineers",
    "sameAs": [
      "https://www.linkedin.com/company/aaa-engineering-design",
      "https://bpelsg.ca.gov/verify/[license_number]"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "California PE License"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "AAA Engineering Design",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aaaengineeringdesign.com/logo.png"
    }
  },
  "about": {
    "@type": "Service",
    "name": "Structural Engineering Services",
    "description": "Professional engineering for residential and commercial projects"
  },
  "mentions": [
    {
      "@type": "Place",
      "name": "Orange County, California"
    },
    {
      "@type": "Thing",
      "name": "California Building Code"
    },
    {
      "@type": "Service",
      "name": "ADU Structural Engineering"
    }
  ],
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".answer-capsule", "h1", ".faq-answer"],
    "xpath": [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://aaaengineeringdesign.com/blog/slug"
  }
}
```

### FAQPage Schema

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ADU structural engineering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ADU structural engineering involves PE-stamped plans, foundation design, and seismic calculations required for building permits in California..."
      }
    },
    {
      "@type": "Question",
      "name": "How much does ADU structural engineering cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ADU structural engineering costs range from $2,500 to $6,000 for standard projects under 1,200 sq ft..."
      }
    }
  ]
}
```

### HowTo Schema (For Process Posts)

```json
{
  "@type": "HowTo",
  "name": "How to Get ADU Structural Engineering Plans in Orange County",
  "description": "Step-by-step guide to obtaining PE-stamped structural plans for your ADU",
  "totalTime": "PT2W",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "4000"
  },
  "step": [
    {
      "@type": "HowToStep",
      "name": "Site Assessment",
      "text": "Schedule initial site visit with licensed PE to assess property conditions",
      "url": "https://aaaengineeringdesign.com/blog/slug#step-1"
    },
    {
      "@type": "HowToStep",
      "name": "Foundation Design",
      "text": "Engineer designs foundation based on soil report and seismic requirements",
      "url": "https://aaaengineeringdesign.com/blog/slug#step-2"
    },
    {
      "@type": "HowToStep",
      "name": "Structural Calculations",
      "text": "Complete structural calculations and prepare PE-stamped plan set",
      "url": "https://aaaengineeringdesign.com/blog/slug#step-3"
    },
    {
      "@type": "HowToStep",
      "name": "Permit Submission",
      "text": "Submit plans to building department for review and approval",
      "url": "https://aaaengineeringdesign.com/blog/slug#step-4"
    }
  ]
}
```

### LocalBusiness Schema

```json
{
  "@type": "LocalBusiness",
  "name": "AAA Engineering Design",
  "image": "https://aaaengineeringdesign.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "City",
    "addressRegion": "CA",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.6189,
    "longitude": -117.9289
  },
  "url": "https://aaaengineeringdesign.com",
  "telephone": "+1-xxx-xxx-xxxx",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Newport Beach"
    },
    {
      "@type": "City",
      "name": "Irvine"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Orange County"
    }
  ]
}
```

---

## E-E-A-T Signal Templates

### Experience Signals (First-Person)

```
In our 20+ years of structural engineering across Orange County, we've...

We've completed over 500 ADU projects throughout Southern California...

From our experience working with [City Name] building department...

In our testing of foundation systems on expansive soils, we found...

Our team has designed structural systems for properties ranging from...

We've navigated the permit process with every city in Orange County...
```

### Expertise Signals (Credentials)

```
As California-licensed Professional Engineers (PE #12345)...

Our structural engineering team specializes in seismic design...

With PE licenses and SEAOC membership, we bring extensive expertise...

Licensed by the California Board of Professional Engineers...

Our Principal Engineer holds a Master's degree in Structural Engineering...

We maintain active PE licenses and complete ongoing education in California Building Code...
```

### Authority Signals (Data & Citations)

```
According to California Building Code Section 1807.1.5...

Per our analysis of 300+ Orange County foundation projects...

Our peer-reviewed methodology for seismic retrofit design...

Data from our proprietary project database shows...

Research published in the Journal of Structural Engineering confirms...

Based on soil reports from 200+ Orange County properties...
```

### Trust Signals (Guarantees & Verification)

```
We guarantee first-time permit approval or we revise plans at no charge...

Licensed, bonded, and insured - verify our PE license at bpelsg.ca.gov...

A+ BBB rating with 127 verified customer reviews...

Errors & Omissions insurance up to $2M for your protection...

All plans reviewed by two licensed PEs before client delivery...

We've maintained zero permit rejections across 500+ ADU projects...
```

---

## Question Header Converter

### Declarative → Question Format

| Declarative (❌) | Question Format (✅) |
|------------------|---------------------|
| Structural Engineering Services | What Structural Engineering Services Are Available? |
| Cost Breakdown | How Much Does Structural Engineering Cost? |
| Selection Criteria | How Do You Select the Right Structural Engineer? |
| Permit Requirements | What Are the Permit Requirements for Structural Engineering? |
| Project Timeline | How Long Does the Structural Engineering Process Take? |
| Common Mistakes | What Are Common Mistakes to Avoid in Structural Engineering? |
| Benefits | Why Do You Need a Structural Engineer? |
| Service Areas | Where Do Structural Engineers Provide Services? |

### Question Starters by Intent

- **Definitional**: What is...? What are...? What does... mean?
- **Cost**: How much does...? What is the cost of...? How expensive is...?
- **Process**: How does... work? What are the steps to...? How do I...?
- **Requirements**: What do I need for...? What are the requirements for...?
- **Comparison**: What's the difference between... and...? Which is better...?
- **Selection**: How do I choose...? What should I look for in...?
- **Timeline**: How long does... take? When should I...?
- **Location**: Where can I find...? Where do... provide services?

---

## Validation Checklist

### Before Publishing

```bash
# 1. Content Structure
[ ] Answer capsule: 40-60 words ✓
[ ] All H2/H3 in question format ✓
[ ] Semantic HTML tags used ✓
[ ] Minimum 3 E-E-A-T signals ✓
[ ] First-person language throughout ✓
[ ] FAQ section: 5-8 questions ✓

# 2. Schema Markup
[ ] Article schema with about & mentions ✓
[ ] FAQPage schema ✓
[ ] Speakable property ✓
[ ] Author Person schema with sameAs ✓
[ ] LocalBusiness schema (geo posts) ✓
[ ] All schemas in @graph array ✓
[ ] Validated at schema.org ✓

# 3. Output Files
[ ] {slug}.html generated ✓
[ ] {slug}.schema.json generated ✓
[ ] {slug}.keywords.json generated ✓
[ ] {slug}.llms.txt generated ✓
[ ] indexnow-payload.json generated ✓

# 4. Technical
[ ] Meta description (150-160 chars) ✓
[ ] Title tag (50-60 chars) ✓
[ ] Canonical URL set ✓
[ ] Open Graph tags ✓
[ ] Mobile-friendly structure ✓
[ ] Images optimized with alt text ✓

# 5. Deployment
[ ] Schema validated ✓
[ ] Rich results tested ✓
[ ] IndexNow submitted ✓
[ ] Sitemap updated ✓
[ ] Internal links added ✓
```

---

## Monitoring & Optimization

### Track These KPIs (Weekly)

1. **Featured Snippets**
   - Goal: 25%+ of target keywords
   - Tool: Google Search Console, Ahrefs

2. **AI Overview Citations**
   - Goal: 15%+ of target keywords
   - Tool: Manual checks, Semrush AI Overview tracker

3. **PAA Box Presence**
   - Goal: 40%+ of posts in PAA expansions
   - Tool: Manual checks, rank tracking

4. **Local Pack Rankings**
   - Goal: Top 3 for 20+ "near me" keywords
   - Tool: BrightLocal, Whitespark

5. **Voice Search Optimization**
   - Goal: Answer capsules read by assistants
   - Tool: Voice search simulation

### Monthly Content Refresh

```bash
# Find stale content (older than 90 days)
python keyword-intelligence/storage.py --stale 90

# Update keyword intelligence
python keyword-intelligence/scheduler.py --run-now

# Re-generate briefs for top posts
python keyword-intelligence/analyzer.py --brief "keyword" topic > brief.json

# Update blog post with fresh data
# Re-generate outputs
# Re-submit to IndexNow
```

---

## Troubleshooting

### "No SerpAPI key found"
```bash
export SERPAPI_KEY="your_key_here"
# Or add to .env file
```

### "Schema validation failed"
- Check for missing required fields
- Validate ISO 8601 date format
- Ensure all @id references exist
- Test at https://validator.schema.org/

### "IndexNow submission failed"
- Verify key file at domain root: `https://yourdomain.com/[key].txt`
- Check JSON payload format
- Ensure valid URLs in urlList

### "Answer capsule not found"
- Check HTML for `<aside class="answer-capsule">`
- Ensure 40-60 word count
- Place immediately after `<h1>`

---

## Quick Reference

### CLI Commands

```bash
# Fetch keyword intelligence
python keyword-intelligence/fetcher.py "keyword" --topic topic-name --save

# Run scheduler
python keyword-intelligence/scheduler.py --start
python keyword-intelligence/scheduler.py --run-now

# Generate content brief
python keyword-intelligence/analyzer.py --brief "keyword" topic > brief.json

# Generate outputs
python scripts/generate-blog-outputs.py input.html --output-dir output/

# Validate schema
curl -X POST https://validator.schema.org/validate -H "Content-Type: application/json" -d @schema.json

# Submit to IndexNow
curl -X POST https://www.bing.com/indexnow -H "Content-Type: application/json" -d @indexnow-payload.json
```

### File Locations

```
.claude/skills/socal-engineering-blog/
├── SKILL-2025.md (this file)
├── 2025-SEO-GEO-AEO-REQUIREMENTS.md
├── BLOG-GENERATOR-AUDIT-2025.md
└── references/
    ├── blog-template-2025.md
    ├── keyword-list.md
    ├── city-data.md
    └── interlinking-strategy.md

keyword-intelligence/
├── fetcher.py
├── scheduler.py
├── analyzer.py
├── storage.py
├── README.md
└── data/
    ├── active_topics.json
    └── {topic}-{keyword}.json

scripts/
├── generate-blog-outputs.py
└── requirements.txt
```

---

## Success Metrics (90 Days)

**Content Quality:**
- ✅ 100% posts with answer capsules
- ✅ 100% question-format headers
- ✅ Average 5 E-E-A-T signals per post
- ✅ All schema validated

**SERP Performance:**
- 🎯 25 featured snippets captured
- 🎯 15 AI Overview citations
- 🎯 40 posts in PAA boxes
- 🎯 Top 3 Local Pack for 20 keywords

**Traffic:**
- 🎯 50% increase in organic traffic
- 🎯 30% improvement in click-through rate
- 🎯 20% increase in time on page
- 🎯 15% reduction in bounce rate

---

**Skill Version**: 2.0 (2025 Standards)
**Last Updated**: December 23, 2024
**Maintained By**: AAA Engineering Design Team
