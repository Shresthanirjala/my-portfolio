const projects = [
  {
    id: 1,
    title: "Shoes Store",
    shortdescription:
      "This is a simple e-commerce website for buying Nike shoes, built with HTML, CSS, and JavaScript.",
    description:
      "The project is a frontend-only Nike shoes website built using HTML, CSS, and JavaScript, where users can explore a collection of Nike shoes. The website features a clean and modern design with a user-friendly interface, showcasing the products with high-quality images and product details. Animations and hover effects are implemented for a more dynamic and engaging user experience. The product pages are responsive, ensuring the website looks great on different devices. The site includes an interactive shopping cart interface, allowing users to visually explore different shoe models and sizes, although there is no backend integration. The project highlights frontend design skills, including layout structuring, responsive design, and adding subtle animations for an enhanced user experience.",
    image: "/shoesstore.png",
    tags: ["HTML", "JavaScript", "CSS"],
    tools: ["Html", "JavaScript", "CSS"],
    link: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/username/shoes-store",
    date: "2024",
    gallery: ["/shoesstore.png"],
  },
  {
    id: 2,
    title: "E-commerce Pet Store",
    shortdescription:
      "A pet store web app built with PHP, HTML, CSS, and JavaScript, allowing users to browse and purchase dog and cat breeds with detailed info.",
    description:
      "The Pet Store Web Application is a fully responsive and dynamic e-commerce platform built using PHP, HTML, CSS, and JavaScript, designed to make purchasing pets like dogs and cats simple and intuitive. The application allows users to register and securely log in, providing them access to a variety of pet breeds categorized for easy browsing. Each pet has a detailed page showcasing its breed, characteristics, and pricing. Users can add pets to their cart, proceed to checkout, and manage their orders efficiently. They can also cancel their orders anytime before payment confirmation, though cancellations are restricted after payment or order confirmation to maintain transactional integrity.On the admin side, the platform includes a robust panel where administrators can manage pet listings by adding, updating, or deleting pets based on their breed and category. Admins can also view and manage user orders, including canceling or approving them as needed, ensuring smooth operations. The application integrates features like password encryption for secure user management, AJAX for dynamic page updates, and a MySQL database for storing user, pet, and order information. Designed with a user-centric approach, the platform ensures a seamless shopping experience with interactive elements and a fully responsive layout, making it accessible across devices. With its efficient order management system, security measures, and admin capabilities, this project highlights a perfect balance between user convenience and administrative control.",
    image: "/petstore.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    tools: ["Html", "Css", "Javascript", "PHP"],
    link: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/username/pet-store",
    date: "2024",
    gallery: ["/petstore.png"],
  },
  {
    id: 3,
    title: "Chat Application",
    shortdescription:
      "A real-time chat app built with Node.js, React, and Tailwind CSS, featuring user authentication, responsive design, and smooth animated interactions for seamless communication.",
    description:
      "This chat application is developed using Node.js, React, and Tailwind CSS, offering a seamless platform for real-time communication. Users can sign up and log in securely through JWT-based authentication, ensuring privacy and protection. The backend, powered by Node.js, leverages WebSockets (via Socket.io) to enable real-time messaging, allowing users to send and receive messages instantly without the need for page reloads. The frontend, built with React, dynamically updates the chat interface to reflect new messages and user interactions. Tailwind CSS is used to create a sleek, responsive, and modern design that adapts across different screen sizes. The application features a user-friendly chat window, displaying a history of messages, and ensures smooth, uninterrupted communication. This project highlights key aspects of web development, such as secure user authentication, real-time data exchange, and responsive design.",
    image: "/chat1.png",

    tags: ["React", "JavaScript", "Tailwind CSS", "Node js"],
    link: "https://chatapp-mern-lw9r.onrender.com/login",
    liveUrl: "https://chatapp-mern-lw9r.onrender.com/login",
    githubUrl: "https://github.com/username/chat-application",
    date: "2024",
    featured: true,
    gallery: ["/chat1.png"],
  },
  {
    id: 4,
    title: "E_shop",
    shortdescription:
      "A frontend-only e-commerce site built with React, Tailwind CSS, and JavaScript, featuring a responsive design for browsing products like watches, laptops, and headphones.",
    description:
      "I have developed a fully responsive, frontend-only e-commerce website for shopping products like watches, laptops, and headphones using React, Tailwind CSS, and JavaScript. The website is designed to provide a seamless user experience across various devices, with a clean, modern layout that adapts perfectly to both mobile and desktop screens. I implemented different animations throughout the site to enhance user interaction, such as smooth hover effects and transitions that make the interface more engaging. Additionally, I integrated a dark mode feature, allowing users to toggle between light and dark themes for a personalized browsing experience. Tailwind CSS was used to create a highly customizable design system, ensuring that the site is visually appealing and functional, even without a backend, making it a dynamic and user-friendly online shopping platform.",
    image: "/eshop2.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],

    link: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/username/e-shop",
    date: "2024",
    gallery: ["/eshop2.png"],
  },
  {
    id: 5,
    title: "Blogs",
    shortdescription:
      "A simple blogging website built with WordPress, featuring a clean, minimal design for distraction-free reading.",
    description:
      "I have created a simple and user-friendly blogging website using WordPress, designed to provide a seamless reading experience. The website follows a minimalistic approach with a clean layout, ensuring that the focus remains on the content. With WordPress as the foundation, it offers an easy-to-manage interface, allowing effortless content updates and customization. The site is fully responsive, making it accessible across desktops, tablets, and mobile devices. Whether users want to explore blogs on nature, technology, or other topics, the website delivers a smooth browsing experience. Its simplicity and efficiency make it an ideal platform for sharing and discovering insightful articles.",
    image: "/blog1.png",
    tags: ["WordPress"],

    link: "https://nverse0.wordpress.com/",
    liveUrl: "https://nverse0.wordpress.com/",
    githubUrl: null, // WordPress site doesn't have GitHub repo
    date: "2024",
    gallery: ["/blog1.png"],
  },
  {
    id: 6,
    title: "AI-Powered Application",
    shortdescription:
      "SpeakEasyAI is an AI-powered app built with Next.js, Django, and OpenAI that transcribes speech into real-time subtitles. It helps the deaf and hard of hearing engage in live conversations with ease.",
    description:
      "SpeakEasyAI is an innovative AI-powered application designed to break down communication barriers for the deaf and hard of hearing community. Built with Next.js for the frontend and Django for the backend, this application leverages OpenAI's advanced speech recognition capabilities to provide real-time speech-to-text transcription. The app captures live audio and converts it into accurate subtitles instantly, enabling seamless participation in conversations, meetings, and social interactions. The Next.js frontend provides a responsive, user-friendly interface that displays transcriptions in real-time with customizable text size and colors for better readability. The Django backend handles audio processing, API integrations with OpenAI, and manages user sessions securely. This project demonstrates the practical application of AI in accessibility technology, combining modern web frameworks with cutting-edge AI services to create meaningful solutions for underserved communities.",
    image: "/speakeasyai.png",
    tags: ["Next.js", "Django", "OpenAI"],

    link: "#",
    liveUrl: "#",
    githubUrl: "https://github.com/username/speakeasyai",
    date: "2024",
    featured: true,
    gallery: ["/speakeasyai.png"],
  },
];

export default projects;
