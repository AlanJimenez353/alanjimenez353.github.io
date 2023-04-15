import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    sql,
    git,
    figma,
    linux,
    soFi,
    freelance,
    hsbc,
    lightsOut,
    chatRoom,
    java,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "linux",
      icon: linux,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "March 2020 - October 2021",
      points: [
        "Developing and maintaining applications using React.js - Java and C++ .",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "HSBC",
      icon: hsbc,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - April 2023",
      points: [
        "Fullstack Developer for digital banking product.",
        "Development and maintenance of web and mobile application of HSBC argentina.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Frontend development - React - Node.js - Javascript - React Hooks - Redux - Redux Sagas - Router.",
        "Backend development - Java - MSSQL",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "SoFi - American online personal finance company and online bank.",
      icon: soFi,
      iconBg: "#E6DEDD",
      date: "Oct 2021 - Present",
      points: [
        "Fullstack Developer for digital banking product.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality banking products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Frontend development - React - Node.js - Javascript- React Hooks - Redux -Redux Sagas - Router.",
        "Backend development - Java - MSSQL - Docker..",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Stock Manager",
      description:
        "Stock Manager is designed to simplify and optimize the management of your products. Our application offers a reliable and secure platform for users to manage their products, inventories, and orders.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Springboot",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: java,
      source_code_link: "https://github.com/AlanJimenez353/ProductAPI-MongoDB-SpringBoot",
    },
    {
      name: "React E-commerce",
      description:
        "Music Event Tickets is a dynamic web platform designed to make the process of buying tickets for your favorite concerts and music events easier and more efficient. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: lightsOut,
      source_code_link: "https://github.com/AlanJimenez353/ECommerce-React",
    },
    {
      name: "ChatRoom- MobileApp",
      description:
        "ChatRoom is a chat application built using React Native and Firebase authentication, designed to simplify communication for users about diferent toppics.",
      tags: [
        {
          name: "react-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Redux ",
          color: "green-text-gradient",
        },
        {
          name: "Firebase ",
          color: "pink-text-gradient",
        },
        {
          name: "Expo ",
          color: "red-text-gradient",
        },
      ],
      image: chatRoom,
      source_code_link: "https://github.com/AlanJimenez353/AndroidApp-ReactNative",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };