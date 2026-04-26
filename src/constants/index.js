import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project0 from "../assets/projects/project-0.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";

export const HERO_CONTENT = `I am Rohit Singh, a Software Engineer based in Pune, India, specializing in building scalable backend systems and high-performance applications. I have professional experience working across startups and product-based companies, developing production-grade software using Java Spring Boot, React.js, Node.js, Python, Kafka, and Redis.

Currently, I work at Zebra Technologies, contributing to the Workforce Management (WFM) product by improving system reliability, debugging production issues, and optimizing backend APIs for performance and scalability.

I have also built an AI-powered Retrieval Augmented Generation (RAG) system, AI Knowledge Inbox, leveraging local embeddings and semantic search for intelligent and cost-efficient knowledge retrieval. My experience spans designing robust APIs, working with distributed systems, and deploying cloud-based applications.

I enjoy solving complex engineering problems, building reliable systems, and transforming ideas into impactful products that deliver seamless user experiences at scale.`;

export const ABOUT_TEXT = `I am a Software Engineer with hands-on experience in designing and developing scalable backend and full-stack systems. Currently working at Zebra Technologies in Pune, I focus on enhancing system performance, resolving production issues, and improving API efficiency in enterprise-grade applications built with Java Spring Boot and Angular.

Previously at GrayMatter, I developed scalable full-stack solutions using React.js, Node.js, Express.js, MongoDB, Redis, and Kafka, contributing to real-time, event-driven systems and improving development efficiency through reusable components and optimized workflows.

During my internship at Dialpad, I contributed to the Enterprise Customer Onboarding (ECO) project, building a complete end-to-end solution that streamlined bulk onboarding processes. I worked with Vue.js, Python, and GCP, and implemented testing strategies using Pytest to ensure reliability at scale.

I also explore Artificial Intelligence systems and built a local RAG-based platform, AI Knowledge Inbox, focused on semantic search and intelligent knowledge retrieval.

With strong foundations in Data Structures, System Design, and problem-solving (450+ DSA problems solved on LeetCode), I aim to build efficient, reliable, and scalable systems while growing as a backend and AI-focused engineer.`;

