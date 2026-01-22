// ============================================================================
// PORTFOLIO DATA - Single Source of Truth
// ============================================================================
// Edit this file to update your portfolio content. Type safety ensures you
// won't break the layout when adding/removing projects or experiences.
// ============================================================================

// ==================== TYPE DEFINITIONS ====================

export interface PersonalInfo {
  name: string;
  title: string;
  taglines: string[]; // Rotating taglines for hero
  location: string;
  citizenship: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  bio: string[];
  resumeUrl?: string;
}

export interface Achievement {
  text: string;
  metrics?: string[]; // Highlighted metrics like "35% reduction"
  tags: string[]; // Tech stack for this achievement
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  dateRange: string;
  type: "research" | "data" | "software" | "intern";
  featured: boolean; // Highlight card with special styling
  logo?: string;
  achievements: Achievement[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI/ML" | "Full-Stack" | "Data Science";
  featured: boolean; // Takes 2x width in grid
  dateRange: string;
  technologies: string[];
  metrics?: string[]; // Optional impact metrics
  achievements: string[]; // XYZ-formatted bullets
  links?: {
    github?: string;
    demo?: string;
    kaggle?: string;
  };
  image?: string;
}

export interface SkillCategory {
  [category: string]: string[];
}

// ==================== PERSONAL INFO ====================

export const personalInfo: PersonalInfo = {
  name: "Suvan Kasina",
  title: "AI/ML Engineer & Data Scientist",
  taglines: [
    "DoD-Funded AI Researcher",
    "Full-Stack ML Engineer",
    "Building Intelligent Systems"
  ],
  location: "San Antonio, TX",
  citizenship: "US Citizen",
  contact: {
    email: "suvan.kasina8@gmail.com",
    phone: "210-391-4711",
    linkedin: "linkedin.com/in/suvan-kasina",
    github: "github.com/Suvan8806",
    portfolio: "suvan8806.pythonanywhere.com"
  },
  bio: [
    "CS + Data Science student at UTSA (3.97 GPA) specializing in deep learning, computer vision, and distributed AI systems.",
    "Currently conducting DoD-funded research on Few-Shot Semantic Segmentation while building production-grade ML infrastructure."
  ]
};

// ==================== EXPERIENCES ====================

export const experiences: Experience[] = [
  {
    id: "dod-research-2025",
    company: "UTSA Vision & AI Lab",
    role: "Undergraduate Research Assistant (DoD Funded)",
    location: "San Antonio, TX",
    dateRange: "Present",
    type: "research",
    featured: true,
    achievements: [
      {
        text: "**Selected** for Department of Defense-funded research advancing Few-Shot Semantic Segmentation for computer vision tasks with limited training data",
        tags: ["PyTorch", "YOLO", "COCO Dataset"]
      },
      {
        text: "**Engineered** encoder-decoder deep learning models **achieving state-of-the-art segmentation accuracy** by developing advanced feature extraction pipelines with custom CNN backbones",
        metrics: ["50 images per class", "state-of-the-art mIoU"],
        tags: ["Deep Learning", "Computer Vision", "Neural Networks"]
      },
      {
        text: "**Optimized** model performance through extensive ablation studies testing architecture variations, hyperparameter configurations, and data augmentation strategies for limited-data scenarios",
        tags: ["PyTorch", "Model Optimization", "Transfer Learning"]
      },
      {
        text: "**Collaborated** with multidisciplinary research team to document findings and prepare technical reports for DoD stakeholders and potential publication submissions",
        tags: ["Technical Writing", "Research"]
      }
    ]
  },
  {
    id: "mitre-2025",
    company: "MITRE Corporation",
    role: "AI Futures Summer Intern",
    location: "McLean, VA",
    dateRange: "June 2025 – Aug. 2025",
    type: "intern",
    featured: true,
    achievements: [
      {
        text: "**Architected** production-grade distributed Graph Neural Network training cluster **reducing training time by 35%** by implementing master-worker architecture with PyTorch Geometric across multi-GPU nodes",
        metrics: ["35% faster training", "50% resource reduction"],
        tags: ["Kubernetes", "Docker", "PyTorch Geometric", "GNN"]
      },
      {
        text: "**Deployed** cloud-native infrastructure **cutting computational overhead by 50%** by containerizing ML workloads with optimized Docker images for enterprise-scale graph datasets",
        metrics: ["50% overhead reduction", "millions of nodes/edges"],
        tags: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"]
      },
      {
        text: "**Built** comprehensive monitoring infrastructure tracking training metrics and resource utilization in real-time using TensorBoard and Prometheus across distributed nodes",
        tags: ["TensorBoard", "Prometheus", "DevOps"]
      },
      {
        text: "**Automated** CI/CD pipelines for model training, testing, and deployment using GitHub Actions, ensuring reproducibility across development iterations",
        tags: ["CI/CD", "GitHub Actions", "MLOps"]
      }
    ]
  },
  {
    id: "utsa-data-analyst-2025",
    company: "UTSA Data Analytics Center",
    role: "Data Analyst",
    location: "San Antonio, TX",
    dateRange: "Feb. 2025 – Apr. 2025",
    type: "data",
    featured: false,
    achievements: [
      {
        text: "**Automated** research data collection **reducing manual effort by 80%** by engineering Python ETL pipelines processing 50,000+ academic publication records daily",
        metrics: ["80% time reduction", "50,000+ records"],
        tags: ["Python", "BeautifulSoup", "Pandas", "NumPy"]
      },
      {
        text: "**Optimized** database performance **achieving 40% faster queries** by designing normalized PostgreSQL schemas with strategic indexing and complex JOIN operations",
        metrics: ["40% query speedup"],
        tags: ["PostgreSQL", "SQL", "Database Design"]
      },
      {
        text: "**Deployed** exploratory machine learning models using PyTorch for pattern recognition and predictive modeling supporting faculty research initiatives",
        tags: ["PyTorch", "Machine Learning", "Statistical Analysis"]
      },
      {
        text: "**Created** interactive data visualizations communicating complex analytical findings to non-technical stakeholders using Matplotlib, Seaborn, and Plotly",
        tags: ["Data Visualization", "Python", "Plotly"]
      }
    ]
  },
  {
    id: "utsa-software-dev-2025",
    company: "UTSA Data Analytics Center",
    role: "Software Developer",
    location: "San Antonio, TX",
    dateRange: "Feb. 2025 – Apr. 2025",
    type: "software",
    featured: false,
    achievements: [
      {
        text: "**Developed** RESTful API endpoints using Flask framework enabling seamless integration with faculty dashboards and third-party research tools",
        tags: ["Flask", "REST API", "Python"]
      },
      {
        text: "**Architected** automated end-to-end data integration workflows connecting scraped datasets to interactive dashboards, providing real-time access to research metrics",
        tags: ["ETL", "Automation", "Data Engineering"]
      },
      {
        text: "**Implemented** comprehensive testing suites using pytest ensuring code reliability and regression prevention across pipeline components",
        tags: ["pytest", "Testing", "Software Engineering"]
      }
    ]
  },
  {
    id: "sports-media-2024",
    company: "Sports Media Inc.",
    role: "Computer Science Intern",
    location: "Remote",
    dateRange: "June 2024 – Oct. 2024",
    type: "intern",
    featured: false,
    achievements: [
      {
        text: "**Integrated** Twilio APIs to deploy intelligent chatbot and voicebot features **improving response time by 30%** while reducing support ticket volume",
        metrics: ["30% faster response"],
        tags: ["Twilio", "REST API", "Python"]
      },
      {
        text: "**Automated** repetitive backend tasks including data synchronization and system monitoring using Python scripting, enabling support team to focus on complex issues",
        tags: ["Python", "Automation", "Backend"]
      },
      {
        text: "**Optimized** platform performance through code refactoring and Redis caching implementation, measurably improving application response times",
        tags: ["Redis", "Performance Optimization", "Caching"]
      }
    ]
  }
];

// ==================== PROJECTS ====================

export const projects: Project[] = [
  {
    id: "repo-mind",
    title: "Repo-Mind",
    tagline: "Local-First AI GitHub Forensic Auditor",
    description: "Privacy-preserving Dual-Stream RAG pipeline that intelligently cross-references 5,000+ Git commits with active source code to detect architectural drift, security vulnerabilities, and code quality regressions—all running 100% locally.",
    category: "AI/ML",
    featured: true,
    dateRange: "Dec. 2025",
    technologies: ["ChromaDB", "Ollama", "LangChain", "Streamlit", "PyTorch", "RAG"],
    metrics: ["31.5 tokens/sec", "5,000+ commits analyzed", "100% local privacy"],
    achievements: [
      "**Solved** vector database crowding problem **achieving 31.5 tokens/sec inference** by implementing metadata-aware filtering with commit hash-based version tagging on consumer RTX 3050 GPU",
      "**Architected** efficient embedding pipeline with optimized 500-token chunking, semantic embeddings via sentence transformers, and cosine similarity search for accurate retrieval",
      "**Built** natural language query interface allowing developers to ask complex questions about codebase evolution with context-aware responses citing both commits and source code",
      "**Developed** real-time telemetry dashboard visualizing retrieval accuracy, semantic similarity scores, and system latency for data-driven RAG optimization"
    ],
    links: {
      github: "https://github.com/Suvan8806/repo-mind"
    }
  },
  {
    id: "fastcav",
    title: "FastCAV",
    tagline: "Explainability in Deep Neural Networks",
    description: "Implementation of the cutting-edge ICML 2025 FastCAV framework for computing interpretable concept activation vectors, improving transparency in billion-parameter vision-language models.",
    category: "AI/ML",
    featured: true,
    dateRange: "Aug. 2025 – Present",
    technologies: ["PyTorch", "Docker", "timm", "ViT", "Hydra", "HuggingFace"],
    metrics: ["75% explainability improvement", "billion-parameter models"],
    achievements: [
      "**Improved** model transparency **by 75%** by implementing FastCAV framework for interpretable concept activation vectors across billion-parameter transformer backbones",
      "**Engineered** containerized ML training pipelines using Docker ensuring reproducible experiments and seamless deployment across local and cloud infrastructures",
      "**Automated** hyperparameter experimentation workflows with Hydra configuration management, enabling systematic exploration of architectures and optimization strategies",
      "**Optimized** state-of-the-art vision backbones including ResNet-50, Vision Transformer (ViT), and EVA-Giant models for billion-parameter scalability with inference efficiency"
    ],
    links: {
      github: "https://github.com/Suvan8806/fastcav"
    }
  },
  {
    id: "premier-league-predictor",
    title: "Premier League Match Predictor",
    tagline: "ML-Powered Sports Analytics Engine",
    description: "End-to-end machine learning pipeline predicting match outcomes using 2,000+ historical Premier League records with advanced feature engineering and Random Forest ensemble classification.",
    category: "Data Science",
    featured: false,
    dateRange: "Feb. 2025",
    technologies: ["Scikit-learn", "Random Forest", "SQL", "Pandas", "NumPy", "Kaggle"],
    metrics: ["2,000+ matches analyzed", "160+ Kaggle impressions"],
    achievements: [
      "**Built** comprehensive ML prediction pipeline including web scraping, feature engineering with team statistics, and Random Forest ensemble classifier achieving strong predictive accuracy",
      "**Engineered** advanced features including rolling averages for team form, goal differential trends, and historical head-to-head win rates to capture temporal patterns",
      "**Optimized** model performance through k-fold cross-validation and GridSearchCV hyperparameter tuning, preventing overfitting while maximizing generalization",
      "**Published** complete analysis and reproducible code to Kaggle platform, generating 160+ community impressions and facilitating knowledge sharing"
    ],
    links: {
      github: "https://github.com/Suvan8806/premier-league-predictor",
      kaggle: "https://kaggle.com/suvan8806/premier-league-predictor"
    }
  },
  {
    id: "farehunter",
    title: "FareHunter",
    tagline: "Smart Rideshare Cost Optimizer",
    description: "Full-stack web app that scans multiple pickup points within walking radius to identify the most cost-effective rideshare location, helping users save money through intelligent geospatial optimization.",
    category: "Full-Stack",
    featured: false,
    dateRange: "2025",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MapBox"],
    achievements: [
      "**Developed** geospatial visualization system using OpenStreetMap and MapBox APIs rendering interactive maps with live routes, surge pricing heat maps, and walking distance calculations",
      "**Architected** Node.js/Express backend implementing Haversine formula for distance calculations and optimizing total trip cost across multiple pickup scenarios",
      "**Implemented** responsive React/TypeScript frontend with component-based architecture and React Hooks for state management ensuring smooth UX across devices",
      "**Deployed** production-ready system on Vercel with serverless functions, automatic scaling, and continuous deployment from Git repository"
    ],
    links: {
      github: "https://github.com/Suvan8806/farehunter"
    }
  },
  {
    id: "studyfuze",
    title: "StudyFuze",
    tagline: "Collaborative Student Resource Platform",
    description: "Full-stack Flask application enabling students to upload, discover, and download study materials with enterprise-grade authentication and role-based access control.",
    category: "Full-Stack",
    featured: false,
    dateRange: "Nov. 2024",
    technologies: ["Flask", "SQL", "JavaScript", "HTML/CSS", "Python", "SMTP"],
    metrics: ["100+ beta users"],
    achievements: [
      "**Deployed** comprehensive Flask web application **supporting 100+ active users** during beta testing for collaborative student resource sharing",
      "**Implemented** secure authentication system featuring email verification, bcrypt password hashing, and role-based access control distinguishing student and moderator privileges",
      "**Architected** normalized SQL database schema with foreign key constraints and optimized indexes for efficient storage of user profiles and uploaded resources",
      "**Built** RESTful API with well-designed endpoints for authentication, resource CRUD operations, and content moderation following REST principles"
    ],
    links: {
      github: "https://github.com/Suvan8806/studyfuze"
    }
  },
  {
    id: "hackernews-notifier",
    title: "Hacker News Notifier",
    tagline: "Intelligent Content Curation Bot",
    description: "Automated web scraping application gathering trending Hacker News posts daily with sophisticated filtering algorithms and personalized email digest delivery.",
    category: "Full-Stack",
    featured: false,
    dateRange: "Dec. 2024",
    technologies: ["Python", "BeautifulSoup", "SQLite", "SMTP", "Cron"],
    achievements: [
      "**Automated** daily curation of trending Hacker News content by developing intelligent Python scraper extracting metadata including titles, URLs, scores, and comment counts",
      "**Implemented** content filtering algorithm based on user-defined criteria generating personalized daily digest emails via SMTP integration",
      "**Designed** SQLite database schema with proper indexing tracking post history for trend analysis and recurring topic identification",
      "**Configured** cron job scheduling on Linux server ensuring consistent daily scraping with exponential backoff retry logic for network failures"
    ],
    links: {
      github: "https://github.com/Suvan8806/hackernews-notifier"
    }
  }
];

// ==================== SKILLS ====================

export const skills: SkillCategory = {
  "AI/ML & Deep Learning": [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Graph Neural Networks",
    "Computer Vision",
    "NLP",
    "Few-Shot Learning",
    "Transfer Learning",
    "RAG Systems",
    "LLMs/SLMs"
  ],
  "Data Science & Analytics": [
    "Statistics",
    "A/B Testing",
    "Hypothesis Testing",
    "Feature Engineering",
    "EDA",
    "Time Series Analysis",
    "Predictive Modeling",
    "Pandas",
    "NumPy",
    "Scikit-learn"
  ],
  "Programming Languages": [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C++",
    "C",
    "SQL",
    "R",
    "Bash"
  ],
  "Web Development": [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "Flask",
    "Django",
    "FastAPI",
    "REST API",
    "GraphQL"
  ],
  "Cloud & DevOps": [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GCP",
    "CI/CD",
    "GitHub Actions",
    "Vercel",
    "TensorBoard"
  ],
  "Databases & Tools": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "ChromaDB",
    "Git",
    "Jupyter",
    "LangChain",
    "HuggingFace"
  ]
};