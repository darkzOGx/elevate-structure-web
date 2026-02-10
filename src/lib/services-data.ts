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
  },
  {
    id: 'load-bearing-wall-removal',
    title: 'Load-Bearing Wall Removal Engineering Services',
    shortTitle: 'Wall Removal Engineering',
    metaDescription: 'Professional load-bearing wall removal engineering throughout California. Licensed PE-stamped plans, beam sizing, structural calculations. Open floor plan experts. Call (949) 981-4448.',
    heroTitle: 'Load-Bearing Wall Removal Engineering',
    heroDescription: 'Transform your space with professional load-bearing wall removal engineering. Our licensed structural engineers design safe, code-compliant solutions that create the open floor plans you want while maintaining structural integrity.',
    icon: '🧱',
    overview: 'Load-bearing wall removal is one of the most popular home improvement projects, creating open floor plans that modernize living spaces. However, load-bearing walls support the weight of your home - floors, roofs, and walls above. Removing them without proper engineering can cause serious structural damage or collapse. Our licensed Professional Engineers analyze your home\'s structure, design appropriate support systems (typically beams and posts), and provide PE-stamped plans required for building permits.',
    keyBenefits: [
      'Licensed PE-stamped plans accepted by all California jurisdictions',
      'Proper beam and post sizing for safe load transfer',
      'Cost-effective solutions - avoid over-engineering',
      'Fast turnaround (typically 1-2 weeks)',
      'Experience with all California building codes',
      'Hidden beam options for clean aesthetics',
      'Construction support and contractor coordination'
    ],
    whatWeProvide: [
      {
        title: 'Structural Assessment',
        description: 'Thorough evaluation of your home\'s structural system to determine if a wall is load-bearing and identify all loads that need to be supported.'
      },
      {
        title: 'Beam Design & Sizing',
        description: 'Engineering design of the beam system to replace the removed wall, including material selection (steel, LVL, glulam) and proper sizing for all loads.'
      },
      {
        title: 'Post & Foundation Design',
        description: 'Design of support posts and any required foundation improvements to safely transfer loads to the ground.'
      },
      {
        title: 'PE-Stamped Construction Plans',
        description: 'Complete structural drawings showing the removal, new beam, posts, connections, and all details required for permit approval and construction.'
      },
      {
        title: 'Structural Calculations',
        description: 'Engineering calculations documenting load analysis, beam design, post design, and connection design for building department review.'
      },
      {
        title: 'Construction Support',
        description: 'Availability during construction for shoring guidance, inspection support, and any questions that arise during the wall removal process.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'Review your project goals, examine existing conditions, and determine if the wall is load-bearing. Provide preliminary guidance on feasibility and approach.'
      },
      {
        step: 2,
        title: 'Site Visit & Measurement',
        description: 'Visit your home to measure the wall, examine attic/crawl space to trace load paths, and gather information needed for structural analysis.'
      },
      {
        step: 3,
        title: 'Structural Analysis',
        description: 'Calculate all loads supported by the wall including roof, ceiling, floor, and any walls above. Determine total load the new beam must carry.'
      },
      {
        step: 4,
        title: 'Beam Design',
        description: 'Design the replacement beam system selecting appropriate materials and sizing for your specific loads and span requirements.'
      },
      {
        step: 5,
        title: 'Drawing Production',
        description: 'Create detailed construction drawings showing removal procedure, new beam installation, post locations, connections, and specifications.'
      },
      {
        step: 6,
        title: 'Plan Review & Stamping',
        description: 'Quality control review of all work, preparation of calculations, and PE stamping of plans for permit submittal.'
      },
      {
        step: 7,
        title: 'Permit Support',
        description: 'Respond to building department plan check corrections and provide any additional documentation needed for approval.'
      },
      {
        step: 8,
        title: 'Construction Support',
        description: 'Available during construction for shoring guidance, questions, and inspection coordination to ensure successful installation.'
      }
    ],
    commonApplications: [
      'Kitchen/dining room wall removal for open concept',
      'Kitchen/living room wall removal',
      'Creating great rooms from multiple smaller rooms',
      'Opening up between family room and kitchen',
      'Removing walls between bedrooms',
      'Commercial space reconfiguration',
      'Retail and office open floor plans',
      'Removing partial walls and bulkheads',
      'Creating wider doorway openings',
      'Pass-through window openings',
      'Island bar openings in walls',
      'Converting closed kitchens to open kitchens'
    ],
    costRange: {
      description: 'Load-bearing wall removal engineering costs depend on the complexity of your home\'s structure and the wall to be removed.',
      typical: '$1,500 - $4,000 for typical single-wall residential projects',
      factors: [
        'Wall length and loads supported',
        'Number of stories above the wall',
        'Existing foundation conditions',
        'Number of posts required',
        'Steel vs. wood beam design',
        'Hidden beam requirements',
        'Complexity of load path',
        'Need for foundation modifications',
        'Multiple walls being removed',
        'Site visit requirements'
      ]
    },
    timeline: {
      design: '1-2 weeks for typical projects',
      permitting: '2-4 weeks depending on jurisdiction',
      total: '3-6 weeks from start to permit'
    },
    faqs: [
      {
        question: 'How do I know if a wall is load-bearing?',
        answer: 'Load-bearing walls typically run perpendicular to floor/ceiling joists, are located near the center of the house, or support walls above. However, this isn\'t always obvious without professional evaluation. Exterior walls are almost always load-bearing. Interior walls may or may not be load-bearing depending on the home\'s structural design. Our engineers can definitively determine if your wall is load-bearing.'
      },
      {
        question: 'Do I need a permit to remove a load-bearing wall?',
        answer: 'Yes, load-bearing wall removal always requires a building permit in California. The building department requires PE-stamped structural plans showing the wall removal and replacement beam system. Removing a load-bearing wall without a permit is dangerous and can cause serious structural problems. It also creates issues when selling your home.'
      },
      {
        question: 'How much does load-bearing wall removal cost?',
        answer: 'Structural engineering for wall removal typically costs $1,500-$4,000 depending on complexity. Construction costs are separate and typically range from $3,000-$15,000+ depending on wall length, beam material, number of posts, and finish work required. Longer spans and multiple story homes cost more. We provide accurate engineering quotes after reviewing your project.'
      },
      {
        question: 'Can any wall be removed?',
        answer: 'Most load-bearing walls can be removed with proper engineering, but some situations are more complex. Very long spans may require multiple beams or very large beams. Walls supporting multiple floors cost more to address. Some walls have plumbing, electrical, or HVAC that must be rerouted. We assess feasibility and provide honest guidance on your specific situation.'
      },
      {
        question: 'What type of beam will I need?',
        answer: 'Beam type depends on span, loads, and aesthetics. Common options include steel beams (strongest for long spans, can be hidden), LVL/Laminated Veneer Lumber (good for moderate spans, wood appearance), Glulam beams (attractive exposed wood option), and built-up dimensional lumber (for shorter spans). We recommend the most appropriate and cost-effective option for your project.'
      },
      {
        question: 'Can the beam be hidden in the ceiling?',
        answer: 'Yes, in most cases we can design a "flush beam" that fits within the ceiling framing depth, creating a smooth ceiling with no visible beam. This requires careful design to fit within the available space while providing adequate strength. Steel beams work well for hidden applications due to their compact size. Flush beams may cost more due to the engineering complexity.'
      },
      {
        question: 'What happens during construction?',
        answer: 'The contractor first installs temporary shoring (support posts) to carry the load while the wall is removed. Then the wall is removed, the new beam and posts are installed, and connections are made. Finally, the temporary shoring is removed. Proper shoring is critical - we provide shoring requirements in our plans and can advise during construction.'
      },
      {
        question: 'Do I need a structural engineer or can my contractor handle this?',
        answer: 'California requires a licensed Professional Engineer (PE) or Architect to design load-bearing wall removal projects. Contractors cannot legally design structural modifications. PE-stamped plans are required for building permits. Using a structural engineer also protects you by ensuring proper design and provides documentation for future home sales.'
      }
    ],
    cta: {
      headline: 'Ready to Open Up Your Space?',
      description: 'Contact us for a free consultation about your load-bearing wall removal project. We\'ll assess your situation, explain the process, and provide a clear quote for professional structural engineering.'
    }
  },
  {
    id: 'foundation-engineering',
    title: 'Foundation Engineering & Design Services',
    shortTitle: 'Foundation Engineering',
    metaDescription: 'Expert foundation engineering throughout California. Foundation design, repair, inspection, underpinning, and settlement solutions. Licensed PE. Call (949) 981-4448.',
    heroTitle: 'Foundation Engineering & Design Services',
    heroDescription: 'Professional foundation engineering for new construction, repairs, and assessments. Our licensed structural engineers design safe, cost-effective foundation systems tailored to your site conditions and building requirements.',
    icon: '🏠',
    overview: 'Foundation engineering is critical to building safety - the foundation transfers all building loads to the ground and must be properly designed for site-specific soil conditions, seismic forces, and building loads. We provide foundation design for new construction, assessment and repair design for existing foundations, and specialized solutions for challenging sites. Our engineers work with geotechnical reports to design foundations that perform properly throughout the building\'s life.',
    keyBenefits: [
      'Foundation designs optimized for site soil conditions',
      'Cost-effective solutions - proper design saves construction costs',
      'New construction and repair/retrofit expertise',
      'Experience with challenging sites (hillsides, poor soils)',
      'PE-stamped plans for permit approval',
      'Coordination with geotechnical engineers',
      'Construction support for proper implementation'
    ],
    whatWeProvide: [
      {
        title: 'New Foundation Design',
        description: 'Complete foundation engineering for new construction including design based on geotechnical recommendations, building loads, and code requirements.'
      },
      {
        title: 'Foundation Assessment',
        description: 'Evaluation of existing foundations to identify problems, determine causes, and recommend appropriate repair or strengthening approaches.'
      },
      {
        title: 'Repair & Retrofit Design',
        description: 'Engineering design for foundation repairs including underpinning, crack repair, settlement correction, and seismic upgrades.'
      },
      {
        title: 'Foundation Type Selection',
        description: 'Analysis and recommendation of appropriate foundation type (spread footings, continuous footings, post-tension slab, pier/grade beam, etc.) for your site.'
      },
      {
        title: 'PE-Stamped Plans',
        description: 'Detailed foundation plans showing all dimensions, reinforcement, specifications, and construction requirements for permit and construction.'
      },
      {
        title: 'Construction Support',
        description: 'Pre-pour inspection, contractor coordination, and support during foundation construction to ensure proper implementation.'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Discuss project requirements, review site information, and determine if a geotechnical investigation is needed (or review existing report).'
      },
      {
        step: 2,
        title: 'Site Assessment',
        description: 'For existing foundations: inspect current conditions, document problems, and assess causes. For new construction: review geotechnical data and site constraints.'
      },
      {
        step: 3,
        title: 'Geotechnical Coordination',
        description: 'Review geotechnical report recommendations for bearing capacity, lateral resistance, expansive soils, liquefaction, and other site-specific concerns.'
      },
      {
        step: 4,
        title: 'Foundation Design',
        description: 'Engineering design of foundation system including sizing, reinforcement, and all details per code requirements and geotechnical recommendations.'
      },
      {
        step: 5,
        title: 'Drawing Production',
        description: 'Create detailed foundation plans showing all elements needed for permit approval and construction.'
      },
      {
        step: 6,
        title: 'PE Stamping & Delivery',
        description: 'Quality review, preparation of calculations, PE stamping, and delivery of permit-ready documents.'
      },
      {
        step: 7,
        title: 'Permit Support',
        description: 'Response to building department plan check corrections and coordination for approval.'
      },
      {
        step: 8,
        title: 'Construction Phase',
        description: 'Pre-pour inspection of reinforcement placement, contractor questions, and construction support as needed.'
      }
    ],
    commonApplications: [
      'New home foundation design',
      'ADU and addition foundations',
      'Foundation repair and underpinning',
      'Settlement correction',
      'Foundation crack assessment',
      'Hillside foundation design',
      'Expansive soil foundations',
      'Post-tension slab design',
      'Pier and grade beam systems',
      'Seismic foundation upgrades',
      'Commercial building foundations',
      'Retaining wall foundations'
    ],
    costRange: {
      description: 'Foundation engineering costs vary based on project type, complexity, and site conditions.',
      typical: '$2,500 - $8,000 for residential; $5,000 - $25,000+ for commercial or complex sites',
      factors: [
        'Project type (new construction vs. repair)',
        'Building size and loads',
        'Soil conditions and complexity',
        'Foundation type required',
        'Hillside vs. flatland site',
        'Geotechnical report requirements',
        'Number of stories',
        'Need for specialized systems',
        'Permit jurisdiction requirements',
        'Construction phase services'
      ]
    },
    timeline: {
      design: '2-3 weeks for typical residential; 4-8 weeks for complex projects',
      permitting: '2-6 weeks depending on jurisdiction',
      total: '4-14 weeks from start to permit'
    },
    faqs: [
      {
        question: 'Do I need a geotechnical report for foundation design?',
        answer: 'Most jurisdictions require geotechnical reports for new construction, and they\'re essential for proper foundation design. The geotechnical report provides soil bearing capacity, recommendations for foundation type, and identifies issues like expansive soils, liquefaction potential, or high water table. We can recommend geotechnical engineers if you need one.'
      },
      {
        question: 'What causes foundation problems?',
        answer: 'Common causes include: expansive soils that swell and shrink with moisture changes, poor drainage allowing water to undermine foundations, inadequate original design, soil settlement or consolidation, root intrusion from trees, and earthquake damage. Proper identification of the cause is essential for effective repair design.'
      },
      {
        question: 'How much does foundation engineering cost?',
        answer: 'Foundation engineering for new residential construction typically costs $2,500-$6,000. Foundation assessment and repair design ranges from $2,000-$8,000 depending on complexity. Hillside foundations or challenging sites may cost $5,000-$15,000+. Commercial projects vary widely based on size and complexity. We provide detailed quotes after understanding your project.'
      },
      {
        question: 'What are the signs of foundation problems?',
        answer: 'Warning signs include: cracks in walls, floors, or exterior; doors and windows that stick or don\'t close properly; uneven or sloping floors; gaps between walls and ceiling/floor; cracks in the foundation itself; and separation of exterior brick or siding. If you notice these signs, a foundation assessment is recommended.'
      },
      {
        question: 'What foundation types do you design?',
        answer: 'We design all foundation types including: spread footings (most common residential), continuous footings, post-tension slabs (for expansive soils), conventional reinforced slabs, pier and grade beam systems (for hillsides or poor soils), drilled shaft/caisson foundations (for deep bearing), and mat foundations (for heavy loads or poor soils).'
      },
      {
        question: 'Can a damaged foundation be repaired?',
        answer: 'Yes, most foundation problems can be repaired. Common repair methods include: underpinning with piers to stabilize settling foundations, carbon fiber reinforcement for cracked walls, epoxy injection for crack repair, and excavation with waterproofing for water intrusion. The appropriate repair depends on the problem and cause.'
      },
      {
        question: 'How long does foundation work take?',
        answer: 'Engineering design takes 2-3 weeks for typical projects. Construction time varies: new residential foundations typically take 1-2 weeks to form and pour, while foundation repair projects range from a few days to several weeks depending on complexity. Post-tension slabs require additional curing time before stressing.'
      },
      {
        question: 'Do you provide construction inspection?',
        answer: 'Yes, we offer pre-pour inspection of foundation reinforcement to verify proper installation before concrete is placed. This is especially important for complex foundations or critical projects. We can also provide periodic inspection during foundation repair work. These services can be included in scope or added as needed.'
      }
    ],
    cta: {
      headline: 'Need Foundation Engineering Services?',
      description: 'Contact us for a consultation about your foundation project - whether new construction, assessment, or repair. Our licensed structural engineers will evaluate your situation and provide expert guidance and design services.'
    }
  },
  {
  id: 'foundation-repair',
  title: 'Foundation Repair Engineering Services in California',
  shortTitle: 'Foundation Repair',
  metaDescription: 'Foundation repair engineering in California. Underpinning, settlement correction, crack repair. PE-stamped plans for homes & commercial. Call (949) 981-4448.',
  heroTitle: 'Foundation Repair Engineering Services',
  heroDescription: 'AAA Engineering Design provides expert foundation repair engineering for residential and commercial properties throughout California. Our licensed Professional Engineers diagnose foundation problems, design permanent repair solutions, and deliver PE-stamped plans that pass building department review.',
  icon: '🔧',
  overview: 'Foundation problems threaten the safety, value, and usability of any structure. Settlement, cracking, heaving, and deterioration require professional engineering assessment to determine the root cause and design effective, permanent repairs. Our structural engineers specialize in foundation repair design for California buildings, addressing soil-related issues, seismic damage, age-related deterioration, and construction defects with proven engineering solutions.',
  keyBenefits: [
    'Licensed PE assessment identifies the true cause of foundation distress',
    'Permanent repair solutions designed to address root causes, not just symptoms',
    'PE-stamped plans accepted by all California building departments',
    'Cost-effective designs that avoid unnecessary over-engineering',
    'Experience with all California soil types including expansive clay and fill',
    'Coordination with geotechnical engineers and foundation repair contractors',
    'Designs that restore structural integrity and protect property value'
  ],
  whatWeProvide: [
    {
      title: 'Foundation Assessment & Diagnosis',
      description: 'Thorough on-site evaluation of foundation distress including crack mapping, floor level surveys, and analysis of underlying soil conditions to determine the root cause of damage.'
    },
    {
      title: 'Underpinning Design',
      description: 'Engineering design for push piers, helical piers, drilled piers, and other underpinning systems to stabilize foundations affected by settlement or inadequate bearing capacity.'
    },
    {
      title: 'Settlement Correction Plans',
      description: 'Comprehensive repair plans addressing differential and uniform settlement, including lift and stabilization sequences, monitoring protocols, and acceptance criteria.'
    },
    {
      title: 'Crack Repair Engineering',
      description: 'Structural evaluation of foundation cracks to determine if they are cosmetic or structural, with engineered repair details including epoxy injection, carbon fiber reinforcement, and section replacement.'
    },
    {
      title: 'PE-Stamped Construction Documents',
      description: 'Complete permit-ready structural drawings and calculations for foundation repair, including excavation plans, pier layouts, connection details, and construction specifications.'
    },
    {
      title: 'Construction Phase Support',
      description: 'Site observation during critical repair phases, verification of bearing capacity, and documentation of repair completion to ensure design intent is achieved.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free phone consultation to discuss your foundation concerns, review photos or reports you have, and determine if an on-site evaluation is needed.'
    },
    {
      step: 2,
      title: 'Site Investigation',
      description: 'On-site inspection of foundation conditions including crack documentation, floor level survey, drainage evaluation, and assessment of structural damage to the building above.'
    },
    {
      step: 3,
      title: 'Cause Analysis',
      description: 'Engineering analysis to determine the root cause of foundation distress, which may include soil investigation, review of geotechnical data, and evaluation of site drainage and grading.'
    },
    {
      step: 4,
      title: 'Repair Design',
      description: 'Development of an engineered repair solution tailored to your specific foundation problem, soil conditions, building type, and budget requirements.'
    },
    {
      step: 5,
      title: 'Drawing Production',
      description: 'Preparation of detailed structural drawings showing all repair work including excavation limits, pier locations, connection details, and construction sequencing.'
    },
    {
      step: 6,
      title: 'PE Stamping & Permit Submittal',
      description: 'Final engineering review, PE stamping of all documents, and support for building department submittal including response to plan check corrections.'
    },
    {
      step: 7,
      title: 'Contractor Coordination',
      description: 'Assistance with contractor selection, pre-construction meetings, clarification of repair scope, and review of contractor questions or proposed alternatives.'
    },
    {
      step: 8,
      title: 'Construction Observation',
      description: 'Site visits during critical repair phases to verify proper installation, confirm bearing conditions, and document that repairs meet engineering specifications.'
    }
  ],
  commonApplications: [
    'Slab-on-grade foundation crack repair and leveling',
    'Residential foundation settlement correction',
    'Commercial building foundation stabilization',
    'Pier underpinning for sinking foundations',
    'Expansive soil foundation damage repair',
    'Post-earthquake foundation assessment and repair',
    'Foundation drainage and waterproofing improvements',
    'Hillside foundation repair and slope stabilization',
    'Garage and slab depression correction',
    'Retaining wall and grade beam repair',
    'Foundation repair for real estate transactions',
    'Insurance claim foundation damage documentation'
  ],
  costRange: {
    description: 'Foundation repair engineering fees depend on the severity of damage, building size, and complexity of the repair solution.',
    typical: '$2,000 - $8,000 for engineering services; $5,000 - $50,000+ for construction',
    factors: [
      'Severity and extent of foundation damage',
      'Building size, type, and number of stories',
      'Soil conditions and geotechnical requirements',
      'Type of repair system required (piers, underpinning, replacement)',
      'Number of piers or support points needed',
      'Accessibility of foundation for repair work',
      'Need for geotechnical investigation',
      'Building department requirements and jurisdiction',
      'Whether lift or re-leveling is required',
      'Scope of construction observation needed'
    ]
  },
  timeline: {
    design: '2-3 weeks for engineering design and drawings',
    permitting: '2-6 weeks depending on jurisdiction',
    total: '4-9 weeks from assessment to permit approval'
  },
  faqs: [
    {
      question: 'How do I know if my foundation needs repair?',
      answer: 'Warning signs include cracks in walls or floors, doors and windows that stick or no longer close properly, uneven or sloping floors, gaps between walls and ceilings, and visible cracks in the foundation itself. A licensed structural engineer determines whether these signs indicate structural foundation problems or cosmetic issues.'
    },
    {
      question: 'Do I need a structural engineer for foundation repair?',
      answer: 'Yes. California building departments require PE-stamped engineering plans for structural foundation repairs. An engineer identifies the root cause, designs the correct repair, and ensures the solution addresses the actual problem rather than just treating symptoms. Without engineering, repairs often fail or create new problems.'
    },
    {
      question: 'How much does foundation repair cost in California?',
      answer: 'Engineering fees typically range from $2,000-$8,000 depending on project complexity. Construction costs range from $5,000 for minor repairs to $50,000 or more for major underpinning projects. We provide detailed cost estimates during the assessment phase so you can budget accurately before committing.'
    },
    {
      question: 'What causes foundation problems in Southern California?',
      answer: 'Common causes include expansive clay soils that swell and shrink with moisture changes, poor site drainage, inadequate original foundation design, hillside soil movement, earthquake damage, tree root intrusion, and plumbing leaks that erode supporting soil. Southern California\'s dry climate and clay soils make foundation issues particularly common.'
    },
    {
      question: 'Will my homeowners insurance cover foundation repair?',
      answer: 'Standard homeowners insurance typically does not cover foundation settlement or soil movement. However, insurance may cover foundation damage caused by plumbing leaks or sudden events. Our engineering reports provide clear documentation of damage cause and extent, which supports insurance claims when coverage applies.'
    },
    {
      question: 'Can a foundation be repaired without lifting the house?',
      answer: 'Yes. Many foundation repairs stabilize the foundation in its current position to prevent further movement. Lifting is only necessary when settlement has caused significant structural damage or functional problems. Our engineers evaluate whether stabilization alone is sufficient or if re-leveling is required for your specific situation.'
    },
    {
      question: 'How long does foundation repair construction take?',
      answer: 'Most residential foundation repairs take 1-3 weeks of construction after permits are obtained. Larger commercial projects or extensive residential repairs take 3-6 weeks. The engineering and permitting phase typically takes 4-9 weeks before construction begins.'
    },
    {
      question: 'Do you provide foundation repair engineering for commercial buildings?',
      answer: 'Yes. We design foundation repairs for commercial buildings, warehouses, retail centers, and multi-family residential structures. Commercial foundation repair often involves specialized systems like micropiles, soil grouting, or structural slab replacement, all of which we design and detail.'
    }
  ],
  cta: {
    headline: 'Concerned About Your Foundation? Get Expert Engineering Assessment.',
    description: 'Contact our licensed Professional Engineers for a consultation on your foundation issues. We\'ll evaluate the problem, identify the root cause, and design a permanent repair solution with transparent pricing.'
  }
},
{
  id: 'foundation-inspection',
  title: 'Foundation Inspection & Assessment Services in California',
  shortTitle: 'Foundation Inspection',
  metaDescription: 'Professional foundation inspections in California. Pre-purchase, damage assessment, settlement evaluation. Licensed PE reports. Call (949) 981-4448.',
  heroTitle: 'Foundation Inspection & Assessment Services',
  heroDescription: 'AAA Engineering Design delivers thorough foundation inspections for homeowners, buyers, real estate professionals, and property managers throughout California. Our licensed structural engineers provide clear, actionable reports that document foundation conditions and identify any structural concerns.',
  icon: '🔍',
  overview: 'A professional foundation inspection by a licensed structural engineer provides an objective assessment of a building\'s foundation condition. Whether you are purchasing a property, evaluating existing damage, or responding to visible signs of distress, our inspections deliver the information you need to make informed decisions. We go beyond surface observations to analyze structural behavior and provide PE-stamped reports that carry professional weight.',
  keyBenefits: [
    'Licensed PE inspections carry authority with buyers, sellers, and lenders',
    'Clear, detailed reports with photos and professional opinions',
    'Identification of structural issues versus cosmetic concerns',
    'Cost estimates for recommended repairs when applicable',
    'Fast turnaround for time-sensitive real estate transactions',
    'Unbiased assessment from engineers who do not perform construction work',
    'Reports accepted by insurance companies, lenders, and building departments'
  ],
  whatWeProvide: [
    {
      title: 'Visual Foundation Inspection',
      description: 'Comprehensive on-site examination of accessible foundation elements including slab surfaces, stem walls, footings, piers, crawl spaces, and grade beams with documentation of all observed conditions.'
    },
    {
      title: 'Settlement & Movement Evaluation',
      description: 'Floor level survey and crack analysis to determine if the foundation has experienced differential settlement, heaving, or lateral movement, and whether movement is active or historic.'
    },
    {
      title: 'Pre-Purchase Foundation Assessment',
      description: 'Targeted inspection for real estate buyers evaluating a property\'s foundation condition before purchase, with clear language about findings and recommendations for non-technical readers.'
    },
    {
      title: 'Damage Assessment Reports',
      description: 'Detailed documentation of foundation damage for insurance claims, legal disputes, or repair planning, including cause analysis, extent of damage, and repair recommendations.'
    },
    {
      title: 'PE-Stamped Engineering Reports',
      description: 'Formal engineering reports stamped by a licensed Professional Engineer documenting inspection findings, professional opinions, and recommendations with full engineering authority.'
    },
    {
      title: 'Repair Scope & Cost Guidance',
      description: 'When issues are found, we provide repair recommendations with general cost ranges to help you budget and plan next steps, including whether engineering repair plans are needed.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Schedule Inspection',
      description: 'Contact us to schedule your foundation inspection. We accommodate tight real estate timelines and can often schedule within days for urgent needs.'
    },
    {
      step: 2,
      title: 'Pre-Inspection Review',
      description: 'Review any available documents including previous inspection reports, disclosures, geological information, and photos of concerns to prepare for efficient on-site work.'
    },
    {
      step: 3,
      title: 'On-Site Inspection',
      description: 'Thorough examination of foundation and structure including visual inspection, crack documentation, floor level measurements, and assessment of drainage and grading conditions.'
    },
    {
      step: 4,
      title: 'Condition Documentation',
      description: 'Detailed photographic documentation of all findings including cracks, settlement indicators, moisture intrusion, deterioration, and other conditions observed during inspection.'
    },
    {
      step: 5,
      title: 'Engineering Analysis',
      description: 'Professional evaluation of observed conditions to determine structural significance, likely causes, and whether further investigation or monitoring is recommended.'
    },
    {
      step: 6,
      title: 'Report Preparation',
      description: 'Preparation of a clear, comprehensive inspection report including findings, analysis, photos, professional opinions, and actionable recommendations.'
    },
    {
      step: 7,
      title: 'Report Delivery & Discussion',
      description: 'Delivery of the completed report with a follow-up call or meeting to discuss findings, answer questions, and clarify recommendations for all parties involved.'
    },
    {
      step: 8,
      title: 'Follow-Up Support',
      description: 'Availability for additional questions from buyers, sellers, agents, or lenders. If repairs are needed, we can provide engineering repair design as a separate service.'
    }
  ],
  commonApplications: [
    'Pre-purchase home foundation inspections',
    'Real estate transaction foundation evaluations',
    'Foundation crack assessment and monitoring',
    'Post-earthquake foundation damage evaluation',
    'Insurance claim foundation documentation',
    'Foundation settlement investigation',
    'Hillside property foundation assessment',
    'Multi-family building foundation evaluation',
    'Pre-renovation foundation condition survey',
    'Seller disclosure foundation verification'
  ],
  costRange: {
    description: 'Foundation inspection fees depend on property size, inspection scope, and whether a formal PE-stamped report is required.',
    typical: '$500 - $2,500 for inspections; $2,000 - $5,000 with full PE-stamped engineering report',
    factors: [
      'Property size and number of stories',
      'Type of foundation (slab, raised, hillside)',
      'Scope of inspection (visual vs. comprehensive)',
      'Whether floor level survey is included',
      'Formal PE-stamped report vs. letter report',
      'Urgency and scheduling requirements',
      'Travel distance to property location',
      'Complexity of observed conditions',
      'Need for follow-up visits or monitoring'
    ]
  },
  timeline: {
    design: '1-2 weeks from inspection to report delivery',
    permitting: 'Not applicable for inspection-only services',
    total: '1-2 weeks from scheduling to completed report'
  },
  faqs: [
    {
      question: 'What is the difference between a home inspector and a structural engineer for foundation inspection?',
      answer: 'A home inspector provides a general overview of building systems but lacks the engineering expertise to analyze structural behavior. A licensed structural engineer has the education, licensure, and experience to determine whether cracks and settlement are structurally significant, identify root causes, and provide authoritative professional opinions that carry legal and professional weight.'
    },
    {
      question: 'How much does a foundation inspection cost?',
      answer: 'Basic foundation inspections range from $500-$2,500 depending on property size and scope. A full PE-stamped engineering report with detailed analysis costs $2,000-$5,000. For real estate transactions, we offer focused assessments that balance thoroughness with cost-effectiveness and quick turnaround.'
    },
    {
      question: 'How quickly can you complete a foundation inspection for a real estate transaction?',
      answer: 'We understand real estate timelines are tight. We can typically schedule an inspection within 3-5 business days and deliver the report within 5-7 business days after inspection. Rush services are available when contingency deadlines require faster turnaround.'
    },
    {
      question: 'Should I get a foundation inspection before buying a home?',
      answer: 'Yes, especially for older homes, hillside properties, or any home showing signs of settlement or cracking. A structural engineer\'s foundation inspection gives you an objective assessment of the foundation\'s condition and any repair costs you should factor into your purchase decision. This protects you from unexpected expenses after closing.'
    },
    {
      question: 'What do you look for during a foundation inspection?',
      answer: 'We evaluate foundation type and construction, crack patterns and widths, signs of settlement or movement, floor levelness, drainage conditions, moisture intrusion, deterioration, and the overall structural performance of the foundation system. We also assess the superstructure for signs of foundation-related distress.'
    },
    {
      question: 'Can your inspection report be used for insurance claims?',
      answer: 'Yes. Our PE-stamped engineering reports provide the professional documentation insurance companies require. The report documents the type and extent of damage, probable cause, and recommended repairs with cost guidance. Insurance adjusters rely on licensed engineer reports for structural damage claims.'
    }
  ],
  cta: {
    headline: 'Need a Professional Foundation Inspection?',
    description: 'Contact our licensed structural engineers for a thorough foundation assessment. Whether you are buying a property, investigating damage, or need documentation, we deliver clear, professional reports you can rely on.'
  }
},
{
  id: 'structural-inspection',
  title: 'Structural Inspection & Assessment Services in California',
  shortTitle: 'Structural Inspection',
  metaDescription: 'Licensed structural inspections in California. Building assessments, earthquake damage, pre-purchase evaluations. PE-stamped reports. Call (949) 981-4448.',
  heroTitle: 'Structural Inspection & Assessment Services',
  heroDescription: 'AAA Engineering Design provides comprehensive structural inspections for residential, commercial, and industrial buildings throughout California. Our licensed Professional Engineers evaluate the complete structural system and deliver detailed reports that inform decisions about safety, repairs, purchases, and renovations.',
  icon: '🏢',
  overview: 'A structural inspection examines the entire structural system of a building, not just the foundation. Our licensed engineers assess framing, connections, load paths, lateral force resistance, roof structure, floor systems, and foundations to provide a complete picture of a building\'s structural health. These inspections serve buyers, owners, property managers, and investors who need reliable information about a building\'s structural condition.',
  keyBenefits: [
    'Complete structural system evaluation beyond foundation-only inspections',
    'Licensed PE reports with full professional authority',
    'Identification of safety concerns, code deficiencies, and maintenance needs',
    'Clear prioritization of findings by urgency and structural significance',
    'Experience inspecting all building types across California',
    'Earthquake damage assessment by engineers specializing in seismic performance',
    'Actionable reports with repair recommendations and cost guidance'
  ],
  whatWeProvide: [
    {
      title: 'Full Building Structural Inspection',
      description: 'Complete evaluation of all accessible structural elements including foundation, floor framing, walls, roof structure, connections, and lateral force-resisting system.'
    },
    {
      title: 'Earthquake Damage Assessment',
      description: 'Post-earthquake structural evaluation to determine if a building is safe to occupy, document damage for insurance or FEMA claims, and identify repairs needed to restore structural integrity.'
    },
    {
      title: 'Pre-Purchase Structural Evaluation',
      description: 'Thorough structural assessment for buyers considering a property purchase, providing clear information about the building\'s structural condition, remaining service life, and any needed repairs.'
    },
    {
      title: 'Existing Conditions Assessment',
      description: 'Detailed survey and documentation of a building\'s current structural system for renovation planning, change of use evaluation, or due diligence purposes.'
    },
    {
      title: 'Structural Deficiency Reports',
      description: 'Identification and documentation of structural deficiencies including under-designed members, missing connections, code violations, and deterioration requiring attention.'
    },
    {
      title: 'Repair & Upgrade Recommendations',
      description: 'Prioritized recommendations for structural repairs, upgrades, and maintenance with cost guidance to help owners and buyers plan and budget effectively.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Scope Definition',
      description: 'Discussion of your inspection needs, building type, areas of concern, and intended use of the report to define the appropriate inspection scope and deliverables.'
    },
    {
      step: 2,
      title: 'Document Review',
      description: 'Review available building plans, previous reports, permits, and disclosures to prepare for the inspection and understand the building\'s construction history.'
    },
    {
      step: 3,
      title: 'On-Site Inspection',
      description: 'Systematic examination of all accessible structural elements including visual inspection, measurement, testing where applicable, and thorough photographic documentation.'
    },
    {
      step: 4,
      title: 'Structural Analysis',
      description: 'Engineering analysis of observed conditions to evaluate structural adequacy, identify deficiencies, determine causes of distress, and assess remaining service life.'
    },
    {
      step: 5,
      title: 'Findings Classification',
      description: 'Organization of findings by category and priority: immediate safety concerns, significant structural deficiencies, maintenance items, and informational observations.'
    },
    {
      step: 6,
      title: 'Report Preparation',
      description: 'Comprehensive report with executive summary, detailed findings with photos, engineering analysis, professional opinions, and prioritized recommendations.'
    },
    {
      step: 7,
      title: 'Report Delivery & Review',
      description: 'Delivery of the completed report with a detailed review call to walk through findings, answer questions, and discuss recommendations with all stakeholders.'
    },
    {
      step: 8,
      title: 'Follow-Up & Next Steps',
      description: 'Ongoing availability for questions, coordination with contractors, and transition to repair engineering design if structural work is recommended.'
    }
  ],
  commonApplications: [
    'Pre-purchase building structural evaluation',
    'Post-earthquake structural damage assessment',
    'Building condition assessment for renovation planning',
    'Change of use or occupancy load evaluation',
    'Structural due diligence for property acquisition',
    'Insurance claim structural damage documentation',
    'Aging building structural health assessment',
    'Multi-family property structural evaluation',
    'Commercial building tenant improvement assessment',
    'Litigation support and expert witness inspections',
    'Roof structure evaluation after storm or fire damage',
    'Balcony and deck structural safety inspection (SB 326 / SB 721)'
  ],
  costRange: {
    description: 'Structural inspection fees vary based on building size, complexity, and the depth of analysis and reporting required.',
    typical: '$500 - $3,000 for inspections; $2,000 - $6,000 with full PE-stamped engineering report',
    factors: [
      'Building size, type, and number of stories',
      'Scope of inspection (targeted vs. comprehensive)',
      'Accessibility of structural elements',
      'Whether destructive or invasive investigation is needed',
      'Level of engineering analysis required',
      'Formal PE-stamped report vs. letter report',
      'Travel distance to property location',
      'Urgency and scheduling requirements',
      'Number of buildings or structures to inspect',
      'Need for specialized testing or equipment'
    ]
  },
  timeline: {
    design: '1-2 weeks from inspection to report delivery',
    permitting: 'Not applicable for inspection-only services',
    total: '1-2 weeks from scheduling to completed report'
  },
  faqs: [
    {
      question: 'What is the difference between a structural inspection and a home inspection?',
      answer: 'A home inspection is a general survey of all building systems (plumbing, electrical, HVAC, structure) by a generalist. A structural inspection is a focused, in-depth evaluation of the structural system by a licensed Professional Engineer. Structural engineers have the expertise to analyze load paths, evaluate structural adequacy, and provide authoritative opinions on structural safety and code compliance.'
    },
    {
      question: 'When do I need a structural inspection?',
      answer: 'You need a structural inspection when buying a property with visible structural concerns, after an earthquake or natural disaster, before a major renovation, when you notice new cracks or movement in your building, for change of use evaluations, or for balcony compliance under SB 326 or SB 721. Any time structural safety is in question, a licensed engineer should evaluate the building.'
    },
    {
      question: 'How much does a structural inspection cost?',
      answer: 'Structural inspections range from $500-$3,000 for the inspection itself. A full PE-stamped engineering report with detailed analysis and recommendations costs $2,000-$6,000. Costs depend on building size, complexity, and the depth of analysis needed. We provide quotes before scheduling.'
    },
    {
      question: 'What does a structural engineer look for during an inspection?',
      answer: 'We evaluate the foundation system, floor and roof framing, load-bearing walls and columns, connections between structural elements, lateral force-resisting system, signs of settlement or movement, material deterioration, water damage, fire damage, and overall structural adequacy relative to current building codes and the building\'s intended use.'
    },
    {
      question: 'Can you assess earthquake damage to my building?',
      answer: 'Yes. Post-earthquake assessment is one of our core services. We evaluate structural damage, determine if the building is safe to occupy, document damage for insurance and FEMA claims, and design repairs to restore structural integrity. Our engineers have extensive experience with California earthquake damage assessment.'
    },
    {
      question: 'Do you perform SB 326 and SB 721 balcony inspections?',
      answer: 'Yes. California Senate Bills 326 and 721 require periodic structural inspections of exterior elevated elements (balconies, decks, walkways, stairways) on multi-family buildings. Our licensed engineers perform these inspections and provide the required reports documenting conditions and any needed repairs.'
    },
    {
      question: 'How long does a structural inspection take on-site?',
      answer: 'A typical residential structural inspection takes 1-3 hours on site. Larger commercial buildings or comprehensive inspections take 3-8 hours. The time depends on building size, number of areas to inspect, and whether specialized investigation is needed. Report delivery follows within 1-2 weeks.'
    },
    {
      question: 'Will your inspection report identify all structural problems?',
      answer: 'Our inspection covers all accessible structural elements and identifies all observable conditions. Some structural elements are concealed behind finishes and cannot be inspected without invasive investigation. We clearly state inspection limitations in our report and recommend invasive investigation when concealed conditions are suspected.'
    }
  ],
  cta: {
    headline: 'Need a Professional Structural Inspection?',
    description: 'Contact our licensed structural engineers for a thorough building assessment. We provide clear, authoritative reports that give you the structural information you need for confident decisions.'
  }
},
{
  id: 'crawl-space-repair',
  title: 'Crawl Space Structural Repair Engineering in California',
  shortTitle: 'Crawl Space Repair',
  metaDescription: 'Crawl space structural repair engineering in California. Joist repair, post replacement, moisture damage solutions. PE-stamped plans. Call (949) 981-4448.',
  heroTitle: 'Crawl Space Structural Repair Engineering',
  heroDescription: 'AAA Engineering Design specializes in crawl space structural repair engineering for California homes with raised foundations. Our licensed Professional Engineers assess crawl space damage, design permanent repair solutions, and provide PE-stamped plans for foundation, framing, and support system restoration.',
  icon: '🏠',
  overview: 'Crawl spaces are vulnerable to moisture damage, pest infestation, soil movement, and age-related deterioration that compromises the structural integrity of the home above. Sagging floors, bouncy framing, damaged posts, deteriorated mudsills, and failing floor joists all originate in the crawl space. Our structural engineers specialize in diagnosing crawl space structural problems and designing effective, code-compliant repairs that restore the structural performance of your home.',
  keyBenefits: [
    'Specialized expertise in crawl space structural systems common in California homes',
    'Licensed PE assessment determines the scope and urgency of needed repairs',
    'Repair designs address root causes including moisture, pests, and soil conditions',
    'PE-stamped plans required by building departments for structural crawl space work',
    'Cost-effective solutions that prioritize the most critical structural repairs',
    'Coordination with contractors experienced in crawl space construction',
    'Designs that improve structural performance and extend the life of your home'
  ],
  whatWeProvide: [
    {
      title: 'Crawl Space Structural Assessment',
      description: 'Thorough inspection of all accessible crawl space structural elements including floor joists, girders, posts, piers, mudsills, foundation walls, and connections with documentation of all deterioration and damage.'
    },
    {
      title: 'Floor Joist Repair & Replacement Design',
      description: 'Engineering design for sistering, reinforcement, or replacement of damaged floor joists due to moisture damage, pest infestation, notching, or inadequate original sizing.'
    },
    {
      title: 'Post & Pier Repair Design',
      description: 'Design for replacement or reinforcement of deteriorated, undersized, or damaged support posts, piers, and footings to restore proper load transfer to the foundation.'
    },
    {
      title: 'Mudsill Replacement Engineering',
      description: 'Engineering plans for replacing deteriorated or pest-damaged mudsills, including shoring, jacking, and connection details to properly anchor the home to its foundation.'
    },
    {
      title: 'Floor Leveling & Support Design',
      description: 'Design of supplemental support systems including new posts, beams, and footings to correct sagging or bouncy floors and restore level floor surfaces.'
    },
    {
      title: 'Moisture Mitigation Recommendations',
      description: 'Assessment of moisture sources and recommendations for ventilation improvements, vapor barriers, drainage, and grading changes to protect structural repairs from future moisture damage.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discussion of your crawl space concerns, symptoms observed in the home above (sagging floors, bouncy areas, odors), and any previous inspections or repair work performed.'
    },
    {
      step: 2,
      title: 'Crawl Space Inspection',
      description: 'Hands-on inspection of the crawl space to evaluate all structural elements, document damage and deterioration, assess moisture conditions, and identify the scope of needed repairs.'
    },
    {
      step: 3,
      title: 'Engineering Analysis',
      description: 'Structural analysis of damaged elements to determine load requirements, evaluate remaining capacity, and design repair solutions that meet current California Building Code.'
    },
    {
      step: 4,
      title: 'Repair Plan Development',
      description: 'Development of a comprehensive repair plan addressing all structural deficiencies found during inspection, prioritized by structural significance and urgency.'
    },
    {
      step: 5,
      title: 'Construction Document Production',
      description: 'Detailed structural drawings showing all repair work including joist repairs, post replacements, new footings, connection details, shoring requirements, and construction sequencing.'
    },
    {
      step: 6,
      title: 'PE Stamping & Permit Support',
      description: 'Engineering review, PE stamping, and preparation of calculation packages for building department submittal with response to plan check corrections as needed.'
    },
    {
      step: 7,
      title: 'Contractor Coordination',
      description: 'Pre-construction review with the selected contractor to discuss access, shoring, work sequencing, and any specific challenges related to your crawl space conditions.'
    },
    {
      step: 8,
      title: 'Construction Verification',
      description: 'Site observation during and after repair construction to verify work matches engineering plans and all structural connections and bearing conditions meet specifications.'
    }
  ],
  commonApplications: [
    'Sagging floor joist repair and reinforcement',
    'Deteriorated or pest-damaged post replacement',
    'Mudsill replacement for termite or rot damage',
    'Crawl space pier and footing repair',
    'Floor leveling for settled or bouncy floors',
    'Girder beam repair or replacement',
    'Subfloor sheathing replacement',
    'Moisture damage structural restoration',
    'Seismic cripple wall bracing in crawl spaces',
    'Crawl space ventilation and drainage improvements',
    'Real estate transaction crawl space structural evaluation'
  ],
  costRange: {
    description: 'Crawl space repair engineering fees depend on the extent of damage, accessibility, and complexity of the repair design.',
    typical: '$1,500 - $5,000 for engineering services; $3,000 - $25,000 for construction',
    factors: [
      'Extent of structural damage and number of elements affected',
      'Crawl space accessibility (height, access points, obstacles)',
      'Type of repairs needed (joist, post, mudsill, foundation)',
      'Whether shoring and temporary support is required',
      'Moisture conditions and need for moisture mitigation',
      'Building size and floor area over crawl space',
      'Whether pest remediation is required before structural work',
      'Need for geotechnical evaluation of soil conditions',
      'Building department requirements and jurisdiction'
    ]
  },
  timeline: {
    design: '1-2 weeks for engineering design and drawings',
    permitting: '2-4 weeks depending on jurisdiction',
    total: '3-6 weeks from inspection to permit approval'
  },
  faqs: [
    {
      question: 'How do I know if my crawl space has structural problems?',
      answer: 'Signs of crawl space structural problems include sagging or bouncy floors, floors that slope noticeably, doors that no longer close properly, cracks in interior walls above the crawl space, musty odors from below, and visible damage to crawl space framing. If you notice any of these signs, a structural engineer should evaluate the crawl space to determine the cause and extent of damage.'
    },
    {
      question: 'What causes structural damage in crawl spaces?',
      answer: 'The most common causes are moisture exposure from poor ventilation or drainage, termite and pest damage to wood framing, soil settlement or erosion beneath piers and footings, inadequate original construction, aging and deterioration of wood members, and plumbing leaks. Southern California crawl spaces are particularly vulnerable to termite damage and moisture cycling.'
    },
    {
      question: 'Do I need a permit for crawl space structural repairs?',
      answer: 'Yes, structural repairs in crawl spaces require building permits in California. This includes joist replacement, post replacement, mudsill replacement, and new footing construction. PE-stamped engineering plans are required for permit approval. Our engineers prepare all documents needed for the permit process.'
    },
    {
      question: 'How much does crawl space structural repair cost?',
      answer: 'Engineering fees range from $1,500-$5,000 depending on scope. Construction costs range from $3,000 for localized repairs to $25,000 or more for extensive joist replacement, post work, and mudsill replacement across the entire crawl space. We provide detailed cost guidance during the assessment phase.'
    },
    {
      question: 'Can I do crawl space repairs myself?',
      answer: 'Structural repairs in crawl spaces require engineering design and building permits in California. The work involves temporary shoring, load calculations, proper connections, and code-compliant construction that requires professional engineering and experienced contractors. DIY structural repairs risk creating unsafe conditions and will not pass building inspection.'
    },
    {
      question: 'Should I address termite damage or structural damage first?',
      answer: 'Pest remediation should be completed before structural repairs begin. Active termite or pest infestation will damage new structural members if not eliminated first. Our engineering assessment identifies both the structural damage that needs repair and the pest-related conditions that need remediation, so both can be properly sequenced.'
    },
    {
      question: 'How long does crawl space repair construction take?',
      answer: 'Most crawl space structural repairs take 1-3 weeks of construction. Limited crawl space access and the need for shoring can extend timelines. Extensive repairs involving full mudsill replacement or major joist work take 2-4 weeks. We provide realistic timeline estimates during the design phase.'
    }
  ],
  cta: {
    headline: 'Worried About Your Crawl Space? Get a Structural Assessment.',
    description: 'Contact our licensed Professional Engineers for a thorough crawl space evaluation. We\'ll inspect, diagnose, and design repairs that restore your home\'s structural integrity with clear pricing and timelines.'
  }
},
{
  id: 'raised-foundation-repair',
  title: 'Raised Foundation Repair Engineering in California',
  shortTitle: 'Raised Foundation Repair',
  metaDescription: 'Raised foundation repair engineering in California. Pier-and-beam, mudsill, cripple wall, post repair. Licensed PE plans. Call (949) 981-4448.',
  heroTitle: 'Raised Foundation Repair Engineering',
  heroDescription: 'AAA Engineering Design provides specialized raised foundation repair engineering for California homes with pier-and-beam, post-and-pier, and continuous stem wall foundations. Our licensed structural engineers design permanent repair solutions for settlement, deterioration, seismic deficiencies, and structural damage in raised foundation systems.',
  icon: '🏗️',
  overview: 'Raised foundations are common in California homes built before the 1960s, and many require repair due to age, seismic vulnerability, moisture damage, or settlement. These foundations use a system of concrete piers, wood posts, mudsills, cripple walls, and stem walls that support the floor structure above grade. Each component is critical, and failure of any element compromises the structural system. Our engineers understand raised foundation construction and design targeted repairs that restore structural performance efficiently.',
  keyBenefits: [
    'Deep expertise in raised foundation systems common across California',
    'Repair designs that address the specific failure mode of each component',
    'PE-stamped plans for pier, post, mudsill, and cripple wall repairs',
    'Seismic upgrade integration to improve earthquake safety during repairs',
    'Cost-effective approach that repairs what is needed without unnecessary work',
    'Coordination with contractors experienced in raised foundation construction',
    'Solutions that extend the service life of your raised foundation system'
  ],
  whatWeProvide: [
    {
      title: 'Raised Foundation Assessment',
      description: 'Complete evaluation of all raised foundation components including piers, posts, mudsills, cripple walls, stem walls, footings, and connections to identify deterioration, damage, and structural deficiencies.'
    },
    {
      title: 'Pier & Post Repair Design',
      description: 'Engineering design for replacement or reinforcement of damaged, deteriorated, or undersized piers and posts, including new footing design and proper connection details.'
    },
    {
      title: 'Mudsill Replacement Engineering',
      description: 'Detailed plans for removing and replacing deteriorated mudsills, including temporary shoring design, jacking procedures, anchor bolt installation, and hold-down connections.'
    },
    {
      title: 'Cripple Wall Repair & Bracing',
      description: 'Structural design for repairing damaged cripple walls and adding plywood bracing to resist earthquake forces, often combined with foundation bolting for comprehensive seismic improvement.'
    },
    {
      title: 'Foundation Bolting Design',
      description: 'Engineering plans for adding anchor bolts to connect the mudsill to the foundation, a critical seismic retrofit measure for homes lacking this connection.'
    },
    {
      title: 'Stem Wall & Footing Repair',
      description: 'Design for repair or replacement of cracked, deteriorated, or settling stem walls and footings, including supplemental support and load transfer solutions.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discussion of your raised foundation concerns, visible symptoms, building age, and any previous repair work to determine the appropriate inspection and engineering scope.'
    },
    {
      step: 2,
      title: 'Foundation Inspection',
      description: 'Detailed on-site inspection of all raised foundation components, crawl space access permitting, with documentation of conditions, measurements, and damage observations.'
    },
    {
      step: 3,
      title: 'Structural Evaluation',
      description: 'Engineering analysis of the existing foundation system to identify deficient components, evaluate remaining capacity, and determine the most effective repair strategy.'
    },
    {
      step: 4,
      title: 'Repair Design',
      description: 'Development of repair solutions for each identified deficiency, with attention to construction sequencing, temporary support requirements, and integration of seismic upgrades where beneficial.'
    },
    {
      step: 5,
      title: 'Construction Documents',
      description: 'Preparation of detailed repair drawings showing all work including demolition, shoring, new construction, connection details, anchor bolt layouts, and specifications.'
    },
    {
      step: 6,
      title: 'PE Stamping & Permitting',
      description: 'Engineering review and PE stamping of all documents for building department submittal, with response to plan check comments and coordination with building officials.'
    },
    {
      step: 7,
      title: 'Contractor Coordination',
      description: 'Pre-construction meeting with the contractor to review repair scope, discuss shoring and jacking procedures, clarify construction sequencing, and address access challenges.'
    },
    {
      step: 8,
      title: 'Construction Observation',
      description: 'Site visits at critical construction stages to verify shoring adequacy, bearing conditions, connection installation, and overall compliance with the engineering design.'
    }
  ],
  commonApplications: [
    'Deteriorated or pest-damaged post replacement',
    'Concrete pier repair and replacement',
    'Mudsill replacement for rot or termite damage',
    'Cripple wall bracing and seismic strengthening',
    'Foundation bolting for earthquake safety',
    'Stem wall crack repair and reinforcement',
    'Settlement correction for raised foundations',
    'Floor leveling over raised foundation systems',
    'Conversion of post-and-pier to continuous foundation',
    'Seismic retrofit of pre-1960s raised foundation homes',
    'Raised foundation repair for real estate transactions',
    'Post-earthquake raised foundation damage repair'
  ],
  costRange: {
    description: 'Raised foundation repair engineering costs depend on the number of deficient components, extent of damage, and complexity of the repair solution.',
    typical: '$2,000 - $6,000 for engineering services; $5,000 - $35,000 for construction',
    factors: [
      'Number and type of components requiring repair',
      'Extent of deterioration or damage',
      'Whether mudsill replacement is required',
      'Seismic upgrade scope (bolting, cripple wall bracing)',
      'Crawl space accessibility and working conditions',
      'Need for temporary shoring and jacking',
      'Foundation size and linear footage of repairs',
      'Soil conditions and footing requirements',
      'Building department requirements and jurisdiction',
      'Whether settlement correction or re-leveling is needed'
    ]
  },
  timeline: {
    design: '2-3 weeks for engineering design and drawings',
    permitting: '2-6 weeks depending on jurisdiction',
    total: '4-9 weeks from assessment to permit approval'
  },
  faqs: [
    {
      question: 'What is a raised foundation?',
      answer: 'A raised foundation elevates the first floor above the ground, creating a crawl space underneath. Common types in California include pier-and-beam (concrete piers with wood posts supporting beams), continuous stem wall (perimeter concrete wall with interior piers), and combinations of both. Most California homes built before the 1960s have raised foundations.'
    },
    {
      question: 'How do I know if my raised foundation needs repair?',
      answer: 'Signs include sagging or uneven floors, bouncy floors, doors and windows that stick, cracks in walls above the foundation, visible deterioration of posts or mudsills in the crawl space, musty odors, and evidence of pest damage. If your home was built before 1960 and has never had foundation work, an engineering assessment is strongly recommended.'
    },
    {
      question: 'What is the difference between raised foundation repair and seismic retrofitting?',
      answer: 'Foundation repair addresses structural damage and deterioration (replacing rotted posts, damaged mudsills, cracked piers). Seismic retrofitting adds earthquake resistance (foundation bolting, cripple wall bracing). The two are often combined because homes needing repair also lack seismic connections. Combining both during one project is more cost-effective than doing them separately.'
    },
    {
      question: 'How much does raised foundation repair cost?',
      answer: 'Engineering fees range from $2,000-$6,000 depending on the scope of repairs needed. Construction costs range from $5,000 for localized post or pier repair to $35,000 or more for comprehensive mudsill replacement, cripple wall bracing, and foundation bolting. We provide detailed cost estimates after our assessment.'
    },
    {
      question: 'Can I combine seismic retrofitting with my raised foundation repair?',
      answer: 'Yes, and we strongly recommend it. When the crawl space is open and accessible for repairs, adding foundation bolting and cripple wall bracing is significantly more cost-effective than performing the seismic work separately later. Our engineers design integrated solutions that address both repair and seismic improvement.'
    },
    {
      question: 'Do raised foundation repairs require permits?',
      answer: 'Yes. Structural repairs to raised foundations require building permits in California. This includes post replacement, mudsill replacement, pier repair, and cripple wall modifications. PE-stamped engineering plans are required for permit approval. We prepare all necessary documents and support you through the permit process.'
    },
    {
      question: 'How long does raised foundation repair take?',
      answer: 'Engineering and permitting typically take 4-9 weeks. Construction takes 2-4 weeks for most residential projects, depending on the scope of work. Comprehensive projects involving full mudsill replacement, multiple post replacements, and seismic retrofitting take 3-6 weeks of construction.'
    },
    {
      question: 'Should I worry about my raised foundation during an earthquake?',
      answer: 'Yes. Raised foundations without proper bolting and cripple wall bracing are among the most vulnerable structures in an earthquake. The house can slide off its foundation or the cripple walls can collapse, causing the home to drop and sustain severe damage. Seismic retrofitting is the most effective way to protect your raised-foundation home from earthquake damage.'
    }
  ],
  cta: {
    headline: 'Need Raised Foundation Repair? Get Expert Engineering.',
    description: 'Contact our licensed structural engineers for a comprehensive raised foundation assessment. We\'ll evaluate every component, design permanent repairs, and deliver PE-stamped plans with clear pricing and realistic timelines.'
  }
},
{
  id: 'one-story-addition-engineering',
  title: 'One Story Addition Structural Engineering Services',
  shortTitle: 'One Story Addition Engineering',
  metaDescription: 'One story addition structural engineering in California. Room additions, sunrooms, bump-outs. PE-stamped plans, roof tie-in. Call (949) 981-4448.',
  heroTitle: 'One Story Addition Structural Engineering',
  heroDescription: 'Professional structural engineering for single-story room additions, bump-outs, sunrooms, and family room additions throughout California. Our licensed engineers design safe connections between your new addition and existing home with PE-stamped plans ready for permit.',
  icon: '🏠',
  overview: 'A one-story addition is one of the best ways to expand your living space without the complexity and cost of building up. Whether you need a new family room, expanded kitchen, sunroom, or extra bedroom, single-story additions require careful structural engineering to ensure the new structure connects safely to your existing home. Our engineers design foundations, framing, roof tie-ins, and lateral force-resisting systems that integrate seamlessly with your current structure while meeting all California Building Code requirements.',
  keyBenefits: [
    'Seamless structural connection between new addition and existing home',
    'Foundation design matched to existing conditions and soil type',
    'Roof tie-in engineering for weathertight, code-compliant connections',
    'PE-stamped plans accepted by all California jurisdictions',
    'Cost-effective designs that avoid over-engineering',
    'Fast 1-2 week turnaround for most single-story additions',
    'Construction support and contractor coordination included'
  ],
  whatWeProvide: [
    {
      title: 'Addition Foundation Design',
      description: 'New foundation design coordinated with your existing foundation type. We address differential settlement, soil conditions, and proper load transfer between old and new structures.'
    },
    {
      title: 'Framing Plans & Details',
      description: 'Complete wood-frame structural plans showing walls, headers, floor framing, ceiling joists, and rafters with all connection details for the new addition.'
    },
    {
      title: 'Roof Tie-In Engineering',
      description: 'Structural design for connecting the new roof to your existing roof system, ensuring proper load paths, drainage, and weatherproofing at the intersection.'
    },
    {
      title: 'Existing Wall Modifications',
      description: 'Engineering for removing or modifying existing exterior walls where the addition connects, including header beams and temporary shoring requirements.'
    },
    {
      title: 'Seismic Design',
      description: 'Lateral force-resisting system design for the addition that integrates with the existing home\'s seismic resistance, meeting California earthquake requirements.'
    },
    {
      title: 'PE-Stamped Permit Documents',
      description: 'Complete structural drawings, calculations, and PE stamp for building department submittal. Includes plan check correction response and permit support.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Discuss your addition plans, review architectural drawings or sketches, and provide preliminary guidance on structural approach and costs.'
    },
    {
      step: 2,
      title: 'Proposal & Agreement',
      description: 'Detailed written proposal outlining scope, deliverables, fees, and timeline specific to your one-story addition project.'
    },
    {
      step: 3,
      title: 'Existing Structure Review',
      description: 'Evaluate your existing home\'s structural system, foundation type, framing, and roof to determine the best connection strategy for the addition.'
    },
    {
      step: 4,
      title: 'Structural Design',
      description: 'Engineering design of the addition\'s foundation, framing, roof, and connections to the existing home. All elements designed per California Building Code.'
    },
    {
      step: 5,
      title: 'Drawing Production',
      description: 'Create detailed structural plans including foundation plan, framing plan, roof framing, connection details, and construction notes.'
    },
    {
      step: 6,
      title: 'Calculations & PE Stamping',
      description: 'Prepare comprehensive structural calculations and apply Professional Engineer stamp to all drawings for permit submittal.'
    },
    {
      step: 7,
      title: 'Plan Check Support',
      description: 'Respond to building department plan check corrections and coordinate with jurisdiction reviewers to obtain permit approval.'
    },
    {
      step: 8,
      title: 'Construction Support',
      description: 'Available during construction for contractor questions, connection clarifications, and field adjustments to ensure proper structural installation.'
    }
  ],
  commonApplications: [
    'Family room additions',
    'Kitchen expansions and bump-outs',
    'Sunroom and enclosed patio additions',
    'Master bedroom suite additions',
    'Bathroom additions',
    'Home office additions',
    'In-law suite additions',
    'Dining room expansions',
    'Mudroom and laundry room additions',
    'Covered patio to enclosed room conversions'
  ],
  costRange: {
    description: 'One-story addition structural engineering fees depend on the size and complexity of the addition and existing home conditions.',
    typical: '$2,500 - $6,000 for most single-story room additions',
    factors: [
      'Addition square footage and layout',
      'Foundation type and soil conditions',
      'Roof tie-in complexity',
      'Existing home construction type and age',
      'Number of existing walls being modified',
      'Beam spans and load requirements',
      'Hillside vs. flat lot conditions',
      'Jurisdiction-specific requirements',
      'Timeline and schedule constraints',
      'Need for construction phase services'
    ]
  },
  timeline: {
    design: '1-2 weeks for most single-story additions',
    permitting: '2-6 weeks depending on jurisdiction',
    total: '3-8 weeks from start to permit approval'
  },
  faqs: [
    {
      question: 'Do I need a structural engineer for a one-story addition?',
      answer: 'Yes. California building departments require PE-stamped structural plans for room additions. A structural engineer designs the foundation, framing, roof tie-in, and connections to your existing home. This ensures safety, code compliance, and smooth permit approval. Skipping structural engineering leads to permit delays and potential safety issues.'
    },
    {
      question: 'How much does structural engineering cost for a room addition?',
      answer: 'Most one-story addition engineering costs $2,500-$6,000 depending on size and complexity. Small bump-outs and sunrooms are typically $2,500-$3,500. Larger additions like family rooms or master suites run $3,500-$6,000. We provide free consultations with detailed quotes before starting work.'
    },
    {
      question: 'How do you connect the new addition to my existing home?',
      answer: 'We engineer the connection at the foundation level (tying new footings to existing), at the wall framing (removing exterior wall sections with proper headers), and at the roof (designing roof tie-in framing and flashing details). Each connection is designed to transfer loads safely and meet seismic requirements.'
    },
    {
      question: 'Will my existing foundation support an addition?',
      answer: 'Your existing foundation typically does not need to support the addition directly. We design a new foundation for the addition that works independently while connecting properly to your existing foundation. If we identify concerns with your existing foundation during evaluation, we address those in our design.'
    },
    {
      question: 'How long does the structural engineering process take?',
      answer: 'Design and drawing production takes 1-2 weeks for most one-story additions. Building department plan review adds 2-6 weeks depending on your jurisdiction. Total timeline from start to approved permit is typically 3-8 weeks. We provide realistic timelines in our proposal.'
    },
    {
      question: 'Can I add a room on a hillside lot?',
      answer: 'Yes, hillside additions require more complex foundation design (stepped footings, piers, or retaining walls) but are absolutely feasible. Engineering costs are higher due to the additional complexity, and geotechnical reports are typically required. We have extensive experience with hillside residential construction throughout Southern California.'
    }
  ],
  cta: {
    headline: 'Ready to Expand Your Living Space?',
    description: 'Contact our licensed structural engineers for a free consultation on your one-story addition. We\'ll review your plans, discuss structural requirements, and provide a detailed proposal with transparent pricing.'
  }
},
{
  id: 'two-story-addition-engineering',
  title: 'Two Story Addition Structural Engineering Services',
  shortTitle: 'Two Story Addition Engineering',
  metaDescription: 'Two story addition structural engineering in California. Second-story additions, pop-tops, foundation evaluation. PE-stamped plans. Call (949) 981-4448.',
  heroTitle: 'Two Story Addition Structural Engineering',
  heroDescription: 'Expert structural engineering for second-story additions, two-story room additions, and pop-top conversions throughout California. We evaluate existing foundations and framing, reinforce as needed, and deliver PE-stamped plans for safe vertical expansion.',
  icon: '🏗️',
  overview: 'Adding a second story transforms your home by doubling living space on the same footprint. However, two-story additions are among the most structurally demanding residential projects. Your existing foundation and first-floor framing were designed for a single story and must be evaluated and often reinforced to carry the new upper-level loads. Our licensed structural engineers specialize in evaluating existing structures, designing reinforcements, and engineering complete two-story addition systems that are safe, code-compliant, and approved by California building departments.',
  keyBenefits: [
    'Thorough evaluation of existing foundation and framing capacity',
    'Cost-effective reinforcement solutions for existing structures',
    'Complete structural design from foundation upgrades through new roof',
    'PE-stamped plans accepted by all California jurisdictions',
    'Seismic design for the combined existing and new structure',
    'Coordination with architects for optimal floor plan integration',
    'Construction phase support for critical structural connections'
  ],
  whatWeProvide: [
    {
      title: 'Existing Structure Evaluation',
      description: 'Comprehensive assessment of your existing foundation, walls, and framing to determine load-carrying capacity and identify reinforcement requirements for supporting a second story.'
    },
    {
      title: 'Foundation Reinforcement Design',
      description: 'Engineering design for foundation upgrades including widening footings, adding new footings, underpinning, or supplemental piers to carry the additional loads from the second story.'
    },
    {
      title: 'First Floor Reinforcement',
      description: 'Design of first-floor structural upgrades including wall reinforcement, header upgrades, post additions, and floor diaphragm strengthening to transfer upper-story loads safely.'
    },
    {
      title: 'Second Story Structural Design',
      description: 'Complete structural engineering for the new upper level including floor framing, wall design, roof framing, and all connection details.'
    },
    {
      title: 'Seismic Upgrade Design',
      description: 'Lateral force-resisting system design for the full two-story structure, often requiring shear wall additions and hold-down connections on both levels.'
    },
    {
      title: 'PE-Stamped Construction Documents',
      description: 'Comprehensive structural drawings, details, schedules, and calculations with Professional Engineer stamp for permit submittal and construction.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Review your addition plans, discuss goals and budget, and provide preliminary guidance on feasibility, structural approach, and estimated costs.'
    },
    {
      step: 2,
      title: 'Existing Structure Investigation',
      description: 'Site visit to inspect foundation type and condition, first-floor framing, wall construction, and attic/crawl space. Document existing structural system for analysis.'
    },
    {
      step: 3,
      title: 'Structural Analysis',
      description: 'Engineering analysis of existing structure capacity versus new loading requirements. Identify specific reinforcements needed at foundation, walls, and framing.'
    },
    {
      step: 4,
      title: 'Reinforcement Design',
      description: 'Design all required upgrades to the existing structure including foundation modifications, wall reinforcement, and connection upgrades.'
    },
    {
      step: 5,
      title: 'New Second Story Design',
      description: 'Complete structural design of the upper level including floor system, walls, roof, and lateral force-resisting system for the full two-story building.'
    },
    {
      step: 6,
      title: 'Drawing Production',
      description: 'Produce comprehensive structural plans showing existing reinforcement, new framing, all details, and construction sequences for the two-story addition.'
    },
    {
      step: 7,
      title: 'PE Stamping & Permit Support',
      description: 'Quality review, calculations preparation, PE stamping, and full support through the building department plan check process.'
    },
    {
      step: 8,
      title: 'Construction Phase Services',
      description: 'Available for critical inspections, contractor coordination, shoring guidance, and field questions throughout the construction process.'
    }
  ],
  commonApplications: [
    'Full second-story additions over existing single-story homes',
    'Pop-top additions (remove roof, add second floor)',
    'Partial second-story additions over a portion of the home',
    'Master suite second-story additions',
    'Two-story bump-out additions',
    'Second story over existing garage',
    'Room additions with second floor above',
    'Cape Cod style dormers and second-floor expansions',
    'Multi-level additions on sloped lots',
    'Second-story decks and balconies with rooms below'
  ],
  costRange: {
    description: 'Two-story addition engineering is more involved than single-story work due to the evaluation and reinforcement of existing structures.',
    typical: '$4,000 - $10,000 for most second-story addition projects',
    factors: [
      'Size of the second-story addition',
      'Age and condition of existing structure',
      'Extent of foundation reinforcement required',
      'First-floor reinforcement complexity',
      'Soil conditions and geotechnical requirements',
      'Architectural complexity and roof design',
      'Seismic design requirements',
      'Number of existing walls being modified',
      'Hillside or challenging site conditions',
      'Construction phase service requirements'
    ]
  },
  timeline: {
    design: '2-4 weeks including existing structure evaluation',
    permitting: '4-8 weeks depending on jurisdiction',
    total: '6-12 weeks from start to permit approval'
  },
  faqs: [
    {
      question: 'Can my existing foundation support a second story?',
      answer: 'Most existing foundations need some level of reinforcement for a second-story addition. Single-story foundations were designed for single-story loads only. We evaluate your existing foundation and design the most cost-effective upgrades, which may include widening footings, adding new footings, underpinning, or supplemental piers. In some cases, newer homes with robust foundations need minimal modifications.'
    },
    {
      question: 'How much does second-story addition engineering cost?',
      answer: 'Structural engineering for second-story additions typically costs $4,000-$10,000. Projects requiring extensive foundation reinforcement or complex existing-structure modifications are at the higher end. Simple pop-top additions on newer homes with adequate foundations start around $4,000-$6,000. We provide detailed quotes after evaluating your existing structure.'
    },
    {
      question: 'Is a second-story addition more expensive than building out?',
      answer: 'Second-story additions cost more for structural engineering due to the required evaluation and reinforcement of existing structures. Construction costs are also typically higher per square foot. However, building up preserves yard space and avoids new foundation costs for the full footprint. The total project cost depends on your specific situation and goals.'
    },
    {
      question: 'How long does a second-story addition take to engineer?',
      answer: 'Structural design takes 2-4 weeks including the existing structure evaluation, reinforcement design, and new second-story design. Building department plan review adds 4-8 weeks. Total timeline from start to approved permit is typically 6-12 weeks. Complex projects or difficult jurisdictions may take longer.'
    },
    {
      question: 'Do I need a geotechnical report for a second-story addition?',
      answer: 'Many building departments require a geotechnical report for second-story additions, especially if foundation modifications are needed. The report provides soil bearing capacity data essential for foundation reinforcement design. We recommend obtaining a geotechnical report early in the process to avoid delays.'
    },
    {
      question: 'Will my first floor need reinforcement?',
      answer: 'Yes, first-floor modifications are common with second-story additions. Existing walls may need additional shear panels and hold-downs for seismic requirements. Headers and beams may need upsizing for increased loads. Floor diaphragm connections often need strengthening. We design all reinforcements to minimize disruption to your existing living space.'
    },
    {
      question: 'Can I live in my home during a second-story addition?',
      answer: 'This is primarily a construction question for your contractor. Most homeowners relocate temporarily during a pop-top addition since the roof is removed. Partial second-story additions may allow you to remain in unaffected areas. Our structural plans include construction sequencing to help contractors phase the work safely.'
    },
    {
      question: 'What is a pop-top addition?',
      answer: 'A pop-top addition removes the existing roof and builds a full or partial second story on top of your existing first floor. The first-floor footprint stays the same while the upper level provides new living space. Pop-tops require comprehensive structural engineering for foundation evaluation, first-floor reinforcement, new second-story design, and a new roof system.'
    }
  ],
  cta: {
    headline: 'Ready to Add a Second Story to Your Home?',
    description: 'Contact our licensed structural engineers for a free consultation. We\'ll evaluate your existing structure, discuss second-story options, and provide a detailed proposal for your two-story addition project.'
  }
},
{
  id: 'new-residential-engineering',
  title: 'New Residential Construction Structural Engineering',
  shortTitle: 'New Home Engineering',
  metaDescription: 'New home structural engineering in California. Custom homes, spec homes, single-family & multi-family. Complete foundation-to-roof design. Call (949) 981-4448.',
  heroTitle: 'New Residential Construction Structural Engineering',
  heroDescription: 'Complete structural engineering for new custom homes, spec homes, and residential construction throughout California. Our licensed engineers design every structural element from foundation to roof, delivering PE-stamped plans optimized for safety, code compliance, and construction efficiency.',
  icon: '🏡',
  overview: 'New residential construction demands a complete structural system designed as a unified whole. Unlike additions or remodels that work within existing constraints, new home engineering starts from the ground up, giving us the opportunity to optimize every element for performance, cost, and constructability. Our structural engineers design foundations, floor systems, wall framing, roof structures, and lateral force-resisting systems that work together to create safe, durable homes that meet California Building Code and local jurisdiction requirements.',
  keyBenefits: [
    'Complete structural system design optimized as a unified whole',
    'Foundation-to-roof engineering coordinated with your architect',
    'Cost-effective designs that reduce material waste and construction time',
    'PE-stamped plans accepted by all California building departments',
    'Expert California seismic design for all Seismic Design Categories',
    'Value engineering to meet budgets without compromising safety',
    'Responsive plan check support and construction phase assistance'
  ],
  whatWeProvide: [
    {
      title: 'Foundation Design',
      description: 'Complete foundation engineering based on geotechnical recommendations, including slab-on-grade, raised foundations, post-tension slabs, or pier-and-grade-beam systems suited to your site.'
    },
    {
      title: 'Floor Framing Design',
      description: 'Engineered floor systems including joist sizing and spacing, beam design, bearing point layout, and subfloor specifications for all levels of the home.'
    },
    {
      title: 'Wall & Header Design',
      description: 'Structural wall layouts, header sizing for all openings, shear wall locations and detailing, and hold-down connections for lateral force resistance.'
    },
    {
      title: 'Roof Framing Design',
      description: 'Roof structural design including rafter or truss specifications, ridge beams, hip beams, valley framing, and connections for California wind and seismic loads.'
    },
    {
      title: 'Lateral Force-Resisting System',
      description: 'Complete seismic and wind design including shear wall layout, hold-down sizing, diaphragm design, and continuous load path from roof to foundation.'
    },
    {
      title: 'Construction Documents & Calculations',
      description: 'Full set of PE-stamped structural drawings with foundation plan, framing plans, details, schedules, and engineering calculations for permit submittal.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Project Consultation',
      description: 'Review architectural plans, discuss project scope and budget, and provide guidance on structural approach, materials, and preliminary cost estimate.'
    },
    {
      step: 2,
      title: 'Proposal & Agreement',
      description: 'Detailed proposal with scope of work, deliverables, engineering fee, and project timeline. Work begins upon your approval.'
    },
    {
      step: 3,
      title: 'Information Gathering',
      description: 'Collect finalized architectural plans, geotechnical report, site survey, and jurisdiction-specific requirements for structural design.'
    },
    {
      step: 4,
      title: 'Structural System Design',
      description: 'Complete engineering design of all structural systems: foundation, floor framing, walls, roof, and lateral force resistance, optimized for your home.'
    },
    {
      step: 5,
      title: 'Drawing Production',
      description: 'Create comprehensive structural plans including foundation plan, floor framing plans, roof framing plan, cross sections, and connection details.'
    },
    {
      step: 6,
      title: 'Quality Review & PE Stamping',
      description: 'Internal quality control review, preparation of structural calculations, and Professional Engineer stamping of all documents.'
    },
    {
      step: 7,
      title: 'Plan Check & Permit Support',
      description: 'Respond to building department plan check corrections, coordinate with reviewers, and support the permit approval process.'
    },
    {
      step: 8,
      title: 'Construction Phase Services',
      description: 'Pre-pour foundation inspection, framing questions, RFI response, and field support throughout construction to ensure design intent is met.'
    }
  ],
  commonApplications: [
    'Custom single-family homes',
    'Spec home construction',
    'Production home structural engineering',
    'Hillside custom homes',
    'Multi-family duplexes and triplexes',
    'Attached townhome units',
    'Estate and luxury home construction',
    'Modular and prefab home foundations',
    'Narrow lot and infill residential',
    'Net-zero and sustainable home structures',
    'Multigenerational home designs',
    'Coastal residential construction'
  ],
  costRange: {
    description: 'New residential structural engineering fees are based on home size, complexity, and site conditions.',
    typical: '$5,000 - $15,000+ depending on size and complexity',
    factors: [
      'Total square footage of the home',
      'Number of stories',
      'Architectural complexity (cantilevers, large spans, irregular shapes)',
      'Foundation type and site soil conditions',
      'Hillside vs. flat lot',
      'Seismic Design Category of the site',
      'Material selections (wood frame, steel, concrete)',
      'Geotechnical report requirements',
      'Jurisdiction plan check complexity',
      'Construction phase service scope'
    ]
  },
  timeline: {
    design: '3-6 weeks for most new residential projects',
    permitting: '4-8 weeks depending on jurisdiction',
    total: '7-14 weeks from start to permit approval'
  },
  faqs: [
    {
      question: 'When should I hire a structural engineer for my new home?',
      answer: 'Engage a structural engineer early in the design process, ideally during architectural schematic design. Early involvement allows us to coordinate with your architect on structural layout, identify cost-saving opportunities, and avoid design conflicts. We need finalized architectural plans to produce construction documents, but early consultation improves the overall design.'
    },
    {
      question: 'How much does structural engineering cost for a new home?',
      answer: 'Most new single-family homes cost $5,000-$15,000 for structural engineering. A standard 2,000-3,000 sq ft home on a flat lot is typically $5,000-$8,000. Larger homes, hillside sites, complex architecture, or multi-story designs range from $8,000-$15,000+. We provide detailed quotes after reviewing your architectural plans.'
    },
    {
      question: 'What information do you need to start?',
      answer: 'We need finalized architectural plans (floor plans, elevations, sections, roof plan), a geotechnical report for the site, and any jurisdiction-specific requirements. Preliminary plans are sufficient for a proposal and cost estimate. Site surveys and topographic maps are helpful for hillside sites.'
    },
    {
      question: 'Do I need a geotechnical report?',
      answer: 'Yes, virtually all California jurisdictions require a geotechnical report for new construction. The report provides essential data including soil bearing capacity, foundation recommendations, seismic site classification, and drainage considerations. We use this information to design your foundation properly. Obtain the geotechnical report early to avoid delays.'
    },
    {
      question: 'How do you handle hillside home design?',
      answer: 'Hillside homes require specialized structural solutions including stepped foundations, retaining walls, pier-and-grade-beam foundations, and enhanced lateral bracing. Engineering costs are higher due to the added complexity, but our experience with Southern California hillside construction ensures efficient, buildable designs. Comprehensive geotechnical data is essential for hillside projects.'
    },
    {
      question: 'Can you design with steel framing instead of wood?',
      answer: 'Yes, we design with wood, steel, concrete, and masonry structural systems. Steel framing offers advantages for long spans, large openings, and fire resistance. We recommend the most appropriate structural system based on your home design, budget, and construction preferences. Many homes use a combination of materials.'
    },
    {
      question: 'What is the difference between structural and architectural plans?',
      answer: 'Architectural plans define the layout, appearance, and functionality of your home. Structural plans define the engineering: foundation sizing and reinforcement, beam and joist sizes, shear wall locations, connection details, and load paths. Building departments require both sets. Structural plans are based on the architectural design and must be coordinated throughout the process.'
    },
    {
      question: 'Do you coordinate with my architect during design?',
      answer: 'Yes, coordination with your architect is essential for a successful project. We communicate on shear wall placement, beam locations that affect ceiling heights, post locations, and any structural elements visible in the finished home. Good coordination prevents costly conflicts during construction.'
    }
  ],
  cta: {
    headline: 'Building a New Home in California?',
    description: 'Contact our licensed structural engineers for a free consultation on your new residential project. We\'ll review your plans, discuss structural options, and deliver a detailed proposal for complete foundation-to-roof engineering.'
  }
},
{
  id: 'apartment-units-engineering',
  title: 'Apartment Building Structural Engineering Services',
  shortTitle: 'Apartment Building Engineering',
  metaDescription: 'Apartment building structural engineering in California. Multi-unit, condos, podium construction, seismic design. Licensed PE plans. Call (949) 981-4448.',
  heroTitle: 'Apartment Building Structural Engineering',
  heroDescription: 'Comprehensive structural engineering for apartment buildings, condominium complexes, townhomes, and multi-unit residential developments throughout California. Our licensed engineers deliver efficient, code-compliant designs for Type III and Type V construction with expert seismic engineering.',
  icon: '🏢',
  overview: 'Apartment building structural engineering requires deep expertise in multi-unit residential construction, California seismic codes, and efficient structural system design that controls costs while meeting life-safety requirements. From 4-unit buildings to large apartment complexes, our engineers design complete structural systems including foundations, floor diaphragms, shear walls, and gravity framing optimized for repetitive unit layouts. We specialize in Type V wood-frame, Type III construction, and podium (Type I over Type V) buildings common throughout California residential development.',
  keyBenefits: [
    'Expertise in Type V wood-frame and Type III multi-unit construction',
    'Podium and mixed-type construction design experience',
    'Efficient structural layouts optimized for repetitive unit plans',
    'Advanced seismic design for California Seismic Design Categories D-F',
    'PE-stamped plans accepted by all California jurisdictions',
    'Value engineering to reduce material costs and construction time',
    'Full construction administration services for complex builds'
  ],
  whatWeProvide: [
    {
      title: 'Complete Structural System Design',
      description: 'Full structural engineering for multi-unit buildings including foundations, floor systems, wall framing, roof structure, and lateral force-resisting system designed for California seismic requirements.'
    },
    {
      title: 'Podium & Mixed Construction Design',
      description: 'Specialized engineering for podium buildings with concrete or steel lower levels supporting wood-frame upper stories, including transfer structures and seismic separation considerations.'
    },
    {
      title: 'Seismic Engineering',
      description: 'Advanced seismic analysis and design for multi-story apartment buildings including rigid and flexible diaphragm analysis, torsional irregularity checks, and overstrength requirements.'
    },
    {
      title: 'Foundation Engineering',
      description: 'Foundation design for multi-unit buildings addressing concentrated loads, continuous footings, mat foundations, or deep foundation systems based on geotechnical conditions.'
    },
    {
      title: 'Construction Documents',
      description: 'Comprehensive structural drawing sets including foundation plans, framing plans for each level, roof framing, typical and special details, and structural schedules.'
    },
    {
      title: 'Construction Administration',
      description: 'Shop drawing review, RFI response, site observations, pre-pour inspections, and coordination with contractors and building officials throughout construction.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Project Kickoff Meeting',
      description: 'Meet with the development team to review architectural plans, discuss construction type, budget targets, and timeline. Establish coordination protocols with architect and other consultants.'
    },
    {
      step: 2,
      title: 'Fee Proposal & Contract',
      description: 'Detailed scope of work and fee proposal covering design phases, construction documents, and construction administration services for the apartment project.'
    },
    {
      step: 3,
      title: 'Schematic Design',
      description: 'Preliminary structural layout including gravity system, lateral system, and foundation concept. Coordinate with architect on shear wall locations, transfer conditions, and structural impacts on unit layouts.'
    },
    {
      step: 4,
      title: 'Design Development',
      description: 'Detailed structural analysis and member sizing. Finalize lateral system design, floor framing layouts, and foundation type. Resolve coordination issues with other disciplines.'
    },
    {
      step: 5,
      title: 'Construction Document Production',
      description: 'Produce complete structural drawing set with plans, sections, details, schedules, and specifications. Coordinate with architectural, mechanical, electrical, and plumbing disciplines.'
    },
    {
      step: 6,
      title: 'Quality Control & PE Stamping',
      description: 'Internal quality assurance review, code compliance verification, calculation completion, and Professional Engineer stamping of all documents.'
    },
    {
      step: 7,
      title: 'Plan Check & Permit Support',
      description: 'Submit to building department, respond to plan check corrections, attend meetings with building officials, and coordinate until permit approval is obtained.'
    },
    {
      step: 8,
      title: 'Construction Administration',
      description: 'Review submittals and shop drawings, respond to RFIs, conduct periodic site observations, and provide construction support through project completion.'
    }
  ],
  commonApplications: [
    'Garden-style apartment complexes',
    'Podium apartment buildings (concrete over wood-frame)',
    'Condominium buildings and complexes',
    'Townhome and row house developments',
    'Affordable housing projects',
    'Mixed-use residential over retail',
    'Senior living and assisted living facilities',
    'Student housing developments',
    'Type V wood-frame apartment buildings (up to 4 stories)',
    'Type III apartment buildings (up to 5 stories)',
    'Wrap-style apartment buildings',
    'Transit-oriented residential developments'
  ],
  costRange: {
    description: 'Apartment building structural engineering fees scale with building size, number of units, and construction complexity.',
    typical: '$15,000 - $75,000+ depending on building size and construction type',
    factors: [
      'Number of units and building square footage',
      'Number of stories and construction type (Type V, III, podium)',
      'Structural system complexity (transfers, irregular geometry)',
      'Seismic design requirements and site classification',
      'Foundation type and geotechnical conditions',
      'Podium or mixed-construction interface requirements',
      'Level of architectural complexity',
      'Subterranean parking or basement levels',
      'Construction administration scope and duration',
      'Jurisdiction plan check requirements and timeline'
    ]
  },
  timeline: {
    design: '6-12 weeks depending on building size and complexity',
    permitting: '6-16 weeks depending on jurisdiction and project scope',
    total: '12-28 weeks from start to permit approval'
  },
  faqs: [
    {
      question: 'What construction types do you design for apartment buildings?',
      answer: 'We design Type V-A and V-B wood-frame (most common for 2-4 story apartments), Type III-A and III-B (for taller wood-frame buildings up to 5 stories), and podium construction (Type I concrete podium with Type V wood-frame above). We also design steel and concrete structures for larger projects. The optimal construction type depends on building height, unit count, and local requirements.'
    },
    {
      question: 'How much does apartment building structural engineering cost?',
      answer: 'Small apartment projects (4-12 units) typically range from $15,000-$30,000. Mid-size projects (12-50 units) range from $25,000-$50,000. Large or complex projects (50+ units, podium construction) range from $50,000-$75,000+. Fees reflect the extensive analysis, detailing, and coordination required for multi-unit buildings. We provide detailed proposals after reviewing your plans.'
    },
    {
      question: 'What is podium construction?',
      answer: 'Podium construction places a concrete or steel structure (typically containing parking or commercial space) at the ground level, with wood-frame residential stories above. The concrete podium acts as the foundation for the wood structure and provides fire separation. This construction type is popular in California for maximizing density. It requires specialized structural engineering at the interface between construction types.'
    },
    {
      question: 'How do you handle seismic design for apartment buildings?',
      answer: 'California apartment buildings require rigorous seismic design. We perform complete lateral analysis including base shear calculation, story drift checks, torsional irregularity evaluation, and diaphragm design. Shear walls with hold-downs provide lateral resistance in wood-frame buildings. We optimize shear wall placement to minimize impact on unit layouts while meeting all seismic code requirements.'
    },
    {
      question: 'How long does the engineering process take?',
      answer: 'Structural design takes 6-12 weeks for most apartment projects, running concurrently with architectural design development. Building department plan review adds 6-16 weeks depending on jurisdiction and project complexity. Total timeline from structural design start to permit approval is typically 12-28 weeks. We align our schedule with the overall project timeline.'
    },
    {
      question: 'Do you provide construction phase services?',
      answer: 'Yes, construction administration is a standard part of our apartment building services. This includes review of structural submittals and shop drawings, response to contractor RFIs, periodic site observations during critical construction phases, pre-pour foundation and post-tension inspections, and coordination meetings. These services ensure structural design intent is properly executed.'
    },
    {
      question: 'Can you help with value engineering?',
      answer: 'Value engineering is integral to our apartment building design approach. We optimize structural member sizes, simplify framing layouts for construction efficiency, select cost-effective lateral systems, and coordinate with the architect to minimize structural impacts on unit plans. Efficient structural design directly reduces construction costs on repetitive multi-unit buildings.'
    },
    {
      question: 'What about fire-rated assemblies in apartment buildings?',
      answer: 'Fire-rated floor/ceiling and wall assemblies are required between units and at corridors in apartment buildings. We design structural systems compatible with required fire-rated assemblies, including UL-listed floor/ceiling systems and fire-rated shear walls. Our framing plans reference specific fire-rated assembly designations to ensure code compliance.'
    }
  ],
  cta: {
    headline: 'Planning a Multi-Unit Residential Project?',
    description: 'Contact our licensed structural engineers for a consultation on your apartment or condominium project. We bring deep experience in multi-unit residential construction and deliver efficient, code-compliant designs that keep your project on schedule and on budget.'
  }
},
{
  id: 'garage-conversion-engineering',
  title: 'Garage Conversion Structural Engineering Services',
  shortTitle: 'Garage Conversion Engineering',
  metaDescription: 'Garage conversion structural engineering in California. Convert garages to living space, ADUs, home offices. PE-stamped plans. Call (949) 981-4448.',
  heroTitle: 'Garage Conversion Structural Engineering',
  heroDescription: 'Professional structural engineering for converting garages to living space, ADU conversions, home offices, and studios throughout California. Our licensed engineers design floor system upgrades, new openings, and structural modifications with PE-stamped plans for fast permit approval.',
  icon: '🔧',
  overview: 'Garage conversions are one of the most cost-effective ways to add living space to your home. Converting an attached or detached garage into a bedroom, home office, studio, or ADU requires structural modifications to meet residential habitability standards. Garage floors need to be raised or leveled, garage door openings need to be infilled with structural walls, and the space must meet California Building Code requirements for habitable rooms. Our structural engineers design these modifications efficiently, ensuring your converted garage is safe, code-compliant, and approved by your local building department.',
  keyBenefits: [
    'Fast turnaround — most garage conversions engineered in 1-2 weeks',
    'Cost-effective engineering for budget-friendly projects',
    'Floor system design to bring garage slabs to habitable room standards',
    'Garage door opening infill and new window/door engineering',
    'PE-stamped plans accepted by all California jurisdictions',
    'ADU garage conversion expertise under California ADU laws',
    'Simple, buildable designs that keep construction costs down'
  ],
  whatWeProvide: [
    {
      title: 'Floor System Modifications',
      description: 'Engineering for raising the garage floor to match the house level or designing a new floor system over the existing slab, including insulation and moisture barrier requirements.'
    },
    {
      title: 'Garage Door Opening Infill',
      description: 'Structural design for closing the garage door opening with a new framed wall, including proper foundation connection and integration of new windows or doors.'
    },
    {
      title: 'New Openings & Windows',
      description: 'Engineering for new window and door openings in existing garage walls, including header design, cripple stud framing, and proper load path maintenance.'
    },
    {
      title: 'Structural Wall Reinforcement',
      description: 'Assessment and reinforcement design for existing garage walls to meet habitable room requirements, including shear wall modifications for seismic compliance.'
    },
    {
      title: 'Foundation Assessment',
      description: 'Evaluation of existing garage foundation adequacy for residential use, with reinforcement or modification design if the existing foundation is insufficient.'
    },
    {
      title: 'PE-Stamped Permit Documents',
      description: 'Complete structural drawings and calculations with Professional Engineer stamp, prepared specifically for garage conversion permit requirements in your jurisdiction.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'Discuss your garage conversion plans, review the existing garage conditions, and provide guidance on structural requirements and estimated engineering costs.'
    },
    {
      step: 2,
      title: 'Proposal & Agreement',
      description: 'Clear, fixed-fee proposal outlining structural engineering scope, deliverables, and timeline for your garage conversion project.'
    },
    {
      step: 3,
      title: 'Existing Garage Evaluation',
      description: 'Assess the existing garage structure including foundation type, wall framing, roof/ceiling structure, and slab elevation relative to the house.'
    },
    {
      step: 4,
      title: 'Structural Design',
      description: 'Design all structural modifications: floor system changes, garage door infill wall, new openings, wall reinforcement, and any required seismic upgrades.'
    },
    {
      step: 5,
      title: 'Drawing Production',
      description: 'Produce structural plans showing all modifications with details, notes, and specifications needed for construction and permit approval.'
    },
    {
      step: 6,
      title: 'Calculations & PE Stamping',
      description: 'Prepare structural calculations and apply Professional Engineer stamp to all drawings for building department submittal.'
    },
    {
      step: 7,
      title: 'Permit Support',
      description: 'Respond to building department plan check corrections and support the permit approval process for your garage conversion.'
    },
    {
      step: 8,
      title: 'Construction Support',
      description: 'Available for contractor questions, field clarifications, and inspection coordination during the garage conversion construction.'
    }
  ],
  commonApplications: [
    'Attached garage to bedroom conversion',
    'Garage to ADU/accessory dwelling unit conversion',
    'Garage to home office or studio conversion',
    'Garage to family room or living space conversion',
    'Garage to in-law suite conversion',
    'Detached garage to rental unit conversion',
    'Garage to home gym or recreation room conversion',
    'Two-car garage to one-car garage plus living space',
    'Garage to music studio or workshop conversion',
    'Partial garage conversion with retained parking'
  ],
  costRange: {
    description: 'Garage conversion structural engineering is among the most affordable residential engineering services due to the limited scope of modifications.',
    typical: '$2,000 - $5,000 for most garage conversion projects',
    factors: [
      'Attached vs. detached garage',
      'Existing foundation condition and type',
      'Floor elevation change requirements',
      'Number and size of new openings',
      'Extent of wall modifications needed',
      'Seismic upgrade requirements',
      'ADU conversion vs. non-ADU conversion',
      'Jurisdiction-specific requirements',
      'Existing garage structural condition',
      'Need for roof or ceiling modifications'
    ]
  },
  timeline: {
    design: '1-2 weeks for most garage conversions',
    permitting: '2-4 weeks (ADU conversions receive expedited review)',
    total: '3-6 weeks from start to permit approval'
  },
  faqs: [
    {
      question: 'Do I need a structural engineer for a garage conversion?',
      answer: 'Yes, most California building departments require PE-stamped structural plans for garage conversions. Structural modifications include infilling the garage door opening, modifying the floor system, adding new openings, and ensuring the converted space meets seismic requirements. A structural engineer ensures these changes are safe and code-compliant.'
    },
    {
      question: 'How much does garage conversion engineering cost?',
      answer: 'Structural engineering for garage conversions typically costs $2,000-$5,000. Simple conversions with minimal modifications are $2,000-$3,000. More complex conversions requiring significant floor system changes, multiple new openings, or ADU compliance run $3,000-$5,000. We provide exact quotes after reviewing your project.'
    },
    {
      question: 'What happens to the garage door opening?',
      answer: 'The garage door opening is infilled with a new framed wall that matches the existing construction. This wall typically includes new windows and an entry door. We engineer the new wall for proper load transfer, seismic resistance, and connection to the existing foundation. The new wall becomes a permanent, structural part of the building.'
    },
    {
      question: 'Does the garage floor need to be raised?',
      answer: 'Garage floors are typically 4-7 inches lower than the house floor and slope toward the garage door for drainage. For habitable space, the floor must be level and at or near the house floor elevation. Solutions include pouring a new concrete topper, building a raised wood floor system, or a combination approach. We design the most cost-effective solution for your specific situation.'
    },
    {
      question: 'Can I convert my garage to an ADU?',
      answer: 'Yes, California law specifically allows garage conversions to ADUs with streamlined permitting. ADU garage conversions follow state ADU regulations that limit local jurisdiction restrictions. The structural requirements are similar to standard conversions with additional considerations for a fully independent living unit. ADU conversions receive expedited plan review, typically 2-4 weeks.'
    },
    {
      question: 'Will I lose my parking space?',
      answer: 'Converting a garage eliminates that parking space. California ADU law prohibits cities from requiring replacement parking for ADU garage conversions. For non-ADU conversions, some jurisdictions may require replacement parking. Check with your local planning department. Partial conversions (converting one bay of a two-car garage) can preserve one parking space.'
    },
    {
      question: 'How long does the entire process take?',
      answer: 'Structural engineering takes 1-2 weeks. Building department plan review takes 2-4 weeks, with ADU conversions receiving expedited review. Total timeline from engineering start to approved permit is typically 3-6 weeks. Construction typically takes 4-8 weeks depending on the scope of conversion work.'
    },
    {
      question: 'Do I need to upgrade the electrical and plumbing?',
      answer: 'Electrical and plumbing upgrades are handled by your electrical and plumbing contractors, not the structural engineer. Garage conversions typically need upgraded electrical service, new outlets, lighting, and HVAC. ADU conversions also need plumbing for kitchen and bathroom. We coordinate our structural plans with the other disciplines to avoid conflicts.'
    }
  ],
  cta: {
    headline: 'Ready to Convert Your Garage?',
    description: 'Contact our licensed structural engineers for a free consultation on your garage conversion. We\'ll assess your existing garage, explain the structural requirements, and provide a clear, fixed-fee proposal for fast permit-ready plans.'
  }
},
// Service Page Data - Batch 3
// permit-engineering, deck-balcony-structural-analysis, warehouse-engineering,
// parking-structure-engineering, retaining-wall-engineering, hillside-engineering

