// Blog post types and data

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  featured: boolean
  relatedArticles?: string[] // IDs of related articles
}

export const BLOG_CATEGORIES = [
  'All',
  'Structural Engineering',
  'Building Codes',
  'Design & Planning',
  'Commercial Projects',
  'Safety & Compliance',
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'understanding-seismic-retrofitting',
    title: 'Understanding Seismic Retrofitting for California Homes',
    excerpt: 'Learn how seismic retrofitting can protect your home from earthquake damage and why it\'s essential for older structures in California.',
    category: 'Structural Engineering',
    date: '2025-11-02',
    readTime: '8 min read',
    author: 'AAA Engineering Team',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop',
    featured: true,
    relatedArticles: ['foundation-repair-warning-signs', 'building-code-compliance-2024', 'adu-structural-requirements'],
    content: `
California is earthquake country, and protecting your home from seismic activity is not just smart—it's essential. Seismic retrofitting strengthens your home's structure to better withstand the ground motion that occurs during an earthquake.

## What is Seismic Retrofitting?

Seismic retrofitting involves modifying existing structures to make them more resistant to seismic activity, ground motion, or soil failure due to earthquakes. For homes built before modern building codes, this can be a critical safety upgrade.

## Common Retrofitting Techniques

### Foundation Bolting
Foundation bolting secures your home's wooden frame (sill plate) to its concrete foundation. Without these bolts, the house can slide off the foundation during an earthquake. This is often the first step in retrofitting work and forms the foundation (pun intended) for other seismic improvements.

### Cripple Wall Bracing
Cripple walls are short wood-framed walls between the foundation and first floor. These walls are particularly vulnerable during earthquakes and require bracing with structural panels. Learn more about comprehensive structural assessments in our [foundation repair warning signs article](/blog/foundation-repair-warning-signs).

### Soft Story Strengthening
Multi-story buildings with large openings (like garages) on the ground floor need additional structural support to prevent collapse. This is where the latest [2024 building codes](/blog/building-code-compliance-2024) play an important role in ensuring proper design standards.

## Why Retrofitting Matters

1. **Life Safety**: The primary goal is protecting lives during seismic events
2. **Property Protection**: Reduces structural damage and repair costs
3. **Insurance Benefits**: Many insurers offer discounts for retrofitted homes
4. **Increased Property Value**: Seismically sound homes are more valuable

## Is Your Home a Candidate?

Homes built before 1980 typically lack modern seismic protections and are prime candidates for retrofitting. Signs your home may need retrofitting include:

- Built before current building codes
- Located in high seismic zones
- Has an elevated first floor or crawl space
- Features a soft-story configuration
- Lacks foundation bolting

If you notice any of these characteristics, see our guide on [warning signs your foundation needs assessment](/blog/foundation-repair-warning-signs).

## The Retrofitting Process

1. **Structural Assessment**: A licensed structural engineer evaluates your home
2. **Design Phase**: Custom retrofitting plans are developed
3. **Permit Acquisition**: Necessary building permits are obtained in accordance with [current building codes](/blog/building-code-compliance-2024)
4. **Construction**: Licensed contractors implement the retrofitting
5. **Inspection**: Final inspections ensure code compliance

## Cost Considerations

Seismic retrofitting costs vary based on:
- Home size and age
- Existing structural condition
- Retrofitting techniques required
- Local labor costs

Typical retrofitting projects range from $5,000 to $15,000, though complex projects may cost more. For those considering additions to their property, [structural engineering for home additions](/blog/structural-engineering-home-additions) may also be relevant to discuss retrofit opportunities.

## Getting Started

If you're considering seismic retrofitting, start with a professional structural assessment. Our licensed engineers can evaluate your home and recommend appropriate retrofitting strategies.

Contact us for a free consultation to discuss your seismic safety needs.
    `,
  },
  {
    id: 'building-code-compliance-2024',
    title: '2024 California Building Code Updates: What You Need to Know',
    excerpt: 'Stay informed about the latest building code changes in California and how they affect your residential or commercial project.',
    category: 'Building Codes',
    date: '2025-11-01',
    readTime: '6 min read',
    author: 'AAA Engineering Team',
    image: 'https://images.unsplash.com/photo-1586957697882-2f556cc12d06?w=800&h=400&fit=crop',
    featured: true,
    relatedArticles: ['understanding-seismic-retrofitting', 'adu-structural-requirements', 'commercial-building-inspections'],
    content: `
The 2024 California Building Code brings important updates that affect both residential and commercial construction. Understanding these changes is crucial for successful project completion.

## Key Updates for 2024

### Energy Efficiency Standards
The new code includes more stringent energy efficiency requirements, particularly for HVAC systems and building envelope performance. These standards apply to all new construction and major renovations.

### Structural Safety
Enhanced seismic design requirements for certain building types and updated wind load calculations. These align with best practices in [seismic retrofitting](/blog/understanding-seismic-retrofitting) to protect existing structures as well.

### Fire Safety
New fire sprinkler requirements for multi-family residential buildings and updated fire-resistance ratings. This is particularly important for residential projects and affects [ADU construction](/blog/adu-structural-requirements) significantly.

## Impact on Your Project

These updates may affect:
- Project timelines
- Budget considerations
- Material selections
- Design approaches

For residential projects like [home additions](/blog/structural-engineering-home-additions) or [commercial inspections](/blog/commercial-building-inspections), ensure your engineer is familiar with these updates.

## Ensuring Compliance

Work with licensed professionals who stay current with code changes. Our team tracks all updates to ensure your project meets current standards.

Contact us to discuss how these code updates affect your specific project. Whether you're planning a [seismic retrofit](/blog/understanding-seismic-retrofitting), [home addition](/blog/structural-engineering-home-additions), or [commercial project](/blog/commercial-building-inspections), we can guide you through the latest requirements.
    `,
  },
  {
    id: 'structural-engineering-home-additions',
    title: 'Structural Engineering for Home Additions: A Complete Guide',
    excerpt: 'Planning a home addition? Discover the structural engineering requirements, permit process, and design considerations.',
    category: 'Design & Planning',
    date: '2025-10-31',
    readTime: '10 min read',
    author: 'AAA Engineering Team',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    featured: false,
    relatedArticles: ['building-code-compliance-2024', 'foundation-repair-warning-signs', 'adu-structural-requirements'],
    content: `
Home additions are an excellent way to expand your living space without the hassle of moving. However, they require careful structural engineering to ensure safety and code compliance.

## Types of Home Additions

### Room Additions
Adding square footage horizontally by extending your home's footprint. This is the most common type of home addition.

### Second Story Additions
Building upward to maximize lot usage while preserving yard space. These require careful foundation analysis to ensure the existing structure can support additional loads.

### Bump-Outs
Small extensions that don't require new foundation work.

## Structural Considerations

### Foundation Analysis
The existing foundation must support additional loads, or new foundation elements must be designed. See our article on [foundation repair warning signs](/blog/foundation-repair-warning-signs) to ensure your current foundation is ready for expansion.

### Load Path Design
Ensuring forces from the addition transfer properly to the ground.

### Existing Structure Assessment
Evaluating the current structure's capacity to support modifications. This is similar to the assessment process in [seismic retrofitting](/blog/understanding-seismic-retrofitting), where understanding existing conditions is critical.

## The Engineering Process

1. **Initial Consultation**: Discuss your goals and assess feasibility
2. **Structural Analysis**: Evaluate existing conditions
3. **Design Development**: Create detailed structural plans
4. **Permit Preparation**: Prepare documentation per [2024 building code](/blog/building-code-compliance-2024) requirements
5. **Construction Support**: Provide guidance during building phase

## Common Challenges

- Matching existing structure
- Foundation integration
- Roof tie-ins
- Code compliance for older homes (where [seismic retrofitting](/blog/understanding-seismic-retrofitting) may also be warranted)

## Cost Factors

Structural engineering for home additions typically costs 1-3% of total project cost. Factors include:
- Addition size and complexity
- Existing structure condition
- Required structural upgrades
- Local building department requirements

## Special Consideration: ADU vs Traditional Addition

If you're considering expanding your property for rental income, you may want to explore [ADU construction](/blog/adu-structural-requirements) as an alternative to traditional additions.

Ready to expand your home? Contact us for a free consultation to discuss your addition project.
    `,
  },
  {
    id: 'foundation-repair-warning-signs',
    title: '5 Warning Signs Your Foundation Needs Professional Assessment',
    excerpt: 'Identify the early warning signs of foundation problems and learn when to call a structural engineer for evaluation.',
    category: 'Structural Engineering',
    date: '2025-10-30',
    readTime: '7 min read',
    author: 'AAA Engineering Team',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=400&fit=crop',
    featured: false,
    relatedArticles: ['understanding-seismic-retrofitting', 'structural-engineering-home-additions', 'commercial-building-inspections'],
    content: `
Foundation issues can lead to serious structural problems if left unaddressed. Recognizing warning signs early can save you thousands in repair costs.

## Warning Sign #1: Cracks in Walls or Floors

### What to Look For
- Horizontal cracks in foundation walls
- Stair-step cracks in brick or masonry
- Wide vertical cracks (greater than 1/4 inch)
- Floor cracks that are growing

### When to Worry
Not all cracks indicate serious problems, but widening cracks or those accompanied by other symptoms warrant professional evaluation. If you're also considering [seismic retrofitting](/blog/understanding-seismic-retrofitting), foundation cracks should definitely be addressed as part of that project.

## Warning Sign #2: Doors and Windows That Stick

Doors and windows that suddenly don't open or close properly may indicate foundation settlement. This is especially concerning if multiple doors/windows are affected.

## Warning Sign #3: Sloping or Uneven Floors

Use a level to check floors in different rooms. Significant slopes or visible unevenness suggest foundation movement. This is particularly important before undertaking [home additions](/blog/structural-engineering-home-additions), as the new structure will rely on a stable foundation.

## Warning Sign #4: Gaps and Separations

Look for:
- Gaps between walls and ceiling or floor
- Separation between walls and chimney
- Cabinets or counters pulling away from walls
- Exterior trim separating from the house

## Warning Sign #5: Water Intrusion

Foundation cracks can allow water into basements or crawl spaces. Standing water near the foundation also indicates drainage problems that can affect structural integrity.

## What Causes Foundation Problems?

Common causes include:
- Soil settlement or expansion
- Poor drainage
- Tree roots
- Plumbing leaks
- Seismic activity (see [seismic retrofitting](/blog/understanding-seismic-retrofitting) for protection)
- Poor initial construction

## When to Call a Structural Engineer

Contact a professional if you notice:
- Multiple warning signs
- Rapidly changing conditions
- Previous foundation repairs that failed
- Planning to buy/sell a home with suspected issues

## The Assessment Process

A structural engineer will:
1. Conduct visual inspection
2. Take measurements and document conditions
3. Evaluate soil and drainage
4. Recommend repair strategies
5. Provide cost estimates

## Repair Options

Depending on the problem, solutions may include:
- Foundation underpinning
- Drainage improvements
- Crack repair and sealing
- Soil stabilization
- Structural reinforcement

## Prevention is Key

Regular maintenance can prevent many foundation issues:
- Maintain consistent soil moisture
- Ensure proper drainage away from foundation
- Fix plumbing leaks promptly
- Control tree root growth near foundation
- Monitor and address small cracks early

## Next Steps for Your Project

If you're planning a [home addition](/blog/structural-engineering-home-additions) or [commercial inspection](/blog/commercial-building-inspections), addressing foundation issues first is essential.

If you're seeing any of these warning signs, don't wait. Contact us for a professional foundation assessment.
    `,
  },
  {
    id: 'adu-structural-requirements',
    title: 'ADU Construction: Structural Requirements and Design Tips',
    excerpt: 'Everything you need to know about the structural engineering aspects of building an Accessory Dwelling Unit in California.',
    category: 'Design & Planning',
    date: '2025-10-29',
    readTime: '9 min read',
    author: 'AAA Engineering Team',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
    featured: false,
    relatedArticles: ['building-code-compliance-2024', 'structural-engineering-home-additions', 'understanding-seismic-retrofitting'],
    content: `
Accessory Dwelling Units (ADUs) have become increasingly popular in California as a way to add housing and property value. Understanding the structural requirements is essential for successful ADU construction.

## What is an ADU?

An ADU is a secondary residential unit on a single-family property. Types include:
- **Detached ADUs**: Separate structures on the property
- **Attached ADUs**: Extensions to the existing home
- **Garage Conversions**: Converting existing structures
- **Junior ADUs**: Small units within the existing home

## Structural Design Considerations

### Foundation Design
ADU foundations must be designed for local soil conditions and seismic requirements. Options include:
- Slab-on-grade
- Raised floor with perimeter foundation
- Pier and beam systems

### Framing Systems
Most ADUs use wood framing, though steel framing may be appropriate in some cases. Design must consider:
- Structural loads (dead, live, snow, wind, seismic)
- Proper load path to foundation
- Connection details for lateral forces

### Seismic Design
California's seismic requirements are stringent. Learn more about what this means for existing structures in our [seismic retrofitting guide](/blog/understanding-seismic-retrofitting). ADUs must include:
- Proper foundation anchorage
- Shear wall design
- Diaphragm connections
- Hold-down anchors at critical locations

## Code Requirements

### Building Code Compliance
ADUs must meet current [California Building Code requirements](/blog/building-code-compliance-2024), including:
- Structural safety
- Fire safety
- Energy efficiency
- Accessibility (where required)

### Setback Requirements
Most jurisdictions allow reduced setbacks for ADUs, but structural design must account for property line restrictions.

### Height Limitations
ADUs are typically limited to 16 feet for detached units, affecting structural design options. Similar considerations apply when planning [home additions](/blog/structural-engineering-home-additions).

## The Design Process

### Step 1: Site Assessment
Evaluate property for:
- Available space
- Access
- Utilities
- Soil conditions (important for any new construction, as discussed in [foundation assessment](/blog/foundation-repair-warning-signs))

### Step 2: Structural Engineering
Licensed engineer designs:
- Foundation system
- Structural framing
- Lateral force resisting system
- Connection details

### Step 3: Permit Documentation
Structural plans must include:
- Foundation plans
- Framing plans
- Details and sections
- Structural calculations
- Energy compliance

### Step 4: Construction
Structural engineering support during construction ensures:
- Proper implementation of design
- Response to field conditions
- Inspection coordination

## Common Challenges

### Existing Utilities
Working around existing water, sewer, and electrical lines.

### Site Access
Limited access for construction equipment and materials.

### Soil Conditions
Poor soil may require special foundation design or improvement. This is where professional assessment—similar to what's done in [commercial building inspections](/blog/commercial-building-inspections)—becomes critical.

### Matching Existing Architecture
Designing structure that complements the main house.

## Cost Considerations

Structural engineering for ADUs typically costs $2,500-$7,500 depending on:
- ADU size and type
- Complexity of design
- Soil conditions
- Local requirements

## Value and Benefits

Despite upfront costs, ADUs offer:
- Rental income potential
- Housing for family members
- Increased property value
- Flexible use space

## Comparison with Home Additions

While [home additions](/blog/structural-engineering-home-additions) expand your existing structure, ADUs are separate units. Each has advantages depending on your goals and property layout.

## Getting Started

Before starting your ADU project:
1. Check local zoning regulations
2. Assess your property's suitability
3. Establish your budget
4. Consult with professionals

Our team has extensive experience with ADU structural design throughout California. Contact us to discuss your ADU project and learn how we can help bring your vision to life.
    `,
  },
  {
    id: 'commercial-building-inspections',
    title: 'Commercial Building Inspections: What to Expect',
    excerpt: 'A comprehensive guide to commercial structural inspections, including timelines, requirements, and common findings.',
    category: 'Commercial Projects',
    date: '2025-10-28',
    readTime: '8 min read',
    author: 'AAA Engineering Team',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=400&fit=crop',
    featured: false,
    relatedArticles: ['foundation-repair-warning-signs', 'building-code-compliance-2024', 'understanding-seismic-retrofitting'],
    content: `
Commercial building inspections are critical for ensuring structural safety, code compliance, and long-term building performance. Whether you're buying, selling, or maintaining commercial property, understanding the inspection process is essential.

## Types of Commercial Inspections

### Pre-Purchase Inspections
Before acquiring commercial property, a thorough structural inspection identifies:
- Existing structural issues
- Required repairs
- Code compliance concerns
- Potential future problems

### Periodic Structural Assessments
Regular inspections help maintain building integrity and prevent costly repairs through early detection of issues. These inspections may uncover foundation problems similar to those discussed in our [foundation warning signs article](/blog/foundation-repair-warning-signs).

### Pre-Renovation Inspections
Before major renovations, assess:
- Existing structural capacity
- Required upgrades per [2024 building codes](/blog/building-code-compliance-2024)
- Integration points for new construction

### Post-Damage Assessments
After fires, earthquakes, or other events, evaluate structural safety and required repairs. Seismic events may necessitate [seismic retrofitting](/blog/understanding-seismic-retrofitting) upgrades.

## The Inspection Process

### Initial Planning
- Define inspection scope
- Schedule with stakeholders
- Gather building documentation
- Review previous inspection reports

### On-Site Inspection
Structural engineers evaluate:
- Foundation condition
- Structural framing
- Roof structure
- Lateral force resisting systems
- Connections and details
- Signs of distress or deterioration

### Documentation
Comprehensive reports include:
- Photographs of conditions
- Detailed findings
- Recommended repairs
- Cost estimates
- Prioritization of issues

## Common Issues Found

### Structural Deterioration
- Concrete spalling or cracking
- Steel corrosion
- Wood rot or insect damage
- Masonry cracking

These issues may require repairs similar to those discussed in [foundation repair assessments](/blog/foundation-repair-warning-signs).

### Code Compliance
- Seismic deficiencies (see [seismic retrofitting](/blog/understanding-seismic-retrofitting))
- Fire safety issues
- Accessibility requirements
- Load capacity concerns

### Building Systems
- Roof membrane damage
- Water intrusion
- HVAC support issues
- Parking structure problems

## Timeline Expectations

### Small Buildings (under 5,000 sq ft)
- Inspection: 2-4 hours
- Report: 3-5 business days

### Medium Buildings (5,000-20,000 sq ft)
- Inspection: 4-8 hours
- Report: 5-10 business days

### Large Buildings (over 20,000 sq ft)
- Inspection: 1-3 days
- Report: 10-15 business days

## Cost Factors

Inspection costs vary based on:
- Building size and type
- Inspection scope
- Access requirements
- Report detail level
- Geographic location

Typical costs range from $2,000 to $15,000+ for comprehensive assessments.

## Preparing for Inspection

### Building Owner Responsibilities
- Provide building plans if available
- Ensure access to all areas
- Share maintenance history
- Identify known concerns
- Coordinate with tenants

### Documentation to Gather
- Original construction drawings
- Previous inspection reports
- Maintenance records
- Repair history
- Permits for modifications

## Understanding the Report

### Findings Classification
Issues are typically categorized by severity:
- **Critical**: Immediate safety concerns
- **Major**: Significant issues requiring prompt attention
- **Minor**: Items to monitor or address during routine maintenance

### Recommendations
Reports include:
- Repair priorities
- Cost estimates
- Timeline recommendations
- Required further evaluation

## After the Inspection

### Immediate Actions
Address any critical safety issues immediately.

### Short-Term Planning
Develop plans for major repairs, typically within 1-2 years.

### Long-Term Maintenance
Create maintenance schedule for minor items and ongoing monitoring. This is where staying current with [2024 building codes](/blog/building-code-compliance-2024) is important.

### Budgeting
Use cost estimates to plan capital improvements and maintenance budgets.

## Selecting an Inspector

Look for:
- Licensed structural engineer
- Commercial building experience
- Strong local knowledge
- Clear communication
- Comprehensive reporting
- Professional insurance

## Regulatory Considerations

### Mandatory Inspections
Some jurisdictions require periodic structural inspections for:
- Buildings over certain age
- Specific occupancy types
- Seismic risk areas (consider [seismic retrofitting](/blog/understanding-seismic-retrofitting))
- Historical structures

### Triggering Renovations
Inspection findings may require upgrades when:
- Changing building use
- Expanding occupancy
- Performing major alterations per [current codes](/blog/building-code-compliance-2024)
- Modernizing systems

## Value of Professional Inspections

Regular structural inspections provide:
- Early problem detection
- Reduced long-term costs
- Improved safety
- Better asset management
- Documentation for stakeholders

## Working with Tenants

Coordinate inspections to:
- Minimize business disruption
- Ensure access to leased spaces
- Communicate findings appropriately
- Plan repairs around operations

Our commercial inspection team has evaluated thousands of buildings throughout California. We provide thorough, actionable reports that help you make informed decisions about your commercial property.

Contact us to schedule a commercial building inspection or to discuss your specific evaluation needs.
    `,
  },
]

// Helper functions
export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.featured)
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.id === id)
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return getAllPosts()
  return BLOG_POSTS.filter(post => post.category === category)
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit)
}

export function getRelatedPosts(postId: string, limit: number = 3): BlogPost[] {
  const post = getPostById(postId)
  if (!post || !post.relatedArticles) return []

  return post.relatedArticles
    .map(id => getPostById(id))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, limit)
}
