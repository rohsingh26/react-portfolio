import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project0 from "../assets/projects/project-0.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in front-end technologies like React, Vue.js, and Tailwind CSS, and back-end technologies such as Node.js, Express.js, MongoDB, Django, SQL, and Python. I use Git and GitHub as version control systems to ensure efficient collaboration and streamlined development processes. Additionally, I have experience with Google Cloud Platform (GCP) for deploying and managing cloud-based applications.

This diverse skill set enables me to design and build robust, scalable, and efficient server-side solutions. My proficiency in C++ strengthens my problem-solving abilities, allowing me to approach challenges with precision and creativity. My goal is to develop innovative applications that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building efficient, user-friendly web applications. My expertise spans front-end technologies like React, Vue.js, and Tailwind CSS, as well as back-end technologies such as Django, Python, Node.js, Express.js, and databases like MongoDB, SQLite, and MySQL. I use Git and GitHub as version control systems to ensure efficient collaboration and streamlined development processes. I also have hands-on experience with Google Cloud Platform (GCP), which I use to deploy and manage scalable cloud-based applications. 

My journey into software development began with a deep curiosity about how systems work, which has evolved into a continuous pursuit of learning and problem-solving. I sharpen my algorithmic thinking by solving LeetCode problems daily, enabling me to approach complex challenges with precision and creativity. I thrive in collaborative environments, delivering high-quality solutions that merge functionality with seamless user experience. Beyond coding, I stay active, explore emerging technologies, solve daily DSA problems, and contribute to open-source projects. My goal is to develop innovative applications that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Software Engineer Intern",
    company: "Dialpad Inc.",
    description: `I build, test, and deploy high-quality, scalable and efficient product features while collaborating with Product Managers and Engineering leaders. I work with technologies like Python, Vue.js, Google Cloud Platform (GCP), REST APIs, NoSQL Dababase, Git as version control system and WebSockets to create robust client-server applications. I also enhance internal tools to improve team productivity and build connections across the company.`,
    technologies: ["Python", "Vue.js", "GCP", "Git", "NoSQL DB", "JSON", "Linux", "REST API", ],
  },
  {
    year: "Nov 2023 - Dec 2023",
    role: "Front-End Web Developer Intern",
    company: "Motion Cut",
    description: `I have designed and developed several front-end projects, including a weather app, e-commerce webpage, calculator, and registration form, while gaining experience in deploying them on GitHub. I specialize in using HTML, CSS, and JavaScript to build dynamic and user-friendly client-side applications. Additionally, I focus on improving internal tools to boost team productivity and foster collaboration within the organization.`,
    technologies: ["HTML", "CSS", "JavaScript", "GitHub", ],
  },
];

export const PROJECTS = [
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
    title: "BIT Connect - Real-Time Chat App",
    image: project1,
    description:
      "Developed BIT Connect, a real-time chat web application for college students using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for seamless real-time communication. This platform enables juniors and seniors to interact, ask questions, and resolve doubts effectively. The app features an user-friendly interface, instant messaging, and scalability to handle multiple users simultaneously.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB",],
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
    title: "Expense Tracker",
    image: project7,
    description:
      "Built a simple yet effective Expense Tracker Web App using Vue.js to help users manage their daily spending. Users can set a daily budget limit, track expenses, and get instant feedback on overspending or savings. The app stores data locally, ensuring expenses aren’t lost even after refreshing. A 'Clear All Data' button allows instant reset. Designed with a clean UI for easy and efficient tracking.",
    technologies: ["Vue.js", "JavaScript", "CSS", "JSON",],
    repo: "https://github.com/rohsingh26/Expense-Tracker",
    liveDemo: "https://expense-tracker-rohit-singhs-projects-86330224.vercel.app/",
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
  address: "Bengaluru, Karnataka, India - 560078",
  phoneNo: "+91 8207523728 ",
  email: "rohsingh26@gmail.com",
};