{
  id: 'permit-engineering',
  title: 'Permit Engineering & Plan Check Services in California',
  shortTitle: 'Permit Engineering',
  metaDescription: 'PE-stamped permit plans & plan check response for California building departments. Expedited permit engineering services. Call (949) 981-4448.',
  heroTitle: 'Permit Engineering & Plan Check Services',
  heroDescription: 'Get your project permitted faster with professional permit engineering services. Our licensed structural engineers prepare PE-stamped plans, respond to plan check corrections, and navigate building department requirements across every California jurisdiction.',
  icon: '📋',
  overview: 'Permit engineering transforms your project from concept to approved construction documents. Building departments across California require PE-stamped structural plans and calculations before issuing construction permits. Our structural engineers prepare complete permit packages, respond to plan check corrections, and coordinate with building officials to get your project approved. We work with over 200 California jurisdictions and understand the specific requirements, review timelines, and processes that each department demands.',
  keyBenefits: [
    'PE-stamped plans accepted by all California building departments',
    'Rapid plan check correction turnaround within 48-72 hours',
    'Experience with 200+ California jurisdictions and their specific requirements',
    'Expedited permit processing for time-sensitive projects',
    'Single point of contact for all structural permit questions',
    'Transparent flat-fee pricing with no hidden costs',
    'Digital delivery for immediate permit submittal'
  ],
  whatWeProvide: [
    {
      title: 'PE-Stamped Structural Plans',
      description: 'Complete structural construction documents including foundation plans, framing plans, connection details, and structural notes. All drawings stamped and signed by a California-licensed Professional Engineer.'
    },
    {
      title: 'Structural Calculations',
      description: 'Comprehensive engineering calculations documenting gravity loads, lateral force analysis, member design, and connection design. Formatted to meet building department review standards.'
    },
    {
      title: 'Plan Check Correction Response',
      description: 'Fast turnaround on building department correction letters. We review each comment, prepare revised drawings or supplemental calculations, and resubmit for approval.'
    },
    {
      title: 'Expedited Permit Services',
      description: 'Accelerated design and drawing production for projects with tight schedules. Same-week delivery available for straightforward residential projects.'
    },
    {
      title: 'Building Department Coordination',
      description: 'Direct communication with plan check engineers to resolve questions, clarify design intent, and expedite approval. We speak the same technical language as the reviewers.'
    },
    {
      title: 'Over-the-Counter Permit Support',
      description: 'Preparation of permit packages designed for same-day over-the-counter approval at jurisdictions that offer this option, including pre-check of all submittal requirements.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Project Intake',
      description: 'Submit your architectural plans and project scope. We review the documents, identify the applicable jurisdiction, and confirm permit requirements within 24 hours.'
    },
    {
      step: 2,
      title: 'Fee Proposal',
      description: 'Receive a flat-fee quote with clear scope, deliverables, and timeline. No work begins until you approve the proposal.'
    },
    {
      step: 3,
      title: 'Structural Analysis',
      description: 'Engineering analysis of your project including gravity loads, seismic forces, wind loads, and load path evaluation per California Building Code.'
    },
    {
      step: 4,
      title: 'Drawing Production',
      description: 'Creation of permit-ready structural drawings with all plans, details, schedules, and notes required by the building department.'
    },
    {
      step: 5,
      title: 'Calculations Package',
      description: 'Preparation of organized structural calculations with table of contents, clearly referenced to drawings, ready for plan check review.'
    },
    {
      step: 6,
      title: 'PE Stamp & Delivery',
      description: 'Professional Engineer review, stamp, and signature on all documents. Digital PDF delivery for immediate submittal to the building department.'
    },
    {
      step: 7,
      title: 'Plan Check Response',
      description: 'Review building department correction letters, prepare revised drawings and supplemental calculations, and resubmit within 48-72 hours.'
    },
    {
      step: 8,
      title: 'Permit Approval Support',
      description: 'Continued support through final approval including any additional rounds of corrections, building official meetings, or supplemental documentation.'
    }
  ],
  commonApplications: [
    'Residential room additions and remodels',
    'Load-bearing wall removal permits',
    'ADU and garage conversion permits',
    'Second-story addition permits',
    'Deck and patio cover permits',
    'Commercial tenant improvement permits',
    'Seismic retrofit permits',
    'Solar panel structural permits',
    'New residential construction permits',
    'Foundation repair permits',
    'Retaining wall permits',
    'Industrial and warehouse permits'
  ],
  costRange: {
    description: 'Permit engineering fees are based on project type and complexity. We offer flat-fee pricing for predictable costs.',
    typical: '$1,500 - $5,000 for simple permits; $5,000 - $15,000+ for complex commercial or multi-story projects',
    factors: [
      'Project type (residential vs. commercial)',
      'Building size and square footage',
      'Number of stories',
      'Structural complexity and system type',
      'Jurisdiction-specific requirements',
      'Expedited timeline requirements',
      'Number of plan check correction rounds',
      'Need for over-the-counter submittal preparation',
      'Coordination with other disciplines',
      'Construction phase services'
    ]
  },
  timeline: {
    design: '1-2 weeks for residential; 2-4 weeks for commercial',
    permitting: 'Varies by jurisdiction: 1-2 weeks (over-the-counter) to 8-12 weeks (full plan check)',
    total: '2-6 weeks for residential; 4-16 weeks for commercial depending on jurisdiction'
  },
  faqs: [
    {
      question: 'What do I need to provide for permit engineering?',
      answer: 'We need architectural plans or sketches showing the proposed work, site address, and project scope description. For remodels, photos of existing conditions are helpful. For new construction, finalized architectural drawings and a geotechnical report are ideal. We guide you through exactly what is needed during our initial review.'
    },
    {
      question: 'How long does it take to get a building permit?',
      answer: 'Permit timelines depend on the jurisdiction and project type. Simple residential projects at over-the-counter jurisdictions take 1-2 weeks. Standard plan check takes 2-6 weeks for residential and 4-12 weeks for commercial. We know the current processing times at every major California building department and set accurate expectations upfront.'
    },
    {
      question: 'What happens if the building department has corrections?',
      answer: 'Plan check corrections are normal and expected. When the building department issues a correction letter, we review every comment, prepare revised drawings and supplemental calculations, and resubmit within 48-72 hours. Most projects require one round of corrections. Our experience with each jurisdiction helps us minimize corrections in the first place.'
    },
    {
      question: 'Do you handle permits for all California cities?',
      answer: 'Yes, we prepare permit packages for every California jurisdiction including all cities and counties in Los Angeles, Orange, San Diego, Riverside, San Bernardino, Ventura, and Santa Barbara counties. We understand each department\'s specific requirements, submittal processes, and plan check preferences.'
    },
    {
      question: 'Can you expedite my permit?',
      answer: 'We offer expedited engineering services with same-week delivery for straightforward projects. Some jurisdictions also offer expedited plan check for additional fees. We prepare your documents to take advantage of every available fast-track option and advise on the fastest path to permit approval for your specific project.'
    },
    {
      question: 'How much does permit engineering cost?',
      answer: 'Simple residential permits (wall removal, patio cover, small remodel) range from $1,500-$3,500. Larger residential projects (additions, ADUs, new homes) range from $3,000-$5,000. Commercial permits range from $5,000-$15,000+ depending on size and complexity. All fees include one round of plan check corrections.'
    },
    {
      question: 'Do I need a structural engineer for my permit?',
      answer: 'California requires PE-stamped structural plans for any project involving structural modifications, new construction, or building department discretion. This includes load-bearing wall removals, additions, new buildings, and most remodels that affect the structure. Even when not strictly required, PE-stamped plans speed up plan check and reduce corrections.'
    },
    {
      question: 'What is the difference between permit engineering and full structural engineering?',
      answer: 'Permit engineering focuses on producing the minimum documentation required for permit approval. Full structural engineering includes additional services like design development, construction administration, and field inspection. For most residential projects, permit engineering provides everything needed. Complex projects benefit from full structural engineering services.'
    }
  ],
  cta: {
    headline: 'Get Your Project Permitted Faster',
    description: 'Contact us for a free permit consultation. We\'ll review your project, identify the fastest path to approval, and provide a flat-fee quote for PE-stamped permit plans and plan check support.'
  }
},
{
  id: 'deck-balcony-structural-analysis',
  title: 'Deck & Balcony Structural Engineering in California',
  shortTitle: 'Deck & Balcony Engineering',
  metaDescription: 'Deck & balcony structural engineering, SB 326/SB 721 inspections, and repair design. Licensed PE for California projects. Call (949) 981-4448.',
  heroTitle: 'Deck & Balcony Structural Engineering',
  heroDescription: 'Expert structural engineering for deck construction, balcony repair, and California-mandated SB 326 and SB 721 inspections. Our licensed engineers design safe, durable exterior structures and help property owners comply with California balcony inspection laws.',
  icon: '🏗️',
  overview: 'Decks and balconies are among the most failure-prone building components in California. Exposure to weather, improper waterproofing, and deferred maintenance cause wood rot, connection failure, and structural deterioration that creates serious safety hazards. California recognized this risk with SB 326 (condominiums/HOAs) and SB 721 (apartments), which mandate periodic structural inspections of exterior elevated elements. Our structural engineers specialize in deck and balcony design, inspection, and repair engineering for both new construction and existing structures.',
  keyBenefits: [
    'SB 326 and SB 721 compliance inspections by licensed structural engineers',
    'New deck and balcony structural design with proper waterproofing details',
    'Repair and rehabilitation engineering for deteriorated structures',
    'Comprehensive inspection reports with prioritized repair recommendations',
    'PE-stamped repair plans for permit and construction',
    'Experience with wood, steel, and concrete deck systems',
    'Multi-building portfolio inspection programs for HOAs and property managers'
  ],
  whatWeProvide: [
    {
      title: 'SB 326 Inspections (HOA/Condos)',
      description: 'Licensed structural engineer inspections of exterior elevated elements for condominium associations as required by California Civil Code Section 5551. Includes visual and invasive inspection, load-bearing assessment, and waterproofing evaluation with a comprehensive written report.'
    },
    {
      title: 'SB 721 Inspections (Apartments)',
      description: 'Structural inspections of balconies, decks, walkways, and stairways for apartment buildings with three or more units as required by California Health & Safety Code. Inspection, reporting, and repair recommendations included.'
    },
    {
      title: 'New Deck & Balcony Design',
      description: 'Complete structural engineering for new deck and balcony construction including framing design, connection details, ledger attachments, post and beam sizing, railing design, and waterproofing specifications.'
    },
    {
      title: 'Repair & Rehabilitation Engineering',
      description: 'Structural repair design for deteriorated decks and balconies including member replacement, connection upgrades, waterproofing systems, and structural reinforcement plans with PE-stamped drawings.'
    },
    {
      title: 'Load Capacity Evaluation',
      description: 'Engineering assessment of existing deck and balcony load capacity for hot tubs, spas, rooftop equipment, or increased occupancy. Analysis includes current condition assessment and capacity determination.'
    },
    {
      title: 'Waterproofing Consultation',
      description: 'Expert guidance on waterproofing systems, flashing details, drainage design, and material selection to prevent moisture intrusion and extend the life of exterior elevated structures.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Discuss your project needs whether new construction design, inspection compliance, or repair engineering. Review property information and determine scope of work.'
    },
    {
      step: 2,
      title: 'Site Inspection',
      description: 'On-site visual and invasive inspection of existing structures. For new construction, review architectural plans and site conditions. Document all findings with photos and measurements.'
    },
    {
      step: 3,
      title: 'Structural Analysis',
      description: 'Engineering analysis of existing conditions or new design including load calculations, connection adequacy, member capacity, and waterproofing assessment.'
    },
    {
      step: 4,
      title: 'Inspection Report / Design',
      description: 'For inspections: deliver comprehensive report with findings, condition ratings, and prioritized repair recommendations. For new construction: develop structural design.'
    },
    {
      step: 5,
      title: 'Repair Plan Development',
      description: 'If repairs are needed, prepare detailed structural repair plans showing all work required including demolition, new members, connections, and waterproofing.'
    },
    {
      step: 6,
      title: 'PE Stamping & Delivery',
      description: 'Professional Engineer stamp on all reports, plans, and calculations. Digital delivery for immediate use or permit submittal.'
    },
    {
      step: 7,
      title: 'Permit & Contractor Support',
      description: 'Assist with permit applications, respond to plan check corrections, and help qualify contractors for repair work.'
    },
    {
      step: 8,
      title: 'Construction Observation',
      description: 'Site visits during repair or new construction to verify structural work matches the approved plans and engineering intent.'
    }
  ],
  commonApplications: [
    'SB 326 condominium balcony inspections',
    'SB 721 apartment building inspections',
    'New residential deck construction',
    'Balcony repair and rehabilitation',
    'Second-story deck design',
    'Rooftop deck engineering',
    'Hot tub and spa deck reinforcement',
    'Stairway and walkway structural assessment',
    'Deck railing design and compliance',
    'Waterproofing system design',
    'Multi-building portfolio inspections',
    'Post-failure forensic investigation'
  ],
  costRange: {
    description: 'Costs depend on whether the project involves inspection, new design, or repair engineering.',
    typical: '$1,500 - $5,000 for engineering design; $500 - $2,000 per building for SB 326/SB 721 inspections',
    factors: [
      'Number of buildings and units to inspect',
      'Extent of invasive inspection required',
      'New construction vs. repair engineering',
      'Deck size and structural complexity',
      'Height and access requirements',
      'Material type (wood, steel, concrete)',
      'Waterproofing system complexity',
      'Number of plan check correction rounds',
      'Construction observation visits needed',
      'Portfolio volume discounts for multi-building properties'
    ]
  },
  timeline: {
    design: '1-2 weeks for deck design; inspection reports delivered within 2-3 weeks',
    permitting: '2-6 weeks depending on jurisdiction and repair scope',
    total: '3-8 weeks for design-to-permit; inspections completed within 30 days of scheduling'
  },
  faqs: [
    {
      question: 'What is SB 326 and does it apply to my property?',
      answer: 'SB 326 (California Civil Code Section 5551) requires condominium associations (HOAs) to have a licensed structural engineer or architect inspect all exterior elevated elements (balconies, decks, walkways, stairways) that are more than 6 feet above grade and have wood-framed structural support. The first inspections were due by January 1, 2025, with follow-up inspections every 9 years. If your property is a condominium with an HOA, SB 326 applies.'
    },
    {
      question: 'What is SB 721 and does it apply to my property?',
      answer: 'SB 721 (California Health & Safety Code Section 17973) requires inspection of exterior elevated elements on apartment buildings with 3 or more multifamily dwelling units. Inspections must be performed by a licensed architect, structural engineer, or contractor. The first inspections were due by January 1, 2025, with follow-up inspections every 6 years. If your property is an apartment building with 3+ units, SB 721 applies.'
    },
    {
      question: 'How much does a balcony inspection cost?',
      answer: 'SB 326 and SB 721 inspections typically cost $500-$2,000 per building depending on the number of balconies, access requirements, and extent of invasive inspection needed. Multi-building properties receive volume discounts. We provide detailed quotes based on your specific property after reviewing building plans and unit counts.'
    },
    {
      question: 'What happens if my balcony fails inspection?',
      answer: 'If the inspection identifies structural deficiencies, the inspector must report immediately dangerous conditions to the local building department within 15 days. Non-emergency repairs must be completed within 120 days of the report (180 days with an approved plan). We provide repair engineering services including PE-stamped repair plans and construction support to bring your property into compliance.'
    },
    {
      question: 'Do I need a structural engineer to design a new deck?',
      answer: 'California building departments require PE-stamped structural plans for most deck construction, especially elevated decks, decks attached to the house, and decks supporting heavy loads like hot tubs. Even for simple ground-level decks, proper engineering ensures safe connections, adequate member sizing, and code compliance. Engineering also protects against liability.'
    },
    {
      question: 'How long do deck and balcony repairs take?',
      answer: 'Repair timelines depend on the extent of deterioration. Minor repairs (connection upgrades, localized member replacement) take 1-2 weeks of construction. Major rehabilitation (full deck replacement, waterproofing system installation) takes 3-6 weeks. Engineering and permitting typically add 3-8 weeks before construction begins. We provide detailed schedules with every repair plan.'
    },
    {
      question: 'What causes deck and balcony failures?',
      answer: 'The primary cause is moisture intrusion from failed or inadequate waterproofing, which leads to wood rot in structural members and connections. Other causes include improper ledger connections to the building, inadequate fasteners, overloading, lack of maintenance, and original construction defects. California\'s coastal climate accelerates deterioration, making regular inspection essential.'
    },
    {
      question: 'Can you inspect multiple buildings for our HOA?',
      answer: 'Yes, we offer portfolio inspection programs for HOAs and property management companies with multiple buildings. We develop a systematic inspection plan, coordinate access with residents, and deliver organized reports for each building. Volume pricing is available for properties with 5 or more buildings. We also help HOAs develop long-term maintenance and reserve planning based on inspection findings.'
    }
  ],
  cta: {
    headline: 'Schedule Your Deck or Balcony Engineering Service',
    description: 'Contact us for SB 326/SB 721 inspection quotes, new deck design consultations, or balcony repair engineering. Our licensed structural engineers protect your property and keep your residents safe.'
  }
},
{
  id: 'warehouse-engineering',
  title: 'Warehouse & Industrial Structural Engineering Services',
  shortTitle: 'Warehouse Engineering',
  metaDescription: 'Warehouse & industrial structural engineering in California. Steel buildings, mezzanines, equipment foundations. Licensed PE designs. Call (949) 981-4448.',
  heroTitle: 'Warehouse & Industrial Structural Engineering',
  heroDescription: 'Comprehensive structural engineering for warehouse construction, industrial facilities, mezzanines, and equipment foundations. Our licensed engineers design efficient steel and concrete structures built for heavy loading, clear spans, and California seismic requirements.',
  icon: '🏭',
  overview: 'Warehouse and industrial buildings demand structural engineering expertise in steel and concrete construction, heavy loading, clear-span framing, and specialized operational requirements. These structures support overhead cranes, heavy equipment, mezzanine floors, and high-density storage while resisting seismic forces, wind loads, and environmental conditions unique to California. Our structural engineers design cost-effective industrial structures that maximize usable space, accommodate future flexibility, and meet all California Building Code and jurisdictional requirements.',
  keyBenefits: [
    'Steel and concrete structural design optimized for industrial use',
    'Clear-span designs up to 200 feet without interior columns',
    'Heavy loading analysis for equipment, cranes, and high-density storage',
    'Mezzanine and platform engineering for maximizing vertical space',
    'California seismic design for essential and high-hazard facilities',
    'Pre-engineered metal building coordination and foundation design',
    'Value engineering to reduce steel tonnage and construction costs'
  ],
  whatWeProvide: [
    {
      title: 'Warehouse Structural Design',
      description: 'Complete structural engineering for new warehouse construction including steel or concrete framing, roof systems, wall bracing, and foundation design. Optimized for clear-span requirements and operational flexibility.'
    },
    {
      title: 'Mezzanine Engineering',
      description: 'Design of steel mezzanine floors for additional usable area within existing or new warehouses. Includes structural framing, connections to existing structure, stair and railing design, and loading analysis.'
    },
    {
      title: 'Equipment Foundation Design',
      description: 'Specialized foundation engineering for heavy machinery, CNC equipment, presses, generators, and other industrial equipment. Includes vibration isolation, anchor bolt design, and dynamic load analysis.'
    },
    {
      title: 'Crane and Hoist Support',
      description: 'Structural design for overhead bridge cranes, jib cranes, and monorail systems including runway beams, support columns, and connection details rated for specified crane capacity and duty cycle.'
    },
    {
      title: 'Tenant Improvement Engineering',
      description: 'Structural engineering for warehouse and industrial tenant improvements including demising walls, new openings, office mezzanines, loading docks, and equipment installations.'
    },
    {
      title: 'Seismic Evaluation & Retrofit',
      description: 'Assessment of existing warehouse and industrial structures for seismic adequacy. Retrofit design for tilt-up concrete, steel frame, and masonry buildings to meet current code requirements.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Project Scoping',
      description: 'Review operational requirements including clear-span needs, loading specifications, crane requirements, future expansion plans, and budget targets.'
    },
    {
      step: 2,
      title: 'Structural System Selection',
      description: 'Evaluate structural system options (steel frame, pre-engineered metal building, tilt-up concrete, hybrid) and recommend the most cost-effective system for your requirements.'
    },
    {
      step: 3,
      title: 'Preliminary Design',
      description: 'Develop preliminary structural design with member sizes, bay spacing, and foundation layout. Provide preliminary cost estimate for structural construction.'
    },
    {
      step: 4,
      title: 'Detailed Engineering',
      description: 'Complete structural analysis including gravity loads, seismic forces, wind loads, crane loads, and all applicable loading combinations per California Building Code.'
    },
    {
      step: 5,
      title: 'Construction Documents',
      description: 'Production of comprehensive structural drawings including foundation plans, anchor bolt plans, framing plans, connection details, and specifications.'
    },
    {
      step: 6,
      title: 'PE Stamping & Coordination',
      description: 'Quality review, coordination with architectural and MEP disciplines, PE stamp, and delivery of permit-ready documents.'
    },
    {
      step: 7,
      title: 'Plan Check & Permitting',
      description: 'Response to building department corrections, coordination with plan check engineers, and support through permit approval.'
    },
    {
      step: 8,
      title: 'Construction Administration',
      description: 'Shop drawing review for steel fabrication, RFI response, site visits during critical phases, and special inspection coordination.'
    }
  ],
  commonApplications: [
    'New warehouse construction',
    'Distribution center design',
    'Manufacturing facility engineering',
    'Steel mezzanine floor systems',
    'Equipment and machinery foundations',
    'Overhead crane support structures',
    'Tilt-up concrete warehouse design',
    'Pre-engineered metal building foundations',
    'Loading dock and ramp design',
    'Cold storage and freezer facilities',
    'Hazardous material storage buildings',
    'Warehouse seismic retrofitting'
  ],
  costRange: {
    description: 'Warehouse and industrial structural engineering fees depend on building size, complexity, and specialized requirements.',
    typical: '$10,000 - $50,000+ for engineering depending on building size and complexity',
    factors: [
      'Building square footage and height',
      'Clear-span requirements',
      'Structural system type (steel, concrete, hybrid)',
      'Crane and heavy equipment loads',
      'Seismic design category and importance factor',
      'Mezzanine and multi-level requirements',
      'Soil conditions and foundation complexity',
      'Pre-engineered metal building coordination',
      'Special inspection and testing requirements',
      'Construction administration scope'
    ]
  },
  timeline: {
    design: '4-8 weeks for structural design',
    permitting: '6-12 weeks depending on jurisdiction and project complexity',
    total: '10-20 weeks from start to permit; fast-track phased delivery available'
  },
  faqs: [
    {
      question: 'What structural system is best for a warehouse?',
      answer: 'The best system depends on your requirements and budget. Steel frame construction offers the most design flexibility and largest clear spans. Pre-engineered metal buildings are cost-effective for standard configurations. Tilt-up concrete provides excellent durability and fire resistance. We analyze your specific needs and recommend the most economical solution. Most California warehouses use steel framing due to seismic performance and clear-span capability.'
    },
    {
      question: 'How much does warehouse structural engineering cost?',
      answer: 'Engineering fees typically range from $10,000-$25,000 for standard warehouses under 50,000 square feet, and $25,000-$50,000+ for larger or more complex facilities. Mezzanine engineering ranges from $3,000-$10,000. Equipment foundations range from $2,000-$8,000 each. We provide detailed proposals based on your specific project scope.'
    },
    {
      question: 'Can you design for overhead cranes?',
      answer: 'Yes, we design structural support systems for all types of overhead cranes including top-running and under-running bridge cranes, jib cranes, and monorail systems. Our designs account for crane dead load, lifted load, impact, lateral forces, and fatigue considerations per AISC Design Guide 7. We coordinate with crane manufacturers to ensure the structural support system matches the specified crane system.'
    },
    {
      question: 'Do you work with pre-engineered metal building companies?',
      answer: 'Yes, we regularly coordinate with pre-engineered metal building (PEMB) suppliers including Butler, Nucor, BlueScope, and others. We design the concrete foundations, anchor bolt layouts, and any structural modifications needed for the PEMB system. We also review PEMB shop drawings and erection plans for structural adequacy.'
    },
    {
      question: 'What are California seismic requirements for warehouses?',
      answer: 'California warehouses must be designed for seismic forces per ASCE 7 and the California Building Code. Requirements include lateral force-resisting systems (braced frames, moment frames, or shear walls), proper diaphragm design, foundation anchorage, and non-structural component bracing for rack storage and equipment. Essential facilities and high-hazard occupancies have elevated seismic requirements.'
    },
    {
      question: 'Can you add a mezzanine to an existing warehouse?',
      answer: 'Yes, we design mezzanine additions for existing warehouses. The engineering includes analysis of the existing structure to verify it supports the new mezzanine loads, design of the mezzanine framing and connections, and any needed reinforcement of the existing building. We also address code requirements for egress, fire rating, and accessibility that apply to the mezzanine addition.'
    },
    {
      question: 'How long does warehouse engineering take?',
      answer: 'Standard warehouse structural design takes 4-8 weeks. Permitting adds 6-12 weeks depending on the jurisdiction. Phased delivery is available for fast-track projects where foundation construction can begin while upper structure design continues. Total timeline from start to permit approval is typically 10-20 weeks.'
    },
    {
      question: 'Do you provide construction phase services for industrial projects?',
      answer: 'Yes, we offer full construction administration including shop drawing review for structural steel fabrication, concrete mix design review, RFI responses, site visits during critical construction phases (anchor bolt placement, steel erection, concrete pours), and coordination with special inspection and testing agencies.'
    }
  ],
  cta: {
    headline: 'Start Your Warehouse or Industrial Project',
    description: 'Contact our industrial structural engineering team for a consultation. We\'ll evaluate your requirements, recommend the optimal structural system, and deliver cost-effective engineering that keeps your project on schedule and on budget.'
  }
},
{
  id: 'parking-structure-engineering',
  title: 'Parking Structure Structural Engineering Services',
  shortTitle: 'Parking Structure Engineering',
  metaDescription: 'Parking garage structural engineering in California. Multi-level parking design, ramp systems, seismic design. Licensed PE. Call (949) 981-4448.',
  heroTitle: 'Parking Structure Structural Engineering',
  heroDescription: 'Specialized structural engineering for parking garages, multi-level parking structures, and parking facility design. Our licensed engineers deliver efficient, durable parking structures designed for California seismic requirements and long-term performance.',
  icon: '🅿️',
  overview: 'Parking structures are among the most demanding building types for structural engineers. They must support heavy vehicle loads across large open spans while resisting seismic forces, accommodating thermal movement, and withstanding environmental exposure that causes concrete deterioration. California parking structures face additional challenges including aggressive seismic design requirements and coastal corrosion. Our structural engineers bring specialized expertise in parking structure design, combining efficient framing systems with durable details that reduce long-term maintenance costs and extend service life.',
  keyBenefits: [
    'Specialized parking structure design expertise with proven California projects',
    'Efficient framing systems that maximize parking count per square foot',
    'Long-span designs minimizing columns for easier vehicle circulation',
    'Durability detailing for 50+ year service life in California climates',
    'Seismic design meeting California essential facility requirements when applicable',
    'Ramp geometry and vehicle circulation optimization',
    'Post-tensioned concrete expertise for reduced maintenance and longer spans'
  ],
  whatWeProvide: [
    {
      title: 'Parking Structure Design',
      description: 'Complete structural engineering for new multi-level parking garages including concrete and steel framing systems, foundation design, ramp structures, shear walls, and all connection details for California seismic requirements.'
    },
    {
      title: 'Ramp & Circulation Design',
      description: 'Structural design of helical ramps, speed ramps, sloping floors, and express ramps optimized for vehicle traffic flow. Coordination with parking consultants on geometry, turning radii, and sight lines.'
    },
    {
      title: 'Post-Tensioned Concrete Design',
      description: 'Engineering of post-tensioned concrete floor systems that deliver longer spans, thinner slabs, reduced deflections, and improved waterproofing performance compared to conventional reinforced concrete.'
    },
    {
      title: 'Condition Assessment & Repair',
      description: 'Structural evaluation of existing parking structures including concrete deterioration mapping, corrosion assessment, load capacity analysis, and prioritized repair design with cost estimates.'
    },
    {
      title: 'Seismic Evaluation & Retrofit',
      description: 'Seismic assessment of existing parking structures and retrofit design to meet current California Building Code requirements. Includes analysis of diaphragms, shear walls, moment frames, and foundations.'
    },
    {
      title: 'Mixed-Use Podium Design',
      description: 'Structural engineering for parking podiums supporting residential, commercial, or office towers above. Transfer structure design for column offsets between parking and upper floors.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Programming & Feasibility',
      description: 'Review parking count requirements, site constraints, vehicle circulation needs, and budget. Evaluate structural system options and provide preliminary recommendations.'
    },
    {
      step: 2,
      title: 'Schematic Design',
      description: 'Develop structural layout with bay spacing, framing direction, ramp locations, and lateral system placement. Coordinate with architects and parking consultants on geometry.'
    },
    {
      step: 3,
      title: 'Design Development',
      description: 'Refine structural design including member sizing, post-tensioning layout, foundation design, and connection details. Prepare preliminary structural drawings for coordination review.'
    },
    {
      step: 4,
      title: 'Structural Analysis',
      description: 'Comprehensive computer modeling and analysis including gravity, seismic, wind, thermal, and creep/shrinkage effects. Verify all members and connections meet code requirements.'
    },
    {
      step: 5,
      title: 'Construction Documents',
      description: 'Production of complete structural drawings including foundation plans, framing plans at each level, post-tensioning plans, ramp details, connection details, and specifications.'
    },
    {
      step: 6,
      title: 'Quality Control & PE Stamping',
      description: 'Independent internal review of all documents, PE stamp, and delivery of permit-ready construction documents and calculations.'
    },
    {
      step: 7,
      title: 'Plan Check & Permitting',
      description: 'Response to building department corrections, meetings with plan check engineers as needed, and support through permit approval for these complex structures.'
    },
    {
      step: 8,
      title: 'Construction Administration',
      description: 'Shop drawing review, post-tensioning submittals review, RFI response, concrete mix design approval, site observations during critical construction phases, and special inspection coordination.'
    }
  ],
  commonApplications: [
    'Multi-level above-grade parking garages',
    'Underground parking structures',
    'Mixed-use podium parking with residential or office above',
    'Hospital and medical center parking',
    'Airport parking facilities',
    'University and campus parking structures',
    'Retail and commercial parking garages',
    'Automated parking systems',
    'Parking structure repair and rehabilitation',
    'Seismic retrofit of existing parking structures',
    'EV charging infrastructure structural support',
    'Rooftop parking with solar canopy structures'
  ],
  costRange: {
    description: 'Parking structure engineering fees are based on structure size, complexity, and construction type.',
    typical: '$25,000 - $100,000+ for structural engineering depending on size and complexity',
    factors: [
      'Number of levels and total parking count',
      'Structural system (post-tensioned concrete, precast, steel)',
      'Above-grade vs. below-grade construction',
      'Mixed-use podium vs. standalone structure',
      'Ramp configuration complexity',
      'Seismic design category and importance factor',
      'Soil conditions and foundation type',
      'Durability requirements and exposure conditions',
      'Construction administration scope',
      'Phased construction requirements'
    ]
  },
  timeline: {
    design: '8-16 weeks for structural design depending on size and complexity',
    permitting: '8-16 weeks for plan check and approval',
    total: '16-32 weeks from start to permit; phased delivery available for fast-track construction'
  },
  faqs: [
    {
      question: 'What structural system is best for a parking garage?',
      answer: 'Post-tensioned cast-in-place concrete is the most common and often most economical system for California parking structures. It provides long spans (up to 60+ feet), thin slabs that reduce building height, excellent durability, and superior seismic performance. Precast concrete offers faster construction but requires more seismic connections. Steel framing is used for lighter structures or special configurations. We evaluate all options for your project.'
    },
    {
      question: 'How much does parking structure engineering cost?',
      answer: 'Engineering fees typically range from $25,000-$50,000 for structures under 200 spaces and $50,000-$100,000+ for larger facilities. Mixed-use podium structures with transfer conditions cost more due to added complexity. Fees are typically 0.5%-1.5% of structural construction cost. We provide detailed proposals after understanding your project scope and requirements.'
    },
    {
      question: 'How long does it take to design a parking structure?',
      answer: 'Structural design typically takes 8-16 weeks depending on size and complexity. Permitting adds another 8-16 weeks. Total timeline from start to construction-ready documents is 16-32 weeks. Fast-track phased delivery allows foundation construction to begin while upper level design continues, saving 4-8 weeks on the overall schedule.'
    },
    {
      question: 'What makes parking structures different from other buildings?',
      answer: 'Parking structures have unique structural challenges: long clear spans for vehicle circulation, sloped floors for drainage, ramp transitions between levels, heavy concentrated wheel loads, thermal expansion from exposure, and aggressive deterioration from water, deicing salts, and vehicle fluids. Proper detailing for durability is essential to avoid costly maintenance. California seismic requirements add further complexity to the design.'
    },
    {
      question: 'Can you design parking below a residential or office building?',
      answer: 'Yes, we specialize in mixed-use podium design where parking levels support residential, office, or commercial towers above. This requires transfer structure engineering where column layouts change between parking and upper floors. We design efficient transfer beams, transfer slabs, and shear wall transitions that accommodate both the parking and upper structure requirements.'
    },
    {
      question: 'How do you address durability in parking structures?',
      answer: 'We specify protective measures including proper concrete cover over reinforcement, low-permeability concrete mixes, adequate drainage slopes, waterproof traffic coatings, expansion joint details, and corrosion-resistant reinforcement where needed. Post-tensioned concrete provides built-in crack control that improves durability. Our details are specifically developed for California coastal and inland exposure conditions.'
    },
    {
      question: 'Do parking structures need seismic design in California?',
      answer: 'Yes, all California parking structures must be designed for seismic forces per the California Building Code. Parking structures require robust lateral force-resisting systems, typically concrete shear walls or moment frames. Ramp connections, diaphragm design, and foundation anchorage are critical seismic elements. Structures supporting essential facilities have elevated seismic requirements.'
    },
    {
      question: 'Can you assess and repair an existing parking structure?',
      answer: 'Yes, we perform comprehensive condition assessments of existing parking structures including concrete deterioration surveys, corrosion mapping, load capacity analysis, and seismic evaluation. We prepare prioritized repair recommendations with cost estimates and design PE-stamped repair documents for concrete patching, post-tensioning repair, waterproofing, and structural strengthening.'
    }
  ],
  cta: {
    headline: 'Plan Your Parking Structure Project',
    description: 'Contact our parking structure engineering specialists for a consultation. We\'ll evaluate your site, parking requirements, and budget to deliver an efficient structural design that maximizes parking count and minimizes long-term costs.'
  }
},
{
  id: 'retaining-wall-engineering',
  title: 'Retaining Wall Engineering & Design Services in California',
  shortTitle: 'Retaining Wall Engineering',
  metaDescription: 'Retaining wall engineering & design in California. Concrete, masonry, soldier pile walls. PE-stamped plans for permits. Call (949) 981-4448.',
  heroTitle: 'Retaining Wall Engineering & Design',
  heroDescription: 'Professional retaining wall engineering for hillside properties, property line walls, pool walls, and grade changes throughout California. Our licensed structural engineers design safe, code-compliant retaining walls optimized for your site conditions and budget.',
  icon: '🧱',
  overview: 'Retaining walls hold back earth and resist lateral soil pressures that increase with wall height, soil type, slope conditions, and surcharge loads. Improperly designed retaining walls fail by sliding, overturning, or structural cracking - failures that are expensive to repair and create serious safety hazards. California\'s varied terrain, seismic activity, and expansive soils make professional retaining wall engineering essential. Our structural engineers design retaining walls for residential and commercial properties using concrete, masonry, soldier pile, and mechanically stabilized earth (MSE) systems, ensuring each wall is sized for actual site conditions based on geotechnical data.',
  keyBenefits: [
    'Retaining wall designs based on actual site-specific soil conditions',
    'Multiple wall type expertise: concrete, masonry, soldier pile, MSE, shotcrete',
    'Seismic design per California Building Code for earthquake resistance',
    'Cost-effective designs that avoid over-engineering while maintaining safety',
    'PE-stamped plans accepted by all California building departments',
    'Coordination with geotechnical engineers for soil parameters',
    'Drainage design integrated into structural plans to prevent hydrostatic failure'
  ],
  whatWeProvide: [
    {
      title: 'Retaining Wall Design',
      description: 'Complete structural engineering for new retaining walls including stability analysis (sliding, overturning, bearing), structural design of the wall stem and footing, reinforcement detailing, and drainage provisions.'
    },
    {
      title: 'Wall Type Selection',
      description: 'Engineering evaluation and recommendation of the most appropriate wall type for your site: cast-in-place concrete, concrete masonry (CMU), soldier pile and lagging, mechanically stabilized earth (MSE), or shotcrete.'
    },
    {
      title: 'Hillside Retaining Systems',
      description: 'Specialized engineering for hillside retaining walls including stepped wall systems, tiered walls, tie-back anchors, and soil nail walls designed for steep slope conditions and California seismic requirements.'
    },
    {
      title: 'Pool & Property Line Walls',
      description: 'Retaining wall design for swimming pool perimeters, property line grade changes, and fencing applications. Includes surcharge loading from adjacent structures, vehicles, or equipment.'
    },
    {
      title: 'PE-Stamped Permit Plans',
      description: 'Complete construction documents including wall elevations, cross-sections, footing details, reinforcement schedules, drainage details, and structural notes for building department approval.'
    },
    {
      title: 'Repair & Assessment',
      description: 'Evaluation of existing retaining walls with structural distress including leaning, cracking, sliding, or drainage failure. Design of repair and stabilization solutions.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Site Evaluation',
      description: 'Review site conditions, wall height and length requirements, adjacent structures, surcharge loads, and drainage patterns. Determine if a geotechnical investigation is needed.'
    },
    {
      step: 2,
      title: 'Geotechnical Coordination',
      description: 'Review geotechnical report for soil parameters including lateral earth pressure coefficients, bearing capacity, friction angle, and recommendations for wall type and drainage.'
    },
    {
      step: 3,
      title: 'Wall Type Selection',
      description: 'Evaluate wall type options considering height, site access, soil conditions, aesthetics, and budget. Recommend the most cost-effective system for your project.'
    },
    {
      step: 4,
      title: 'Structural Design',
      description: 'Engineering analysis including lateral earth pressure calculation, stability checks (sliding, overturning, bearing, global), structural member design, and seismic loading.'
    },
    {
      step: 5,
      title: 'Drainage Design',
      description: 'Design of wall drainage system including backdrain, weep holes, surface drainage, and subdrain to prevent hydrostatic pressure buildup behind the wall.'
    },
    {
      step: 6,
      title: 'Drawing Production & PE Stamping',
      description: 'Create detailed construction drawings showing wall geometry, reinforcement, footing, drainage, and all construction details. PE stamp for permit submittal.'
    },
    {
      step: 7,
      title: 'Permit Support',
      description: 'Submit plans to building department, respond to plan check corrections, and coordinate with officials for permit approval.'
    },
    {
      step: 8,
      title: 'Construction Support',
      description: 'Contractor guidance, pre-pour inspection of reinforcement, and construction observation to verify the wall is built according to the approved structural plans.'
    }
  ],
  commonApplications: [
    'Hillside property retaining walls',
    'Property line grade change walls',
    'Swimming pool retaining walls',
    'Driveway and parking area retaining walls',
    'Landscaping and garden walls over 4 feet',
    'Building foundation retaining walls',
    'Road and highway retaining structures',
    'Stepped and tiered wall systems',
    'Basement and below-grade walls',
    'Commercial site retaining walls',
    'Erosion control structures',
    'Retaining wall repair and replacement'
  ],
  costRange: {
    description: 'Retaining wall engineering costs depend on wall height, length, site conditions, and wall type.',
    typical: '$2,000 - $8,000 for engineering design depending on wall size and complexity',
    factors: [
      'Wall height (walls over 6 feet cost more to engineer)',
      'Total wall length',
      'Soil conditions and geotechnical complexity',
      'Surcharge loads (structures, vehicles, slopes above wall)',
      'Wall type (concrete, masonry, soldier pile, MSE)',
      'Hillside vs. flat site conditions',
      'Seismic design requirements',
      'Drainage system complexity',
      'Number of walls on the project',
      'Construction observation requirements'
    ]
  },
  timeline: {
    design: '1-3 weeks for residential walls; 3-6 weeks for complex or commercial walls',
    permitting: '2-6 weeks depending on jurisdiction',
    total: '3-12 weeks from start to permit approval'
  },
  faqs: [
    {
      question: 'When do I need engineering for a retaining wall?',
      answer: 'Most California jurisdictions require engineered plans for retaining walls over 4 feet in height (measured from bottom of footing to top of wall). Walls of any height that support surcharge loads (buildings, driveways, slopes) or are on property lines typically require engineering. Even for shorter walls, engineering prevents expensive failures and ensures your investment lasts.'
    },
    {
      question: 'What type of retaining wall is best for my project?',
      answer: 'The best wall type depends on height, site conditions, and budget. Cast-in-place concrete is versatile and strong for most applications. CMU (masonry block) works well for moderate heights with a finished look. Soldier pile walls are ideal for tight property line conditions where excavation is limited. MSE walls are cost-effective for taller walls with available space. We recommend the best option after evaluating your specific site.'
    },
    {
      question: 'How much does retaining wall engineering cost?',
      answer: 'Engineering fees range from $2,000-$4,000 for standard residential retaining walls and $4,000-$8,000 for taller, longer, or more complex walls. Hillside walls with tie-backs or soil nails are at the higher end. Multi-wall projects receive per-wall pricing that reduces the overall cost. We provide detailed quotes after reviewing your site conditions.'
    },
    {
      question: 'Do I need a geotechnical report for a retaining wall?',
      answer: 'Most building departments require a geotechnical report for retaining walls over 4 feet. The report provides soil parameters essential for proper design including lateral earth pressure, bearing capacity, and drainage recommendations. Without a geotechnical report, we must use conservative assumptions that result in a more expensive wall. We recommend geotechnical engineers if you need a report.'
    },
    {
      question: 'Why is drainage so important for retaining walls?',
      answer: 'Water pressure behind a retaining wall dramatically increases the forces the wall must resist. Hydrostatic pressure from saturated soil can double the lateral load on the wall, leading to failure. Proper drainage including granular backfill, filter fabric, perforated drain pipe, and weep holes is essential. We design integrated drainage systems with every retaining wall.'
    },
    {
      question: 'Can a failing retaining wall be repaired?',
      answer: 'Many failing retaining walls can be repaired or stabilized depending on the cause and extent of failure. Solutions include adding tie-back anchors, installing soil nails, constructing a supplemental wall, improving drainage, and underpinning the foundation. Severe failures with significant displacement may require full replacement. We assess the condition and recommend the most cost-effective repair approach.'
    },
    {
      question: 'How tall can a retaining wall be?',
      answer: 'Single retaining walls are typically designed up to 20-25 feet tall, though taller walls are possible with specialized systems like tie-back anchors or soil nails. For very tall grade changes, tiered wall systems with terraces between walls distribute the load and reduce individual wall heights. The maximum practical height depends on soil conditions, available space, and budget.'
    },
    {
      question: 'Do retaining walls need to be designed for earthquakes in California?',
      answer: 'Yes, California Building Code requires seismic design for retaining walls. Earthquakes generate additional lateral forces on retaining walls through dynamic earth pressure. Our designs include seismic loading per current code requirements, ensuring your wall performs safely during an earthquake. This is especially critical for walls supporting structures, roads, or occupied areas.'
    }
  ],
  cta: {
    headline: 'Get Expert Retaining Wall Engineering',
    description: 'Contact us for a free retaining wall consultation. Our licensed structural engineers will evaluate your site, recommend the right wall type, and deliver cost-effective PE-stamped plans for your project.'
  }
},
{
  id: 'hillside-engineering',
  title: 'Hillside & Slope Engineering Services in California',
  shortTitle: 'Hillside Engineering',
  metaDescription: 'Hillside structural engineering in California. Slope stability, caisson foundations, retaining systems. Licensed PE for hillside homes. Call (949) 981-4448.',
  heroTitle: 'Hillside & Slope Engineering Services',
  heroDescription: 'Specialized structural engineering for hillside home construction, slope stability solutions, and foundation systems for challenging terrain. Our licensed engineers design safe, buildable structures on California hillsides with expertise in caisson foundations, retaining systems, and geotechnical coordination.',
  icon: '⛰️',
  overview: 'Hillside construction in California presents unique structural engineering challenges that demand specialized expertise. Steep slopes, variable soil conditions, seismic forces, drainage complexities, and environmental regulations all converge to make hillside projects among the most technically demanding in residential and commercial construction. Our structural engineers have extensive experience designing buildings on slopes, working closely with geotechnical engineers, architects, and contractors to deliver safe, cost-effective hillside structures. We specialize in deep foundation systems, retaining structures, and structural framing that accounts for the complex load paths inherent in hillside construction.',
  keyBenefits: [
    'Deep foundation expertise including caissons, grade beams, and piers',
    'Close coordination with geotechnical engineers for site-specific solutions',
    'Retaining wall and shoring design integrated with building structures',
    'Seismic design for hillside structures with irregular configurations',
    'Slope stability awareness informing all structural design decisions',
    'Experience with California Coastal Commission and hillside ordinance requirements',
    'Value engineering to control costs on inherently expensive hillside projects'
  ],
  whatWeProvide: [
    {
      title: 'Hillside Foundation Design',
      description: 'Engineering of deep foundation systems for hillside construction including drilled caissons (piers), grade beams, micro-piles, and combinations designed to transfer building loads through unstable surface soils to competent bearing material below.'
    },
    {
      title: 'Retaining System Engineering',
      description: 'Design of retaining walls, soldier pile walls, tie-back anchored walls, and soil nail walls required for hillside grading, building pad creation, and slope stabilization on residential and commercial hillside projects.'
    },
    {
      title: 'Hillside Structural Framing',
      description: 'Design of structural framing systems for buildings on slopes including stepped foundations, cantilever framing over slopes, multi-level stepped structures, and lateral force-resisting systems for irregular hillside configurations.'
    },
    {
      title: 'Slope Stability Coordination',
      description: 'Integration of geotechnical slope stability analysis into structural design decisions including setbacks from slope faces, foundation depth requirements, surcharge load limitations, and drainage provisions.'
    },
    {
      title: 'Shoring & Excavation Support',
      description: 'Temporary shoring design for hillside excavation including soldier pile and lagging, sheet pile walls, and braced excavations required to safely construct hillside foundations and retaining walls.'
    },
    {
      title: 'Geotechnical Coordination',
      description: 'Close coordination with geotechnical engineers throughout design including review of boring logs, interpretation of soil parameters, foundation recommendations, and construction monitoring requirements.'
    }
  ],
  processSteps: [
    {
      step: 1,
      title: 'Site Reconnaissance',
      description: 'Visit the hillside site to assess slope conditions, access constraints, existing improvements, drainage patterns, and any visible signs of slope movement or instability.'
    },
    {
      step: 2,
      title: 'Geotechnical Review',
      description: 'Thorough review of the geotechnical investigation report including boring logs, soil strength parameters, slope stability analysis, foundation recommendations, and grading requirements.'
    },
    {
      step: 3,
      title: 'Foundation Strategy',
      description: 'Develop the foundation approach based on geotechnical recommendations, building loads, and slope geometry. Select caisson depths, sizes, and layout to efficiently support the structure.'
    },
    {
      step: 4,
      title: 'Retaining Wall Design',
      description: 'Design all retaining structures required for the project including upslope and downslope walls, building basement walls, and any temporary shoring needed for construction.'
    },
    {
      step: 5,
      title: 'Structural Framing Design',
      description: 'Engineer the building structural system accounting for complex hillside load paths, stepped floor elevations, cantilevered elements, and lateral force resistance for the irregular configuration.'
    },
    {
      step: 6,
      title: 'Construction Documents',
      description: 'Produce comprehensive structural drawings including caisson schedules, grade beam plans, retaining wall details, framing plans, and all connection details for permit and construction.'
    },
    {
      step: 7,
      title: 'Permit Processing',
      description: 'Navigate hillside permit requirements including geotechnical review boards, coastal commission approvals if applicable, and building department plan check with response to corrections.'
    },
    {
      step: 8,
      title: 'Construction Administration',
      description: 'Site visits during critical construction phases including caisson drilling observation, reinforcement inspection, shoring installation, and structural framing verification on the challenging hillside site.'
    }
  ],
  commonApplications: [
    'New hillside home construction',
    'Hillside home additions and remodels',
    'Caisson and grade beam foundation systems',
    'Hillside retaining wall engineering',
    'Slope stabilization structures',
    'Basement and below-grade construction on slopes',
    'Cantilevered deck and balcony structures over slopes',
    'Driveway retaining walls and bridges on hillsides',
    'Pool and spa engineering on hillside properties',
    'Temporary shoring for hillside excavation',
    'Landslide repair and slope restoration',
    'Hillside property assessment and feasibility studies'
  ],
  costRange: {
    description: 'Hillside structural engineering costs are higher than flat-site projects due to the specialized foundation systems and retaining structures required.',
    typical: '$5,000 - $20,000+ for structural engineering depending on project scope and slope complexity',
    factors: [
      'Slope steepness and building pad size',
      'Foundation type and depth (caisson depths significantly affect cost)',
      'Extent of retaining walls required',
      'Building size and number of levels',
      'Geotechnical complexity and soil conditions',
      'Shoring and temporary support requirements',
      'Seismic design requirements for irregular structures',
      'Access constraints affecting construction approach',
      'Hillside ordinance and special permit requirements',
      'Construction administration and observation scope'
    ]
  },
  timeline: {
    design: '3-6 weeks for structural design',
    permitting: '4-10 weeks depending on jurisdiction and hillside review requirements',
    total: '7-16 weeks from start to permit; hillside ordinance reviews may extend timeline'
  },
  faqs: [
    {
      question: 'Can you build on a steep hillside in California?',
      answer: 'Yes, construction on steep hillsides is achievable with proper engineering. California has thousands of hillside homes built on slopes of 30% to over 100% grade. The key requirements are a thorough geotechnical investigation, appropriate deep foundation systems (typically caissons), engineered retaining structures, and structural framing designed for the complex hillside load paths. Costs are higher than flat-site construction, but the views and property values often justify the investment.'
    },
    {
      question: 'What type of foundation is used for hillside homes?',
      answer: 'Hillside homes typically use drilled caisson (pier) foundations connected by grade beams. Caissons are drilled deep into competent bedrock or stable soil below the slope surface, providing a solid foundation that is not affected by surface soil movement. Caisson diameters typically range from 18 to 36 inches with depths from 10 to 40+ feet depending on soil conditions. The grade beam system ties the caissons together and supports the building above.'
    },
    {
      question: 'How much does hillside structural engineering cost?',
      answer: 'Hillside structural engineering typically ranges from $5,000-$10,000 for smaller projects like additions or retaining walls, and $10,000-$20,000+ for new hillside home construction. The higher cost reflects the complexity of deep foundation design, retaining wall engineering, and the specialized analysis required for irregular hillside structures. These engineering fees represent a small fraction of the overall hillside construction cost.'
    },
    {
      question: 'Do I need a geotechnical report for hillside construction?',
      answer: 'A geotechnical investigation is essential and required by all California jurisdictions for hillside construction. The geotechnical report provides critical information including soil and rock conditions at depth, slope stability analysis, foundation recommendations, grading guidelines, and drainage requirements. Without this information, structural design cannot proceed. We coordinate closely with geotechnical engineers and can recommend qualified firms.'
    },
    {
      question: 'What is a caisson foundation?',
      answer: 'A caisson (also called a drilled pier or drilled shaft) is a deep foundation element created by drilling a hole into the ground and filling it with reinforced concrete. For hillside construction, caissons extend through unstable surface soils to reach competent bedrock or firm bearing material below. They resist both vertical building loads and lateral forces from soil movement. Caissons are the standard foundation solution for California hillside homes.'
    },
    {
      question: 'How do you handle drainage on hillside projects?',
      answer: 'Proper drainage is critical on hillsides because water infiltration destabilizes slopes and increases lateral loads on retaining walls. We coordinate drainage design including surface grading to direct water away from the building, subdrains behind retaining walls, foundation drains, and connection to the storm drain system. All drainage provisions are integrated into our structural plans and coordinated with the geotechnical and civil engineers.'
    },
    {
      question: 'What is a hillside ordinance?',
      answer: 'Many California cities have hillside development ordinances that impose additional requirements on construction in steep terrain. These ordinances typically limit grading, restrict building height and mass relative to the slope, require geological and geotechnical reviews, mandate specific drainage and erosion control measures, and require additional design review. We navigate these requirements as part of our hillside engineering services.'
    },
    {
      question: 'How long does hillside engineering and permitting take?',
      answer: 'Structural design takes 3-6 weeks for most hillside projects. Permitting takes 4-10 weeks depending on the jurisdiction and any special review requirements such as hillside ordinance review, geological review, or coastal commission approval. Total timeline from start to permit is typically 7-16 weeks. Complex projects with multiple review agencies take longer. We establish realistic timelines at the start of each project.'
    }
  ],
  cta: {
    headline: 'Build Confidently on Your Hillside Property',
    description: 'Contact our hillside engineering specialists for a consultation. We\'ll evaluate your site, coordinate with your geotechnical engineer, and deliver structural solutions that make your hillside project safe, buildable, and cost-effective.'
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
