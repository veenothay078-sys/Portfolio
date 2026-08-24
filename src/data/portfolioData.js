// Portfolio Data for Veenotha Y
// Sources of Truth: Resume + Official GitHub (https://github.com/veenothay078-sys)

export const personalInfo = {
  name: "Veenotha Y",
  title: "Computer Science Engineering Student",
  focus: "Software Development • Problem Solving • Web & Mobile Tech • Continuous Learning",
  bio: "Motivated Computer Science Engineering student seeking an entry-level Software Engineer opportunity where I can apply programming knowledge, problem-solving skills, and passion for technology while continuously learning and contributing.",
  email: "veenothay078@gmail.com",
  phone: "6369142488",
  github: "https://github.com/veenothay078-sys",
  linkedin: "https://www.linkedin.com/in/veenotha-yogeshwaran-3a9398370/",
  college: "Dr. N.G.P Institute of Technology",
  degree: "Bachelor of Engineering in Computer Science Engineering",
  cgpa: "8.01 / 10.0",
  batch: "2023 – 2027",
  status: "Seeking Entry-Level Software Engineer Opportunities"
};

export const educationData = [
  {
    institution: "Dr. N.G.P Institute of Technology",
    degree: "Bachelor of Engineering (B.E.) in Computer Science Engineering",
    period: "2023 – 2027",
    grade: "CGPA: 8.01",
    description: "Pursuing undergraduate degree in Computer Science and Engineering with a focus on core programming, data structures, algorithms, web development, and software design principles.",
    highlights: [
      "Current Academic CGPA: 8.01 / 10.0",
      "Completed NPTEL Certifications in Internet of Things and Cloud Computing",
      "Active participant in technical workshops including UI/UX and Cyber Security"
    ]
  },
  {
    institution: "St. Mary's Girls Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2023",
    grade: "83%",
    description: "Completed higher secondary education with strong performance in science, mathematics, and analytical subjects.",
    highlights: [
      "Scored 83% in Higher Secondary Board Examinations",
      "Strong foundation in mathematics and analytical problem-solving"
    ]
  },
  {
    institution: "St. Mary's Girls Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    period: "2020",
    grade: "Completed",
    description: "Completed secondary school education with high academic dedication across general sciences and mathematics.",
    highlights: [
      "Completed Junior Grade Typewriting Certification"
    ]
  }
];

// Extensible Experience Data structure (Ready for future entries)
export const experienceData = [];

export const projectsData = [
  {
    id: "plasma-donation-system",
    title: "Plasma Donation Management System",
    category: "Mobile Application",
    subtitle: "Digital mobile platform for blood and plasma donor management and emergency requests.",
    overview: "Developed a mobile application dedicated to blood plasma donor management. Integrated Firebase Authentication for secure user verification and Cloud Firestore for managing real-time donor registries. Enabled seamless donor registration and rapid emergency donor searching during critical medical situations.",
    keyFeatures: [
      "Mobile application for blood plasma donor management.",
      "Integrated Firebase Authentication for secure user onboarding.",
      "Integrated Cloud Firestore for scalable database operations.",
      "Enabled donor registration with health criteria details.",
      "Enabled emergency search for rapid donor discovery."
    ],
    techStack: ["Flutter", "Firebase", "Cloud Firestore", "Dart"],
    githubUrl: "https://github.com/veenothay078-sys/Plasma-Bank-Management-System",
    demoUrl: null,
    repoName: "Plasma-Bank-Management-System",
    featured: true,
    accentColor: "var(--accent-cyan)"
  },
  {
    id: "district-complaint-portal",
    title: "District Wise Complaint Portal",
    category: "Web Application / Civic Tech",
    subtitle: "Online grievance management portal enabling citizens to register and track complaints district-wise.",
    overview: "Developed an online complaint management portal designed to streamline public grievance redressal. Citizens can register complaints easily and track status updates district-wise. Built with a responsive React frontend with HTML/CSS and supported by a WampServer backend database architecture.",
    keyFeatures: [
      "Online citizen complaint registration interface.",
      "District-wise complaint categorization and tracking.",
      "Interactive and responsive frontend developed with React, HTML, and CSS.",
      "Local server backend and database management using WampServer."
    ],
    techStack: ["HTML", "CSS", "React", "WampServer"],
    githubUrl: null,
    demoUrl: null,
    repoName: null,
    featured: true,
    accentColor: "var(--accent-indigo)"
  }
];

