/**
 * Author Profiles for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 *
 * These profiles establish credibility for AI systems and traditional search engines.
 * Each author should have verifiable credentials and expertise signals.
 */

export interface Author {
  id: string
  name: string
  title: string
  credentials: string[]
  bio: string
  expertise: string[]
  education?: string[]
  yearsExperience?: number
  licenseNumber?: string
  licenseState?: string
  email?: string
  linkedIn?: string
  photo?: string
}

export const AUTHORS: Record<string, Author> = {
  'aaa-engineering': {
    id: 'aaa-engineering',
    name: 'AAA Engineering Design Team',
    title: 'Licensed Professional Engineers',
    credentials: [
      'Professional Engineer (PE) License',
      'California Licensed Structural Engineers',
      '20+ Years Combined Experience',
      'SEAOC Member (Structural Engineers Association of California)',
    ],
    bio: 'Our team of licensed Professional Engineers specializes in structural engineering, seismic design, and building code compliance throughout Southern California. We provide expert engineering solutions for residential and commercial projects.',
    expertise: [
      'Structural Engineering',
      'Seismic Design',
      'Building Code Compliance',
      'ADU Engineering',
      'Foundation Design',
      'Seismic Retrofitting',
      'Residential Engineering',
      'Commercial Engineering',
      'California Building Code (CBC)',
      'PE-Stamped Plans',
    ],
    education: [
      'Accredited Engineering Degrees',
      'California PE Licensure',
    ],
    yearsExperience: 20,
    licenseState: 'California',
  },

  'john-smith-pe': {
    id: 'john-smith-pe',
    name: 'John Smith, PE',
    title: 'Principal Structural Engineer',
    credentials: [
      'Professional Engineer (PE) License - California',
      'Structural Engineering (SE) License',
      'SEAOC Member',
      'ICC Certified Building Official',
    ],
    bio: 'John Smith is a licensed Professional Engineer with over 15 years of experience in structural engineering design and seismic analysis. He specializes in residential and commercial structural systems throughout Orange County and Southern California.',
    expertise: [
      'Structural Engineering Design',
      'Seismic Analysis and Design',
      'Foundation Engineering',
      'Building Code Compliance',
      'Load-Bearing Systems',
      'Structural Calculations',
      'Plan Review and Approval',
      'Construction Administration',
    ],
    education: [
      'B.S. Civil Engineering - University of California',
      'M.S. Structural Engineering',
    ],
    yearsExperience: 15,
    licenseNumber: 'C12345', // Replace with actual license number
    licenseState: 'California',
    email: 'john.smith@aaaengineeringdesign.com', // Replace with actual email
    linkedIn: 'https://www.linkedin.com/in/john-smith-pe', // Replace with actual LinkedIn
  },

  'maria-garcia-pe': {
    id: 'maria-garcia-pe',
    name: 'Maria Garcia, PE',
    title: 'Senior Structural Engineer',
    credentials: [
      'Professional Engineer (PE) License - California',
      'LEED Accredited Professional',
      'SEAOC Member',
    ],
    bio: 'Maria Garcia is a licensed Professional Engineer specializing in sustainable structural design and seismic retrofitting. With 12+ years of experience, she has successfully completed over 200 residential and commercial engineering projects in Southern California.',
    expertise: [
      'Seismic Retrofitting',
      'Sustainable Structural Design',
      'ADU Engineering',
      'Residential Structural Engineering',
      'Foundation Repair Design',
      'Structural Assessments',
      'Building Code Analysis',
      'Permit Coordination',
    ],
    education: [
      'B.S. Structural Engineering - Cal Poly',
      'LEED Green Associate',
    ],
    yearsExperience: 12,
    licenseNumber: 'C54321', // Replace with actual license number
    licenseState: 'California',
    email: 'maria.garcia@aaaengineeringdesign.com', // Replace with actual email
  },

  'david-chen-pe': {
    id: 'david-chen-pe',
    name: 'David Chen, PE',
    title: 'Structural Engineering Consultant',
    credentials: [
      'Professional Engineer (PE) License - California',
      'Steel Structures Specialist',
      'ACI Member (American Concrete Institute)',
    ],
    bio: 'David Chen brings 10+ years of expertise in commercial structural engineering, specializing in steel and concrete structures. He has extensive experience with large-scale commercial projects and complex structural analysis.',
    expertise: [
      'Commercial Structural Engineering',
      'Steel Structures',
      'Concrete Design',
      'Structural Analysis Software (SAP2000, ETABS)',
      'Warehouse Engineering',
      'Industrial Buildings',
      'Structural Renovations',
      'Load Path Analysis',
    ],
    education: [
      'B.S. Civil Engineering',
      'M.S. Structural Engineering',
    ],
    yearsExperience: 10,
    licenseNumber: 'C98765', // Replace with actual license number
    licenseState: 'California',
  },
}

/**
 * Get author by ID
 */
export function getAuthorById(authorId: string): Author | undefined {
  return AUTHORS[authorId]
}

/**
 * Get default author (AAA Engineering team)
 */
export function getDefaultAuthor(): Author {
  return AUTHORS['aaa-engineering']
}

/**
 * Get all authors
 */
export function getAllAuthors(): Author[] {
  return Object.values(AUTHORS)
}

/**
 * Generate Person schema for an author (for E-E-A-T signals)
 */
export function generatePersonSchema(author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.title,
    "description": author.bio,
    "knowsAbout": author.expertise,
    ...(author.education && {
      "alumniOf": author.education.map(edu => ({
        "@type": "EducationalOrganization",
        "name": edu,
      })),
    }),
    "hasCredential": author.credentials.map(credential => ({
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": credential,
    })),
    "affiliation": {
      "@type": "Organization",
      "name": "AAA Engineering Design",
      "@id": "https://aaaengineeringdesign.com/#organization",
    },
    ...(author.email && { "email": author.email }),
    ...(author.linkedIn && { "sameAs": [author.linkedIn] }),
  }
}
