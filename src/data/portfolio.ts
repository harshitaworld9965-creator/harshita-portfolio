export type PortfolioProject = {
  num: string
  title: string
  tag: string
  copy: string
  tags: string[]
  className: string
  demo?: string
  github?: string
}

export type PortfolioSocialLink = {
  label: string
  href: string
}

export type PortfolioData = {
  name: string
  titles: string[]
  bio: string
  skillCategories: {
    number: string
    label: string
    skills: string[]
  }[]
  technologies: string[]
  projects: PortfolioProject[]
  contact: {
    email: string
    availabilityText: string
  }
  socialLinks: PortfolioSocialLink[]
}

export const portfolioData: PortfolioData = {
  name: 'Harshita',

  titles: [
    'Full Stack AI Engineer',
    'Frontend Developer',
    'Product Builder',
  ],

  bio: 'I build thoughtful digital products at the intersection of software engineering, AI, analytics, and design.',

  skillCategories: [
    {
      number: '01',
      label: 'FRONTEND',
      skills: ['JavaScript', 'React', 'Next.js', 'HTML', 'CSS'],
    },
    {
      number: '02',
      label: 'BACKEND',
      skills: ['Node.js', 'Python', 'FastAPI'],
    },
    {
      number: '03',
      label: 'DATA & AI',
      skills: ['Machine Learning', 'Pandas', 'NumPy'],
    },
    {
      number: '04',
      label: 'TOOLS',
      skills: ['Git', 'GitHub', 'Figma'],
    },
  ],

  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'FastAPI',
    'Machine Learning',
    'Pandas',
    'NumPy',
    'Git',
    'GitHub',
    'Figma',
  ],

  projects: [
    {
      num: '01',
      title: 'KAELIX\nANALYTICS',
      tag: 'AI-Powered Sales Intelligence',
      copy: 'A full-stack analytics platform that transforms sales data into interactive dashboards, trend analysis, and predictive insights.',
      tags: ['NEXT.JS', 'FASTAPI', 'PYTHON', 'MACHINE LEARNING'],
      className: 'nexus',
      demo: 'https://kaelix-analytics.vercel.app/',
    },

    {
      num: '02',
      title: 'DEVPULSE',
      tag: 'GitHub Activity Dashboard',
      copy: 'A developer analytics dashboard that turns GitHub activity into interactive visual insights, including contributions, languages, repositories, commits, and issues.',
      tags: ['REACT', 'TAILWIND', 'RECHARTS', 'GITHUB API'],
      className: 'aura',
      demo: 'https://devpulse-silk-nu.vercel.app/',
    },

    {
      num: '03',
      title: 'BRIEFLY',
      tag: 'AI-Powered Content Summarizer',
      copy: 'A lightweight AI tool that transforms articles and raw text into concise summaries in multiple formats.',
      tags: ['REACT', 'TAILWIND', 'GROQ API'],
      className: 'still',
      demo: 'https://content-summarizer-iota.vercel.app/',
    },

    {
      num: '04',
      title: 'THE DEEP',
      tag: 'Interactive Scroll Experience',
      copy: 'An immersive scroll-driven descent from the ocean surface to the deepest point on Earth, where the soundscape, light, and pressure all respond in real time to how far down you go.',
      tags: ['REACT', 'TONE.JS', 'WEB AUDIO', 'SVG'],
      className: 'abyss',
      demo: 'https://ocean-descent-sigma.vercel.app/',
    },

    {
      num: '05',
      title: 'ATMOSPHERE',
      tag: 'Live Weather Instrument',
      copy: 'Type any city and its live weather takes over the screen — the sun sits at its real position between that day\'s sunrise and sunset, while rain, snow, fog, and thunder are drawn in real time from the conditions happening there right now.',
      tags: ['REACT', 'CANVAS', 'WEB AUDIO', 'OPEN-METEO API'],
      className: 'atmosphere',
      demo: 'https://atmosphere-umber.vercel.app/',
    },
  ],

  contact: {
    email: 'harshitaworld9965@gmail.com',
    availabilityText: 'Available for select freelance and development work',
  },

  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/harshita-deswal-292b44198/',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/harshita__deswal?igsh=MTl1bHA3a3V3azE0aw==',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/harshitaworld9965-creator',
    },
  ],
}