# 2025 SEO/GEO/AEO Blog Generator Requirements

This document outlines the 2025 optimizations implemented for the elevate-structure-web blog generator.

## What Changed in 2025?

### Search Landscape Evolution
- **Google SGE (Search Generative Experience)** now dominates search results
- **AI Overviews** appear for 60%+ of informational queries
- **Zero-click searches** increased to 65% (must capture attention before click)
- **Voice search** accounts for 50%+ of mobile searches
- **GEO (Generative Engine Optimization)** is now as important as SEO

### Key Optimization Targets
1. **AI Overview Citations** - Get cited in Google's AI-generated summaries
2. **Featured Snippets** - Traditional but still valuable (40% CTR)
3. **People Also Ask (PAA)** - Expanded boxes with 8-12 questions
4. **Local Pack** - Maps results for "near me" searches
5. **Entity Recognition** - Structured data for Knowledge Graph

---

## Content Structure Requirements

### 1. Answer Capsule (TL;DR)

**Placement**: Immediately after H1, before first paragraph

**Format**:
```html
<aside class="answer-capsule" role="complementary" aria-label="Quick answer">
  <strong>Quick Answer:</strong>
  [40-60 word direct answer to the main query]
</aside>
```

**Requirements**:
- **40-60 words** (strict limit)
- Answers the primary keyword query directly
- Uses simple, extractable language
- Includes primary keyword naturally
- Optimized for voice search readability

**Why**: AI Overviews extract these capsules as citation sources. Voice assistants read them verbatim.

**Example**:
```html
<aside class="answer-capsule">
  <strong>Quick Answer:</strong>
  ADU structural engineering in California involves PE-stamped plans, foundation design,
  and seismic calculations required for building permits. Licensed Professional Engineers
  provide structural plans for detached and attached ADUs, ensuring California Building
  Code compliance. Costs range $2,500-$6,000 for standard projects under 1,200 sq ft.
</aside>
```

---

### 2. Question-Format Headers

**Requirement**: Convert ALL H2 and H3 headers to question format

**Why**: Matches natural language queries, optimizes for PAA boxes, improves AI Overview citation

**Format**:
```markdown
❌ WRONG (declarative):
## Structural Engineering Services
## Cost Breakdown
## Selection Criteria

✅ CORRECT (question format):
## What Structural Engineering Services Are Available?
## How Much Does Structural Engineering Cost?
## How Do You Select the Right Structural Engineer?
```

**Question Types to Use**:
- **What**: Definitional content
- **How**: Process/procedure content
- **Why**: Reasoning/benefit content
- **When**: Timing/triggers
- **Where**: Location-specific
- **Who**: Selection criteria
- **Which**: Comparison/options

---

### 3. Semantic HTML Tags

**Requirement**: Use semantic HTML5 tags for content structure

**Why**: Helps AI engines parse content sections, improves accessibility, signals content hierarchy

**Required Tags**:
```html
<article>               <!-- Main blog post wrapper -->
  <header>              <!-- Post title, metadata, author -->
    <h1>Post Title</h1>
    <aside class="answer-capsule">Quick Answer</aside>
  </header>

  <section id="what">   <!-- Each major topic section -->
    <h2>What is...?</h2>
    <p>Content...</p>
  </section>

  <section id="cost">
    <h2>How much does...?</h2>
    <p>Content...</p>
  </section>

  <aside>               <!-- Sidebar content, CTAs, related links -->
    <h3>Related Services</h3>
  </aside>

  <footer>              <!-- Author bio, related articles, schema -->
    <div class="author-bio">...</div>
    <script type="application/ld+json">{...}</script>
  </footer>
</article>
```

---

### 4. E-E-A-T Signals

**Requirement**: Include first-person expertise signals throughout content

**Why**: Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is critical for YMYL topics like engineering

**Required Elements** (minimum 3 per post):

**Experience**:
- "In our 20+ years of structural engineering projects..."
- "We've completed 500+ ADU designs throughout Orange County..."
- "From our experience working with [City] building department..."

**Expertise**:
- "As California-licensed Professional Engineers (PE)..."
- "Our structural engineering team specializes in..."
- "With PE licenses and SEAOC membership..."

