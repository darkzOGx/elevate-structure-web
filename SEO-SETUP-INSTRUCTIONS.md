# SEO Setup Instructions

## 1. Google Search Console Verification

### Step-by-Step Instructions

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account (use the one associated with your business)

2. **Add Your Property**
   - Click "Add property" (left sidebar)
   - Select "URL prefix" method
   - Enter: `https://aaaengineeringdesign.com`
   - Click "Continue"

3. **Choose HTML Tag Verification**
   - In the verification methods, select "HTML tag"
   - You'll see a meta tag like this:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
   - Copy ONLY the content value (e.g., `abc123xyz...`)

4. **Add to Your Site**
   - This repo is set up to add verification meta tags via environment variables.
   - Set this in your deployment environment (or `.env.local`, **do not commit**):

   ```bash
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz...
   ```

5. **Deploy and Verify**
   - Deploy your site
   - Return to Search Console
   - Click "Verify"

### After Verification
- Submit your sitemap: `https://aaaengineeringdesign.com/sitemap.xml`
- Request indexing for your homepage
- Monitor the Coverage report for errors

---

## 2. Bing Webmaster Tools Verification (Optional but Recommended)

1. **Go to Bing Webmaster Tools**
   - Visit: https://www.bing.com/webmasters
   - Sign in with Microsoft account

2. **Add Your Site**
   - Click "Add a site"
   - Enter: `https://aaaengineeringdesign.com`

3. **Get Verification Code**
   - Choose "HTML Meta Tag" option
   - Copy the content value from the meta tag

4. **Add to Your Site**
   - Set this in your deployment environment (or `.env.local`, **do not commit**):

   ```bash
   NEXT_PUBLIC_BING_MSVALIDATE=YOUR_BING_CODE
   ```

### Optional: Bing `BingSiteAuth.xml` verification file

This codebase also supports the file-based verification method at `/BingSiteAuth.xml`.
Set:

```bash
BING_SITE_AUTH=YOUR_BING_FILE_CODE
```

---

## 3. OG Image Specifications

### Requirements
Create an image with these exact specifications:

| Property | Value |
|----------|-------|
| **Dimensions** | 1200 x 630 pixels |
| **Format** | JPG (preferred) or PNG |
| **File name** | `og-image.jpg` |
| **File location** | `public/og-image.jpg` |
| **Max file size** | Under 300KB recommended |

### Design Guidelines

**Layout (recommended):**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌─────────┐                                                   │
│   │  LOGO   │    AAA Engineering Design                         │
│   └─────────┘                                                   │
│                                                                 │
│   ─────────────────────────────────────────────────────         │
│                                                                 │
│   Structural Engineering Services                               │
│   Orange County & Southern California                           │
│                                                                 │
│   • Licensed PE  • 20+ Years Experience  • 500+ Projects        │
│                                                                 │
│                                   (949) 981-4448                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Colors to use:**
- Background: Dark navy or your brand color
- Text: White or light color for contrast
- Accent: Your primary brand color

**Must include:**
1. AAA Engineering Design logo
2. "Structural Engineering Services" or similar tagline
3. "Orange County & Southern California" (geographic relevance)
4. Phone number (optional but recommended)

**Typography:**
- Large, bold headline (40-60px)
- Clean, sans-serif fonts
- High contrast for readability

### Creating in Canva

1. Go to Canva.com
2. Click "Create a design" → "Custom size"
3. Enter: 1200 x 630 px
4. Design using the guidelines above
5. Download as JPG
6. Name it `og-image.jpg`
7. Place in `public/` folder

### Creating in Figma

1. Create new frame: 1200 x 630
2. Design using guidelines above
3. Export as JPG (quality 80-90%)
4. Name it `og-image.jpg`
5. Place in `public/` folder

---

## 4. After Setup Checklist

After completing both tasks:

- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Bing Webmaster verified (optional)
- [ ] `og-image.jpg` added to `public/` folder
- [ ] Site redeployed
- [ ] Test OG image: https://www.opengraph.xyz/

### Testing Your OG Image

1. Go to: https://www.opengraph.xyz/
2. Enter: `https://aaaengineeringdesign.com`
3. Verify the preview looks correct

Or use Facebook's debugger:
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL
3. Click "Scrape Again" to refresh cache

---

## 5. Quick Reference: File Locations

| Item | Location |
|------|----------|
| Verification codes | `src/app/layout.tsx` (line 67-70) |
| OG Image | `public/og-image.jpg` |
| Sitemap | Auto-generated at `/sitemap.xml` |
| robots.txt | `public/robots.txt` |
| RSS Feed | Auto-generated at `/feed.xml` |

---

*Setup guide created December 21, 2025*
