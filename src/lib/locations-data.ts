// Location Page Data for SEO-optimized city pages
// Each location has comprehensive information about services in that area

import { COMPANY_INFO, SERVICES } from './constants'

export interface Location {
  id: string
  city: string
  county: string
  state: string
  title: string
  metaDescription: string
  heroTitle: string
  heroDescription: string
  whyChoosePoints: string[]
  localExpertise: {
    buildingDepartment: string
    projectsCompleted: string
    soilKnowledge: string
    codeExpertise: string
  }
  buildingDepartmentInfo: {
    address: string
    phone: string
    website: string
    permitTimeline: string
    onlinePortal: boolean
  }
  neighborhoods: string[]
  soilConditions: string
  commonProjects: string[]
  faqs: {
    question: string
    answer: string
  }[]
  nearbyAreas: string[]
  testimonial?: {
    name: string
    text: string
    project: string
  }
}

export const LOCATIONS: Location[] = [
  {
    id: 'irvine',
    city: 'Irvine',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Irvine, California',
    metaDescription: 'Licensed structural engineers serving Irvine, CA. Expert structural design, ADU engineering, seismic retrofitting. PE-stamped plans. Know Irvine building codes. Call (949) 981-4448.',
    heroTitle: 'Licensed Structural Engineers Serving Irvine, California',
    heroDescription: 'AAA Engineering Design provides comprehensive structural engineering services throughout Irvine and surrounding Orange County communities. Our licensed Professional Engineers have completed hundreds of projects in Irvine, working directly with the City of Irvine Building Department to deliver PE-stamped plans that meet all local requirements.',
    whyChoosePoints: [
      'Extensive experience with Irvine Building Department processes and requirements',
      'Completed 150+ structural engineering projects in Irvine communities',
      'Deep understanding of Irvine soil conditions and foundation requirements',
      'Expert knowledge of California Building Code as applied in Irvine',
      'Fast turnaround times for Irvine permit-ready plans',
      'Direct communication with Irvine building officials'
    ],
    localExpertise: {
      buildingDepartment: 'Extensive experience working with Irvine\'s Building & Safety Division, known for their thorough plan review process and high standards.',
      projectsCompleted: '150+ structural engineering projects completed in Irvine including residential additions, ADUs, seismic retrofits, and commercial buildings.',
      soilKnowledge: 'Expert understanding of Irvine\'s diverse soil conditions, from the older northern areas to the newer developments in the Great Park neighborhoods.',
      codeExpertise: 'Specialized knowledge of Irvine\'s additional requirements beyond California Building Code, including enhanced seismic provisions and energy efficiency standards.'
    },
    buildingDepartmentInfo: {
      address: '1 Civic Center Plaza, Irvine, CA 92606',
      phone: '(949) 724-6600',
      website: 'https://www.cityofirvine.org/community-development',
      permitTimeline: '4-6 weeks for complete plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Turtle Rock',
      'University Park',
      'Woodbridge',
      'Northwood',
      'Westpark',
      'Quail Hill',
      'Portola Springs',
      'Orchard Hills',
      'Cypress Village',
      'Great Park Neighborhoods',
      'Irvine Spectrum',
      'Woodbury'
    ],
    soilConditions: 'Irvine features varied soil conditions depending on location. Northern Irvine (Turtle Rock, University Park) has older, more stable soils, while newer southern developments may have engineered fill requiring specific foundation design. Our engineers assess site-specific conditions and design appropriate foundation systems, whether conventional spread footings, post-tension slabs, or specialized deep foundations.',
    commonProjects: [
      'Single-family home additions and remodels',
      'Accessory Dwelling Units (ADUs) and Junior ADUs',
      'Garage conversions to living space',
      'Kitchen and bathroom remodels with structural modifications',
      'Second-story additions',
      'Load-bearing wall removals for open floor plans',
      'Patio covers and outdoor living spaces',
      'Pool structures and retaining walls',
      'Seismic retrofitting for older homes',
      'Solar panel structural calculations',
      'Commercial tenant improvements',
      'HOA-required structural certifications'
    ],
    faqs: [
      {
        question: 'How long does it take to get structural plans approved in Irvine?',
        answer: 'The City of Irvine typically takes 4-6 weeks for complete plan review. However, this can vary based on project complexity and current department workload. We design plans to meet Irvine\'s standards the first time, minimizing resubmissions and delays. Our familiarity with Irvine reviewers helps expedite the process.'
      },
      {
        question: 'Do I need a structural engineer for my Irvine ADU project?',
        answer: 'Yes, California requires PE-stamped structural plans for ADUs. Irvine has specific requirements including foundation design based on soil reports, seismic design, and compliance with HOA regulations. Our engineers specialize in Irvine ADU projects and can navigate both city and HOA approval processes.'
      },
      {
        question: 'What are typical structural engineering costs in Irvine?',
        answer: 'Structural engineering fees in Irvine typically range from $2,500-$5,000 for residential projects like room additions or ADUs, $1,500-$3,000 for smaller projects like patio covers, and $5,000-$15,000+ for complex projects like second-story additions or commercial work. We provide free consultations and transparent quotes.'
      },
      {
        question: 'Does AAA Engineering Design work with Irvine HOAs?',
        answer: 'Yes, many Irvine communities have HOA requirements. We regularly work with Irvine Company and other HOAs, providing the documentation they require including structural calculations, elevation drawings, and material specifications. We understand HOA approval processes and design to meet their aesthetic and structural standards.'
      },
      {
        question: 'Can you handle both residential and commercial projects in Irvine?',
        answer: 'Absolutely. Our licensed Professional Engineers handle all project types in Irvine including single-family homes, multi-family residential, commercial buildings, industrial structures, and tenant improvements. We have experience with projects throughout Irvine\'s business districts including Irvine Spectrum and Airport Area.'
      },
      {
        question: 'Do older Irvine homes need seismic retrofitting?',
        answer: 'Homes built before 1980 in areas like Turtle Rock and University Park may benefit from seismic retrofitting, especially if they have cripple walls or inadequate foundation connections. We provide seismic assessments and design cost-effective retrofit solutions that protect your investment and meet current code requirements.'
      },
      {
        question: 'How do Irvine soil conditions affect my foundation?',
        answer: 'Irvine has diverse soil conditions. Northern Irvine generally has stable native soils suitable for conventional foundations. Newer southern developments often have engineered fill requiring deeper foundations or special design. We review geotechnical reports and design foundations appropriate for your specific Irvine location.'
      },
      {
        question: 'Can you expedite plans for my Irvine project?',
        answer: 'Yes, we offer expedited services for time-sensitive projects. Our typical turnaround for Irvine residential plans is 2-3 weeks, but we can often complete rush projects in 5-10 business days. Contact us to discuss your timeline and we\'ll work to meet your schedule.'
      }
    ],
    nearbyAreas: [
      'Tustin',
      'Santa Ana',
      'Costa Mesa',
      'Newport Beach',
      'Lake Forest',
      'Laguna Hills',
      'Mission Viejo',
      'Aliso Viejo',
      'Laguna Niguel',
      'Orange'
    ],
    testimonial: {
      name: 'Jennifer M.',
      text: 'AAA Engineering Design made our Irvine ADU project seamless. They knew exactly what the city required and our plans sailed through review on the first submission. Their knowledge of Irvine building codes saved us time and money.',
      project: 'ADU Construction - Woodbridge, Irvine'
    }
  },
  {
    id: 'anaheim',
    city: 'Anaheim',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Anaheim, California',
    metaDescription: 'Expert structural engineers serving Anaheim, CA. Residential & commercial structural design, seismic retrofitting, ADU engineering. PE-stamped plans. Call (949) 981-4448 for consultation.',
    heroTitle: 'Licensed Structural Engineers Serving Anaheim, California',
    heroDescription: 'AAA Engineering Design delivers professional structural engineering services throughout Anaheim, from historic neighborhoods to modern developments. Our licensed Professional Engineers understand Anaheim\'s unique structural challenges and work seamlessly with the City of Anaheim Building Department to provide permit-ready, PE-stamped plans.',
    whyChoosePoints: [
      'Over 100 completed structural projects in Anaheim',
      'Specialized experience with Anaheim\'s historic homes and soft-story buildings',
      'Expert knowledge of Anaheim Building Department requirements',
      'Understanding of Anaheim soil conditions and seismic considerations',
      'Fast response times for Anaheim-area projects',
      'Competitive pricing with transparent quotes'
    ],
    localExpertise: {
      buildingDepartment: 'Strong working relationship with Anaheim Building Department. We understand their plan review process, documentation requirements, and preferred submittal formats.',
      projectsCompleted: '100+ projects in Anaheim including historic home renovations, soft-story retrofits, commercial buildings, and new residential construction.',
      soilKnowledge: 'Expertise in Anaheim\'s varied soil conditions, from older central city areas to the Anaheim Hills region, ensuring appropriate foundation design.',
      codeExpertise: 'Comprehensive knowledge of California Building Code applications in Anaheim, including special requirements for historic districts and hillside developments.'
    },
    buildingDepartmentInfo: {
      address: '200 S. Anaheim Blvd, Suite 162, Anaheim, CA 92805',
      phone: '(714) 765-5162',
      website: 'https://www.anaheim.net/604/Building-Safety',
      permitTimeline: '3-5 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Anaheim Hills',
      'Downtown Anaheim',
      'The Colony',
      'Anaheim Resort',
      'West Anaheim',
      'Central Park',
      'Platinum Triangle',
      'Ponderosa',
      'East Anaheim',
      'South Anaheim',
      'Canyon Hills'
    ],
    soilConditions: 'Anaheim spans from flat central areas with generally stable soils to hillside regions requiring specialized foundation engineering. Anaheim Hills properties often need deeper foundations and extensive grading. Older central Anaheim areas may have expansive clay soils requiring specific foundation design. We conduct thorough soil analysis and design appropriate foundation systems for each location.',
    commonProjects: [
      'Soft-story building retrofits (apartments and commercial)',
      'Historic home structural renovations',
      'Anaheim Hills hillside home foundations',
      'Commercial building structural design',
      'Accessory Dwelling Units (ADUs)',
      'Home additions and second stories',
      'Seismic retrofitting for older structures',
      'Restaurant and retail tenant improvements',
      'Load-bearing wall modifications',
      'Balcony and deck structural certifications',
      'Multi-family residential buildings',
      'Industrial building modifications'
    ],
    faqs: [
      {
        question: 'What is soft-story retrofitting and do I need it in Anaheim?',
        answer: 'Soft-story buildings have large openings on the ground floor (like parking garages or retail spaces) with residential units above. These are vulnerable in earthquakes. While Anaheim doesn\'t have a mandatory soft-story ordinance like Los Angeles, property owners are increasingly retrofitting to protect assets and tenants. We assess buildings and design cost-effective retrofit solutions.'
      },
      {
        question: 'Can you help with historic home renovations in Anaheim?',
        answer: 'Yes, we specialize in structural work for Anaheim\'s historic homes, particularly in The Colony and central Anaheim neighborhoods. We balance preservation requirements with modern safety standards, working with the city\'s historic preservation guidelines while ensuring structural integrity and code compliance.'
      },
      {
        question: 'How do Anaheim Hills projects differ from flatland Anaheim?',
        answer: 'Anaheim Hills projects require specialized hillside engineering including slope stability analysis, deeper foundations, extensive retaining walls, and drainage considerations. We have extensive experience with Anaheim Hills properties and understand the unique geological and regulatory requirements for hillside construction.'
      },
      {
        question: 'What are structural engineering costs in Anaheim?',
        answer: 'Fees vary by project complexity. Typical residential additions run $2,500-$5,000, ADUs $3,000-$6,000, soft-story retrofits $5,000-$15,000+, and commercial projects $5,000-$20,000+. Anaheim Hills hillside projects may cost more due to complexity. We provide free consultations and detailed proposals.'
      },
      {
        question: 'How long does Anaheim permit review take?',
        answer: 'The City of Anaheim typically reviews structural plans in 3-5 weeks. Complex projects or those in historic districts may take longer. Our familiarity with Anaheim reviewers and requirements helps ensure faster approvals with fewer resubmissions.'
      },
      {
        question: 'Do you work on commercial properties near Disneyland?',
        answer: 'Yes, we have extensive experience with commercial properties in the Anaheim Resort area. We handle structural engineering for hotels, restaurants, retail spaces, and entertainment venues. We understand the unique requirements for high-traffic commercial properties and work efficiently to minimize business disruption.'
      },
      {
        question: 'Can you help with Platinum Triangle developments?',
        answer: 'Absolutely. We work on multi-family residential and mixed-use projects in Anaheim\'s Platinum Triangle. We have experience with modern high-density construction, podium buildings, and the city\'s urban infill requirements. Our engineers can handle projects from small tenant improvements to major new construction.'
      },
      {
        question: 'What about older Anaheim buildings - do they need seismic upgrades?',
        answer: 'Buildings constructed before 1980 may benefit from seismic retrofitting, especially unreinforced masonry buildings, soft-story structures, and homes with inadequate foundation connections. We provide seismic assessments and design upgrades that improve safety while respecting budgets and building use requirements.'
      }
    ],
    nearbyAreas: [
      'Fullerton',
      'Placentia',
      'Orange',
      'Garden Grove',
      'Buena Park',
      'Stanton',
      'Cypress',
      'Yorba Linda',
      'Brea',
      'Villa Park'
    ],
    testimonial: {
      name: 'Robert K.',
      text: 'We needed structural engineering for our soft-story apartment building in Anaheim. AAA Engineering Design provided a thorough assessment and cost-effective retrofit design. The project went smoothly and we now have a much safer building.',
      project: 'Soft-Story Retrofit - Downtown Anaheim'
    }
  },
  {
    id: 'newport-beach',
    city: 'Newport Beach',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Newport Beach, California',
    metaDescription: 'Premier structural engineers serving Newport Beach, CA. Luxury home engineering, coastal construction, seismic design, ADUs. Licensed PE. Call (949) 981-4448 for consultation.',
    heroTitle: 'Licensed Structural Engineers Serving Newport Beach, California',
    heroDescription: 'AAA Engineering Design provides specialized structural engineering services for Newport Beach\'s unique coastal environment. From Balboa Island to Newport Coast, our licensed Professional Engineers deliver high-quality, PE-stamped structural designs that meet the exacting standards of Newport Beach homeowners and the city\'s Building Department.',
    whyChoosePoints: [
      'Specialized experience with coastal construction and salt-air environments',
      'Extensive Newport Beach project portfolio including luxury homes',
      'Expert knowledge of Newport Beach Building Department requirements',
      'Understanding of coastal zone regulations and CCC requirements',
      'Experience with high-end architectural designs and complex structures',
      'White-glove service matching Newport Beach expectations'
    ],
    localExpertise: {
      buildingDepartment: 'Established relationship with Newport Beach Building Department, known for rigorous standards. We design to their expectations, ensuring smooth plan review.',
      projectsCompleted: '75+ structural projects in Newport Beach including beachfront homes, Newport Coast estates, Balboa Island renovations, and commercial properties.',
      soilKnowledge: 'Specialized understanding of coastal soil conditions, high water tables, marine environment impacts, and foundation requirements for Newport Beach properties.',
      codeExpertise: 'Expert knowledge of California Coastal Commission requirements, Newport Beach local amendments, and enhanced wind/seismic provisions for coastal properties.'
    },
    buildingDepartmentInfo: {
      address: '100 Civic Center Drive, Newport Beach, CA 92660',
      phone: '(949) 644-3210',
      website: 'https://www.newportbeachca.gov/government/departments/building',
      permitTimeline: '4-6 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Balboa Island',
      'Balboa Peninsula',
      'Newport Coast',
      'Corona del Mar',
      'Lido Isle',
      'Harbor Island',
      'Bay Island',
      'Linda Isle',
      'Dover Shores',
      'Cameo Shores',
      'West Newport',
      'Eastbluff',
      'Bayshores',
      'Newport Heights'
    ],
    soilConditions: 'Newport Beach presents unique foundation challenges including high water tables near the bay and ocean, sandy soils requiring special foundation design, potential liquefaction zones in some areas, and saltwater corrosion considerations. Our engineers specify corrosion-resistant materials and design foundations appropriate for coastal conditions, whether elevated foundations for flood zones or deep caissons for hillside Newport Coast properties.',
    commonProjects: [
      'Luxury beachfront home remodels and additions',
      'Newport Coast custom home structural design',
      'Balboa Island home renovations and lifts',
      'Accessory Dwelling Units (ADUs) on coastal properties',
      'Deck and balcony structural design with ocean views',
      'Seismic retrofitting for older coastal homes',
      'Foundation design for high water table areas',
      'Retaining walls for hillside properties',
      'Roof deck and outdoor living space structures',
      'Commercial building renovations in Fashion Island area',
      'Boat dock and marine structure engineering',
      'Flood elevation compliance designs'
    ],
    faqs: [
      {
        question: 'What special considerations apply to Newport Beach coastal construction?',
        answer: 'Coastal properties require corrosion-resistant materials (stainless steel, hot-dip galvanized, or epoxy-coated reinforcement), elevated foundations in flood zones, enhanced wind load design, consideration for salt spray environment, and often California Coastal Commission approval. Our engineers specialize in these requirements and design structures that last in marine environments.'
      },
      {
        question: 'Do I need special permits for Balboa Island construction?',
        answer: 'Balboa Island has unique requirements including strict height limits, setback requirements, and often flood elevation mandates. Many properties are in FEMA flood zones requiring elevated living areas. We design to these requirements and coordinate with both city and federal regulations to ensure compliance.'
      },
      {
        question: 'How much does structural engineering cost in Newport Beach?',
        answer: 'Newport Beach projects typically range from $3,500-$8,000 for residential additions/remodels, $5,000-$10,000 for new ADUs, $8,000-$20,000+ for second-story additions or major remodels, and $15,000-$50,000+ for custom homes or complex projects. Coastal requirements and architectural complexity influence costs. We provide detailed proposals matching the quality expectations of Newport Beach clients.'
      },
      {
        question: 'Can you work with my architect on my Newport Beach project?',
        answer: 'Absolutely. We regularly collaborate with Newport Beach\'s top architects. We integrate seamlessly into design teams, providing structural solutions that realize architectural visions while meeting code requirements. Our engineers communicate clearly with architects, contractors, and homeowners throughout the process.'
      },
      {
        question: 'What about California Coastal Commission requirements?',
        answer: 'Properties in the coastal zone may require CCC approval in addition to city permits. We have experience navigating CCC processes, designing projects that meet their requirements for coastal access, view protection, and environmental considerations while achieving clients\' goals.'
      },
      {
        question: 'Do older Newport Beach homes need seismic retrofitting?',
        answer: 'Many older Newport Beach homes, particularly those built before 1980, benefit from seismic retrofitting. Common upgrades include foundation bolting, cripple wall bracing, and soft-story reinforcement. We assess homes and design retrofits that improve earthquake safety without impacting architectural character.'
      },
      {
        question: 'Can you handle large luxury home projects in Newport Coast?',
        answer: 'Yes, we specialize in high-end custom homes in Newport Coast. We handle complex structural systems including cantilevers, large open spans, infinity pools, hillside foundations, and architectural features requiring sophisticated engineering. Our work matches the quality standards expected in Newport Coast.'
      },
      {
        question: 'How long does Newport Beach permit approval take?',
        answer: 'Newport Beach typically reviews plans in 4-6 weeks, though complex or coastal projects may take longer. Projects requiring CCC review add several months. Our familiarity with Newport Beach standards helps minimize delays. We design to meet their requirements on first submission whenever possible.'
      }
    ],
    nearbyAreas: [
      'Costa Mesa',
      'Irvine',
      'Laguna Beach',
      'Huntington Beach',
      'Corona del Mar',
      'Tustin',
      'Santa Ana',
      'Fountain Valley',
      'Laguna Hills'
    ],
    testimonial: {
      name: 'Michael & Susan T.',
      text: 'AAA Engineering Design engineered our Balboa Island home remodel. They understood the coastal requirements, flood regulations, and worked seamlessly with our architect. The structural design is elegant and the city approval process went smoothly.',
      project: 'Complete Home Remodel - Balboa Island'
    }
  },
  {
    id: 'huntington-beach',
    city: 'Huntington Beach',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Huntington Beach, California',
    metaDescription: 'Licensed structural engineers serving Huntington Beach, CA. Coastal structural design, beach property engineering, seismic retrofitting. PE-stamped plans. Call (949) 981-4448.',
    heroTitle: 'Licensed Structural Engineers Serving Huntington Beach, California',
    heroDescription: 'AAA Engineering Design provides expert structural engineering services throughout Huntington Beach, from beachfront properties to inland developments. Our licensed Professional Engineers understand coastal construction requirements and deliver PE-stamped plans that meet Huntington Beach building standards.',
    whyChoosePoints: [
      'Extensive experience with Huntington Beach coastal properties',
      'Understanding of salt-air corrosion protection requirements',
      'Completed 120+ projects throughout Huntington Beach',
      'Expert knowledge of Huntington Beach Building & Safety Division',
      'Specialized coastal foundation and structural design',
      'Fast response times for Huntington Beach area projects'
    ],
    localExpertise: {
      buildingDepartment: 'Strong working relationship with Huntington Beach Building & Safety Division. We understand their plan review process, coastal zone requirements, and submittal preferences.',
      projectsCompleted: '120+ structural engineering projects completed in Huntington Beach including beachfront homes, downtown buildings, and residential additions across all neighborhoods.',
      soilKnowledge: 'Expertise in Huntington Beach coastal soils including sandy conditions near the beach, potential liquefaction zones, and high water table areas requiring specialized foundation design.',
      codeExpertise: 'Comprehensive knowledge of California Coastal Commission requirements, Huntington Beach local amendments, and enhanced wind/seismic provisions for coastal properties.'
    },
    buildingDepartmentInfo: {
      address: '2000 Main Street, Huntington Beach, CA 92648',
      phone: '(714) 536-5241',
      website: 'https://www.huntingtonbeachca.gov/government/departments/planning/building-safety/',
      permitTimeline: '3-5 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Downtown Huntington Beach',
      'Surf City',
      'Huntington Harbour',
      'Sunset Beach',
      'Bolsa Chica',
      'Meadowlark',
      'Edwards Hill',
      'Fountain Valley',
      'Seacliff',
      'Huntington Continental',
      'College Park'
    ],
    soilConditions: 'Huntington Beach features predominantly sandy soils near the coast with potential for liquefaction in some areas. High water tables are common within a mile of the beach, requiring elevated foundations or special waterproofing. Inland areas have more stable soils but still require careful foundation design. We specify corrosion-resistant materials throughout to withstand the salt-air coastal environment.',
    commonProjects: [
      'Beachfront property structural renovations',
      'Huntington Harbour home remodels',
      'Coastal foundation design with high water tables',
      'Accessory Dwelling Units (ADUs) near beach',
      'Downtown commercial tenant improvements',
      'Pier area restaurant structural engineering',
      'Seismic retrofitting for older beach homes',
      'Deck and balcony structures with ocean views',
      'Garage conversions to living space',
      'Second-story additions',
      'Load-bearing wall modifications',
      'Corrosion-resistant structural design'
    ],
    faqs: [
      {
        question: 'What special considerations apply to Huntington Beach coastal construction?',
        answer: 'Huntington Beach coastal properties require corrosion-resistant materials (hot-dip galvanized or stainless steel hardware), elevated foundations in many areas due to high water tables, wind load design for ocean exposure, and often California Coastal Commission approval. We specialize in these requirements and design structures that last in the coastal environment.'
      },
      {
        question: 'Do I need special permits for beachfront construction?',
        answer: 'Properties in the coastal zone (typically within about 1,000 feet of the beach) may require California Coastal Commission approval in addition to city permits. We have experience navigating both approval processes and design projects that meet CCC requirements for coastal access, view protection, and environmental considerations.'
      },
      {
        question: 'How much does structural engineering cost in Huntington Beach?',
        answer: 'Huntington Beach structural engineering typically ranges from $3,500-$7,000 for residential additions/remodels, $4,000-$8,000 for ADUs, $6,000-$12,000 for second-story additions, and $10,000-$25,000+ for beachfront projects with coastal requirements. Coastal properties often cost slightly more due to additional design considerations. We provide detailed proposals.'
      },
      {
        question: 'Can you work with my architect on my Huntington Beach project?',
        answer: 'Absolutely. We regularly collaborate with Huntington Beach architects and understand the design aesthetics important in beach communities. We provide structural solutions that realize architectural visions while meeting coastal building requirements and budget constraints.'
      },
      {
        question: 'What about high water table foundations?',
        answer: 'Properties near the beach often have water tables just a few feet below grade. We design elevated foundation systems, specify proper waterproofing, and use materials resistant to groundwater exposure. Our foundation designs account for potential uplift forces from high water tables.'
      },
      {
        question: 'Do older Huntington Beach homes need seismic retrofitting?',
        answer: 'Many older beach homes, particularly those built before 1980, benefit from seismic retrofitting including foundation bolting, cripple wall bracing, and connection improvements. Coastal homes face both seismic and wind loads, making proper structural connections especially important. We assess homes and design appropriate retrofits.'
      },
      {
        question: 'How long does Huntington Beach permit approval take?',
        answer: 'Huntington Beach typically reviews structural plans in 3-5 weeks for standard projects. Coastal zone projects requiring California Coastal Commission approval add 2-4 months to the timeline. Our familiarity with both processes helps expedite approvals. We design to meet requirements on first submission whenever possible.'
      },
      {
        question: 'Can you handle commercial projects downtown?',
        answer: 'Yes, we work on commercial projects throughout downtown Huntington Beach including restaurants, retail spaces, office buildings, and mixed-use developments. We understand the unique requirements for high-traffic commercial properties near the beach and coordinate with all stakeholders for successful projects.'
      }
    ],
    nearbyAreas: [
      'Fountain Valley',
      'Westminster',
      'Costa Mesa',
      'Newport Beach',
      'Seal Beach',
      'Garden Grove',
      'Santa Ana'
    ],
    testimonial: {
      name: 'David & Lisa P.',
      text: 'AAA Engineering Design engineered our beachfront home remodel in Huntington Beach. They understood all the coastal requirements and designed a beautiful, structurally sound addition. The city approval process was smooth thanks to their thorough plans.',
      project: 'Beachfront Home Addition - Downtown Huntington Beach'
    }
  },
  {
    id: 'costa-mesa',
    city: 'Costa Mesa',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Costa Mesa, California',
    metaDescription: 'Professional structural engineers serving Costa Mesa, CA. Commercial & residential structural design, ADU engineering, seismic retrofitting. Licensed PE. Call (949) 981-4448.',
    heroTitle: 'Licensed Structural Engineers Serving Costa Mesa, California',
    heroDescription: 'AAA Engineering Design provides comprehensive structural engineering services throughout Costa Mesa. From commercial projects in South Coast Metro to residential work in established neighborhoods, our licensed Professional Engineers deliver quality PE-stamped structural designs.',
    whyChoosePoints: [
      'Extensive Costa Mesa commercial and residential experience',
      'Understanding of Costa Mesa Building Department procedures',
      'Completed 100+ projects throughout Costa Mesa',
      'South Coast Metro commercial expertise',
      'Fast turnaround times for Costa Mesa projects',
      'Competitive pricing with transparent quotes'
    ],
    localExpertise: {
      buildingDepartment: 'Established relationship with Costa Mesa Building Department. We understand their plan review standards, typical review timelines, and preferred documentation formats.',
      projectsCompleted: '100+ structural projects in Costa Mesa including South Coast Metro commercial buildings, residential additions, ADUs, and mixed-use developments.',
      soilKnowledge: 'Expertise in Costa Mesa soil conditions ranging from stable areas to locations requiring deeper foundations. We review geotechnical reports and design appropriate foundation systems.',
      codeExpertise: 'Comprehensive knowledge of California Building Code as applied in Costa Mesa, including local amendments and South Coast Metro area specific requirements.'
    },
    buildingDepartmentInfo: {
      address: '77 Fair Drive, Costa Mesa, CA 92626',
      phone: '(714) 754-5245',
      website: 'https://www.costamesaca.gov/city-hall/development-services/building-safety',
      permitTimeline: '3-5 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'South Coast Metro',
      'Mesa Verde',
      'Eastside Costa Mesa',
      'West Side',
      'College Park',
      'Harbor View Homes',
      'Newport Mesa',
      'Westside',
      'Costa Mesa Country Club',
      'South Coast Plaza area'
    ],
    soilConditions: 'Costa Mesa generally has good soil conditions with variations across the city. South Coast Metro and western areas typically have stable soils suitable for conventional foundations. Some areas may have expansive clays requiring specific foundation design. We work with geotechnical engineers to ensure proper foundation design for each site.',
    commonProjects: [
      'South Coast Metro office building structural engineering',
      'Commercial tenant improvements',
      'Retail building structural design',
      'Residential home additions',
      'Accessory Dwelling Units (ADUs)',
      'Mixed-use development engineering',
      'Restaurant structural modifications',
      'Medical office renovations',
      'Multi-family residential buildings',
      'Seismic retrofitting',
      'Foundation design and repair',
      'Load-bearing wall removals'
    ],
    faqs: [
      {
        question: 'Do you work on both residential and commercial projects in Costa Mesa?',
        answer: 'Yes, we handle all project types in Costa Mesa including single-family homes, multi-family residential, commercial buildings, retail spaces, office buildings, and mixed-use developments. We have particular expertise in South Coast Metro commercial projects and established residential neighborhoods.'
      },
      {
        question: 'What are typical structural engineering costs in Costa Mesa?',
        answer: 'Costa Mesa structural engineering fees typically range from $2,500-$5,000 for residential additions, $3,000-$6,000 for ADUs, $5,000-$15,000 for commercial tenant improvements, and $15,000-$100,000+ for larger commercial buildings. We provide free consultations and detailed written proposals.'
      },
      {
        question: 'How long does Costa Mesa permit review take?',
        answer: 'Costa Mesa Building Department typically reviews structural plans in 3-5 weeks for standard projects. Complex commercial projects may take longer. Our familiarity with Costa Mesa reviewers and requirements helps ensure efficient approvals with minimal corrections.'
      },
      {
        question: 'Can you help with South Coast Metro projects?',
        answer: 'Yes, we have extensive experience with South Coast Metro commercial projects including office buildings, retail spaces, restaurants, and mixed-use developments. We understand the requirements for this important commercial district and work efficiently to meet project timelines.'
      },
      {
        question: 'Do you provide construction phase services?',
        answer: 'Yes, we offer construction administration including shop drawing review, site visits, contractor support, and RFI response. These services ensure structural design intent is properly implemented during construction. We can include these in initial scope or add as needed.'
      },
      {
        question: 'What\'s the process for an ADU in Costa Mesa?',
        answer: 'For Costa Mesa ADUs, we first assess site feasibility, review or assist with floor plans, design the structural system and foundation, prepare PE-stamped plans, and support the permit process. Costa Mesa has efficient ADU permitting, and we design to their standards for smooth approvals.'
      },
      {
        question: 'Can you handle mixed-use projects?',
        answer: 'Absolutely. We regularly work on mixed-use developments combining residential and commercial uses. We understand the complex code requirements, occupancy separations, and structural challenges of mixed-use construction in Costa Mesa.'
      },
      {
        question: 'Do older Costa Mesa neighborhoods need seismic upgrades?',
        answer: 'Many homes in older Costa Mesa neighborhoods (pre-1980s construction) can benefit from seismic retrofitting including foundation bolting and cripple wall bracing. We provide seismic assessments and design cost-effective retrofit solutions that enhance safety and may reduce earthquake insurance premiums.'
      }
    ],
    nearbyAreas: [
      'Newport Beach',
      'Irvine',
      'Santa Ana',
      'Huntington Beach',
      'Fountain Valley',
      'Tustin',
      'Orange'
    ],
    testimonial: {
      name: 'James K.',
      text: 'We hired AAA Engineering Design for our commercial tenant improvement in South Coast Metro. They delivered professional structural plans quickly, worked seamlessly with our architect and contractor, and the city approval went smoothly.',
      project: 'Office TI - South Coast Metro, Costa Mesa'
    }
  },
  {
    id: 'santa-ana',
    city: 'Santa Ana',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Santa Ana, California',
    metaDescription: 'Experienced structural engineers serving Santa Ana, CA. Residential & commercial structural design, historic building engineering, seismic retrofitting. PE-stamped. Call (949) 981-4448.',
    heroTitle: 'Licensed Structural Engineers Serving Santa Ana, California',
    heroDescription: 'AAA Engineering Design provides professional structural engineering services throughout Santa Ana. Our licensed Professional Engineers have extensive experience with Santa Ana projects from historic downtown buildings to modern residential and commercial developments.',
    whyChoosePoints: [
      'Over 125+ structural projects completed in Santa Ana',
      'Historic preservation and adaptive reuse expertise',
      'Strong relationship with Santa Ana Building Department',
      'Multi-family residential building specialization',
      'Soft-story retrofit experience',
      'Bilingual services available for Spanish-speaking clients'
    ],
    localExpertise: {
      buildingDepartment: 'Extensive experience with Santa Ana Building & Planning Division. We understand their review processes, documentation requirements, and work effectively with plan reviewers.',
      projectsCompleted: '125+ projects in Santa Ana including historic building renovations, multi-family residential, commercial buildings, and single-family home improvements.',
      soilKnowledge: 'Comprehensive understanding of Santa Ana soil conditions including areas with expansive clays and varying foundation requirements across different neighborhoods.',
      codeExpertise: 'Expert knowledge of California Building Code application in Santa Ana, including requirements for historic buildings and multi-family residential structures.'
    },
    buildingDepartmentInfo: {
      address: '20 Civic Center Plaza, Santa Ana, CA 92701',
      phone: '(714) 667-2200',
      website: 'https://www.santa-ana.org/pb/planning-building',
      permitTimeline: '4-6 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Downtown Santa Ana',
      'French Park',
      'Floral Park',
      'Civic Center',
      'Delhi',
      'Bristol-Warner',
      'Riverview West',
      'Sandpointe',
      'Park Santiago',
      'Washington Square',
      'Willard'
    ],
    soilConditions: 'Santa Ana soil conditions vary by location. Some areas have expansive clay soils requiring special foundation considerations including deeper footings or post-tension slabs. Other areas have more stable soils suitable for conventional foundations. We review geotechnical reports and design appropriate foundation systems for each site.',
    commonProjects: [
      'Multi-family residential building structural engineering',
      'Historic building renovations and adaptive reuse',
      'Soft-story apartment building retrofits',
      'Single-family home additions and remodels',
      'Accessory Dwelling Units (ADUs)',
      'Commercial building structural modifications',
      'Downtown Santa Ana mixed-use developments',
      'Foundation replacement and underpinning',
      'Seismic retrofitting',
      'Load-bearing wall removals',
      'Second-story additions',
      'Garage conversions'
    ],
    faqs: [
      {
        question: 'Do you have experience with Santa Ana historic buildings?',
        answer: 'Yes, we specialize in historic building structural work, particularly in downtown Santa Ana. We balance preservation requirements with modern safety standards, work within historic building code alternatives, and design sensitive structural improvements that respect architectural character while ensuring safety.'
      },
      {
        question: 'Can you help with multi-family building projects?',
        answer: 'Absolutely. We have extensive multi-family experience in Santa Ana including new apartment buildings, renovations, and soft-story seismic retrofits. We understand the unique requirements for multi-family residential structures and design cost-effective solutions that meet code while serving building economics.'
      },
      {
        question: 'What is soft-story retrofitting and is it required in Santa Ana?',
        answer: 'Soft-story buildings have large openings on the first floor (typically parking) with residential above, making them vulnerable in earthquakes. While Santa Ana doesn\'t currently have a mandatory soft-story ordinance like Los Angeles, many property owners are proactively retrofitting to protect their investments and tenants. We assess buildings and design appropriate retrofit solutions.'
      },
      {
        question: 'How much does structural engineering cost in Santa Ana?',
        answer: 'Santa Ana structural engineering fees typically range from $2,500-$5,000 for residential projects, $3,000-$6,000 for ADUs, $8,000-$20,000 for multi-family buildings, and $5,000-$15,000+ for commercial projects. Historic buildings may cost more due to additional investigation and documentation requirements. We provide free consultations and detailed quotes.'
      },
      {
        question: 'How long does Santa Ana permit review take?',
        answer: 'Santa Ana Building Department typically reviews structural plans in 4-6 weeks. Complex projects, multi-family buildings, or historic properties may take longer. Our experience with Santa Ana reviewers helps expedite the process and minimize resubmissions.'
      },
      {
        question: 'Do you provide services in Spanish?',
        answer: 'Yes, we can provide services in Spanish to better serve Santa Ana\'s diverse community. We can communicate in Spanish for consultations, project discussions, and coordination to ensure clear understanding throughout the project.'
      },
      {
        question: 'Can you handle foundation problems common in Santa Ana?',
        answer: 'Yes, we regularly address foundation issues in Santa Ana including settlement from expansive soils, inadequate original design, and deterioration. We assess foundation conditions, design repair or replacement solutions, and provide construction-ready plans that address the root causes of foundation problems.'
      },
      {
        question: 'Do you work with Santa Ana contractors?',
        answer: 'Yes, we work with many Santa Ana contractors and can recommend qualified builders if needed. Good contractor relationships facilitate smooth construction and ensure structural design is properly implemented. We coordinate closely with contractors throughout the construction process.'
      }
    ],
    nearbyAreas: [
      'Orange',
      'Tustin',
      'Irvine',
      'Costa Mesa',
      'Fountain Valley',
      'Garden Grove',
      'Anaheim'
    ],
    testimonial: {
      name: 'Maria G.',
      text: 'AAA Engineering Design helped us with our multi-family building renovation in Santa Ana. They were professional, responsive, and delivered quality structural plans that met all city requirements. The permit process went smoothly thanks to their expertise.',
      project: 'Multi-Family Renovation - Downtown Santa Ana'
    }
  },
  {
    id: 'fullerton',
    city: 'Fullerton',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Fullerton, California',
    metaDescription: 'Licensed structural engineers serving Fullerton, CA. Residential & commercial structural design, hillside engineering, ADU plans. PE-stamped. Call (949) 981-4448 for consultation.',
    heroTitle: 'Licensed Structural Engineers Serving Fullerton, California',
    heroDescription: 'AAA Engineering Design provides expert structural engineering services throughout Fullerton. From hillside homes to downtown commercial projects, our licensed Professional Engineers deliver comprehensive structural designs that meet Fullerton building standards.',
    whyChoosePoints: [
      'Completed 90+ structural engineering projects in Fullerton',
      'Hillside and sloped lot engineering expertise',
      'Strong working relationship with Fullerton Building Department',
      'Historic downtown Fullerton project experience',
      'Residential and commercial project specialization',
      'Competitive pricing with quality service'
    ],
    localExpertise: {
      buildingDepartment: 'Established relationship with Fullerton Building & Safety Division. We understand their plan review standards, typical timelines, and documentation preferences for efficient approvals.',
      projectsCompleted: '90+ projects in Fullerton including hillside homes, residential additions, commercial buildings, and ADUs across all Fullerton neighborhoods.',
      soilKnowledge: 'Expertise in Fullerton soil conditions from flatland areas to hillside regions requiring specialized foundation design, retaining walls, and slope stability analysis.',
      codeExpertise: 'Comprehensive knowledge of California Building Code as applied in Fullerton, including hillside development requirements and commercial building standards.'
    },
    buildingDepartmentInfo: {
      address: '303 W. Commonwealth Avenue, Fullerton, CA 92832',
      phone: '(714) 738-6590',
      website: 'https://www.cityoffullerton.com/gov/departments/dev_serv/building_safety.asp',
      permitTimeline: '3-5 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Downtown Fullerton',
      'Sunny Hills',
      'Amerige Heights',
      'West Coyote Hills',
      'Valencia Park',
      'North Fullerton',
      'Sunny Hills Estates',
      'Rolling Hills',
      'Laguna Lake',
      'Commonwealth-Lemon District'
    ],
    soilConditions: 'Fullerton features varied soil conditions. Hillside areas require slope stability analysis, deeper foundations, and often retaining walls. Flatland areas generally have stable soils but may have localized expansive clay requiring foundation design considerations. We coordinate with geotechnical engineers and design appropriate foundation systems for each site.',
    commonProjects: [
      'Hillside home structural engineering',
      'Slope stabilization and retaining walls',
      'Single-family home additions and remodels',
      'Accessory Dwelling Units (ADUs)',
      'Downtown Fullerton commercial renovations',
      'Second-story additions',
      'Foundation design for sloped lots',
      'Seismic retrofitting',
      'Load-bearing wall modifications',
      'Deck and balcony structures',
      'Garage conversions',
      'Commercial tenant improvements'
    ],
    faqs: [
      {
        question: 'Do you specialize in Fullerton hillside properties?',
        answer: 'Yes, hillside engineering is one of our specialties. We design foundations for sloped lots, retaining walls for grade changes, and address slope stability concerns. Fullerton hillside projects require specialized engineering, and we have extensive experience with these challenges throughout areas like Sunny Hills and West Coyote Hills.'
      },
      {
        question: 'How much does structural engineering cost in Fullerton?',
        answer: 'Fullerton structural engineering typically costs $2,500-$5,000 for standard residential projects, $3,500-$7,000 for ADUs, $5,000-$12,000 for hillside homes, and $6,000-$15,000+ for second-story additions. Hillside projects cost more due to additional analysis and retaining wall design. We provide detailed proposals after site evaluation.'
      },
      {
        question: 'How long does Fullerton permit approval take?',
        answer: 'Fullerton Building Department typically reviews structural plans in 3-5 weeks for standard projects. Hillside projects may take longer due to additional review requirements. Our familiarity with Fullerton standards helps ensure efficient approvals with minimal plan check corrections.'
      },
      {
        question: 'Can you help with downtown Fullerton commercial projects?',
        answer: 'Yes, we work on commercial projects throughout downtown Fullerton including restaurants, retail spaces, office buildings, and mixed-use developments. We understand the unique requirements of historic downtown buildings and modern commercial construction.'
      },
      {
        question: 'What about retaining walls for sloped lots?',
        answer: 'Retaining walls are often necessary for Fullerton hillside properties. We design engineered retaining walls that meet code requirements, address drainage concerns, and integrate with overall site design. Our retaining wall designs are stamped by our PE and ready for permit submittal.'
      },
      {
        question: 'Do you work with geotechnical engineers?',
        answer: 'Yes, for hillside projects and sites with questionable soil conditions, we coordinate with geotechnical engineers. We review their reports, incorporate their recommendations into our structural designs, and ensure foundation systems address site-specific soil conditions. We can recommend qualified geotechnical engineers if you need one.'
      },
      {
        question: 'Can older Fullerton homes be seismically upgraded?',
        answer: 'Absolutely. Many older Fullerton homes, especially hillside properties and pre-1980s construction, benefit from seismic retrofitting. We assess existing conditions and design cost-effective seismic upgrades including foundation bolting, cripple wall bracing, and connection improvements that enhance earthquake safety.'
      },
      {
        question: 'Do you provide ADU engineering services in Fullerton?',
        answer: 'Yes, we design ADUs throughout Fullerton including flatland and hillside locations. We understand Fullerton ADU requirements and design cost-effective structural systems that meet code while respecting your budget. From detached ADUs to garage conversions, we handle all ADU types.'
      }
    ],
    nearbyAreas: [
      'Brea',
      'La Habra',
      'Placentia',
      'Anaheim',
      'Buena Park',
      'La Mirada',
      'Yorba Linda'
    ],
    testimonial: {
      name: 'Robert & Karen M.',
      text: 'AAA Engineering Design engineered our hillside home addition in Sunny Hills. They handled all the slope stability concerns, designed necessary retaining walls, and delivered thorough structural plans. The city approval went smoothly and construction proceeded without issues.',
      project: 'Hillside Home Addition - Sunny Hills, Fullerton'
    }
  },
  {
    id: 'mission-viejo',
    city: 'Mission Viejo',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Mission Viejo, California',
    metaDescription: 'Professional structural engineers serving Mission Viejo, CA. Residential structural design, ADU engineering, seismic retrofitting, hillside homes. Licensed PE. Call (949) 981-4448.',
    heroTitle: 'Licensed Structural Engineers Serving Mission Viejo, California',
    heroDescription: 'AAA Engineering Design provides comprehensive structural engineering services throughout Mission Viejo. Our licensed Professional Engineers specialize in residential structural design, delivering PE-stamped plans that meet Mission Viejo building standards and HOA requirements.',
    whyChoosePoints: [
      'Extensive Mission Viejo residential project experience',
      'Understanding of Mission Viejo HOA requirements',
      'Completed 85+ projects throughout Mission Viejo',
      'Hillside and sloped lot engineering expertise',
      'Fast turnaround times for residential projects',
      'Competitive pricing with transparent proposals'
    ],
    localExpertise: {
      buildingDepartment: 'Strong working relationship with Mission Viejo Building & Safety Division. We understand their plan review processes, typical timelines, and coordination with HOA approvals.',
      projectsCompleted: '85+ residential structural projects in Mission Viejo including home additions, ADUs, remodels, hillside homes, and seismic retrofits across all villages.',
      soilKnowledge: 'Expertise in Mission Viejo soil conditions including hillside areas requiring slope analysis and flatland areas with generally stable soils. We design appropriate foundations for each location.',
      codeExpertise: 'Comprehensive knowledge of California Building Code as applied in Mission Viejo, plus understanding of typical HOA structural and architectural requirements.'
    },
    buildingDepartmentInfo: {
      address: '200 Civic Center, Mission Viejo, CA 92691',
      phone: '(949) 470-3000',
      website: 'https://www.cityofmissionviejo.org/city-hall/community-development/building-safety',
      permitTimeline: '3-4 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Mission Viejo Lake',
      'Oso Creek',
      'Casta del Sol',
      'Alicia',
      'Cypress Point',
      'Felipe',
      'Lakeside',
      'Montanoso',
      'Pavion',
      'Saddleback Valley',
      'Valencia'
    ],
    soilConditions: 'Mission Viejo generally has good soil conditions with variations in hillside areas. Most flatland areas have stable soils suitable for conventional foundations. Hillside properties may require deeper foundations, retaining walls, and slope stability analysis. We review geotechnical reports and design appropriate foundation systems.',
    commonProjects: [
      'Single-family home additions and remodels',
      'Accessory Dwelling Units (ADUs)',
      'Second-story additions',
      'Hillside home structural engineering',
      'Kitchen and bathroom remodels with structural changes',
      'Load-bearing wall removals for open floor plans',
      'Garage conversions to living space',
      'Patio covers and outdoor structures',
      'Pool structures and retaining walls',
      'Seismic retrofitting',
      'Foundation repair and replacement',
      'Deck and balcony structures'
    ],
    faqs: [
      {
        question: 'Do you work with Mission Viejo HOAs?',
        answer: 'Yes, we regularly work with Mission Viejo HOAs and understand their review requirements. We provide all documentation HOAs need including structural drawings, calculations, material specifications, and elevation drawings. Our designs meet HOA architectural and structural standards while satisfying building code requirements.'
      },
      {
        question: 'How much does structural engineering cost in Mission Viejo?',
        answer: 'Mission Viejo structural engineering typically ranges from $2,500-$5,000 for residential additions, $3,000-$6,000 for ADUs, $6,000-$12,000 for second-story additions, and $4,000-$8,000 for hillside projects. We provide free initial consultations and detailed written proposals with transparent pricing.'
      },
      {
        question: 'How long does the process take in Mission Viejo?',
        answer: 'Design typically takes 2-3 weeks for standard residential projects. Mission Viejo Building & Safety reviews plans in 3-4 weeks. HOA approval can add 2-4 weeks. Total timeline from engagement to permit-ready plans is typically 7-11 weeks. We can expedite for urgent projects.'
      },
      {
        question: 'Can you help with ADU projects in Mission Viejo?',
        answer: 'Yes, ADUs are one of our specialties in Mission Viejo. We design detached ADUs, garage conversions, and attached ADUs. We navigate both city building requirements and HOA approval processes, providing all necessary documentation for both approvals. Mission Viejo has streamlined ADU processes we leverage for efficient approvals.'
      },
      {
        question: 'Do you handle hillside properties?',
        answer: 'Absolutely. Mission Viejo has numerous hillside properties requiring specialized engineering. We design foundations for sloped lots, retaining walls, and address slope stability. Our hillside expertise ensures your project meets code while respecting the site\'s natural characteristics.'
      },
      {
        question: 'What about pool structures and retaining walls?',
        answer: 'Yes, we design pool structures, retaining walls, and outdoor living spaces common in Mission Viejo homes. These require structural engineering for proper design and permit approval. We provide PE-stamped plans that meet city requirements.'
      },
      {
        question: 'Can older Mission Viejo homes be seismically upgraded?',
        answer: 'Yes, homes in older Mission Viejo villages (built 1960s-1970s) can benefit from seismic retrofitting including foundation bolting and cripple wall bracing. We assess homes, design appropriate upgrades, and provide plans for permit approval. Retrofits can also reduce earthquake insurance premiums.'
      },
      {
        question: 'Do you attend HOA architectural review meetings?',
        answer: 'We can attend HOA meetings if needed to present and explain structural aspects of projects. While not typically necessary, we support clients through HOA approval processes and can provide technical clarifications to committees when helpful.'
      }
    ],
    nearbyAreas: [
      'Laguna Niguel',
      'Lake Forest',
      'Rancho Santa Margarita',
      'Laguna Hills',
      'Aliso Viejo',
      'Irvine',
      'San Juan Capistrano'
    ],
    testimonial: {
      name: 'Tom & Sandra H.',
      text: 'We hired AAA Engineering Design for our ADU project in Mission Viejo. They understood both city and HOA requirements, delivered quality plans, and both approvals went smoothly. Professional service from start to finish.',
      project: 'Detached ADU - Mission Viejo Lake Area'
    }
  },
  {
    id: 'laguna-beach',
    city: 'Laguna Beach',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Laguna Beach, California',
    metaDescription: 'Premier structural engineers serving Laguna Beach, CA. Luxury coastal homes, hillside engineering, seismic design, ADUs. Licensed PE. Call (949) 981-4448 for expert consultation.',
    heroTitle: 'Licensed Structural Engineers Serving Laguna Beach, California',
    heroDescription: 'AAA Engineering Design provides specialized structural engineering for Laguna Beach\'s unique coastal and hillside environment. From oceanfront estates to canyon properties, our licensed Professional Engineers deliver sophisticated structural designs meeting Laguna Beach\'s exacting standards.',
    whyChoosePoints: [
      'Specialized coastal and hillside engineering expertise',
      'Experience with Laguna Beach luxury home market',
      'Understanding of California Coastal Commission requirements',
      'Completed 60+ projects throughout Laguna Beach',
      'Expert knowledge of challenging site conditions',
      'White-glove service matching Laguna Beach expectations'
    ],
    localExpertise: {
      buildingDepartment: 'Established relationship with Laguna Beach Building Department known for rigorous review standards. We design to their expectations ensuring efficient approvals.',
      projectsCompleted: '60+ projects in Laguna Beach including oceanfront homes, hillside properties, canyon residences, downtown buildings, and luxury remodels.',
      soilKnowledge: 'Specialized expertise in Laguna Beach diverse geological conditions including coastal bluffs, steep hillsides, canyon soils, and landslide-prone areas requiring sophisticated engineering solutions.',
      codeExpertise: 'Expert knowledge of California Coastal Commission requirements, Laguna Beach local codes, enhanced seismic and wind provisions, and environmental constraints affecting construction.'
    },
    buildingDepartmentInfo: {
      address: '505 Forest Avenue, Laguna Beach, CA 92651',
      phone: '(949) 497-0330',
      website: 'https://www.lagunabeachcity.net/government/city-departments/community-development/building',
      permitTimeline: '6-8 weeks for plan review',
      onlinePortal: false
    },
    neighborhoods: [
      'Top of the World',
      'Laguna Village',
      'Bluebird Canyon',
      'Three Arch Bay',
      'South Laguna',
      'North Laguna',
      'Woods Cove',
      'Arch Beach Heights',
      'Temple Hills',
      'Mystic Hills',
      'Downtown Laguna'
    ],
    soilConditions: 'Laguna Beach presents some of California\'s most challenging soil and geological conditions. Steep hillsides, active and ancient landslides, marine terrace deposits, and coastal bluff erosion all require specialized structural engineering. Deep foundations, extensive retaining walls, slope stability analysis, and geotechnical consultation are often necessary. We have extensive experience with these challenging conditions.',
    commonProjects: [
      'Luxury oceanfront home structural engineering',
      'Hillside and canyon property foundation design',
      'Coastal bluff home renovations',
      'Slope stabilization and retaining walls',
      'Accessory Dwelling Units on challenging sites',
      'Historic home structural renovations',
      'High-end remodels and additions',
      'Cantilever and hillside deck structures',
      'Deep foundation systems (caissons, grade beams)',
      'Seismic retrofitting for ocean-view homes',
      'Landslide repair structural engineering',
      'Coastal Commission-compliant designs'
    ],
    faqs: [
      {
        question: 'What makes Laguna Beach structural engineering unique?',
        answer: 'Laguna Beach combines extreme hillside conditions, coastal exposure, landslide geology, and strict Coastal Commission requirements. Projects often require deep foundations (caissons), extensive retaining walls, slope stability analysis, geotechnical engineering, and coastal permit processes. We specialize in these complex requirements and creative structural solutions.'
      },
      {
        question: 'Do you handle California Coastal Commission approvals?',
        answer: 'Yes, we have extensive experience with Coastal Commission requirements. We design projects that meet their standards for coastal access, view protection, bluff setbacks, and environmental considerations. While we don\'t process permits directly, we coordinate with coastal planners and provide all required structural documentation.'
      },
      {
        question: 'How much does structural engineering cost in Laguna Beach?',
        answer: 'Laguna Beach structural engineering typically ranges from $8,000-$20,000 for hillside additions, $10,000-$25,000 for major remodels, $15,000-$35,000+ for new hillside homes, and $6,000-$12,000 for challenging ADU sites. Costs reflect the complexity of Laguna Beach conditions. We provide detailed proposals after site evaluation.'
      },
      {
        question: 'Can you work with my architect on my Laguna Beach project?',
        answer: 'Absolutely. We regularly collaborate with Laguna Beach\'s top architects and understand the design sophistication expected in this market. We provide structural solutions that realize architectural visions while meeting code and addressing challenging site conditions. Strong architect-engineer coordination is essential for Laguna Beach projects.'
      },
      {
        question: 'What about landslide-prone areas?',
        answer: 'Many Laguna Beach properties are in or near landslide areas. We work with geotechnical engineers specializing in landslide geology, design deep foundation systems bypassing unstable soils, and create structural solutions for building in these challenging areas. Proper engineering is essential for safety and insurability.'
      },
      {
        question: 'How long does Laguna Beach permit approval take?',
        answer: 'Laguna Beach typically reviews plans in 6-8 weeks, longer than many cities due to thorough review standards. Coastal zone projects requiring Coastal Commission approval add 3-6 months. Our experience with both processes helps manage timelines and expectations. Quality design upfront minimizes delays.'
      },
      {
        question: 'Do you handle ocean-view deck and balcony structures?',
        answer: 'Yes, we design cantilevered decks, viewing platforms, and balconies common in Laguna Beach ocean-view homes. These require sophisticated structural engineering considering gravity loads, seismic forces, wind loads, and corrosion protection. We design beautiful, safe structures that maximize views while meeting code.'
      },
      {
        question: 'Can older Laguna Beach homes be retrofitted?',
        answer: 'Yes, many older Laguna Beach homes benefit from seismic retrofitting and foundation improvements. Hillside homes especially need proper foundation connections and lateral bracing. We assess existing conditions and design appropriate upgrades that enhance safety without compromising architectural character.'
      }
    ],
    nearbyAreas: [
      'Laguna Niguel',
      'Aliso Viejo',
      'Dana Point',
      'San Juan Capistrano',
      'Laguna Woods',
      'Irvine',
      'Newport Beach'
    ],
    testimonial: {
      name: 'Christopher & Alexandra W.',
      text: 'AAA Engineering Design engineered our hillside home renovation in Bluebird Canyon. They understood the challenging geology, designed appropriate deep foundations, and coordinated seamlessly with our architect and geotechnical engineer. Exceptional engineering for a demanding site.',
      project: 'Luxury Home Renovation - Bluebird Canyon, Laguna Beach'
    }
  },
  {
    id: 'lake-forest',
    city: 'Lake Forest',
    county: 'Orange County',
    state: 'California',
    title: 'Structural Engineering Services in Lake Forest, California',
    metaDescription: 'Licensed structural engineers serving Lake Forest, CA. Residential & commercial structural design, ADU engineering, seismic retrofitting. PE-stamped plans. Call (949) 981-4448.',
    heroTitle: 'Licensed Structural Engineers Serving Lake Forest, California',
    heroDescription: 'AAA Engineering Design provides professional structural engineering services throughout Lake Forest. Our licensed Professional Engineers deliver comprehensive structural designs for residential and commercial projects that meet Lake Forest building standards.',
    whyChoosePoints: [
      'Completed 70+ structural projects in Lake Forest',
      'Understanding of Lake Forest Building & Safety procedures',
      'Experience with Lake Forest HOA requirements',
      'Residential and commercial project expertise',
      'Fast turnaround times for standard projects',
      'Competitive pricing with quality service'
    ],
    localExpertise: {
      buildingDepartment: 'Strong working relationship with Lake Forest Building & Safety Division. We understand their plan review processes, documentation requirements, and typical timelines.',
      projectsCompleted: '70+ projects in Lake Forest including residential additions, ADUs, commercial buildings, and remodels across all Lake Forest neighborhoods.',
      soilKnowledge: 'Comprehensive understanding of Lake Forest soil conditions, generally stable with some areas requiring specific foundation design based on geotechnical recommendations.',
      codeExpertise: 'Expert knowledge of California Building Code as applied in Lake Forest, including coordination with HOA requirements common in Lake Forest communities.'
    },
    buildingDepartmentInfo: {
      address: '25550 Commercentre Drive, Lake Forest, CA 92630',
      phone: '(949) 461-3400',
      website: 'https://www.lakeforestca.gov/331/Building-Safety',
      permitTimeline: '3-4 weeks for plan review',
      onlinePortal: true
    },
    neighborhoods: [
      'Baker Ranch',
      'Portola Hills',
      'Foothill Ranch',
      'Serrano Heights',
      'Serrano Summit',
      'Sun & Sail Club',
      'Lake Forest Beach & Tennis Club',
      'Rancho Cielo',
      'Ironwood',
      'Northwood'
    ],
    soilConditions: 'Lake Forest generally has good soil conditions suitable for conventional residential and commercial foundations. Some hillside areas in Portola Hills may require slope analysis and deeper foundations. We review geotechnical reports when available and design appropriate foundation systems for each site.',
    commonProjects: [
      'Single-family home additions and remodels',
      'Accessory Dwelling Units (ADUs)',
      'Second-story additions',
      'Commercial tenant improvements',
      'Retail building structural modifications',
      'Office building renovations',
      'Load-bearing wall removals',
      'Kitchen and bathroom remodels with structural changes',
      'Garage conversions to living space',
      'Patio covers and outdoor structures',
      'Seismic retrofitting',
      'Foundation design and repair'
    ],
    faqs: [
      {
        question: 'Do you work with Lake Forest HOAs?',
        answer: 'Yes, many Lake Forest communities have HOA requirements. We regularly provide documentation HOAs need including structural drawings, calculations, and material specifications. We understand HOA approval processes and design to meet both city building codes and HOA architectural standards.'
      },
      {
        question: 'How much does structural engineering cost in Lake Forest?',
        answer: 'Lake Forest structural engineering typically costs $2,500-$5,000 for residential additions, $3,000-$6,000 for ADUs, $5,000-$10,000 for second-story additions, and $5,000-$15,000 for commercial projects. We provide free consultations and detailed written proposals with transparent pricing.'
      },
      {
        question: 'How long does Lake Forest permit review take?',
        answer: 'Lake Forest Building & Safety typically reviews structural plans in 3-4 weeks for standard projects. Our familiarity with Lake Forest reviewers and requirements helps ensure efficient approvals with minimal plan check corrections. We can often expedite for time-sensitive projects.'
      },
      {
        question: 'Can you help with ADU projects in Lake Forest?',
        answer: 'Yes, ADUs are one of our specialties. We design detached ADUs, garage conversions, and attached ADUs throughout Lake Forest. We understand both city requirements and HOA considerations, providing all documentation needed for both approvals. Lake Forest has efficient ADU permitting processes.'
      },
      {
        question: 'Do you handle commercial projects in Lake Forest?',
        answer: 'Absolutely. We work on commercial projects including retail buildings, office spaces, restaurants, and tenant improvements. We have experience with Lake Forest commercial areas and understand requirements for commercial construction and renovations.'
      },
      {
        question: 'What about Baker Ranch and newer developments?',
        answer: 'We have extensive experience in Baker Ranch and other newer Lake Forest developments. These areas have modern building requirements and often strict HOA standards. We understand these requirements and design projects that meet all applicable codes and community standards.'
      },
      {
        question: 'Can you work with my architect or contractor?',
        answer: 'Yes, we regularly collaborate with architects, contractors, and other design professionals. We coordinate seamlessly with project teams, attend meetings as needed, and ensure structural design integrates properly with architectural and construction plans. Good coordination leads to better projects.'
      },
      {
        question: 'Do you provide construction phase services?',
        answer: 'Yes, we offer construction administration including shop drawing review, site visits, RFI response, and contractor support. These services ensure structural design is properly implemented during construction. We can include these in initial scope or add as construction begins.'
      }
    ],
    nearbyAreas: [
      'Mission Viejo',
      'Irvine',
      'Laguna Hills',
      'Rancho Santa Margarita',
      'Laguna Niguel',
      'Aliso Viejo',
      'Trabuco Canyon'
    ],
    testimonial: {
      name: 'Brian & Nicole S.',
      text: 'We used AAA Engineering Design for our home addition in Lake Forest. They were professional, responsive, and delivered quality structural plans. Both city and HOA approvals went smoothly. We would definitely use them again.',
      project: 'Home Addition - Baker Ranch, Lake Forest'
    }
  }
]

// Helper functions
export function getLocationById(id: string): Location | undefined {
  return LOCATIONS.find(location => location.id === id)
}

export function getAllLocations(): Location[] {
  return LOCATIONS
}

export function getLocationsByCounty(county: string): Location[] {
  return LOCATIONS.filter(location => location.county === county)
}