**Authority**:
- "According to California Building Code Section..."
- "Per our analysis of 300+ Orange County projects..."
- "Our peer-reviewed methodology for foundation design..."

**Trust**:
- "We guarantee first-time permit approval or we revise plans at no charge..."
- "Licensed, bonded, and insured - verify our PE license at bpelsg.ca.gov..."
- "A+ BBB rating with 127 verified customer reviews..."

**Placement**:
- At least ONE in first paragraph
- At least ONE in each major H2 section
- At least ONE in conclusion/CTA section

---

## Schema/JSON-LD Requirements

### Required Schemas (ALL posts)

1. **Article Schema with `about` & `mentions`**

```json
{
  "@type": "Article",
  "headline": "Blog Post Title",
  "about": {
    "@type": "Thing",
    "name": "Structural Engineering",
    "description": "Professional engineering services for building design"
  },
  "mentions": [
    {
      "@type": "Place",
      "name": "Orange County, California"
    },
    {
      "@type": "Service",
      "name": "ADU Structural Engineering"
    }
  ]
}
```

**Why**: `about` and `mentions` help AI engines understand topic and entity relationships.

---

2. **FAQPage Schema (5-8 questions minimum)**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is ADU structural engineering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ADU structural engineering involves PE-stamped plans..."
      }
    }
  ]
}
```

**Why**: FAQPage schema feeds directly into PAA boxes and AI Overview citations.

---

3. **Speakable Property (Voice Search)**

```json
{
  "@type": "Article",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".answer-capsule",
      "h1",
      ".faq-answer"
    ]
  }
}
```

**Why**: Tells voice assistants (Google Assistant, Siri) which content to read aloud.

**Target selectors**:
- `.answer-capsule` - TL;DR summary
- `h1` - Page title
- `.faq-answer` - FAQ answers

---

4. **Author Person Schema with `sameAs`**

```json
{
  "@type": "Person",
  "name": "John Smith, PE",
  "jobTitle": "Principal Structural Engineer",
  "sameAs": [
    "https://www.linkedin.com/in/johnsmith-pe",
    "https://bpelsg.ca.gov/verify/[license_number]",
    "https://orcid.org/0000-0000-0000-0000"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "name": "California PE License"
  }
}
```

**Why**: `sameAs` links establish author authority across platforms. CRITICAL for E-E-A-T.

---

## Required Output Files (per blog post)

### 1. `{slug}.html` - Optimized Blog HTML

**Contains**:
- Semantic HTML structure
- Answer capsule
- Question-format headers
- E-E-A-T signals
- FAQ section
- Schema markup embedded in `<script type="application/ld+json">`

---

### 2. `{slug}.schema.json` - Standalone JSON-LD

**Purpose**: Separate schema file for testing and submission to Google

**Contains**:
- All schemas in `@graph` array
- Article, FAQPage, LocalBusiness, Breadcrumb, Organization
- Validated against https://validator.schema.org/

**Why**: Easier to test schema independently, can be submitted to Google via Search Console

---

### 3. `{slug}.keywords.json` - Keyword Intelligence Snapshot

**Contains**:
```json
{
  "primary_keyword": "ADU structural engineering",
  "topic": "residential-structural-engineering",
  "generated_date": "2025-01-06",
  "keyword_data": {
    "longtail_keywords": [...],
    "paa_questions": [...],
    "related_keywords": [...],
    "serp_features": [...],
    "intent_clusters": {...}
  },
  "optimization_targets": {
    "featured_snippet": true,
    "local_pack": true,
    "paa_box": true
  }
}
```

**Why**: Provides audit trail of keyword intelligence used for post generation. Useful for content updates.

---

### 4. `{slug}.llms.txt` - LLM-Friendly Plain Text

**Format**: Markdown-style plain text optimized for LLM ingestion

**Structure**:
```
# [Post Title]

## Quick Answer
[Answer capsule text]

## [Question Header 1]
[Content without HTML tags, clean formatting]

## [Question Header 2]
[Content...]

## FAQ
Q: [Question 1]
A: [Answer 1]

Q: [Question 2]
A: [Answer 2]

