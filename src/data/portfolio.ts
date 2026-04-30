export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  highlight?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'TechCorp Inc.',
    role: 'Senior Full Stack Developer',
    period: '2023 - Presente',
    description: 'Liderando el desarrollo de arquitecturas microservicios con Node.js y React. Implementación de CI/CD y optimización de rendimiento.',
    technologies: ['Node.js', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    highlight: true
  },
  {
    id: 'exp-2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    period: '2021 - 2023',
    description: 'Desarrollo de aplicaciones web escalables y APIs RESTful. Colaboración en equipos ágiles con metodologías Scrum.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Redis', 'GraphQL']
  },
  {
    id: 'exp-3',
    company: 'Digital Agency',
    role: 'Frontend Developer',
    period: '2019 - 2021',
    description: 'Creación de interfaces responsivas y experiencias de usuario optimizadas. Trabajo con diseños desde Figma hasta implementación.',
    technologies: ['React', 'JavaScript', 'CSS/SCSS', 'TailwindCSS', 'Figma']
  },
  {
    id: 'exp-4',
    company: 'Freelance',
    role: 'Web Developer',
    period: '2017 - 2019',
    description: 'Desarrollo de proyectos web para diversos clientes. Desde landing pages hasta sistemas de gestión.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress']
  }
];

export interface Project {
  id: number;
  title: string;
  fullDescription: string;
  image: string;
  tags: string[];
  github?: string;
  link?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Performance Dashboard',
    fullDescription:
      'I automated a critical, fully manual process by migrating employee records into a production-ready application built with Power Apps. The system tracks downtime, logs detailed work sessions, and generates granular statistics on productive vs. unproductive hours per employee. This gives management accurate, real-time data to make strategic decisions, improve staffing, and reduce operational blind spots.',
    image: '/projects/buenavista.webp',
    tags: ['Power Apps', 'Dataverse'],
    github: '#',
    link: '#',
    isPrivate: true,
  },
  {
    id: 2,
    title: 'Floral Waste Analytics',
    fullDescription:
      'I built a mobile-first Power Apps solution to modernize floral quality control. The app records and classifies discarded flowers by variety, origin (internal vs. external), and root cause (pests, mishandling, logistics issues, etc.). It surfaces detailed analytics that help management spot waste patterns, understand where losses originate, and take targeted actions to protect margins and improve operational efficiency.',
    image: '/projects/buenavista.webp',
    tags: ['Power Apps', 'Dataverse'],
    github: '#',
    link: '#',
    isPrivate: true,
  },
  {
    id: 3,
    title: 'Candy --- CV Protection',
    fullDescription:
      'Candy is a web application designed to protect job seekers from digital vulnerability. By analyzing uploaded resumes, the tool detects and quantifies the exposure of sensitive personal data (PII). It provides users with a risk assessment of their digital footprint, ensuring that the quest for a new career doesnt lead to identity theft or privacy breaches.',
    image: '/projects/candy.webp',
    tags: ['NextJs', 'Clerk', 'Supabase', 'ShadcnUi', 'Cubepath'],
    github: 'https://github.com/STIVEN-VILLA-DEV/CANDY',
  },
  {
    id: 4,
    title: 'VillaGuard --- MCP',
    fullDescription:
      'VILLAGUARD is a specialized MCP that protects the development workflow from insecure AI-managed package installations. By integrating real-time vulnerability checks for npm and bun packages, it ensures that every dependency suggested by an AI assistant is verified against trusted security sources. In this way, it turns AI into a secure and reliable development partner.',
    image: '/projects/clearpdf.webp',
    tags: ['Typescript'],
    github: 'https://github.com/STIVEN-VILLA-DEV/VillaGuard-MCP',
  },
  {
    id: 5,
    title: 'Villain',
    fullDescription:
      'A proactive defense tool designed to detect unauthorized access through the strategic deployment of "honeytokens." Rather than relying solely on perimeter defense, this project adopts a "zero-trust" approach, placing silent alarms in hidden or sensitive areas of a system. The tool generates "decoy" credentials (such as fake Git tokens, database connection strings, or sensitive corporate files) and places them in locations that an attacker would likely target during an intrusion. Once an intruder interacts with or triggers these tokens, a silent alert is triggered, providing the administrator with immediate notification and forensic data to mitigate the threat in real time.',
    image: '/projects/villain.webp',
    tags: ['NextJs', 'Supabase', 'TypeScript', 'ShadcnUi'],
    github: 'https://github.com/STIVEN-VILLA-DEV/VILLAIN',
  },
  {
    id: 6,
    title: 'VillaClear PDF',
    fullDescription:
      'VillaClear is a security-focused tool for PDF management. It provides a three-layered approach to document safety: Privacy (metadata removal), Integrity (watermarking), and Confidentiality (password encryption). Designed for scalability, it includes a Batch Processing Mode via a CLI/Bash interface, enabling the secure processing of bulk document libraries with a single command. Its the perfect tool for professionals handling sensitive data who need to ensure every file leaving their system is clean and protected.',
    image: '/projects/villaclear.webp',
    tags: ['Typescript', 'Bash'],
    github: 'https://github.com/STIVEN-VILLA-DEV/VillaClear',
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}



export const stack = [
  'TypeScript',
  'JavaScript',
  'Git-Github',
  'Bash',
  'React',
  'Next.js',
  'Astro',
  'Node.js',
  'MCP',
  'Skills IA',
  'Turso DB',
  'PostgreSQL',
  'NeonDB',
  'Supabase',
  'MySql',
  'Docker',
  'Linux',
  'IA Generative',
  'TailwindCSS',
  'Framer Motion'
];

export const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Adaptability',
  'Leadership',
  'Time Management',
  'Critical Thinking'
];

export const objectives = [
  'High-performance web experiences',
  'Scalable, easy-to-maintain code',
  'Modern development practices and clean architecture',
  'Security-first mindset in every project',
  'Strong personal data protection and privacy by design',
  'Continuous improvement and long-term reliability'
];