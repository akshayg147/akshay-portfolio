export const resumeData = {
  personal: {
    name: "Akshay Gupta",
    phone: "+91 9424423401",
    email: "akshayg1047@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshay014/",
    github: "https://github.com/akshayg147/"
  },
  education: {
    institution: "Bangalore Institute of Technology",
    degree: "Bachelor of Computer Science and Engineering",
    cgpa: "8.65",
    duration: "2020 - 2024",
    location: "Bangalore, KA"
  },
  skills: {
    languages: ["Python", "JavaScript", "C", "HTML/CSS", "Bash"],
    frameworks: ["Django", "Node.js", "Django Rest Framework", "Flask", "FastAPI"],
    databases: ["SQLite", "MySQL", "MongoDB", "PostgreSQL"],
    cloudDevOps: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "Terraform", "Ansible", "Jenkins"],
    tools: ["Git", "GitHub", "GitLab", "Jira"]
  },
  experience: [
    {
      title: "Associate Cloud Engineer",
      company: "Sprinklr",
      duration: "Jul 2024 – Present",
      type: "Full-time",
      achievements: [
        "Built a Node.js/Express.js backend to aggregate metrics from Kubernetes clusters across AWS, Azure, and GCP, using Apache Kafka for real-time event streaming.",
        "Experienced in the creation of RESTful services following industry best practices using Node.js.",
        "Developed a Python SDK to enable secure cross-cloud function execution using IAM role-based access across AWS, GCP, and Azure.",
        "Led backend development for a CI/CD pipeline to automate application builds, EV code signing, and client-facing website deployments, reducing release cycles from 2 days to 4 hours.",
        "Designed a lightweight API gateway to route requests between 10+ microservices, handling 500+ RPM with <100ms latency."
      ]
    },
    {
      title: "Associate Cloud Engineer Intern",
      company: "Sprinklr",
      duration: "Jan 2024 – Jun 2024",
      type: "Internship",
      achievements: [
        "Built a Python tool to analyze and compare pricing across AWS, Azure, and GCP using their respective SDKs.",
        "Implemented automated alerts for critical incidents using Python scripts and Kafka consumers, improving team response time by 30%."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Alemeno",
      duration: "May 2023 – Aug 2023",
      type: "Internship",
      achievements: [
        "Built scalable web scraping system using Django and BeautifulSoup, processing 10,000+ websites efficiently.",
        "Achieved 10x performance improvement through Celery task queues and async processing.",
        "Integrated ChatGPT API for automated email generation, maintaining 95% response quality while reducing manual effort."
      ]
    }
  ],
  projects: [
    {
      name: "Mini Redis",
      technologies: ["JavaScript", "TCP", "Data Structures and Algorithms", "Networking"],
      link: "https://github.com/akshayg147/redis",
      description: [
        "Built a Redis-like in-memory database with core commands and expiration handling.",
        "Implemented RDB persistence for efficient data storage and recovery, mirroring Redis snapshotting.",
        "Implemented master-slave replication with command propagation and replica synchronization.",
        "Handled multiple concurrent clients and TCP-based communication."
      ]
    },
    {
      name: "SOCIALGRAM (Facebook clone)",
      technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/akshayg147/socialgram",
      description: [
        "Built full-stack social media platform using Django, implementing user authentication, real-time post interactions, and follower system.",
        "Engineered content recommendation engine using Django ORM and Python itertools, optimizing feed generation and user suggestions.",
        "Containerized application with Docker, reducing deployment image size by 60% while maintaining functionality."
      ]
    },
    {
      name: "WhatsTube Bot",
      technologies: ["JavaScript", "Node.js", "Twilio", "AWS", "S3 Bucket"],
      link: "https://github.com/akshayg147/YT-downloader-whatsapp-bot",
      description: [
        "Developed a WhatsApp bot for downloading YouTube videos in MP3 and MP4 via WhatsApp, using Node.js and Twilio API for messaging.",
        "Implemented AWS S3 with IAM-based authentication for secure storage of downloaded videos, utilizing presigned URLs for controlled access."
      ]
    }
  ]
};