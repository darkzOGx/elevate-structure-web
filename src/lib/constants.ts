// Company Information
export const COMPANY_INFO = {
  name: 'AAA Engineering Design',
  tagline: 'Structural Consulting & Design',
  subtitle: 'Commercial & Residential',
  description: 'Leading provider of structural engineering services. Transform your vision into reality with our expert engineering solutions.',
  phone: '(949) 981-4448',
  email: 'aws@aaaengineeringdesign.com',
  website: 'https://aaaengineeringdesign.com',
  address: {
    streetAddress: '8031 Main Street',
    addressLocality: 'Stanton',
    addressRegion: 'CA',
    postalCode: '90680',
    addressCountry: 'US',
  },
  businessHours: [
    'Monday-Friday 9:00 AM - 5:00 PM',
    'Saturday Closed',
    'Sunday Closed',
  ],
  socialProfiles: [
    // 'https://www.facebook.com/aaaengineeringdesign',
    // 'https://www.linkedin.com/company/aaaengineeringdesign',
    // 'https://twitter.com/aaaengineeringdesign',
  ],
  priceRange: '$$-$$$',
}

// SEO Keywords
export const KEYWORDS = {
  primary: 'engineering design services',
  secondary: [
    'structural engineering',
    'engineering consultation',
    'building design',
    'construction planning',
    'structural analysis',
    'engineering solutions',
  ],
  location: [
    'Orange County',
    'Southern California',
    'California',
    'OC',
    'Newport Beach',
  ],
}

// Services Data
export const SERVICES = [
  {
    id: 'structural-engineering',
    title: 'Structural Engineering',
    description: 'Comprehensive structural analysis and design for residential and commercial projects. Ensure your building\'s safety and compliance with our expert structural engineering services.',
    icon: '🏗️',
    features: [
      'Load-bearing analysis',
      'Foundation design',
      'Seismic retrofitting',
      'Code compliance review',
    ],
  },
  {
    id: 'engineering-consultation',
    title: 'Engineering Consultation',
    description: 'Expert engineering consultation for complex projects. Get professional advice on structural integrity, building codes, and optimization strategies.',
    icon: '💡',
    features: [
      'Technical assessments',
      'Feasibility studies',
      'Code compliance review',
      'Project optimization',
    ],
  },
  {
    id: 'construction-support',
    title: 'Construction Support',
    description: 'On-site engineering support during construction phases. Ensure your project stays on track with professional oversight and technical guidance.',
    icon: '👷',
    features: [
      'Construction administration',
      'Quality assurance',
      'Field inspections',
      'Problem resolution',
    ],
  },
  {
    id: 'building-analysis',
    title: 'Building Analysis',
    description: 'Comprehensive building performance analysis including structural integrity and code compliance assessments.',
    icon: '📊',
    features: [
      'Structural assessments',
      'Code compliance checks',
      'Performance optimization',
    ],
  },
  {
    id: 'adu-additions',
    title: 'ADU & Additions',
    description: 'Specialized structural design for Accessory Dwelling Units and home extensions. Tailored plans that maximize space while meeting strict local zoning codes.',
    icon: '🏠',
    features: [
      'ADU structural plans',
      'Second-story additions',
      'Garage conversions',
      'Load-bearing wall removal',
    ],
  },
  {
    id: 'seismic-retrofit',
    title: 'Seismic Retrofit',
    description: 'Protect your property with advanced earthquake strengthening solutions. Cost-effective retrofit plans to meet mandatory soft-story ordinances.',
    icon: '🛡️',
    features: [
      'Soft-story analysis',
      'Bolt & brace upgrades',
      'Mandatory compliance',
      'Foundation anchoring',
    ],
  },
]

