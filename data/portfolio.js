const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: '',
}

const about = {
  // each of these properties is optional - they can be left empty or deleted
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Max', 'Marriott-Clarke'],
  greetingEmoji: '👋',
  role: 'MSci Theoretical Physics Student',
  company: 'Imperial College London',
  description: [
    '4th year MSci student with a passion for mathematical problem solving looking to break into quant development.',
  ],
  resume: 'https://example.com',
  social: {
    github: 'https://github.com/MaxMarriottClarke',
    linkedin: 'https://www.linkedin.com/in/max-marriott-clarke-1736b820a/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'C++ Monte Carlo Value-at-Risk Engine',
    description: [
      'This program is the culmination of two months of work to create a fully functional and comprehensive Monte Carlo value-at-risk engine for calculating the risk of a financial portfolio, on a total portfolio level as well as on an individual instrument level.',
    ],
    stack: ['C++', 'C'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Black Scholes',
    description: [
      'Black Scholes in python project',
    ],
    stack: ['Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'MSci Project',
    description: [
      'My Msci Project - ongoing. Using pytorch to reconstruct machine learning',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Extracting Neutrino Oscillation Paramaters via Machine Learning',
    description: [
      'Using gradient descent and other machine learning tools',
    ],
    stack: ['Python', 'PyTorch'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Tennis AI tracker',
    description: [
      'Using yolo and python tracking tennis points',
    ],
    stack: ['Python', 'PyTorch'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Cosmig Game - pygame',
    description: [
      'Built a game using pygame',
    ],
    stack: ['Python', 'Pygame'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'Python',
  'C++',
  'R',
  'Java',
  'SQL',
  'JavaScript',
  'Git',
  'AWS',
  'CI/CD',
  'Django',
  'Next.js',
  'GraphQL',
  'Linux',
  'Docker'
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'mm1221@ic.ac.uk',
}

export { header, about, projects, skills, contact }
