# Open Graph Image Creation Instructions

## ⚠️ CRITICAL: You need to create `og-image.jpg` in this directory

### Image Specifications:
- **Dimensions**: 1200 x 630 pixels (EXACT - required by Facebook/LinkedIn/Twitter)
- **Format**: JPG or PNG
- **File size**: Under 8MB (ideally under 300KB for fast loading)
- **Filename**: `og-image.jpg` (lowercase, exact match)

### Design Recommendations:

#### Content to Include:
1. **Company Logo**: AAA Engineering Design logo (use AAA-Logo.png as source)
2. **Main Headline**: "Licensed Structural Engineers"
3. **Subheadline**: "Orange County & Southern California"
4. **Key Services** (optional): "Residential • Commercial • Seismic • ADU"
5. **License Badge** (optional): "PE Licensed" or professional certification badge
6. **Background**: Professional engineering imagery (blueprint patterns, building structure, etc.)

#### Design Guidelines:
- **Safe Zone**: Keep important text/logos 40px from edges (they may be cropped on some platforms)
- **Text Size**: Large enough to read on mobile (minimum 48px for headlines)
- **Contrast**: Ensure text is easily readable on background
- **Branding**: Use your brand colors and fonts
- **Professional**: Engineering/architecture aesthetic

### Quick Creation Options:

#### Option 1: Canva (Free, Easy)
1. Go to https://www.canva.com/
2. Search for "Open Graph" or create custom 1200x630px design
3. Upload your AAA-Logo.png
4. Add text and design elements
5. Download as JPG
6. Save as `og-image.jpg` in this `/public/` folder

#### Option 2: Figma (Free, Professional)
1. Create 1200x630px frame
2. Design your Open Graph image
3. Export as JPG at 2x quality
4. Save as `og-image.jpg`

#### Option 3: Photoshop/GIMP
1. New document: 1200 x 630 px, 72 DPI
2. Design your image
3. Save for Web as JPG (quality 80-90)
4. Save as `og-image.jpg`

#### Option 4: Online Tool
Use https://www.opengraph.xyz/ - automated OG image generator

### Testing Your Image:

After creating the image, test it here:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **Twitter**: https://cards-dev.twitter.com/validator
- **General**: https://www.opengraph.xyz/url/https://aaaengineeringdesign.com

### Current Status:
- [ ] og-image.jpg created
- [ ] Image is 1200x630px
- [ ] File size under 300KB
- [ ] Tested on Facebook debugger
- [ ] Tested on LinkedIn inspector

### Example Design Layout:

```
┌────────────────────────────────────────────────────┐
│                                                    │
│  [AAA Logo]                                        │
│                                                    │
│         Licensed Structural Engineers              │
│         Orange County & Southern California        │
│                                                    │
│    Residential • Commercial • Seismic • ADU        │
│                                                    │
│                                         [PE Badge] │
└────────────────────────────────────────────────────┘
```

### Color Palette Suggestions:
- **Primary**: Engineering blue (#003366, #1E3A8A)
- **Accent**: Orange (for "Orange County" emphasis)
- **Background**: White or light gray with subtle blueprint pattern
- **Text**: Dark navy for high contrast

### Once Created:
1. Save the file as `og-image.jpg` in `/public/` directory
2. Verify the file is accessible at: `https://aaaengineeringdesign.com/og-image.jpg`
3. Test with social media debuggers (links above)
4. Delete this instruction file (optional)

---

**IMPORTANT**: Until you create this image, social media shares will not display a preview image, significantly reducing click-through rates from social platforms.
