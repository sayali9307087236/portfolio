import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null); // State to track the active project

    const projects = [
        {
            title: 'Project 1: Scrapyard',
            description: `For my final year project, I developed Scrapyard, an e-commerce platform designed to transform old and scrap
            items into useful and decorative pieces. The website serves as a marketplace where individuals can sell their unwanted items,
            and artists can purchase these materials at affordable prices to create unique, customized products. These creative items can
            then be resold on the platform, fostering a sustainable cycle of reuse and creativity. Scrapyard not only helps people earn
            money by selling their scrap but also provides artists with an opportunity to showcase their creativity and contribute to
            environmental conservation through recycling.`,
            technologies: 'PHP, HTML, CSS',
            
        },
        {
            title: 'Project 2: Weather Application',
            description: `Developed a responsive web application that allows users to search for any city and view its current
            weather conditions. Utilized the OpenWeatherMap API to fetch real-time weather data and present it in an intuitive and
            user-friendly interface.`,
            technologies: 'React JS, HTML, CSS',
            link: 'https://creative-nougat-e29bd6.netlify.app/'
        },
        {
            title: 'Project 3: SnapGallery',
            description: `Developed a robust image repository application similar to Pixabay, providing users with access to a vast
            collection of high-quality images. Users can search, browse, and download images for personal or commercial use.`,
            technologies: 'React JS, HTML, CSS',
            link: 'https://ubiquitous-sunburst-ac625a.netlify.app/'
        },
        {
            title: 'Project 4: ConnectNow',
            description: `Developed a video call application utilizing the Zegocloud SDK to enable seamless video conferencing. This
            application mirrors the functionality of Google Meet, providing a reliable platform for virtual meetings.`,
            technologies: 'React JS, HTML, CSS',
            link: 'https://heartfelt-bublanina-14ed64.netlify.app/'
        },
        {
            title: 'Project 5: Birthday Reminder Application',
            description: ` Developed an application designed to help users remember important birthdays by
            providing timely reminders. This application ensures users are notified of upcoming birthdays, preventing any special date
            from being forgotten.`,
            technologies: 'React JS, HTML, CSS',
            link: 'https://superb-khapse-722e3a.netlify.app/'
        },
        {
            title: 'Project 6: POC-Demonstrating',
            description: `POC-Demonstrating</h2>Developed a Proof of Concept (PoC) web application showcasing an interactive and responsive design. The application features a dynamic student management system, including CRUD (Create, Read, Update, Delete) operations for student profiles. It integrates a grid and tile view for data display, a hamburger menu for easy navigation, and a detailed record view with edit and delete options. The app is fully deployed and live at PoC App, demonstrating a clean UI and efficient data handling.`,
            technologies: 'React JS, HTML, CSS',
            link: 'https://poc-demonstrating-app.netlify.app'
        },
        {
            title: 'Project 7: Recurrence Date Picker',
            description: `Developed Recurrence Date Picker is a versatile web application that allows users to select both single and recurring dates with ease.the app offers a user-friendly interface to customize recurrence patterns such as daily, weekly, monthly, or yearly schedules. With dynamic previews and a calendar view, users can effortlessly manage date selections. This project demonstrates advanced React state management and modern UI design, making it a valuable tool for scheduling needs.`,
            technologies: 'React JS, Next.js, Tailwind CSS',
            link: 'https://recurrence-date-picker.netlify.app/'
        },
    ];

    // Handle project box click
    const handleProjectClick = (index) => {
        setActiveProject(index);
    };

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li
                        key={index}
                        className={`project-box ${activeProject === index ? (index % 2 === 0 ? 'slide-in-left' : 'slide-in-right') : ''}`}
                        onClick={() => handleProjectClick(index)}
                    >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Technologies Used:</strong> {project.technologies}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
