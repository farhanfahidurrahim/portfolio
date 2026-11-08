export interface Project {
  id: number;
  title: string;
  category: 'Full-Stack' | 'Backend & API' | 'Frontend' | 'Mobile & API';
  technology: string;
  tags: string[];
  key_points: string[];
  link: string;
  badge?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  points: string[];
  technologies: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  grade: string;
  gradeLabel: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon: string;
    level?: string;
    category?: string;
  }[];
}

export const personalInfo = {
  name: "Md. Fahidur Rahim",
  nickname: "Farhan",
  title: "Software Developer",
  subtitles: [
    "Software Developer",
    "Full-Stack & Backend Specialist",
    "PHP / Laravel & RESTful API Expert",
    "Modern React & Next.js Developer"
  ],
  experienceYears: "2+",
  phone: "01675717825",
  email: "farhan.fahidurrahim@gmail.com",
  location: "Dhaka, Bangladesh",
  bio: "I am Md. Fahidur Rahim, a passionate Software Developer with over 2 years of experience and a strong background in PHP (OOP), Laravel, MySQL, PostgreSQL, and RESTful API development. I have extensive experience developing and maintaining high-performance web applications, building scalable APIs for frontend and mobile developers, and leading teams to deliver high-quality projects on time. I am eager to contribute to innovative projects while continuing to grow my expertise in a collaborative, dynamic environment.",
  resumeUrl: "https://drive.google.com/file/d/18qKetk6ii-qtNdHArjA0oUTh3MesQ0I8/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/md-fahidur-rahim/",
  github: "https://github.com/farhanfahidurrahim",
  whatsapp: "https://wa.me/8801675717825",
  profileImage: "/assets/profile.jpg",
  heroBg: "/assets/fbgcover.webp",
};