// Process Steps
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We start with a comprehensive consultation to understand your project goals, requirements, and constraints. Our experts will assess your site and provide initial recommendations.',
    icon: '🤝',
  },
  {
    step: 2,
    title: 'Design & Planning',
    description: 'Our team creates detailed engineering plans and designs tailored to your specific needs. We ensure all designs meet current building codes and industry standards.',
    icon: '📋',
  },
  {
    step: 3,
    title: 'Review & Approval',
    description: 'We present our designs for your review and incorporate any feedback. Our experts assist with permit applications and regulatory approvals.',
    icon: '✅',
  },
  {
    step: 4,
    title: 'Implementation Support',
    description: 'Throughout construction, we provide ongoing support, field inspections, and technical guidance to ensure your project is completed to specification.',
    icon: '🔧',
  },
]

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Joel Sullivan',
    company: 'Homeowner',
    location: 'Newport Beach, CA',
    rating: 5,
    text: 'AAA brought incredible structural expertise to my ADU project, were responsive, professional, and delivered everything on time. Highly recommend for anyone needing reliable and skilled structural engineers.',
    image: '/testimonials/joel-sullivan.png',
    date: '2025-08-27',
  },
  {
    id: 2,
    name: 'Smadar Agmon',
    company: 'Project Manager',
    location: 'Beverly Hills, CA',
    rating: 5,
    text: 'I had the pleasure of working with Aws on a recent project and was thoroughly impressed by his professionalism and efficiency. He delivered a clean, straightforward structural design that met all the necessary requirements without unnecessary complexity. Aws was fast, reliable, and highly communicative throughout the process, making coordination smooth and stress-free. The entire experience was excellent. I highly recommend Aws.',
    image: '/testimonials/smadar-agmon.png',
    date: '2025-11-14',
  },
  {
    id: 3,
    name: 'Radwa Zowila',
    company: 'Homeowner',
    location: 'Pacific Palisades, CA',
    rating: 5,
    text: 'I contacted Aws and he was quick to give me a proposal for my one-story home addition. His plans were delivered quickly and came back with very few comments from the city. Overall I would highly recommend his services to anyone needing structural work!',
    image: '/testimonials/radwa-zowila.png',
    date: '2025-12-08',
  },
]

// FAQ Data
export const FAQ_DATA = [
  {
    question: 'How much do engineering design services cost?',
    answer: 'Our engineering design services are competitively priced based on project scope and complexity. We offer free initial consultations and provide detailed cost estimates after assessing your specific requirements. Typical projects range from $1,000 to $10,000 depending on size and complexity.',
  },
  {
    question: 'How long does the engineering design process take?',
    answer: 'Project timelines vary based on complexity and scope. Simple residential projects typically take 1-2 weeks, while larger commercial projects may require 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve all of California, including Orange County, Los Angeles, San Diego, San Francisco, and all surrounding communities. For projects outside California, please contact us to discuss availability and potential travel arrangements.',
  },
  {
    question: 'Do you help with building permits?',
    answer: 'Yes, we assist with all aspects of the permitting process. Our team prepares permit-ready drawings and documentation, and we can guide you through the submission process to ensure smooth approval from local building departments.',
  },
  {
    question: 'Are your engineers licensed?',
    answer: 'All our engineers are fully licensed Professional Engineers (PE) in California with extensive experience in structural and civil engineering. We maintain current licenses and continuing education to ensure we meet all professional standards.',
  },
  {
    question: 'What types of projects do you work on?',
    answer: 'We work on a wide range of projects including residential renovations, commercial buildings, seismic retrofits, new construction, and structural assessments. Our expertise covers both residential and commercial engineering needs.',
  },
  {
    question: 'Do you provide emergency engineering services?',
    answer: 'Yes, we offer emergency structural assessments for urgent situations such as earthquake damage, structural failures, or safety concerns. Contact us immediately for emergency services - we typically respond within 24 hours.',
  },
  {
    question: 'Can you work with my architect or contractor?',
    answer: 'Absolutely! We frequently collaborate with architects, contractors, and other design professionals. Our team is experienced in coordinating with all project stakeholders to ensure seamless project delivery.',
  },
]

// Benefits/Why Choose Us
export const BENEFITS = [
  {
    title: 'Licensed Professional Engineers',
    description: 'All our engineers are licensed PEs with 10+ years of experience in structural and civil engineering.',
    icon: '🏆',
    stat: '15+ Years',
    statLabel: 'Average Experience',
  },
  {
    title: 'Fast Turnaround Times',
    description: 'We understand project deadlines. Most engineering plans are completed within 1-2 weeks.',
    icon: '⚡',
    stat: '1-2 Weeks',
    statLabel: 'Typical Delivery',
  },
  {
    title: '100% Code Compliance',
    description: 'Our designs always meet or exceed current building codes and industry standards.',
    icon: '✅',
    stat: '100%',
    statLabel: 'Code Compliance',
  },
  {
    title: 'Comprehensive Services',
    description: 'From initial consultation to construction support, we handle every aspect of your project.',
    icon: '🔧',
    stat: '500+',
    statLabel: 'Projects Completed',
  },
]

// Contact Form Options
export const SERVICE_OPTIONS = [
  'Structural Engineering',
  'Engineering Consultation',
  'Construction Support',
  'Building Analysis',
  'Emergency Assessment',
  'Other',
]

export const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  'Over $50,000',
  'Not Sure',
]

export const PROJECT_TIMELINES = [
  'ASAP',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring',
]