// Verified Public Repositories from GitHub Profile (https://github.com/veenothay078-sys)
export const verifiedGithubRepos = [
  {
    name: "Plasma-Bank-Management-System",
    url: "https://github.com/veenothay078-sys/Plasma-Bank-Management-System",
    description: "The Plasma Donation Management System is a digital platform that connects plasma donors, patients, and hospitals. Donors can register their details, and patients can easily search for suitable donors.",
    language: "Flutter / Dart",
    badge: "Featured Project"
  },
  {
    name: "TrustGuard-AI",
    url: "https://github.com/veenothay078-sys/TrustGuard-AI",
    description: "Security and trust evaluation application built using JavaScript.",
    language: "JavaScript",
    badge: "Verified Repo"
  },
  {
    name: "FitTracker",
    url: "https://github.com/veenothay078-sys/FitTracker",
    description: "Fitness and health tracking web application.",
    language: "JavaScript",
    badge: "Verified Repo"
  },
  {
    name: "Student-Performance-Dashboard",
    url: "https://github.com/veenothay078-sys/Student-Performance-Dashboard",
    description: "Interactive analytics dashboard for evaluating student performance metrics.",
    language: "JavaScript",
    badge: "Verified Repo"
  },
  {
    name: "Student-Grade-Management",
    url: "https://github.com/veenothay078-sys/Student-Grade-Management",
    description: "Web application for managing and calculating academic grades.",
    language: "HTML / JS",
    badge: "Verified Repo"
  },
  {
    name: "Leetcode-tracker-",
    url: "https://github.com/veenothay078-sys/Leetcode-tracker-",
    description: "Problem solving and algorithmic practice repository in Java.",
    language: "Java",
    badge: "Verified Repo"
  },
  {
    name: "Wind_Resource_Analytics-forecasting",
    url: "https://github.com/veenothay078-sys/Wind_Resource_Analytics-forecasting",
    description: "Data analytics and forecasting application for wind energy resources.",
    language: "Python",
    badge: "Verified Repo"
  },
  {
    name: "AI-Resume-Analyzer-Skill-Matcher",
    url: "https://github.com/veenothay078-sys/AI-Resume-Analyzer-Skill-Matcher",
    description: "Python-based resume text analysis and skill-matching tool.",
    language: "Python",
    badge: "Verified Repo"
  },
  {
    name: "plasmax",
    url: "https://github.com/veenothay078-sys/plasmax",
    description: "Core algorithms and system implementation in C++.",
    language: "C++",
    badge: "Verified Repo"
  }
];

// Flexible & Future-Ready Skill Matrix Structure
export const skillsData = {
  programmingLanguages: [
    { name: "Java", level: "Core", context: "Resume / Academic & Algorithmic Practice" },
    { name: "JavaScript", level: "Web", context: "GitHub Public Repositories" },
    { name: "Python", level: "Analytics", context: "GitHub Public Repositories" },
    { name: "C++", level: "Systems", context: "GitHub Public Repositories" }
  ],
  webAndMobile: [
    { name: "HTML5", level: "Frontend", context: "Web Standards & Structure" },
    { name: "CSS3", level: "Styling", context: "Responsive & Modern Design" },
    { name: "React", level: "Framework", context: "District Complaint Portal & Web Apps" },
    { name: "Flutter", level: "Mobile", context: "Plasma Donation Mobile System" },
    { name: "Firebase", level: "Backend", context: "Authentication & Cloud Firestore" },
    { name: "WampServer", level: "Server", context: "Local Server & Database Management" }
  ],
  dataAndTools: [
    { name: "Power BI", level: "Analytics", context: "Data Visualization & Dashboards" },
    { name: "MS Excel", level: "Data Tool", context: "Spreadsheet Analytics & Calculation" },
    { name: "Figma", level: "Design Tool", context: "UI/UX Wireframing & Prototyping" }
  ],
  softSkills: [
    "Problem Solving",
    "Continuous Learning",
    "Team Collaboration",
    "Communication",
    "Adaptability"
  ]
};

export const designAspects = [
  {
    title: "UI/UX Design Principles",
    description: "Designing structured, human-centered interface layouts with a focus on visual hierarchy, accessibility, and clarity."
  },
  {
    title: "User Research & Flow Mapping",
    description: "Analyzing user requirements and mapping intuitive navigation paths to streamline user interaction."
  },
  {
    title: "Responsive Layout Design",
    description: "Crafting interfaces that adapt smoothly across mobile devices, tablets, and desktop viewports."
  },
  {
    title: "Figma Wireframing & Prototyping",
    description: "Creating interactive wireframes, reusable design tokens, and modular components in Figma."
  },
  {
    title: "Usability & Accessibility Focus",
    description: "Optimizing typography scale, contrast ratios, and touch targets to improve overall usability."
  },
  {
    title: "Design-to-Code Feasibility",
    description: "Ensuring interface designs are practical and straightforward to implement with modern frontend code."
  }
];

export const certificationsData = [
  {
    id: "nptel-iot",
    title: "NPTEL – Internet of Things",
    issuer: "NPTEL",
    category: "Course Certification",
    description: "Certified coursework covering Internet of Things architecture, sensor integration, connectivity protocols, and smart systems."
  },
  {
    id: "nptel-cloud",
    title: "NPTEL – Cloud Computing",
    issuer: "NPTEL",
    category: "Course Certification",
    description: "Certified coursework covering cloud computing paradigms, virtualization, distributed storage, and cloud infrastructure management."
  },
  {
    id: "typewriting-junior",
    title: "Typewriting Junior Grade",
    issuer: "State Board of Technical Education",
    category: "Technical Certification",
    description: "Certified qualification in standardized keyboard typewriting accuracy and speed."
  },
  {
    id: "cyber-security",
    title: "Cyber Security Workshop",
    issuer: "Technical Workshop Program",
    category: "Workshop Participation",
    description: "Participated in hands-on workshop covering cyber security fundamentals, threat vectors, and secure software development practices."
  }
];

export const achievementsData = [
  {
    id: "nptel-certs",
    text: "Completed multiple NPTEL certification courses (Internet of Things & Cloud Computing)."
  },
  {
    id: "workshops",
    text: "Participated in UI/UX and Cyber Security technical workshops."
  },
  {
    id: "academic-projects",
    text: "Successfully developed academic projects using Flutter, React, and Firebase."
  },
  {
    id: "interests",
    text: "Demonstrated strong practical focus in Software Development, problem solving, and UI/UX Design."
  }
];

export const languagesData = [
  { language: "English" },
  { language: "Tamil" }
];

export const hobbiesData = [
  { title: "Learning New Technologies" },
  { title: "UI/UX Designing" },
  { title: "Listening to Music" }
];
