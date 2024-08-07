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
  resume: 'https://online.publuu.com/612309/1369749',
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
    thumbnail: 'images/VAR.jpeg',
    name: 'C++ Monte Carlo Value-at-Risk Engine',
    description: [
      "This C++ Monte Carlo Value-at-Risk (VaR) engine assesses portfolio risk at both the portfolio and instrument levels. Leveraging design patterns for extensibility, it supports various instruments and stochastic processes. Core classes handle simulations, valuations, and statistics, while auxiliary classes manage tasks like covariance matrix calculation and historical backtesting.",
    ],
    stack: ['C++', 'C'],
    sourceCode: 'https://github.com/MaxMarriottClarke/CppMonteCarloVaR',
  },
  {
    thumbnail: 'images/AR.jpg',
    name: 'Augmented Reality Application',
    description: [
      'This project focuses on Camera Calibration and Augmented Reality. Using a checkerboard with 9 columns and 6 rows (54 internal corners) as the target, the system detects and extracts corners for camera calibration. Multiple images from different angles are used to determine intrinsic camera parameters such as focal length and image center. With the camera matrix and distortion coefficients, the project calculates the transitional and rotational vectors to accurately overlay 3D objects onto the 2D scene.',
    ],
    stack: ['C++', 'opencv'],
    sourceCode: 'https://github.com/MaxMarriottClarke/AR-Cpp'
  },
  {
    thumbnail: 'images/TracksterHits2.png',
    name: 'MSci Project - Enhancing Particle Event Reconstruction with Self-Supervised Learning at CERN',
    description: [
      'For my master’s project, I am collaborating with CERN to enhance event reconstruction for the CMS experiment at the Large Hadron Collider. I am using PyTorch to develop and refine self-supervised machine learning models, specifically contrastive learning algorithms, to process data from the upgraded calorimeter with 6 million channels. By leveraging PyTorch’s deep learning capabilities, I focus on training and optimizing these models to improve clustering and interpretation of particle collision events, aiming for more accurate and robust event reconstruction compared to traditional methods.',
    ],
    stack: ['Python', 'Pytorch']
  },
  {
    thumbnail: 'images/Final.png',
    name: 'Neutrino Parameter Estimation via Optimisation',
    description: [
      'In this project, I developed a Python application to estimate neutrino oscillation parameters using machine learning techniques. I implemented two optimization methods: a Univariate minimizer and a Hybrid Particle Swarm Optimisation - Simulated Annealing (HPSO-SA) minimizer. The project focused on minimizing a negative log-likelihood function to extract the relevant parameters. I compared and tested both optimization approaches to ensure accuracy and efficiency, showcasing the power of machine learning in scientific analysis.',
    ],
    stack: ['Python', 'Data Analysis'],
    livePreview: 'https://online.publuu.com/612309/1369669',
  },
  {
    thumbnail: 'images/Tennis.jpeg',
    name: 'Tennis ML Video Analysis',
    description: [
      'This project, developed using PyTorch, focuses on analyzing tennis videos to measure player speed, shot velocity, and shot frequency. It employs YOLO for detecting players and the tennis ball, and uses CNNs to extract key court keypoints. This work showcases advanced skills in machine learning and computer vision.',
    ],
    stack: ['Python', 'Pytorch', 'YOLO'],
    sourceCode: 'https://github.com/MaxMarriottClarke/TennisML'
  },
  {
    thumbnail: 'images/Cosmic.png',
    name: 'Cosmig Game - pygame',
    description: [
      'A 2D Spacecraft shooter game to learn more about pygame and improve development skills. It includes mutliple levels, increasing difficulty, powerups, bosses, enemies and much more.',
    ],
    stack: ['Python', 'Pygame'],
    sourceCode: 'https://github.com/MaxMarriottClarke/pygameGame',
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