---
Source: https://aaaengineeringdesign.com/blog/[slug]
Author: [Author Name], PE
License: California Professional Engineer
Last Updated: [Date]
```

**Why**:
- Makes content easily ingestible by ChatGPT, Claude, Perplexity
- Increases likelihood of AI citation in chatbot responses
- Plain text is easier for AI to extract and quote

---

### 5. `indexnow-payload.json` - IndexNow Notification

**Format**:
```json
{
  "host": "aaaengineeringdesign.com",
  "key": "[indexnow_api_key]",
  "keyLocation": "https://aaaengineeringdesign.com/[key].txt",
  "urlList": [
    "https://aaaengineeringdesign.com/blog/[slug]",
    "https://aaaengineeringdesign.com/blog",
    "https://aaaengineeringdesign.com"
  ]
}
```

**Submit to**:
- https://www.bing.com/indexnow
- https://yandex.com/indexnow
- https://api.naver.com/indexnow
- https://search.seznam.cz/indexnow

**Why**: Instant indexing notification to search engines (no waiting for crawl)

---

## Blog Generation Workflow (Updated for 2025)

### Step 1: Load Keyword Intelligence

```bash
python keyword-intelligence/storage.py --export blog-brief.json --topic residential-structural-engineering
```

**Output**: `blog-brief.json` with PAA, PASF, long-tail keywords, SERP features

---

### Step 2: Generate Content Brief

```bash
python keyword-intelligence/analyzer.py --brief "ADU structural engineering" residential-structural-engineering > brief.json
```

**Output**: Structured brief with:
- Title suggestions
- Header structure (question format)
- FAQ questions (from PAA)
- Related keywords
- Schema requirements
- Word count recommendations

---

### Step 3: Write Blog Post

Using the brief, write blog post following:

1. **Semantic HTML structure**
2. **Answer capsule** (40-60 words) after H1
3. **Question-format H2/H3 headers**
4. **E-E-A-T signals** (minimum 3)
5. **FAQ section** (5-8 questions from PAA)
6. **First-person expertise language**

---

### Step 4: Generate All Output Files

```bash
python scripts/generate-blog-outputs.py \
  --input blog-posts/adu-structural-engineering-newport-beach.html \
  --keyword-intelligence data/residential-structural-engineering-adu-structural-engineering.json \
  --output-dir public/blog/adu-structural-engineering-newport-beach/
```

**Generates**:
- `adu-structural-engineering-newport-beach.html` (optimized)
- `adu-structural-engineering-newport-beach.schema.json`
- `adu-structural-engineering-newport-beach.keywords.json`
- `adu-structural-engineering-newport-beach.llms.txt`
- `indexnow-payload.json`

---

### Step 5: Validate & Deploy

```bash
# Validate schema
curl -X POST https://validator.schema.org/validate \
  -H "Content-Type: application/json" \
  -d @adu-structural-engineering-newport-beach.schema.json

# Submit to IndexNow
curl -X POST https://www.bing.com/indexnow \
  -H "Content-Type: application/json" \
  -d @indexnow-payload.json

