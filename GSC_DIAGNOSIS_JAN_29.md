# GSC Indexing Diagnosis: "Crawled - Currently Not Indexed"

**Date:** January 29, 2026
**Status:** Technical Health 100% | Content Strategy Alert

## Executive Summary
The "Crawled - currently not indexed" status affecting ~78 pages is **not a technical error**. It is a **Quality / Doorway Page** signal from Google. The affected pages (e.g., "Near Me" variants) are being correctly discovered and crawled, but Google's quality algorithms are choosing to exclude them due to "Thin Content" and "Pattern Repetition".

## 1. Technical Health Check (PASSED)
We verified the entire technical pipeline to rule out implementation bugs.

| Component | Status | Verification |
|-----------|--------|--------------|
| **Sitemap.xml** | ✅ PASS | URLs match canonicals (no trailing slashes). |
| **Robots.txt** | ✅ PASS | No blocking directives found. |
| **Middleware** | ✅ PASS | Correctly enforces HTTPS and removes trailing slashes. |
| **Meta Tags** | ✅ PASS | No `noindex` tags found on affected pages. |
| **Canonical** | ✅ PASS | Self-referencing canonicals are correctly showing generic non-slash URLs. |

## 2. The Content Discrepancy (Root Cause)
We compared a high-performing indexed page against a rejected page from the "Crawled - not indexed" list.

### Indexed Page (The Benchmark)
*   **Slug**: `/blog/custom-estate-structural-engineering-in-atherton`
*   **Content Size**: **19 KB**
*   **Depth**: Includes detailed sections on "Subterranean Engineering", "Shoring", "Waterproofing", "Seismic Design", and a custom cost table.
*   **Uniqueness**: Highly specific to the location (Atherton) and service.

### Rejected Page (The Issue)
*   **Slug**: `/blog/adu-engineer-near-me-in-chula-vista` (and similar "Near Me" pages)
*   **Content Size**: **4 KB** (4x smaller)
*   **Depth**: Generic "Direct Answer" blocks that appear swappable.
*   **Pattern**: High repetition of "Service + City" keywords without unique depth.

### Google's "Doorway Page" Policy
Google defines proper indexing candidates as providing *unique value*. When it sees 50+ pages with the pattern `[Service] in [City]` where the content is 90% identical, it indexes the first few and filters the rest as "Duplicate" or "Doorway Pages".

## 3. Recommended Remediation Strategy

Based on your project structure (which includes `src/app/locations` and a planned "Pillar Content" strategy), I strongly recommend a **Hybrid "Consolidate & Upgrade" Approach**.

### The Problem: Keyword Cannibalization
You currently have two types of pages competing for the same keywords (e.g., "Structural Engineer Chula Vista"):
1.  **Blog Posts** (e.g., `/blog/adu-engineer-near-me-in-chula-vista`) -> **Current Status: Thin (4KB), Not Indexed.**
2.  **Location Pages** (e.g., `/locations/chula-vista`) -> **Current Status: The intended authority.**

Google is seeing the blog posts as duplicate, lower-quality versions of your location intent and filtering them out.

### The Fix: 

#### Step 1: Clean Up the Index (Consolidation)
**Stop creating "Near Me" blog posts.** They are hurting you.
*   **Action**: Identify all 78 "Not Indexed" blog posts.
*   **Redirect (301)** them to their corresponding **Location Page** (e.g., `/locations/chula-vista`) OR your new **Pillar Blog Posts**.
*   **Benefit**: This funnels all link equity to the pages that matter.

#### Step 2: Upgrade Your "Money Pages"
The pages you *do* want indexed (your 5 Pillar Posts + Top 10 Location Pages) must meet the "Atherton Standard".
*   **Target**: 20KB+ High-Fidelity Content.
*   **Implementation**: Execute the plan in `BLOG-POSTS-SEO-STRATEGY.md`.
    *   *Example*: Ensure the "Ultimate Guide to Structural Engineering" (Post 2) effectively targets the broad "California" keywords so you don't need 50 tiny city posts.

#### Step 3: Use Indexing API on Winners Only
Once you have cleaned up the "Thin" content, use the Indexing API script (`scripts/submit-urls.js`) ONLY on the 15-20 high-quality pages. Do not submit the thin pages.
