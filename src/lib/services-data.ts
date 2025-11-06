// Service Page Data for SEO-optimized service pages
// Each service has comprehensive information about specific engineering services

import { COMPANY_INFO } from './constants'

export interface Service {
  id: string
  title: string
  shortTitle: string
  metaDescription: string
  heroTitle: string
  heroDescription: string
  icon: string
  overview: string
  keyBenefits: string[]
  whatWeProvide: {
    title: string
    description: string
  }[]
  processSteps: {
    step: number
    title: string
    description: string
  }[]
  commonApplications: string[]
  costRange: {
    description: string
    typical: string
    factors: string[]
  }
  timeline: {
    design: string
    permitting: string
    total: string
  }
  faqs: {
    question: string
    answer: string
  }[]
  cta: {
    headline: string
    description: string
  }
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'structural-engineering',
    title: 'Structural Engineering Services in California',
    shortTitle: 'Structural Engineering',
    metaDescription: 'Professional structural engineering services throughout California. Licensed PE-stamped plans for residential & commercial projects. Expert structural design, analysis, calculations. Call (949) 981-4448.',
    heroTitle: 'Professional Structural Engineering Services',
    heroDescription: 'AAA Engineering Design provides comprehensive structural engineering services for residential and commercial projects throughout California. Our licensed Professional Engineers deliver safe, code-compliant, cost-effective structural solutions.',
    icon: '🏗️',
    overview: 'Structural engineering is the science and art of designing buildings and structures to safely support loads and resist environmental forces. Our structural engineers analyze, design, and detail the structural framework of buildings, ensuring they meet California Building Code requirements while optimizing for safety, functionality, and economy.',
    keyBenefits: [
      'PE-stamped plans accepted by all California jurisdictions',
      'Cost-effective structural designs that meet code without over-engineering',
      'Fast turnaround times for residential and commercial projects',
      'Expert seismic design for California earthquake requirements',
      'Seamless coordination with architects and contractors',
      'Construction support and field inspections available',
      'Licensed Professional Engineers with 20+ years combined experience'
    ],
    whatWeProvide: [
      {
        title: 'Structural Analysis & Design',
        description: 'Complete structural analysis using advanced engineering software. We evaluate loads, design structural members, and create comprehensive structural systems for your project.'
      },
      {
        title: 'Construction Documents',
        description: 'Detailed structural drawings and specifications including foundation plans, framing plans, connection details, and schedules. All drawings are PE-stamped for permit submittal.'
      },
      {
        title: 'Structural Calculations',
        description: 'Comprehensive engineering calculations documenting our structural design. Required by building departments and useful for contractors and future renovations.'
      },
      {
        title: 'Code Compliance',
        description: 'Designs that meet California Building Code, local amendments, and jurisdiction-specific requirements. We stay current with all code changes and requirements.'
      },
      {
        title: 'Permit Assistance',
        description: 'Support navigating the building department approval process. We respond to plan check corrections and coordinate with building officials.'
      },
      {
        title: 'Construction Phase Services',
        description: 'Shop drawing review, RFI response, site visits, and construction observation to ensure structural design intent is properly executed.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Free consultation to discuss your project, review site conditions, understand requirements, and provide preliminary guidance on structural approach and estimated costs.'
      },
      {
        step: 2,
        title: 'Proposal & Agreement',
        description: 'Detailed written proposal outlining scope of work, deliverables, fees, and timeline. Clear agreement before any work begins.'
      },
      {
        step: 3,
        title: 'Information Gathering',
        description: 'Collect architectural plans, geotechnical reports, existing structure information, and jurisdiction requirements necessary for structural design.'
      },
      {
        step: 4,
        title: 'Structural Design',
        description: 'Engineering analysis and design of structural system including foundations, framing, lateral force-resisting system, and connections.'
      },
      {
        step: 5,
        title: 'Drawing Production',
        description: 'Creation of comprehensive structural drawings showing all structural elements, details, schedules, and notes required for construction.'
      },
      {
        step: 6,
        title: 'Calculations & Stamping',
        description: 'Preparation of structural calculations and PE-stamping of all drawings for submittal to building department.'
      },
      {
        step: 7,
        title: 'Plan Review Support',
        description: 'Response to building department plan check corrections and coordination with jurisdiction as needed for approval.'
      },
      {
        step: 8,
        title: 'Construction Support',
        description: 'Availability during construction for questions, clarifications, site visits, and any needed modifications or field adjustments.'
      }
    ],
    commonApplications: [
      'New residential construction',
      'Home additions and remodels',
      'Accessory Dwelling Units (ADUs)',
      'Commercial buildings and tenant improvements',
      'Industrial and warehouse facilities',
      'Seismic retrofitting',
      'Foundation design and repair',
      'Load-bearing wall modifications',
      'Second-story additions',
      'Deck and balcony structures',
      'Retaining walls',
      'Carports and covered parking',
      'Solar panel structural support',
      'Building assessments and evaluations'
    ],
    costRange: {
      description: 'Structural engineering fees vary based on project type, size, and complexity.',
      typical: '$2,500 - $15,000 for typical residential projects; $5,000 - $100,000+ for commercial projects',
      factors: [
        'Project size and complexity',
        'Building type (residential vs. commercial)',
        'Site conditions and soil quality',
        'Seismic and wind load requirements',
        'Number of floors and building height',
        'Architectural complexity',
        'Coordination requirements',
        'Timeline and schedule constraints',
        'Jurisdiction requirements',
        'Need for construction phase services'
      ]
    },
    timeline: {
      design: '1-4 weeks for most residential projects; 4-16 weeks for commercial',
      permitting: '2-8 weeks depending on jurisdiction',
      total: '3-12 weeks for typical residential; 6-24+ weeks for commercial'
    },
    faqs: [
      {
        question: 'Do I need a structural engineer for my project?',
        answer: 'You need a structural engineer if your project involves structural modifications (load-bearing walls, foundations, additions), new construction, or if required by your building department. In California, structural plans must be prepared and stamped by a licensed PE. Even for projects where not legally required, a structural engineer ensures safety and can save money by optimizing designs.'
      },
      {
        question: 'How much does structural engineering cost?',
        answer: 'Residential projects typically range from $2,500-$5,000 for simple additions to $8,000-$15,000 for complex projects like second stories. Commercial projects range from $5,000 for small tenant improvements to $100,000+ for large buildings. We provide free consultations and detailed quotes before starting work.'
      },
      {
        question: 'How long does structural engineering take?',
        answer: 'Most residential projects take 1-3 weeks for design and drawing production. Commercial projects take 4-16 weeks depending on size and complexity. Timeline depends on project complexity, information availability, and how quickly we receive architectural plans and geotechnical reports.'
      },
      {
        question: 'What do I need to provide to my structural engineer?',
        answer: 'We need architectural drawings or sketches, site location, any existing structure information, and geotechnical reports if available. For remodels, photos of existing structure are helpful. For new construction, finalized architectural plans are ideal but we can work with preliminary plans.'
      },
      {
        question: 'Will you help with building permits?',
        answer: 'Yes, we prepare permit-ready structural drawings and calculations. We can respond to plan check corrections and coordinate with building departments. We guide you through the structural aspects of the permitting process, though permit application submittal is typically done by the property owner or contractor.'
      },
      {
        question: 'Do you provide site visits during construction?',
        answer: 'Yes, we offer construction phase services including site observations, shop drawing review, and RFI response. These services can be included in initial scope or added as needed during construction. Site visits ensure structural design is properly implemented.'
      },
      {
        question: 'Are you licensed in California?',
        answer: 'Yes, all our structural engineers are licensed Professional Engineers (PE) in California. We can provide PE license numbers and maintain current licenses with continuing education. All our plans bear the PE stamp required by California law.'
      },
      {
        question: 'Can you work with my architect and contractor?',
        answer: 'Absolutely. We regularly coordinate with architects during design and with contractors during construction. Good coordination between design team members results in better projects. We communicate clearly with all team members and attend coordination meetings as needed.'
      }
    ],
    cta: {
      headline: 'Ready to Start Your Structural Engineering Project?',
      description: 'Contact our licensed Professional Engineers for a free consultation. We\'ll discuss your project requirements, provide expert guidance, and deliver a detailed proposal with transparent pricing and timelines.'
    }
  },
  {
    id: 'adu-design-engineering',
    title: 'ADU Structural Engineering & Design Services',
    shortTitle: 'ADU Engineering',
    metaDescription: 'Expert ADU structural engineering throughout California. PE-stamped plans for detached ADUs, garage conversions, JADUs. Navigate building codes & HOA requirements. Call (949) 981-4448.',
    heroTitle: 'ADU Structural Engineering & Design Services',
    heroDescription: 'Transform your property with a professionally engineered Accessory Dwelling Unit. Our licensed structural engineers specialize in ADU design throughout California, providing PE-stamped plans that meet state and local requirements.',
    icon: '🏡',
    overview: 'Accessory Dwelling Units (ADUs) are additional residential units on single-family properties. California law encourages ADU development, but structural engineering is required for all ADUs to ensure safety and code compliance. We specialize in ADU structural engineering, navigating complex state ADU laws, local building codes, and HOA requirements.',
    keyBenefits: [
      'Expert knowledge of California ADU laws and local requirements',
      'Cost-effective foundation and structural designs for ADUs',
      'Experience with all ADU types (detached, attached, garage conversion, JADU)',
      'Navigate HOA approval processes with required documentation',
      'Fast turnaround to meet ADU streamlined permitting timelines',
      'Coordinate with architects or provide preliminary layout assistance',
      'Understand ADU-specific challenges (setbacks, height limits, utilities)'
    ],
    whatWeProvide: [
      {
        title: 'Complete ADU Structural Design',
        description: 'Foundation design, structural framing, roof structure, and lateral force-resisting system specifically optimized for ADU construction.'
      },
      {
        title: 'Foundation Engineering',
        description: 'Cost-effective foundation design based on soil conditions, ADU size, and site constraints. We design conventional foundations, post-tension slabs, or specialized systems as needed.'
      },
      {
        title: 'Code Compliance Analysis',
        description: 'Navigate complex intersection of state ADU law, California Building Code, local amendments, and HOA requirements. Ensure your ADU meets all applicable codes.'
      },
      {
        title: 'HOA Documentation',
        description: 'Provide structural drawings, calculations, and documentation required by HOAs. We understand HOA review processes and design to meet their requirements.'
      },
      {
        title: 'Garage Conversion Engineering',
        description: 'Specialized structural analysis for converting existing garages to living space including floor system evaluation, new openings, and accessibility requirements.'
      },
      {
        title: 'Site Constraint Solutions',
        description: 'Creative structural solutions for challenging sites including small lots, setback issues, slopes, easements, and existing structure integration.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'ADU Feasibility Consultation',
        description: 'Review property for ADU feasibility, discuss ADU types, review local requirements, and provide guidance on structural approach and estimated costs.'
      },
      {
        step: 2,
        title: 'Site Assessment',
        description: 'Evaluate site conditions, setbacks, easements, utilities, soil conditions (or coordinate geotechnical report), and existing structures affecting ADU design.'
      },
      {
        step: 3,
        title: 'Floor Plan Coordination',
        description: 'Review or assist with ADU floor plan layout considering structural efficiency, building code requirements, and site constraints.'
      },
      {
        step: 4,
        title: 'Foundation Design',
        description: 'Design ADU foundation based on soil report, building loads, and site conditions. Optimize for cost while meeting code requirements.'
      },
      {
        step: 5,
        title: 'Structural System Design',
        description: 'Design framing system, roof structure, and lateral force-resisting system. Coordinate with mechanical, electrical, and plumbing requirements.'
      },
      {
        step: 6,
        title: 'Drawing & Calculation Package',
        description: 'Produce complete structural drawings and calculations package with PE stamp ready for permit submittal and HOA review.'
      },
      {
        step: 7,
        title: 'Permit & HOA Support',
        description: 'Respond to building department plan check corrections and provide additional documentation for HOA approval if needed.'
      },
      {
        step: 8,
        title: 'Construction Phase Support',
        description: 'Available for contractor questions, foundation inspection, and construction support to ensure proper implementation of structural design.'
      }
    ],
    commonApplications: [
      'Detached ADUs (new construction)',
      'Garage conversions to ADUs',
      'Attached ADUs (additions to main house)',
      'Junior ADUs (JADUs) within existing homes',
      'Second-story ADUs above garages',
      'Manufactured/prefab ADU foundations',
      'ADUs on hillside or sloped lots',
      'ADUs with challenging setbacks',
      'Multi-generational living spaces',
      'Rental income units',
      'Home offices or studios',
      'Guest houses'
    ],
    costRange: {
      description: 'ADU structural engineering fees depend on ADU type, size, and site complexity.',
      typical: '$3,000 - $8,000 for most ADUs; garage conversions $3,000-$5,000; hillside ADUs $6,000-$10,000+',
      factors: [
        'ADU type (detached, attached, garage conversion, JADU)',
        'Square footage',
        'Number of stories',
        'Site conditions and slope',
        'Soil quality and foundation requirements',
        'Setback and site constraints',
        'HOA requirements and documentation needs',
        'Architectural complexity',
        'Connection to existing structure (for attached ADUs)',
        'Timeline constraints'
      ]
    },
    timeline: {
      design: '2-3 weeks for typical ADUs; 3-4 weeks for complex sites',
      permitting: '2-6 weeks (ADUs benefit from streamlined review)',
      total: '4-10 weeks typical from engagement to permit-ready plans'
    },
    faqs: [
      {
        question: 'Do I need a structural engineer for an ADU?',
        answer: 'Yes, California requires all ADUs to have structural plans prepared and stamped by a licensed Professional Engineer or Architect. This includes detached ADUs, garage conversions, and JADUs. Structural engineering ensures your ADU is safe and complies with building codes.'
      },
      {
        question: 'How much does ADU structural engineering cost?',
        answer: 'Typical ADU structural engineering costs $3,000-$6,000 for standard detached ADUs, $3,000-$5,000 for garage conversions, and $5,000-$8,000 for second-story ADUs or complex sites. Hillside properties or challenging soil conditions may cost more. We provide free consultations and detailed quotes.'
      },
      {
        question: 'How long does ADU structural engineering take?',
        answer: 'Most ADU structural engineering takes 2-3 weeks from receiving architectural plans to delivering stamped structural drawings. Complex sites or hillside ADUs may take 3-4 weeks. We can expedite for urgent timelines. Total time from consultation to permit-ready plans is typically 4-6 weeks.'
      },
      {
        question: 'Can you help with ADU floor plan design?',
        answer: 'While we focus on structural engineering, we can provide preliminary layout guidance and feasibility input. We work seamlessly with architects or can recommend design professionals. Many clients use our structural expertise to inform their ADU layout before finalizing architectural plans.'
      },
      {
        question: 'Do you handle HOA requirements for ADUs?',
        answer: 'Yes, we regularly work with HOAs and provide all documentation they require including structural drawings, calculations, material specifications, and elevation drawings. We understand HOA review processes and design ADUs to meet their architectural and structural standards.'
      },
      {
        question: 'Can you convert my garage to an ADU?',
        answer: 'Yes, garage conversions are one of our specialties. We evaluate the existing garage structure, design necessary modifications, address floor height requirements, design new openings for windows/doors, and ensure the converted space meets residential building code. Most garages can be successfully converted to ADUs.'
      },
      {
        question: 'What if I have a sloped lot or challenging site?',
        answer: 'We specialize in challenging sites including slopes, tight setbacks, easements, and difficult access. We design appropriate foundation systems (stepped foundations, retaining walls, pier foundations) and work with geotechnical engineers when needed. Hillside ADUs are more complex but very achievable.'
      },
      {
        question: 'Do you coordinate with prefab/modular ADU companies?',
        answer: 'Yes, we work with prefab and modular ADU manufacturers to design foundations for their units. We review manufacturer specifications and design site-specific foundations meeting building code and manufacturer requirements. Most prefab ADUs still require site-specific foundation engineering.'
      }
    ],
    cta: {
      headline: 'Ready to Add an ADU to Your Property?',
      description: 'Contact us for a free ADU feasibility consultation. We\'ll evaluate your property, discuss ADU options, explain the process, and provide transparent pricing for your ADU structural engineering needs.'
    }
  },
  {
    id: 'seismic-retrofitting',
    title: 'Seismic Retrofitting & Earthquake Strengthening Services',
    shortTitle: 'Seismic Retrofitting',
    metaDescription: 'Expert seismic retrofitting for California homes & buildings. Foundation bolting, cripple wall bracing, soft-story retrofits. Licensed PE. Protect your investment. Call (949) 981-4448.',
    heroTitle: 'Seismic Retrofitting & Earthquake Strengthening',
    heroDescription: 'Protect your building from earthquake damage with professional seismic retrofitting. Our licensed structural engineers assess your structure and design cost-effective seismic upgrades that enhance safety and meet California seismic requirements.',
    icon: '🏚️',
    overview: 'Seismic retrofitting strengthens existing buildings to better withstand earthquakes. California\'s active seismic environment makes retrofitting essential for older buildings built before modern earthquake codes. We specialize in seismic assessment and retrofit design for residential and commercial structures, providing practical solutions that enhance safety while respecting budgets.',
    keyBenefits: [
      'Expert seismic assessment of existing structures',
      'Cost-effective retrofit designs minimizing disruption',
      'Experience with all retrofit types (residential, soft-story, commercial)',
      'Navigate mandatory retrofit ordinances (LA, SF, other jurisdictions)',
      'Understand insurance and property value benefits of retrofitting',
      'Coordination with contractors experienced in retrofit work',
      'Licensed structural engineers specializing in seismic design'
    ],
    whatWeProvide: [
      {
        title: 'Seismic Assessment',
        description: 'Comprehensive evaluation of your building\'s seismic vulnerabilities including foundation connections, cripple walls, soft-story conditions, and structural deficiencies.'
      },
      {
        title: 'Retrofit Design',
        description: 'Engineering design of seismic retrofit measures including foundation bolting, cripple wall bracing, shear wall addition, moment frame strengthening, and other improvements.'
      },
      {
        title: 'Soft-Story Retrofit',
        description: 'Specialized design for soft-story buildings (typically multi-family with parking below) requiring reinforcement to prevent collapse during earthquakes.'
      },
      {
        title: 'Cost-Benefit Analysis',
        description: 'Evaluation of retrofit options with cost estimates to help you make informed decisions balancing safety, budget, and building use requirements.'
      },
      {
        title: 'Permit-Ready Plans',
        description: 'Complete construction documents and calculations for building department approval, including response to plan check corrections.'
      },
      {
        title: 'Construction Administration',
        description: 'Site visits, contractor support, and quality assurance during retrofit construction to ensure proper implementation of seismic improvements.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'Site visit to evaluate building construction, identify seismic deficiencies, and understand building use requirements and owner concerns.'
      },
      {
        step: 2,
        title: 'Structural Analysis',
        description: 'Engineering analysis of existing structure including foundation type, framing system, lateral force resistance, and identification of specific vulnerabilities.'
      },
      {
        step: 3,
        title: 'Retrofit Recommendations',
        description: 'Develop retrofit options with pros, cons, costs, and expected performance improvement for each approach.'
      },
      {
        step: 4,
        title: 'Design Development',
        description: 'Detailed engineering design of selected retrofit measures including structural calculations and connection details.'
      },
      {
        step: 5,
        title: 'Construction Documents',
        description: 'Preparation of complete retrofit drawings showing all work required, including demolition, new framing, connections, and specifications.'
      },
      {
        step: 6,
        title: 'Permit Processing',
        description: 'Submit plans to building department, respond to plan check corrections, and obtain permit approval.'
      },
      {
        step: 7,
        title: 'Bidding Support',
        description: 'Assist owner in contractor selection by clarifying scope, answering contractor questions, and reviewing proposals if requested.'
      },
      {
        step: 8,
        title: 'Construction Oversight',
        description: 'Periodic site visits during construction, review of critical phases, and final inspection to verify retrofit completion.'
      }
    ],
    commonApplications: [
      'Foundation bolting for homes lacking foundation-to-sill connection',
      'Cripple wall bracing for homes with crawl spaces',
      'Soft-story apartment building retrofits',
      'Unreinforced masonry building strengthening',
      'Hillside home stabilization',
      'Tuck-under parking garage reinforcement',
      'Addition of shear walls to weak buildings',
      'Moment frame enhancement',
      'Out-of-plane wall bracing',
      'Diaphragm strengthening',
      'Pre-1980s home seismic upgrades',
      'Historic building seismic improvements'
    ],
    costRange: {
      description: 'Seismic retrofit costs vary widely based on building type, size, and required improvements.',
      typical: 'Residential: $5,000-$15,000 typical; Soft-story buildings: $75,000-$400,000+; Commercial varies significantly',
      factors: [
        'Building size and configuration',
        'Type and extent of deficiencies',
        'Retrofit methods selected',
        'Access and working conditions',
        'Building occupancy during work',
        'Finish restoration requirements',
        'Foundation type and condition',
        'Mandatory ordinance compliance requirements',
        'Historic preservation constraints',
        'Contractor availability and experience'
      ]
    },
    timeline: {
      design: '3-6 weeks for residential; 8-20 weeks for commercial/soft-story',
      permitting: '4-8 weeks typical; mandatory programs may have specific timelines',
      total: '2-4 months typical for residential; 6-18 months for large commercial'
    },
    faqs: [
      {
        question: 'Does my building need seismic retrofitting?',
        answer: 'Buildings constructed before 1980 often lack modern seismic protections and are good retrofit candidates. Specific indicators include: lack of foundation bolting, cripple walls without bracing, soft-story configuration (parking below), unreinforced masonry, or location in high seismic zones. Some jurisdictions have mandatory retrofit ordinances. We provide assessments to determine if retrofitting is needed.'
      },
      {
        question: 'How much does seismic retrofitting cost?',
        answer: 'Residential foundation bolting and cripple wall bracing typically costs $5,000-$15,000. Soft-story apartment retrofits range from $75,000-$400,000+ depending on building size. Commercial retrofits vary widely from $50,000 to millions for large buildings. Engineering fees are typically $3,000-$8,000 for residential and $15,000-$100,000+ for commercial. We provide free initial consultations and cost estimates.'
      },
      {
        question: 'Will retrofitting damage my home?',
        answer: 'Most residential retrofits involve work in crawl spaces, garages, or unfinished areas with minimal impact on living spaces. Some finish work may be affected but is typically minor. We design retrofits to minimize disruption and coordinate with contractors to limit impacts. Most work is completed in 1-2 weeks for residential properties.'
      },
      {
        question: 'Does seismic retrofitting increase property value?',
        answer: 'Yes, retrofitting can increase property value and marketability, especially in high seismic areas. Retrofitted homes are more attractive to buyers, may qualify for lower earthquake insurance premiums, and provide peace of mind. Some buyers specifically seek retrofitted homes. In areas with mandatory retrofit ordinances, non-compliance can hurt property value.'
      },
      {
        question: 'What is a soft-story building retrofit?',
        answer: 'Soft-story buildings have large openings on the first floor (typically parking or retail) with residential above. These are vulnerable to collapse in earthquakes. Retrofits add steel moment frames, shear walls, or reinforced columns to strengthen the first story. Los Angeles, San Francisco, and other cities have mandatory soft-story retrofit ordinances for multi-family buildings.'
      },
      {
        question: 'Do I need a permit for seismic retrofitting?',
        answer: 'Yes, seismic retrofit work requires building permits. We prepare permit-ready structural plans and calculations. Some jurisdictions have streamlined processes for standard residential retrofits. Mandatory retrofit programs have specific permit procedures. Permits ensure work meets code and is properly inspected.'
      },
      {
        question: 'Can I get financial assistance for retrofitting?',
        answer: 'Some programs offer financial assistance including: earthquake insurance premium discounts, property tax reassessment exemptions for retrofit improvements, financing programs in some cities, and potential tax incentives. We can help you understand available programs in your area.'
      },
      {
        question: 'How long does retrofitting take?',
        answer: 'Residential retrofits typically take 1-2 weeks for construction after permits are obtained. Design and permitting takes 2-4 months total. Soft-story retrofits take 3-6 months for construction depending on building size. We provide detailed timelines during planning. Work can often be scheduled to minimize occupant disruption.'
      }
    ],
    cta: {
      headline: 'Protect Your Building from Earthquake Damage',
      description: 'Contact us for a free seismic assessment consultation. Our licensed structural engineers will evaluate your building, explain retrofit options, and provide transparent pricing for seismic improvements.'
    }
  },
  {
    id: 'residential',
    title: 'Residential Structural Engineering Services',
    shortTitle: 'Residential Engineering',
    metaDescription: 'Expert residential structural engineering for homes, additions, remodels & ADUs. Licensed PE engineers provide cost-effective structural designs. Call (949) 981-4448 for consultation.',
    heroTitle: 'Residential Structural Engineering',
    heroDescription: 'Specialized structural engineering services for single-family homes, multi-family residential, additions, remodels, and ADUs throughout California.',
    icon: '🏠',
    overview: 'Residential structural engineering focuses on the unique needs of homeowners and residential developers. From new custom homes to additions, remodels, and ADUs, our engineers provide cost-effective structural solutions that ensure safety while respecting your budget and aesthetic goals.',
    keyBenefits: [
      'Homeowner-friendly communication and transparent pricing',
      'Fast turnaround for residential timelines',
      'Experience with all California residential building codes',
      'Value engineering to optimize costs without compromising safety',
      'ADU and addition expertise for maximizing property value',
      'Coordination with architects and contractors',
      'PE-stamped plans accepted by all jurisdictions'
    ],
    whatWeProvide: [
      { title: 'Foundation Design', description: 'Complete foundation engineering including slab-on-grade, raised foundations, and hillside foundations designed for local soil conditions.' },
      { title: 'Framing Plans', description: 'Detailed wood or steel framing plans showing all structural members, connections, and load paths.' },
      { title: 'Seismic Design', description: 'Lateral force-resisting systems designed to meet California seismic requirements and protect your investment.' },
      { title: 'PE-Stamped Plans', description: 'All drawings stamped and signed by licensed Professional Engineer for building department submittal.' },
      { title: 'Structural Calculations', description: 'Complete engineering calculations documenting our design for building department review.' },
      { title: 'Plan Check Support', description: 'Response to building department corrections and support through the approval process.' }
    ],
    processSteps: [
      { step: 1, title: 'Free Consultation', description: 'Discuss your project goals, review plans, and provide preliminary guidance and cost estimate.' },
      { step: 2, title: 'Proposal & Agreement', description: 'Detailed proposal with scope, deliverables, fees, and timeline. No work starts until you approve.' },
      { step: 3, title: 'Design Development', description: 'Structural engineering design based on architectural plans and site conditions.' },
      { step: 4, title: 'Drawing Production', description: 'Creation of construction-ready structural plans and details.' },
      { step: 5, title: 'Calculations & Review', description: 'Engineering calculations and quality control review of all work.' },
      { step: 6, title: 'PE Stamping & Delivery', description: 'Professional Engineer stamp and signature. Plans delivered for permit submittal.' },
      { step: 7, title: 'Plan Check Support', description: 'Response to building department comments and coordination for approval.' },
      { step: 8, title: 'Construction Support', description: 'Available during construction for questions and clarifications.' }
    ],
    commonApplications: [
      'New custom homes',
      'Home additions',
      'Kitchen and bathroom remodels',
      'Second story additions',
      'Accessory Dwelling Units (ADUs)',
      'Garage conversions',
      'Deck and patio covers',
      'Load-bearing wall removal',
      'Foundation retrofits',
      'Hillside home construction'
    ],
    costRange: {
      description: 'Residential structural engineering costs vary based on project size and complexity.',
      typical: '$2,500 - $8,000 for most residential projects',
      factors: ['Project size and square footage', 'Structural complexity', 'Foundation type and soil conditions', 'Number of floors', 'Custom vs. conventional design', 'Timeline requirements']
    },
    timeline: {
      design: '1-2 weeks for typical residential projects',
      permitting: '2-8 weeks depending on jurisdiction',
      total: '3-10 weeks from start to permit'
    },
    faqs: [
      { question: 'Do I need a structural engineer for my home remodel?', answer: 'Yes, if you are removing or modifying load-bearing walls, adding a second story, or making significant structural changes. Most building departments require PE-stamped structural plans for these types of projects.' },
      { question: 'How much does residential structural engineering cost?', answer: 'Most residential projects range from $2,500-$8,000 depending on size and complexity. Simple projects like single wall removals may be $1,500-$2,500, while large additions or custom homes may be $8,000-$15,000+. We provide free consultations with pricing estimates.' },
      { question: 'What is the timeline for residential structural plans?', answer: 'Most residential projects take 1-2 weeks for design and drawing production. Add 2-8 weeks for building department plan review. Total timeline from start to approved permits is typically 3-10 weeks.' },
      { question: 'Can you work with my architect?', answer: 'Yes! We regularly coordinate with architects, designers, and contractors. We can work from architectural plans or help develop structural solutions alongside your design team.' }
    ],
    cta: {
      headline: 'Ready to Start Your Residential Project?',
      description: 'Get a free consultation and detailed quote for your home project. Our residential structural engineers are ready to help bring your vision to life with safe, cost-effective structural design.'
    }
  },
  {
    id: 'commercial',
    title: 'Commercial Structural Engineering Services',
    shortTitle: 'Commercial Engineering',
    metaDescription: 'Commercial structural engineering for office buildings, retail, industrial, and tenant improvements. Licensed PE engineers deliver code-compliant designs. Call (949) 981-4448.',
    heroTitle: 'Commercial Structural Engineering',
    heroDescription: 'Comprehensive structural engineering services for commercial buildings, tenant improvements, industrial facilities, and multi-use developments throughout California.',
    icon: '🏢',
    overview: 'Commercial structural engineering requires understanding of complex building codes, accessibility requirements, fire-life safety, and business operational needs. Our engineers deliver efficient, cost-effective structural solutions for commercial projects of all scales.',
    keyBenefits: [
      'Experience with Type I-V construction and occupancy groups',
      'Fast-track scheduling to meet business timelines',
      'Value engineering for budget-conscious projects',
      'Tenant improvement and renovation expertise',
      'Coordination with architects, MEP, and civil engineers',
      'Building department experience across California',
      'PE-stamped plans and structural calculations'
    ],
    whatWeProvide: [
      { title: 'Structural Analysis & Design', description: 'Complete structural engineering for commercial buildings using steel, concrete, masonry, and wood systems.' },
      { title: 'Construction Documents', description: 'Comprehensive structural drawings including foundation plans, framing plans, details, schedules, and specifications.' },
      { title: 'Code Compliance Analysis', description: 'California Building Code compliance including accessibility, fire-life safety, and jurisdiction-specific requirements.' },
      { title: 'Tenant Improvement Engineering', description: 'Structural engineering for commercial TI projects including demising walls, mezzanines, and equipment support.' },
      { title: 'Seismic Evaluation', description: 'Seismic assessment of existing buildings and retrofit design to meet current standards.' },
      { title: 'Construction Administration', description: 'Shop drawing review, RFI response, site observations, and coordination during construction.' }
    ],
    processSteps: [
      { step: 1, title: 'Project Kickoff', description: 'Review project goals, schedule, budget, and coordination requirements with full project team.' },
      { step: 2, title: 'Proposal Development', description: 'Detailed scope of work, fee proposal, and schedule tailored to your project needs.' },
      { step: 3, title: 'Structural Design', description: 'Engineering analysis and design of structural systems optimized for constructability and cost.' },
      { step: 4, title: 'Construction Documents', description: 'Production of construction-ready structural plans, details, and specifications.' },
      { step: 5, title: 'Quality Control', description: 'Internal review and coordination with architectural and MEP disciplines.' },
      { step: 6, title: 'Permit Submittal', description: 'PE-stamped drawings and calculations prepared for building department submittal.' },
      { step: 7, title: 'Plan Check Response', description: 'Response to building department corrections and coordination for approval.' },
      { step: 8, title: 'Construction Phase', description: 'Shop drawing review, RFI response, and site visits as needed during construction.' }
    ],
    commonApplications: [
      'Office buildings',
      'Retail centers and stores',
      'Restaurants and hospitality',
      'Warehouse and industrial',
      'Tenant improvements',
      'Medical and dental offices',
      'Mixed-use developments',
      'Parking structures',
      'Mezzanines and platforms',
      'Building additions and expansions'
    ],
    costRange: {
      description: 'Commercial structural engineering fees are typically based on percentage of construction cost or hourly basis.',
      typical: '0.5% - 2.0% of construction cost, or $5,000 - $50,000+ fixed fee',
      factors: ['Building size and complexity', 'Construction type (Type I-V)', 'Structural system selection', 'Number of floors', 'Seismic design category', 'Schedule requirements', 'Construction administration scope']
    },
    timeline: {
      design: '2-6 weeks for design development',
      permitting: '4-12 weeks for plan review',
      total: '6-18 weeks from start to permit approval'
    },
    faqs: [
      { question: 'What building types do you design?', answer: 'We design all commercial building types including office, retail, industrial, medical, hospitality, mixed-use, and special-use structures. Our experience covers Type I through Type V construction and all occupancy classifications.' },
      { question: 'How much does commercial structural engineering cost?', answer: 'Fees typically range from 0.5%-2.0% of construction cost, or $5,000-$50,000+ for fixed-fee projects. Tenant improvements may be $3,000-$15,000. We provide detailed fee proposals after understanding your project scope.' },
      { question: 'Can you handle fast-track schedules?', answer: 'Yes, we regularly work on fast-track projects with aggressive schedules. We can provide accelerated services, phased deliverables, and extended hours when needed to meet your timeline.' },
      { question: 'Do you provide construction administration?', answer: 'Yes, we offer construction phase services including shop drawing review, RFI response, site visits, and coordination with contractors. These services can be included in our initial agreement or added as needed.' }
    ],
    cta: {
      headline: 'Start Your Commercial Project',
      description: 'Contact us for a consultation on your commercial structural engineering needs. Our team has the experience and resources to deliver your project on time and on budget.'
    }
  },
  {
    id: 'adu-engineering',
    title: 'ADU Structural Engineering Services',
    shortTitle: 'ADU Engineering',
    metaDescription: 'ADU structural engineering services for accessory dwelling units. Licensed PE engineers design detached ADUs, garage conversions, and ADU additions. Call (949) 981-4448.',
    heroTitle: 'ADU Structural Engineering',
    heroDescription: 'Specialized structural engineering for Accessory Dwelling Units (ADUs) including detached units, garage conversions, and attached ADUs throughout California.',
    icon: '🏡',
    overview: 'ADU structural engineering requires expertise in California ADU regulations, residential construction, and creative design within constrained spaces. Our engineers maximize your ADU investment with efficient, cost-effective structural solutions.',
    keyBenefits: [
      'ADU regulatory expertise across California jurisdictions',
      'Fast-track processing for streamlined ADU approvals',
      'Cost-effective designs optimized for ADU budgets',
      'Garage conversion and detached ADU specialization',
      'Coordination with ADU-experienced architects',
      'Foundation solutions for challenging sites',
      'PE-stamped plans ready for permit submittal'
    ],
    whatWeProvide: [
      { title: 'ADU Structural Design', description: 'Complete structural engineering for new detached ADUs, garage conversions, and attached ADU additions.' },
      { title: 'Foundation Engineering', description: 'Foundation design for ADUs including slab-on-grade, raised foundations, and pier foundations.' },
      { title: 'Framing Plans', description: 'Wood-frame structural plans optimized for ADU construction and budget constraints.' },
      { title: 'Seismic Design', description: 'Lateral force-resisting system design meeting California seismic requirements for residential structures.' },
      { title: 'Garage Conversion Plans', description: 'Structural modifications for converting existing garages to ADUs including new openings and improvements.' },
      { title: 'Permit-Ready Documents', description: 'PE-stamped structural plans and calculations prepared specifically for ADU permit requirements.' }
    ],
    processSteps: [
      { step: 1, title: 'ADU Consultation', description: 'Free consultation to discuss ADU type, review site, and provide guidance on structural approach and costs.' },
      { step: 2, title: 'Proposal & Agreement', description: 'Clear proposal with ADU-specific scope, deliverables, fees, and realistic timeline.' },
      { step: 3, title: 'Site Analysis', description: 'Review of site conditions, setbacks, utilities, and structural constraints for ADU placement.' },
      { step: 4, title: 'Structural Design', description: 'Engineering design of ADU structure optimized for cost and constructability.' },
      { step: 5, title: 'Drawing Preparation', description: 'Production of ADU structural plans, details, and schedules.' },
      { step: 6, title: 'PE Stamping', description: 'Professional Engineer review, calculations, and stamping for permit submittal.' },
      { step: 7, title: 'ADU Permit Support', description: 'Support through ADU expedited review process and response to any corrections.' },
      { step: 8, title: 'Construction Guidance', description: 'Available for questions and clarifications during ADU construction.' }
    ],
    commonApplications: [
      'Detached ADUs (new construction)',
      'Garage conversions to ADUs',
      'Attached ADUs and additions',
      'Junior ADUs (JADUs)',
      'Above-garage ADUs',
      'ADU second story additions',
      'Prefab and modular ADU support',
      'ADU foundation design',
      'ADU structural modifications'
    ],
    costRange: {
      description: 'ADU structural engineering is typically priced as fixed-fee based on ADU size and complexity.',
      typical: '$2,000 - $5,000 for most ADUs',
      factors: ['ADU size (under 750 sq ft vs. larger)', 'New construction vs. conversion', 'Foundation type and site conditions', 'Number of floors', 'Structural complexity', 'Timeline requirements']
    },
    timeline: {
      design: '1-2 weeks for typical ADUs',
      permitting: '2-4 weeks (ADUs get expedited review)',
      total: '3-6 weeks from start to permit'
    },
    faqs: [
      { question: 'Do I need structural engineering for my ADU?', answer: 'Yes, all ADUs require PE-stamped structural plans for permit approval. This includes new detached ADUs, garage conversions, and attached ADUs. Structural plans ensure your ADU is safe and meets building codes.' },
      { question: 'How much does ADU structural engineering cost?', answer: 'Most ADUs cost $2,000-$5,000 for structural engineering. Small ADUs under 500 sq ft may be $2,000-$3,000, while larger or complex ADUs may be $4,000-$6,000. Garage conversions are typically $2,500-$4,000.' },
      { question: 'How long does ADU structural design take?', answer: 'Most ADUs take 1-2 weeks for design and drawing production. ADUs benefit from expedited plan review, typically 2-4 weeks. Total timeline from start to approved permits is usually 3-6 weeks.' },
      { question: 'Can you work with ADU builders and prefab companies?', answer: 'Yes! We regularly work with ADU-specialized builders, general contractors, and prefab ADU companies. We can adapt our designs to work with prefab systems or provide custom engineering for site-built ADUs.' }
    ],
    cta: {
      headline: 'Ready to Build Your ADU?',
      description: 'Get a free consultation for your ADU project. Our ADU-specialized structural engineers will help you navigate the process and provide cost-effective structural design for your accessory dwelling unit.'
    }
  }
]

// Helper functions
export function getServiceById(id: string): Service | undefined {
  return SERVICES_DATA.find(service => service.id === id)
}

export function getAllServices(): Service[] {
  return SERVICES_DATA
}

export function getServicesByCategory(category: string): Service[] {
  // Can be extended to filter by categories if needed
  return SERVICES_DATA
}
