import { PortfolioData } from '../types';

export const defaultPortfolioData: PortfolioData = {
  bio: {
    name: "Satish Maurya",
    title: "AI and Machine Learning Enthusiast ",
    tagline: "Building Machine learning models and AI systems for real-world applications",
    location: "India",
    email: "Satishmaurya112007@gmail.com",
    avatarUrl: "https://media.istockphoto.com/id/1489161384/photo/artificial-intelligence-new-age-people-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=tUHBpGtGIGABp_vRO_X--nspBBjc8vJQpKgYpEVRcyY=",
    availability: {
      status: "Learning",
      details: "Actively open to Full-time Machine Learning Engineering roles & high-impact ML/AI contracts"
    },
    summary: "Aspiring AI & ML Engineer passionate about machine learning, data science, and intelligent systems. I’m continuously expanding my skills through hands-on projects and exploring innovative ways to use AI and data to solve real-world problems",
    detailedBio: [
      "I am an aspiring AI/ML Engineer focused on building a strong foundation in machine learning, data science, and artificial intelligence. I enjoy turning data into meaningful insights and developing practical solutions using Python, SQL, and machine learning.",
      "My learning journey focuses on understanding the complete machine learning workflow—from data preprocessing, exploratory data analysis, and feature engineering to model training, evaluation, and deployment. I believe in writing clean, understandable code while continuously improving my problem-solving and technical skills."
    ],
    stats: [
      { label: "Years Experience", value: "0", description: "AI and Machine Learning Enthusiast" },
      { label: "Projects Shipped", value: "1", description: "From zero to production at scale" },
    ],
    socialLinks: [
      { platform: "github", url: "https://github.com/satishmaurya2007", label: "GitHub", handle: "@satishmaurya" },
      { platform: "linkedin", url: "https://linkedin.com/in/satishmaurya2025", label: "LinkedIn", handle: "satish-maurya" },
      { platform: "email", url: "mailto:Satishmaurya112007@gmail.com", label: "Email", handle: "Satishmaurya112007@gmail.com" },
      { platform: "leetcode", url: "https://leetcode.com", label: "LeetCode", handle: "satish_algorithms" },
    ],
    resumeUrl: "#resume"
  },
  projects: [
    {
      id: "proj-1",
      title: "Movie Recommender System",
      tagline: "Personalized movie recommendations powered by machine learning",
      description: "An AI-powered recommendation system that suggests movies based on user preferences, movie genres, and similarity between films.",
      detailedDescription: "The Movie Recommender System uses machine learning and content-based filtering to recommend movies similar to the user's selected choices. The project involves data preprocessing, exploratory data analysis, feature engineering, text vectorization, and cosine similarity to identify relevant movies. It provides personalized recommendations through an interactive and user-friendly interface.",
      category: "AI & Machine Learning",
      tags: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      image: "https://images.unsplash.com/photo-1751935223137-55bc9f26f0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vdmllJTIwcmV2aWV3fGVufDB8fDB8fHww",
      demoUrl: "https://example.com/nexusflow",
      githubUrl: "https://github.com/example/nexusflow",
      featured: true,
      role: "AI/ML Developer & Data Science Engineer",
      year: "2026",
      metrics: [
        { label: "Precision", value: "0.87" },
        { label: "Recall", value: "0.82" },
        { label: "Recommendation", value: "Top-5" }
      ],
      keyFeatures: [
        "Content-based filtering to recommend movies based on user preferences",
        "Feature engineering using movie genres, keywords, overview, cast, and other metadata",
        "Count vectorization to convert movie text features into numerical representations",
        "Cosine similarity to identify and rank movies with similar characteristics"
      ],

      architecture: [
        "Data Layer: Movie dataset containing titles, genres, keywords, cast, and descriptions",
        "Preprocessing: Data cleaning, missing-value handling, feature selection, and feature combination",
        "ML Pipeline: Count vectorization followed by cosine similarity-based recommendation",
        "Application Layer: Interactive interface for selecting a movie and generating personalized recommendations"
      ]
    },
  ],

  skillCategories: [
    {
  title: "Data Science & Machine Learning",
  description: "Building data-driven solutions by applying machine learning, statistical analysis, and practical AI techniques to real-world problems.",
  icon: "Brain",
  skills: [
    {name: "Python",level: 60,category: "Programming",isTopSkill: true},
    {name: "Machine Learning",level: 65,category: "AI/ML",isTopSkill: true},
    {name: "Pandas & NumPy",level: 80,category: "Data Science"},
    {name: "Scikit-learn",level: 60,category: "AI/ML"},
    {name: "EDA & Data Visualization",level: 80,category: "Data Science"},
    {name: "Feature Engineering",level: 70,category: "Machine Learning"},
    {name: "SQL / MySQL",level: 80,category: "Database",isTopSkill: true},
  ]
},
    {
      title: "Backend & Distributed Systems",
      description: "Building scalable APIs, microservices, and asynchronous event-driven pipelines.",
      icon: "Server",
      skills: [
        { name: "Python / FastAPI", level: 20,category: "Backend" },
        { name: "RESTful & GraphQL APIs", level:1, category: "Backend", isTopSkill: true },
        { name: "Microservices & Event Pipelines", level: 1, category: "Backend" },
      ]
    },
    {
      title: "Databases & Storage",
      description: "Relational, document, in-memory, and vector data persistence at scale.",
      icon: "Database",
      skills: [
        { name: "DBMS-SQL", level: 80, category: "Databases", isTopSkill: true },
        { name: "Query Optimization & Indexing", level: 50, category: "Databases" },
        
      ]
    },
    {
      title: "Cloud, DevOps & Observability",
      description: "Containerization, infrastructure as code, CI/CD, and site reliability engineering.",
      icon: "Cloud",
      skills: [
        { name: "Docker & Container Orchestration", level: 0 ,  category: "Cloud & DevOps", isTopSkill: true },
        { name: "Kubernetes (K8s)", level: 0,category: "Cloud & DevOps" },
        { name: "AWS (ECS, Lambda, S3, RDS, CloudFront)", level: 15,  category: "Cloud & DevOps", isTopSkill: true },
        { name: "Google Cloud / Cloud Run", level: 10,  category: "Cloud & DevOps" },
        { name: "CI/CD (GitHub Actions, ArgoCD)", level: 10,  category: "Cloud & DevOps" },
       
       
      ]
    },
    {
      title: "Engineering Practices & Tools",
      description: "Methodologies and tooling that guarantee high software quality and team velocity.",
      icon: "ShieldCheck",
      skills: [
        { name: "IntelliJ IDEA", level: 90, category: "Engineering Practices" },
        { name: "Git & Github", level: 60, category: "Engineering Practices" },
        { name: "Google Colab", level: 90,  category: "Engineering Practices" }
      ]
    }
  ],
  experiences: [
   {
      id: "exp-1",
      role: "AI/ML Developer & Machine Learning Enthusiast",
      company: "Independent Projects",
      companyUrl: "",
      location: "India",
      period: "2025 - Present",
      type: "Learning & Projects",
      current: true,
      description: "Building hands-on experience in machine learning, data science, and artificial intelligence through practical projects and continuous learning.",
      achievements: [
        "Developed machine learning projects covering data preprocessing, exploratory data analysis, feature engineering, model training, and evaluation.",
        "Built a Movie Recommender System using content-based filtering, TF-IDF vectorization, and cosine similarity.",
        "Worked with Python, Pandas, NumPy, Scikit-learn, and SQL to analyze data and develop machine learning solutions.",
        "Exploring Generative AI, LLMs, AI agents, and model deployment while continuously strengthening machine learning fundamentals."
      ],
      skills: [
        "Python","Machine Learning","Pandas","NumPy","Scikit-learn","SQL","Data Science"
  ]
},
  
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.Tech",
      field: "Electronics and Communication Engineering",
      institution: "Faculty of Engineering and Technology, Jamia Millia Islamia University",
      location: "India",
      period: "2025 - 2029",
      CGPA: "> 9.0",
      highlights: [
        "Coursework: Signals and Systems, Analog Electronics, Digital Electronics, Microprocessors, Communication Systems, Control Systems, and Embedded Systems.",
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Programming in JAVA",
      issuer: "NPTEL,IIT Kharagpur",
      issueDate: "Dec 2025",
      credentialUrl: "",
      credentialId: ""
    },
    {
      id: "cert-2",
      name: "DBMS",
      issuer: "NPTEL,IIT Kharagpur",
      issueDate: "Jan 2026",
      credentialUrl: "",
      credentialId: ""
    },
     {
      id: "cert-3",
      name: "Foundation Course on AI readiness",
      issuer: "Indian Institute of Creative Technologies",
      issueDate: "Aug 2026",
      credentialUrl: "",
      credentialId: ""
    },
     {
      id: "cert-4",
      name: "Google Prompting Essentials Specialization",
      issuer: "Google",
      issueDate: "Aug 2026",
      credentialUrl: "",
      credentialId: ""
    },
     {
      id: "cert-5",
      name: "Google AI essentials",
      issuer: "Google",
      issueDate: "Aug 2026",
      credentialUrl: "",
      credentialId: ""
    },
     {
      id: "cert-6",
      name: "Data Analytics Using AI",
      issuer: "IBM Skillsbuild",
      issueDate: "Jun 2026",
      credentialUrl: "",
      credentialId: ""
    }
    
  ]
};
