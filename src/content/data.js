import React from "react";
import {FaCertificate, FaSchool, FaUniversity, FaBriefcase} from "react-icons/fa";

export const education = [
    {
        type: "University",
        title: "University of Haifa",
        date: "Oct 2023 - Present",
        description: "Bachelor's degree, Computer Science",
        icon: <FaUniversity className="text-blue-500"/>,
    },
    {
        type: "University",
        title: "The Open University of Israel",
        date: "Jan 2020 - Jan 2022",
        description: "Mathematics and Computer Science courses for B.Sc",
        icon: <FaUniversity className="text-blue-500"/>,
    },
    {
        type: "College",
        title: "Ort Bialik",
        date: "2018 - 2019",
        description: "Practical Software Engineer, Computer Engineering",
        icon: <FaSchool className="text-blue-500"/>,
    },
    {
        type: "High School",
        title: "The Hebrew Reali School",
        date: "2014 - 2017",
        description:
            "Full matriculation - 10 points in Computer Science, 5 points in Chemistry",
        icon: <FaSchool className="text-blue-500"/>,
    },
];

export const certifications = [
    {
        type: "Certification - Udemy",
        title: "React – The Complete Guide (incl. React Router & Redux)",
        date: "Dec 2023",
        description: "I earned a certification in the course, demonstrating my proficiency in modern React development.",
        icon: <FaCertificate className="text-blue-500"/>,
        actionLabel: "Show credential",
        // This is the URL to open when the user clicks on the button
        url: "https://www.udemy.com/certificate/UC-33a2b6ad-e869-469a-bea1-2dabc966c89e/",
    },
    {
        type: "Certification - Udemy",
        title: "NodeJS – The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        date: "Aug 2023",
        description: "I earned a certification in the course, demonstrating my proficiency in modern Node.js development.",
        icon: <FaCertificate className="text-blue-500"/>,
        actionLabel: "Show credential",
        url: "https://www.udemy.com/certificate/UC-edffb355-6e82-4f28-979b-960ce4aedcce/",
    },
];

export const experience = [
    {
        type: "Work Experience",
        title: "Software Developer at Agura BC",
        date: "Oct 2019 - Sep 2021",
        description: `• Developed and maintained the server side (Backend) of a customized trading white-label platform - integrating 3rd party services and adding features to create a better-suited and tailored experience (PHP).
• Maintaining and Dockerizing VMs (most of them were NGINX-based for PHP).
• Creating scripts in Python and PHP to maintain the servers (Cron, Daemon and CRUD jobs) and to set a seamless start for new employees (automating workspace environment installation from scratch, programs update, to minimize the first setup time, and reducing time spent on the update process).
• Test automation: End-to-end testing (from registration to full functionality, testing both the backend and the frontend UI-wise), Units, and smoke testing (Based on Selenium, Katalon, Java, and Python Scripts). API Testing: in Postman.
• Documentation - Maintaining the public and the internal API documentation.
• Supervising and tracking the completion of issues for the team members.
`,
        icon: <FaBriefcase className="text-blue-500"/>,
    },
];


export const projects = [
    {
        title: "Personal Website",
        type: "Personal Project", //Not mandatory
        description: `A website to showcase myself, experiment and to train with various frameworks and solutions (React, React-Dom, React-Route, Tailwind CSS, Google Cloud, CloudFlare and more...).
        This website was setup from scratch, to check free/cheap options as a challenge, its using Google cloud hosting (via bucket), with Cloudfare for DNS, and using letsencrypt certbot for the ssl`,
        links: [['Github', "https://github.com/alonengel/Personal-Portfolio-Website"], ["Live Demo", "https://alon.website"]],
        tech: ["React", "Tailwinds", "Google Cloud", "CloudFlare", "LetsEncrypt SSL", "Gitlab"],
    },
    {
        title: "Mom's Restaurant",
        type: "Final project for the course Software Engineering", //Not mandatory
        description: "A Java Project that includes a server and client side, allowing functions such as menus, orders, reports, compliments and more. with some features making ease of life such as rules support, base64 support, payload messages between the client side and server side and more!",
        links: [['Github', "https://github.com/alonengel/RestaurantFinalProject"]],
        tech: ["Java", "JavaFX", "OCSF"],
    },
    {
        title: "Rust Skins tracker",
        type: "Personal Project", //Not mandatory
        description: `A program that tracks more than 3000 items prices over the course of more than 5 years from several websites, to detect price differences and take advantage of it, gaining thousands of dollars in profit, with rate limit bypass support, the idea inspired the creation of several community websites`,
        displayImage: "",
        tech: ["Python", "React", "Node-JS", "Express", "MongoDB", "REST API","Docker"], //Not mandatory
    },
    {
        title: "Amazon Price Tracker",
        type: "Final Project for CS Practical Engineer", //Not mandatory
        description: `An Amazon web scrapper with multi-region support (Supports all the amazon sites, based on ASIN) and local database for tracking, notification and auto price retrieve.
         built as the final project for the CS Practical Engineer, this project combines python and java working simultaneously (as per request of the lecturer for using java).`,
        tech: ["Python", "Java", "Java AWT", "Java Swing"], //Not mandatory
    },
    {
        title: "GPU-Stock-Notification",
        type: "Personal Project", //Not mandatory
        description: `A program that monitored multiple sites (such as Amazon, Newegg, and others) to alert users when a specific GPU was in stock—and it even had an auto-purchase feature. 
        With Telegram bot integration for real-time notifications and logging, it was used to secure graphics cards at reasonable prices during the crypto crazes.` ,
        tech: ["Python", "Web Scrapping", "Beautiful Soup", "Telegram Bot"], //Not mandatory
    },
];