export const EXPERIENCES = [
  {
  year: "April 2026 - Present",
  role: "Software Engineer 1",
  company: "Zebra Technologies",
  description: `I'm working as a Software Engineer 1 at Zebra Technologies in Pune, India. I contribute to the Workforce Management (WFM) product by resolving production issues and implementing solutions to improve system reliability and performance. I work on backend services using Java Spring Boot and support Angular-based frontend, focusing on debugging, optimizing APIs, and enhancing system stability. I collaborate with cross-functional teams to identify root causes, prioritize fixes, and continuously improve product quality and performance.`,
  technologies: ["Java", "Spring Boot", "Angular", "REST APIs", "Git", "GitHub", "Jira", "Salesforce", "Agile"],
  },
  {
    year: "July 2025 - April 2026",
    role: "Software Developer",
    company: "GrayMatter",
    description: `I worked as a Software Development Engineer at GrayMatter, an Indian startup based in Bengaluru, Karnataka. I built scalable full-stack applications for projects like BIAL and Skateboard using React.js, Node.js, and Express.js. I leveraged MongoDB, Redis, and Apache Kafka for efficient data handling and real-time processing. I also developed reusable components, improving development efficiency and reducing code duplication, while collaborating in Agile teams using Git and Bitbucket.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Redis", "Kafka", "Postman"],
  },
  {
    year: "January 2025 - July 2025",
    role: "Software Engineer Intern",
    company: "Dialpad Inc.",
    description: `I worked as a Software Engineer Intern at Dialpad Inc., contributing to the Enterprise Customer Onboarding (ECO) project. I built an end-to-end solution for bulk creation of offices, users, and call centers using a multi-step interface with CSV upload support. I developed the frontend using Vue.js and Dialtone UI library, and implemented backend services in Python. I also wrote end-to-end test cases using Pytest, handled Jira tickets, and deployed solutions on GCP using Datastore.`,
    technologies: ["Python", "Vue.js", "GCP", "Git", "Pytest", "NoSQL DB", "JIRA", "Linux"],
  }
];

export const PROJECTS = [
  {
  title: "AI Knowledge Inbox",
  image: project11,
  description:
    "Developed a Retrieval Augmented Generation (RAG) system using a local MiniLM-L6-v2 embedding model to enable cost-efficient and low-latency semantic search. Integrated Gemini API for context-aware question answering over personalized knowledge sources. Implemented automated URL content ingestion, document chunking, vector embeddings, and vector-based semantic retrieval to generate accurate, citation-backed responses from user-specific data. The system enables intelligent knowledge management and private AI-powered search without relying on expensive cloud embeddings.",
  technologies: ["Python", "MiniLM-L6-v2", "RAG", "FastAPI", "Vector Embeddings", "Semantic Search", "Gemini API", "SQLite",],
  repo: "https://github.com/rohsingh26/AI-Knowledgeinbox-backend",
  liveDemo: ""
},
  {
    title: "Airline – Smart Real-Time Airport Management System",
    image: project10,
    description:
      "Built with React.js, Node.js, MongoDB, Redis, Kafka, and Socket.io, this project ensures seamless airline operations with role-based access, real-time flight updates, caching, and live event streaming. Leveraging Kafka and Redis, it delivers low-latency notifications and scalable real-time passenger experiences.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Apache Kafka"],
    repo: "https://github.com/rohsingh26/Airline-with-Kafka",
    liveDemo: "https://a-irline-frontend-without-kafka.vercel.app/",
  },
  {
    title: "Employee Management System",
    image: project8,
    description:
      "Developed a full-stack Employee Management System with secure login and registration, employee search by ID, and CRUD operations (add, update, delete). Employee records are stored in MongoDB, while Redis is used for API analytics, session storage, and rate limiting to enhance performance and security.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redis"],
    repo: "https://github.com/rohsingh26/Employee-Management-System-MongoDB-Redis",
    liveDemo: "https://full-stack-ems-frontend.vercel.app/",
  },
  {
    title: "Expense Tracker",
    image: project7,
    description:
      "Built a simple yet effective Expense Tracker Web App using Vue.js to help users manage their daily spending. Users can set a daily budget limit, track expenses, and get instant feedback on overspending or savings. The app stores data locally, ensuring expenses aren’t lost even after refreshing. A 'Clear All Data' button allows instant reset. Designed with a clean UI for easy and efficient tracking.",
    technologies: ["Vue.js", "JavaScript", "CSS", "JSON",],
    repo: "https://github.com/rohsingh26/Expense-Tracker",
    liveDemo: "https://expense-tracker-rohit-singhs-projects-86330224.vercel.app/",
  },
  {
    title: "Task Manager",
    image: project9,
    description:
      "A sleek React and Bootstrap task manager that stores all your tasks locally in the browser. Create, edit, complete, and delete tasks effortlessly with instant updates and intuitive UI. No backend required—your data stays stored via localStorage. Perfect for personal tasks lists with fast, responsive, offline support.",
    technologies: ["React.js", "Bootstrap","JSON",],
    repo: "https://github.com/rohsingh26/Task-Manager",
    liveDemo: "https://task-manager-rho-vert-80.vercel.app/",
  },
    {
    title: "BIT Connect - Real-Time Chat App",
    image: project1,
    description:
      "Developed BIT Connect, a real-time chat web application for college students using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for seamless real-time communication. This platform enables juniors and seniors to interact, ask questions, and resolve doubts effectively. The app features an user-friendly interface, instant messaging, and scalability to handle multiple users simultaneously.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    repo: "https://github.com/rohsingh26/bitconnect",
  },
  {
    title: "BIT Discuss - Web Portal",
    image: project2,
    description:
      "Developed BIT Discuss, a Twitter-inspired web application for college students, using Django for the back-end, SQLite for the database, and HTML/CSS for the front-end. The platform enables juniors and seniors to post doubts or discussion topics, fostering interaction and collaboration. Other users can comment on posts, providing insights and solutions.",
    technologies: ["Python", "Django","SQLite", "HTML", "CSS",],
    repo: "https://github.com/rohsingh26/bitdiscuss",
  },
  {
    title: "Optimized LeetCode Filtration Process",
    image: project0,
    description:
      "Built a high-performance frontend-based filtration engine for LeetCode problems that eliminates the need for repeated backend API calls. Traditional implementations perform a server call for each applied filter (e.g., difficulty, topic, tags), leading to latency, increased server load, and higher infrastructure costs. My solution preloads all questions and tags once on the frontend and handles all filter operations within the browser using optimized data structures and algorithms.",
    technologies: ["Vue.js", "Python", "JavaScript", "CSS",],
    repo: "https://github.com/rohsingh26/LeetCode-Optimization",
    liveDemo: "https://leetcode-optimization-rohit-singhs-projects-86330224.vercel.app/",
  },
  {
    title: "To-Do App",
    image: project6,
    description:
      "Developed a dynamic To-Do App using Vue.js, enabling users to create, edit, and delete tasks categorized as Personal or Professional. The app allows users to input their name and provides a user-friendly interface to manage tasks efficiently. Tasks can be marked as completed by clicking on them, which neatly strikes them out. Additionally, users can modify task names even after adding them, offering flexibility. A key feature is the use of local storage to save data directly on the device, ensuring tasks persist across sessions for a seamless and reliable user experience.",
    technologies: ["Vue.js", "JavaScript", "CSS", "JSON",],
    repo: "https://github.com/rohsingh26/todo-app",
    liveDemo: "https://todo-app-rohit-singhs-projects-86330224.vercel.app/",
  },
  {
    title: "Object Recognition System",
    image: project5,
    description:
      "Built an Object Recognition System using the ESP32-CAM module for live video streaming and real-time object detection. Programmed the ESP32 microcontroller in C++ and used Python for object recognition. Employed NumPy to convert bit arrays into images and leveraged OpenCV datasets along with YOLOv3, a pre-trained machine learning algorithm, for object detection. Implemented multi-threading to display live streaming and detection outputs in separate windows, ensuring efficient concurrent processing.",
    technologies: ["Python", "C++", "OpenCV", "NumPy",],
    repo: "https://github.com/rohsingh26/Object-Recognisition",
  },
  {
    title: "Weather Forecasting App",
    image: project3,
    description:
      "Built a dynamic weather forecasting web app using HTML, CSS, and JavaScript, integrating the OpenWeather API for real-time weather updates. The app provides users with accurate weather details such as temperature, humidity, and conditions for any location.",
    technologies: ["HTML", "CSS", "JavaScript", "API",],
    repo: "https://github.com/rohsingh26/Weather-App",
    liveDemo: "https://rohsingh26.github.io/Weather-App/",
  },
  {
    title: "QuickCart - An E-Commerce Website",
    image: project4,
    description:
      "Designed QuickCart, an e-commerce website using HTML, CSS, and JavaScript. This project focuses on an intuitive front-end design, featuring a responsive layout, product listings, and interactive features like cart management. Quick Cart demonstrates my ability to build user-friendly and visually appealing web interfaces tailored for e-commerce platforms",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub",],
    repo: "https://github.com/rohsingh26/E-Comm",
    liveDemo: "https://rohsingh26.github.io/E-Comm/",
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India - 411028",
  phoneNo: "+91 8207523728 ",
  email: "rohsingh26@gmail.com",
};
