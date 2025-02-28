import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in front-end technologies like React and Tailwind CSS, and back-end technologies such as Node.js, Express.js, MongoDB, Django, SQL, and Python. I use Git and GitHub as version control systems to ensure efficient collaboration and streamlined development processes. This diverse skill set enables me to design and build robust, scalable, and efficient server-side solutions. My proficiency in C++ strengthens my problem-solving abilities, allowing me to approach challenges with precision and creativity. My goal is to develop innovative applications that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building efficient, user-friendly web applications. My expertise spans front-end technologies like React, Vue.js, and Tailwind CSS, as well as back-end technologies such as Django, Python, Node.js, Express.js, and databases like MongoDB, SQLite, and MySQL. I use Git and GitHub as version control systems to ensure efficient collaboration and streamlined development processes. My journey into software development began with a deep curiosity about how systems work, which has evolved into a continuous pursuit of learning and problem-solving. I sharpen my algorithmic thinking by solving LeetCode problems daily, enabling me to approach complex challenges with precision and creativity. I thrive in collaborative environments, delivering high-quality solutions that merge functionality with seamless user experience. Beyond coding, I stay active, explore emerging technologies, solve daily DSA problems, and contribute to open-source projects. My goal is to develop innovative applications that drive business growth and deliver exceptional user experiences`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Software Engineer Intern",
    company: "Dialpad Inc.",
    description: `I build, test, and deploy high-quality, scalable and efficient product features while collaborating with Product Managers and Engineering leaders. I work with technologies like Python, VueJS, Google Cloud Platform, REST APIs, NoSQL Dababase, Git as version control system and WebSockets to create robust client-server applications. I also enhance internal tools to improve team productivity and build connections across the company.`,
    technologies: ["Python", "VueJS", "GCP", "Git", "NoSQL DB", "JSON", "Linux", "REST API", ],
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
    title: "BIT Connect - Real-Time Chat App",
    image: project1,
    description:
      "Developed BIT Connect, a real-time chat web application for college students using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for seamless real-time communication. This platform enables juniors and seniors to interact, ask questions, and resolve doubts effectively. The app features an user-friendly interface, instant messaging, and scalability to handle multiple users simultaneously.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB",],
  },
  {
    title: "BIT Discuss",
    image: project2,
    description:
      "Developed BIT Discuss, a Twitter-inspired web application for college students, using Django for the back-end, SQLite for the database, and HTML/CSS for the front-end. The platform enables juniors and seniors to post doubts or discussion topics, fostering interaction and collaboration. Other users can comment on posts, providing insights and solutions.",
    technologies: ["Python", "Django","SQLite", "HTML", "CSS",],
  },
  {
    title: "Weather Forecasting App",
    image: project3,
    description:
      "Created a dynamic weather forecasting web app using HTML, CSS, and JavaScript, integrating the OpenWeather API for real-time weather updates. The app provides users with accurate weather details such as temperature, humidity, and conditions for any location.",
    technologies: ["HTML", "CSS", "JavaScript", "API",],
  },
  {
    title: "Object Recognition System",
    image: project5,
    description:
      "Built an Object Recognition System using the ESP32-CAM module for live video streaming and real-time object detection. Programmed the ESP32 microcontroller in C++ and utilized Python for object recognition. Used NumPy to convert bit arrays into images and OpenCV datasets for object detection. Implemented multi-threading to display live streaming and detection outputs in separate windows, ensuring efficient concurrent processing.",
    technologies: ["Python", "C++", "OpenCV", "NumPy",],
  },
  {
    title: "QuickCart - An E-Commerce Website",
    image: project4,
    description:
      "Designed Quick Cart, an e-commerce website using HTML, CSS, and JavaScript. This project focuses on an intuitive front-end design, featuring a responsive layout, product listings, and interactive features like cart management. Quick Cart demonstrates my ability to build user-friendly and visually appealing web interfaces tailored for e-commerce platforms",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub",],
  },
];

export const CONTACT = {
  address: "Basavanagudi, Bangalore, Karnataka, India - 560004 ",
  phoneNo: "+91 8207523728 ",
  email: "rohsingh26@gmail.com",
};
