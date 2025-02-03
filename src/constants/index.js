import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in front-end technologies like React and Tailwind CSS, and back-end technologies such as Node.js, Express.js, MongoDB, Django, SQL, and Python. This diverse skill set enables me to design and build robust, scalable, and efficient server-side solutions. My proficiency in C++ strengthens my problem-solving abilities, allowing me to approach challenges with precision and creativity. My goal is to develop innovative applications that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack software developer with a passion for crafting efficient and user-friendly web applications. My expertise includes front-end technologies like React and Tailwind CSS, and back-end technologies such as Django, Python, Node.js, Express.js, MongoDB, SQL (including SQLite and MySQL). My journey into web development began with a deep curiosity about how systems work, which has evolved into a fulfilling career where I continuously strive to learn, adapt, and tackle new challenges. I enhance my problem-solving skills by solving LeetCode problems daily, allowing me to approach complex issues with precision and creativity. I thrive in collaborative environments and take pride in delivering high-quality solutions. Outside of coding, I stay active, explore emerging technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Software Engineer Intern",
    company: "Dialpad Inc.",
    description: `I build, test, and deploy high-quality, scalable product features while collaborating with Product Managers and Engineering leaders. I work with technologies like Python, VueJS, REST APIs, NoSQL, and WebSockets to create robust client-server applications. I also enhance internal tools to improve team productivity and build connections across the company.`,
    technologies: ["VueJS", "Python", "REST APIs", "NoSQL", "JSON", "WebSockets", ],
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
      "Developed a real-time chat web application for college students using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io for seamless real-time communication. This platform enables juniors and seniors to interact, ask questions, and resolve doubts effectively. The app features an user-friendly interface, instant messaging, and scalability to handle multiple users simultaneously.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
  },
  {
    title: "BIT Discuss",
    image: project2,
    description:
      "Developed BIT Discuss, a Twitter-inspired web application for college students, using Django for the back-end, SQLite for the database, and HTML/CSS for the front-end. The platform enables juniors and seniors to post doubts or discussion topics, fostering interaction and collaboration. Other users can comment on posts, providing insights and solutions.",
    technologies: ["Django","SQLite", "HTML", "CSS", "Python"],
  },
  {
    title: "Weather Forecasting App",
    image: project3,
    description:
      "Built a dynamic weather forecasting web app using HTML, CSS, and JavaScript, integrating the OpenWeather API for real-time weather updates. The app provides users with accurate weather details such as temperature, humidity, and conditions for any location.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "QuickCart - An E-Commerce Website",
    image: project4,
    description:
      "Created Quick Cart, an e-commerce website using HTML, CSS, and JavaScript. This project focuses on an intuitive front-end design, featuring a responsive layout, product listings, and interactive features like cart management. Quick Cart demonstrates my ability to build user-friendly and visually appealing web interfaces tailored for e-commerce platforms",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Basavanagudi, Bangalore, Karnataka, India - 560004 ",
  phoneNo: "+91 8207523728 ",
  email: "rohsingh26@gmail.com",
};