# Deploy to site
npm run build
npm run deploy
```

---

## Quality Checklist (2025)

Before publishing, verify:

### Content Structure
- [ ] Answer capsule (40-60 words) immediately after H1
- [ ] ALL H2/H3 headers in question format
- [ ] Semantic HTML tags (article, section, aside, header, footer)
- [ ] Minimum 3 E-E-A-T signals (experience, expertise, authority)
- [ ] First-person language ("we", "our", "in our testing")
- [ ] FAQ section with 5-8 questions

### Schema/JSON-LD
- [ ] Article schema with `about` and `mentions` properties
- [ ] FAQPage schema for all FAQ questions
- [ ] Speakable property targeting answer capsule and H1
- [ ] Author Person schema with `sameAs` links
- [ ] LocalBusiness schema (for geo-targeted posts)
- [ ] All schemas combined in `@graph` array
- [ ] Validated at https://validator.schema.org/

### Output Files
- [ ] `{slug}.html` - Optimized blog HTML generated
- [ ] `{slug}.schema.json` - Standalone JSON-LD created
- [ ] `{slug}.keywords.json` - Keyword intelligence snapshot saved
- [ ] `{slug}.llms.txt` - Plain text version created
- [ ] `indexnow-payload.json` - IndexNow payload generated

### Optimization Targets
- [ ] Featured snippet optimization (direct answer in first paragraph)
- [ ] PAA optimization (question headers match PAA queries)
- [ ] Local Pack optimization (city mentions, LocalBusiness schema)
- [ ] Voice search optimization (speakable property, natural language)
- [ ] AI Overview citation (answer capsule, E-E-A-T signals, structured data)

---

## Performance Metrics (2025)

Track these KPIs to measure 2025 optimization success:

### AI Overview Citations
- **Goal**: 15%+ of target keywords appear in AI Overviews
- **Measure**: Manual checks, third-party tools (Semrush, Ahrefs)
- **Indicator**: Mentions in Google SGE results with attribution link

### Featured Snippet Capture
- **Goal**: 25%+ of target keywords own featured snippet
- **Measure**: Google Search Console, rank tracking tools
- **Indicator**: Position 0 in SERPs with expandable box

### PAA Box Presence
- **Goal**: 40%+ of posts appear in PAA boxes for related queries
- **Measure**: Manual checks, "People also ask" monitoring
- **Indicator**: FAQ content extracted into PAA expansion

### Local Pack Rankings
- **Goal**: Top 3 Local Pack for 20+ "near me" keywords
- **Measure**: Local rank tracking (BrightLocal, Whitespark)
- **Indicator**: Map listing for geo + service queries

### Voice Search Optimization
- **Goal**: Answer capsules used in 10%+ of voice search results
- **Measure**: Voice search simulation, user reports
- **Indicator**: Speakable content read by Google Assistant

---

## Migration Guide (Updating Old Posts)

To bring existing blog posts to 2025 standards:

### 1. Add Answer Capsule
- Extract first paragraph's main point
- Condense to 40-60 words
- Wrap in `<aside class="answer-capsule">`

### 2. Convert Headers to Questions
- Identify declarative headers
- Rewrite as natural language questions
- Use "What", "How", "Why", "When", "Where", "Which"

### 3. Add Semantic HTML
- Wrap post in `<article>`
- Group sections in `<section>` tags
- Move CTAs to `<aside>`
- Add `<header>` and `<footer>`

### 4. Insert E-E-A-T Signals
- Add experience statements (3 minimum)
- Include credentials/licenses
- Reference specific project counts
- Use first-person language

### 5. Enhance Schema Markup
- Add `about` and `mentions` to Article schema
- Create FAQPage schema from FAQ section
- Add speakable property
- Include Author Person schema with `sameAs`

### 6. Generate Output Files
- Run output generator script
- Create schema.json, keywords.json, llms.txt
- Submit to IndexNow

---

## FAQ

**Q: Do I need to update ALL old blog posts?**
A: Prioritize posts that:
- Drive significant traffic (top 20%)
- Rank positions 4-10 (easy to boost to featured snippet)
- Target high-value keywords (commercial intent)
- Have high impressions but low CTR (opportunity for snippet capture)

**Q: How long does it take to see 2025 optimization results?**
A:
- **IndexNow submission**: 1-3 days for indexing
- **Schema recognition**: 1-2 weeks for rich snippets
- **Featured snippet**: 2-4 weeks if content quality is high
- **AI Overview citation**: 4-8 weeks (slower rollout)

**Q: Can I skip the LLMs.txt file?**
A: Not recommended. AI chatbots (ChatGPT, Claude, Perplexity) increasingly cite sources. Plain text format increases citation likelihood by 3-5x.

**Q: What if I don't have a SerpAPI key?**
A: The fetcher has fallback mode for development, but production requires real PAA/PASF data. Free tier provides 100 searches/month (sufficient for most sites).

**Q: How do I measure AI Overview citations?**
A: Currently no official API. Manual method:
1. Search for target keyword in incognito mode
2. Check if AI Overview appears
3. Look for site attribution link in overview
4. Track in spreadsheet (automated tools coming in 2025)

---

## Resources

- **Google Search Central**: https://developers.google.com/search
- **Schema.org Validator**: https://validator.schema.org/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **SerpAPI Documentation**: https://serpapi.com/search-api
- **IndexNow Documentation**: https://www.indexnow.org/

---

**Last Updated**: January 2025
**Version**: 1.0
**Applies to**: elevate-structure-web blog generator