export const skillsCategories: SkillCategory[] = [
  {
    title: "Backend & Architecture",
    skills: [
      { name: "PHP (OOP)", icon: "/assets/php.png", level: "Expert" },
      { name: "Laravel", icon: "/assets/laravel.png", level: "Expert" },
      { name: "RESTful APIs", icon: "/assets/api.png", level: "Expert" },
      { name: "Node.js", icon: "node", level: "Proficient" },
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MySQL", icon: "/assets/database.png", level: "Advanced" },
      { name: "PostgreSQL", icon: "/assets/pgsql.png", level: "Advanced" },
      { name: "Database Design", icon: "database", level: "Advanced" },
      { name: "Query Optimization", icon: "cpu", level: "Advanced" },
    ]
  },
  {
    title: "Frontend & Modern Web",
    skills: [
      { name: "React.js", icon: "/assets/react.png", level: "Advanced" },
      { name: "Next.js", icon: "next", level: "Advanced" },
      { name: "Vue.js", icon: "/assets/vue.png", level: "Advanced" },
      { name: "JavaScript (ES6+)", icon: "/assets/javascript.png", level: "Expert" },
      { name: "TypeScript", icon: "ts", level: "Proficient" },
      { name: "Tailwind CSS", icon: "tailwind", level: "Expert" },
      { name: "Bootstrap", icon: "/assets/bootstrap.png", level: "Advanced" },
      { name: "jQuery & AJAX", icon: "/assets/jquery.png", level: "Advanced" },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", icon: "/assets/git.png", level: "Advanced" },
      { name: "Postman", icon: "postman", level: "Advanced" },
      { name: "Docker", icon: "docker", level: "Familiar" },
      { name: "Linux / Apache / Nginx", icon: "server", level: "Intermediate" },
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Developer",
    company: "Totalofftec",
    period: "19 October 2024 - Present",
    type: "Full-Time",
    location: "Dhaka, Bangladesh",
    technologies: ["PHP", "Laravel", "MySQL", "React.js", "REST APIs"],
    points: [
      "Build new projects and engineer robust features for existing Laravel-based enterprise software based on client requirements.",
      "Debug and resolve critical issues in high-traffic applications while delivering prompt, dependable client support.",
      "Architect, develop, and maintain secure RESTful APIs in Laravel; integrate dynamic front-end components using React.js.",
      "Collaborate directly with stakeholders and clients to guarantee high-quality, scalable, and on-time project deliveries."
    ]
  },
  {
    id: 2,
    role: "Jr. Software Developer",
    company: "Classic IT",
    period: "07 November 2023 - 15 October 2024",
    type: "Full-Time",
    location: "Dhaka, Bangladesh",
    technologies: ["Laravel", "Vue.js", "MySQL", "Flutter Integration", "RESTful APIs"],
    points: [
      "Conducted client meetings to gather and translate business requirements into technical architectures and actionable designs.",
      "Engineered and maintained RESTful APIs using Laravel & MySQL to power frontend web apps (React, Vue) and mobile apps (Flutter).",
      "Developed and shipped high-interactivity frontend applications utilizing Vue.js seamlessly integrated with backend micro-services.",
      "Identified and eliminated bugs, provided client updates, and spearheaded comprehensive testing cycles to preserve project stability."
    ]
  },
  {
    id: 3,
    role: "Software Developer (Remote)",
    company: "Contract Based",
    period: "July 2023 - October 2023",
    type: "Remote Contract",
    location: "Remote",
    technologies: ["Laravel", "Blade", "Flutter APIs", "MySQL"],
    points: [
      "Gathered and clarified detailed project requirements during remote client sprints, translating business logic into actionable software modules.",
      "Created, built, and customized dynamic web software using Laravel MVC and Blade templating system.",
      "Developed, documented, and deployed reliable RESTful APIs tailored for real-time Flutter mobile app integration."
    ]
  },
  {
    id: 4,
    role: "Laravel Developer",
    company: "LinkTech IT",
    period: "10 October 2019 - February 2020",
    type: "Full-Time",
    location: "Dhaka, Bangladesh",
    technologies: ["Laravel MVC", "Blade", "PHP OOP", "MySQL", "JavaScript"],
    points: [
      "Created, developed, and maintained dynamic web platforms using Laravel MVC and Blade templates to satisfy diverse client specifications.",
      "Gathered and clarified client requirements, converted conceptual flows into actionable designs, and resolved technical bugs across production systems."
    ]
  },
  {
    id: 5,
    role: "Software Engineering Intern",
    company: "Codeless Technologies",
    period: "3 Months",
    type: "Internship",
    location: "Dhaka, Bangladesh",
    technologies: ["HTML5", "CSS3", "JavaScript", "PSD to HTML", "Bootstrap"],
    points: [
      "Executed pixel-perfect responsive web design and converted PSD design mockups into semantic, clean HTML/CSS web pages.",
      "Collaborated with senior engineers on debugging user interfaces and testing cross-browser compatibility."
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Naval House Management System (NHAMS)",
    category: "Full-Stack",
    technology: "Laravel, MySQL, JavaScript",
    tags: ["Laravel", "MySQL", "Gov / Defense", "Enterprise System"],
    key_points: [
      "Featured additions, module engineering, and proactive bug fixing using Laravel MVC architecture.",
      "Engineered Naval area-wise house allotment, house roster, house change, extension, transfer, parking, reporting, and administrative management modules.",
      "Implemented HAC (House Allotment Committee) automated reporting system and real-time House Vacant tracking dashboard."
    ],
    link: "http://nhams.kazionline.com",
    badge: "Enterprise Gov Project",
    featured: true
  },
  {
    id: 2,
    title: "Health Engineering Department (HED)",
    category: "Backend & API",
    technology: "Laravel, PgSQL, Biometric API Integration",
    tags: ["Laravel", "PostgreSQL", "Biometric API", "Gov Project"],
    key_points: [
      "Engineered real-time attendance system connecting hardware fingerprint and facial recognition scanners through high-throughput REST APIs.",
      "Developed scheduled time tracking engine calculating present, absent, late, overtime, and early-leave statuses with precision in/out logs.",
      "Seamless integration with enterprise biometric hardware machines for accurate daily attendance monitoring across departments."
    ],
    link: "",
    badge: "Biometric Hardware API",
    featured: true
  },
  {
    id: 3,
    title: "Timetrack Biometric Attendance Management System",
    category: "Backend & API",
    technology: "Laravel, MySQL, Hardware API Integration",
    tags: ["Laravel", "MySQL", "Biometric API", "Automated Cron"],
    key_points: [
      "Real-time attendance capturing utilizing facial recognition and biometric fingerprint scanners via custom API endpoints.",
      "Automated scheduled time-tracking calculating daily employee attendance status, shift variations, and overtime hours.",
      "Resilient background workers to process raw machine transactions and synchronize logs reliably without network dropouts."
    ],
    link: "",
    badge: "Hardware & IoT Integration"
  },
  {
    id: 4,
    title: "Manufacturing Enterprise Project",
    category: "Full-Stack",
    technology: "Vue.js 3 [Frontend], Laravel [Backend API]",
    tags: ["Vue.js 3", "Composition API", "Laravel API", "Industrial ERP"],
    key_points: [
      "Developed and built a high-performance dynamic frontend using Vue.js 3 and unified with Laravel Backend RESTful APIs.",
      "Integrated Vue.js single-page applications with Laravel endpoints for instantaneous, secure data round-trips.",
      "Leveraged Vue 3 Composition API to build modular, interactive interfaces, stateful controls, and robust production performance."
    ],
    link: "https://manufacturing.classicitltd.com",
    badge: "Vue 3 + Laravel SPA",
    featured: true
  },
  {
    id: 5,
    title: "Classic POS",
    category: "Full-Stack",
    technology: "PHP Laravel (API Backend), React.js Frontend",
    tags: ["Laravel API", "React.js", "MySQL", "POS System"],
    key_points: [
      "Architected, built, and maintained mission-critical RESTful APIs using Laravel and MySQL to power high-speed POS terminals.",
      "Engineered complex backend business logic for product variations, multi-branch inventory tracking, sales reconciliations, accounting, barcode printing, and distribution.",
      "Engineered optimized endpoints ensuring sub-second response times for checkout counters."
    ],
    link: "https://classic-pos-frontend.classicit.org",
    badge: "Multi-Branch POS",
    featured: true
  },
  {
    id: 6,
    title: "Creation EDGE",
    category: "Full-Stack",
    technology: "PHP Laravel (API Backend), React.js Frontend",
    tags: ["Laravel", "React.js", "Courier API", "Barcode Scanning"],
    key_points: [
      "Developed and maintained scalable RESTful APIs in Laravel supporting modern React.js frontend interface.",
      "Engineered automated Pathao Courier third-party API integration for end-to-end parcel tracking and dispatching.",
      "Engineered high-speed order dispatching system operated via physical hardware Barcode Scanner machines."
    ],
    link: "https://pos.creationedge.com.bd",
    badge: "E-Commerce Logistics"
  },
  {
    id: 7,
    title: "Sun Shine Power",
    category: "Full-Stack",
    technology: "PHP Laravel (API Backend), React.js Frontend",
    tags: ["Laravel", "React.js", "Dealer Management", "CRM"],
    key_points: [
      "Developed, built, and maintained robust RESTful APIs connecting relational MySQL schemas to React frontend.",
      "Engineered custom dealer management workflow tailored to client company's multi-tiered sales and commission requirements.",
      "Delivered real-time sales reporting and inventory tracking across partner networks."
    ],
    link: "https://sunsine.classicitltd.com",
    badge: "Distribution & Dealer ERP"
  },
  {
    id: 8,
    title: "Porichoy Traders Flutter Mobile App",
    category: "Mobile & API",
    technology: "PHP Laravel (API Backend), Flutter Mobile",
    tags: ["Laravel API", "Flutter", "Play Store", "Mobile App Backend"],
    key_points: [
      "Engineered secure, high-speed RESTful APIs in Laravel to power the official Android application published on Google Play Store.",
      "Implemented comprehensive supplier and customer account management modules with real-time ledger synchronization.",
      "Architected token authentication, push notifications, and transaction history endpoints."
    ],
    link: "https://play.google.com/store/apps/details?id=com.porichoytraders.porichoytraders&hl=en",
    badge: "Google Play Store App"
  },
  {
    id: 9,
    title: "Wood Machinery (Web & Flutter)",
    category: "Mobile & API",
    technology: "PHP Laravel (API & Blade), Flutter Mobile",
    tags: ["Laravel Blade", "Flutter API", "E-Commerce", "MySQL"],
    key_points: [
      "Customized and debugged core business logic, implementing responsive Laravel Blade templates matching customer expectations.",
      "Developed and maintained clean RESTful APIs connecting backend catalog and orders with the Flutter mobile application.",
      "Optimized query performance and database indexing for large industrial machinery inventory."
    ],
    link: "https://woodmachinery.com.bd",
    badge: "Web & Mobile Platform"
  }
];

export const educationList: EducationItem[] = [
  {
    id: 1,
    degree: "B.Sc. in Software Engineering",
    institution: "American International University - Bangladesh (AIUB)",
    year: "Graduated 2019",
    grade: "3.01 / 4.00",
    gradeLabel: "CGPA",
    description: "Specialized in Object-Oriented Programming, Database Management Systems, Software Architecture, and Web Engineering."
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gurudayal Govt College",
    year: "Passing Year: 2013",
    grade: "4.10 / 5.00",
    gradeLabel: "GPA",
    description: "Science concentration with coursework in Mathematics, Physics, and Chemistry."
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Kishoreganj Govt Boys High School",
    year: "Passing Year: 2011",
    grade: "4.75 / 5.00",
    gradeLabel: "GPA",
    description: "Science background with strong foundation in analytical thinking and mathematics."
  }
];

export const whyHireMeReasons = [
  {
    title: "Solid Software Engineering Foundation",
    description: "Holding a B.Sc. in Software Engineering, I build maintainable, well-architected code following OOP principles, design patterns, and clean architecture.",
    icon: "code"
  },
  {
    title: "Extensive Laravel & Backend Mastery",
    description: "Over 2+ years of battle-tested experience building enterprise systems, biometric attendance trackers, multi-branch POS, and complex business logic.",
    icon: "server"
  },
  {
    title: "Robust RESTful API Architecture",
    description: "Proven expertise designing high-performance, secure RESTful APIs seamlessly consumed by React, Next.js, Vue, and Flutter mobile applications.",
    icon: "cpu"
  },
  {
    title: "Database Performance & Optimization",
    description: "Deep hands-on experience with MySQL and PostgreSQL schema design, indexing, foreign key constraints, complex query optimization, and data integrity.",
    icon: "database"
  },
  {
    title: "Modern Full-Stack Capabilities",
    description: "Skilled in bridging the backend and frontend seamlessly using modern React.js, Next.js, Vue.js, JavaScript (ES6+), Tailwind CSS, and AJAX.",
    icon: "layout"
  },
  {
    title: "Ownership & Timely Delivery",
    description: "Demonstrated track record of directly communicating with clients, gathering requirements, leading sprints, solving production blockers, and delivering on schedule.",
    icon: "check-circle"
  }
];
