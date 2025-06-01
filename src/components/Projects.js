// import React from 'react';

// const Projects = () => {
//   return (
//     <div className="section bg-blue-700">
//       <h1 className="text-black text-3xl p-32">Projects Page</h1>
//     </div>
//   );
// };

// export default Projects;

///////////////////////////




import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import trackGif from '../Videos/track.gif';

const categories = [
  {
    id: 1,
    title: 'Software Engineering & Application Development',
    description: 'Focused on system design, user interaction, and object-oriented logic.',
    projects: [
      { name: 'TravelEase - Travel Management System', description: 'A feature-rich travel platform built with C# Windows Forms and .NET Framework. It streamlines trip planning, booking, and analytics for individuals, groups, and businesses. Includes custom dashboards, SQL Server integration, and end-to-end travel coordination.', link: 'https://github.com/Z-zaratahir/TravelEase-All-in-One-Travel-Management-System' },
      { name: 'Banking Management System', description: 'A simplified banking and ATM simulation developed using Object-Oriented Programming (OOP) in C++ — includes features for account creation, balance inquiry, deposits, withdrawals, and transaction tracking. Emphasizes class-based design to model users, accounts, and operations in a structured and maintainable way.', link: 'https://github.com/Z-zaratahir/Banking-Management-System' },
      { name: 'Hospital Management System', description: 'A console-based hospital admin panel in C++ using OOP principles like inheritance, encapsulation, and polymorphism. Manages patient records, doctor schedules, and room allocations using custom-built data structures without STL. Focused on backend efficiency with modular code for scalability and maintenance.', link: 'https://github.com/Z-zaratahir/Hospital-Management-System' },
      { name: 'Smart Car Rental Platform', description: 'A feature-rich car rental management system designed for multi-user environments — includes dynamic pricing based on rental duration, input validation, vehicle availability checks, and real-time reservation handling. Emphasizes clean modular design and robust logic to simulate real-world rental workflows.', link: 'https://github.com/Z-zaratahir/Smart-Car-Rental-Platform' },
      { name: 'Course Enrollment Manager', description: 'A C++ system managing course enrollments using custom-built hash maps that map course names to student lists, with up to six students per course. Enables efficient enrollment updates, fast lookups, and handles conflicts with clean, modular code—implemented without relying on STL.', link: 'https://github.com/Z-zaratahir/Course-Enrollment-Manager' },
      { name: 'Digital Magazine Publishing System', description: 'A hierarchical digital magazine publishing system built to manage sections, pages, and lines — supports dynamic text insertion, editing, and retrieval while adhering to strict layout constraints. Focuses on flexible content organization and efficient navigation to emulate structured editorial workflows.', link: 'https://github.com/Z-zaratahir/Digital-Magazine-Publishing-System' },
    ],
  },
  {
    id: 2,
    title: 'Web Development and UI/UX Design',
    description: 'Projects related to front-end, UI/UX, and full-stack web solutions.',
    projects: [
      { name: 'WITHLINE-WinterFashionHub', description: 'A sleek, responsive site showcasing winter apparel — handcrafted with HTML & CSS. Features clean layouts, smooth navigation, and a seasonal clothing showcase.', link: 'https://github.com/Z-zaratahir/WITHLINE-WinterFashionHub' },
      { name: 'Group.it FileSort Website', description: 'Group.it-FileSort Website is a simple web application designed for file uploading and sorting. It allows users to easily upload files and sort them into organized and downloadable folders. Built with HTML, CSS, JavaScript, and Tailwind. CSS framework.', link: 'https://github.com/Z-zaratahir/Group.it-FileSort-Website-' },
      { name: 'Sakoon Salah - Mobile App UI (Figma Design)', description: 'A mobile UI design prototype for a prayer-tracking and mindfulness app — created in Figma to support features like prayer time reminders, meditation prompts, and spiritual habit tracking. Focuses on a calming user experience to encourage consistency in daily spiritual routines.', link: 'https://www.figma.com/proto/fm3dezCdO3r1yMpurFJVMy/Meditation-app-UI--Community---Copy-?node-id=1348-4&t=gjpP8rl5iFUr2yIW-0&scaling=scale-down&content-scaling=fixed&page-id=1346%3A2&starting-point-node-id=1348%3A4' },
      { name: 'NAaaS Dashboard (Figma Design)', description: 'A GIS-integrated news analytics dashboard designed in Figma during a summer internship at PCN Lab, FAST-NUCES — enables filtering and visualization of news articles based on time, location, and keywords. Focuses on delivering an intuitive and responsive user experience for navigating geotagged information efficiently.', link: 'https://drive.google.com/file/d/1sHabizR5wOcaGjmTB1Mz-PYiuIao_tri/view?usp=sharing' },
    ],
  },
  {
    id: 3,
    title: 'Game Development',
    description: 'Remakes or original games using OOP, SFML, or low-level logic.',
    projects: [
      { name: 'Centipede - Classic Arcade Remake (C++/SFML)', description: 'A remake of the classic arcade game Centipede, developed in C++ as part of a Programming Fundamentals course. The player controls a shooter at the bottom of the screen and must destroy the advancing centipede while avoiding obstacles. This project reinforced core concepts like loops, conditionals, arrays, and fundamental game logic implementation.', link: 'https://github.com/Z-zaratahir/Centipede-Game' },
      { name: 'Plants vs Zombies - Strategy Game Clone (C++/SFML)', description: 'A remake of Plants vs. Zombies using Object-Oriented Programming (OOP) principles — featuring classes for plants, zombies, projectiles, and game mechanics to promote modular and reusable code.', link: 'https://github.com/Z-zaratahir/Plants-vs.-Zombies-Game' },
      { name: 'Bomberman - Arcade Game Recreation (C++/SFML)', description: 'A dynamic remake of the legendary arcade Bomberman, built with OOP principles. Features modular design and clean code structure, delivering classic gameplay with modern programming techniques for flexibility and scalability.', link: 'https://github.com/Z-zaratahir/Bomberman-Game' },
      //{ name: 'Zuma Deluxe - Assembly Game Remake', description: 'Assembly language game remake.', link: '#' },
    ],
  },
  {
    id: 4,
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Intelligent systems involving optimization or temporal pattern recognition.',
    projects: [
      { name: 'Terrain Navigation with Gradient Descent (Python/TensorFlow)', description: 'A path-planning simulation built with Python and TensorFlow — models vehicle navigation over terrain using gradient descent optimization to dynamically compute optimal routes while avoiding obstacles. Visualizes the learning process and movement adjustments in real time to demonstrate adaptive navigation strategies.', link: 'https://drive.google.com/file/d/1Qel_eHU57_oDz_CkYmBDw7to8oOWkUR4/view?usp=sharing' },
      { name: 'Temporal Subgraph Isomorphism for Football Patterns (Python/Graph Analytics)', description: 'Python graph analytics project uncovering patterns in football passing networks via temporal subgraph isomorphism. Reveals team tactics and turns match data into strategic insights. Useful for analysts, coaches, and AI platforms optimizing play styles.', link: 'https://github.com/Z-zaratahir/Temporal-Subgraph-Isomorphism-for-Football-Passing-Patterns' },
    ],
  },
  {
    id: 5,
    title: 'Systems Programming & Operating Systems',
    description: 'Projects involving direct memory manipulation, OS concepts, or simulation.',
    projects: [
      { name: 'AirControlX - Air Traffic Control Simulator', description: 'The AirControlX project simulates an Automated Air Traffic Control System using C/C++ with core OS concepts like threading, synchronization, and IPC. It manages live flights, runway operations, regulation enforcement, and airline violations. Visualization of flight activity at a multi-runway international airport is done using SFML.', link: 'https://github.com/Z-zaratahir/AirControlX-Air-Traffic-Control-Simulator-' },
      //{ name: 'Console-Based Notepad Editor', description: 'Text editor in the console.', link: '#' },
      { name: 'RAM-Based String Text Editor', description: 'A memory-resident text editor built entirely without file I/O — supports creating, editing, copying, and deleting files, all managed within RAM. Designed to simulate a lightweight file system in memory, this project emphasizes efficient string manipulation, dynamic memory management, and command-based text operations.', link: 'https://github.com/Z-zaratahir/RAM-Based-String-Text-Editor-' },
      { name: 'BigNumber Arithmetic Library', description: 'A C++ library for performing arithmetic operations on extremely large integers — overcomes the limitations of built-in data types by representing numbers as strings and implementing digit-wise operations. Ideal for scenarios requiring high-precision calculations beyond standard integer bounds.', link: 'https://github.com/Z-zaratahir/BigNumber-Arithmetic-Library' },
    ],
  },
  {
    id: 6,
    title: 'Data Structures & Algorithms',
    description: 'Algorithmic and data structure implementations.',
    projects: [
      { name: 'GitLite - Mini GitHub System', description: 'A robust version control system built using advanced data structures like AVL Trees, B-Trees, and Red-Black Trees to optimize performance. Core Git functionalities such as commit management, branching, and merging are supported with high efficiency. Designed for scalability and reliability, ensuring fast and balanced repository operations.', link: 'https://github.com/Z-zaratahir/GitLite-Mini-GitHub-System' },
      { name: 'Soundex Phonetic Matcher', description: 'A phonetic name-matching tool using the Soundex algorithm — designed to classify English names based on how they sound rather than how they are spelled. This approach improves the reliability of name matching in applications where inconsistent or misspelled inputs are common, such as user databases or search systems.', link: 'https://github.com/Z-zaratahir/Soundex-Phonetic-Matcher' },
      { name: 'Course Enrollment Manager', description: 'A C++ system managing course enrollments using custom-built hash maps that map course names to student lists, with up to six students per course. Enables efficient enrollment updates, fast lookups, and handles conflicts with clean, modular code—implemented without relying on STL.', link: 'https://github.com/Z-zaratahir/Course-Enrollment-Manager' },
    ],
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectBox, setShowProjectBox] = useState(false);
  const [circleTop, setCircleTop] = useState(0);
  const projectBtnRefs = useRef([]);

  const openCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedProject(null);
    setShowProjectBox(false);
    setCircleTop(0);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
    setShowProjectBox(false);
    setCircleTop(0);
  };

  const openProject = (proj, idx) => {
    setSelectedProject(proj);
    setShowProjectBox(true);
    // Align the circle with the clicked project button
    if (projectBtnRefs.current[idx]) {
      const btn = projectBtnRefs.current[idx];
      const btnRect = btn.getBoundingClientRect();
      const parentRect = btn.parentNode.getBoundingClientRect();
      setCircleTop(btnRect.top - parentRect.top + btnRect.height / 2);
    }
  };

  const closeProject = () => {
    setSelectedProject(null);
    setShowProjectBox(false);
    setCircleTop(0);
  };

  return (
    <section
      className="relative w-screen h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
      style={{ flex: '0 0 100vw' }}
    >
      {/* Track GIF background, behind everything */}
      <img 
        src={trackGif} 
        alt="Track background" 
        className="absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[420px] opacity-80 pointer-events-none select-none z-0"
        style={{ objectFit: 'contain' }}
      />
      {/* Page Heading */}
      <div className="flex items-center justify-center mt-8 mb-2 relative">
        <h1 className="font-babyboomer text-5xl text-black text-center tracking-wide mr-3">Projects</h1>
      </div>
      {/* Main grid and popups */}
      <div className="w-full h-full flex flex-col items-center justify-center relative z-10 font-rigraf">
        <div
          className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-300 ${selectedCategory ? 'filter blur-sm pointer-events-none select-none' : ''}`}
          style={{ minHeight: '350px', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}
        >
          {!selectedCategory &&
            categories.map((cat) => (
              <div
                key={cat.id}
                className="w-72 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200"
                onClick={() => openCategory(cat)}
              >
                <h2 className="text-black text-xl font-rigraf px-4">{cat.title}</h2>
      </div>
    ))}
  </div>
  
        {/* Category Popup (constrained to section) */}
        {selectedCategory && (
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30 bg-white bg-opacity-95"
            style={{ pointerEvents: 'auto' }}
          >
            {/* Category Box (Project List) */}
            <div className="flex items-start relative">
              <div
                className={`relative bg-white rounded-2xl shadow-2xl p-8 w-[28rem] min-h-[22rem] flex flex-col items-start transition-all duration-500 border-2 border-gray-300
                  ${showProjectBox ? 'translate-x-[-7.5rem]' : 'translate-x-0'}
                `}
                style={{ zIndex: 60, left: showProjectBox ? '8.5rem' : '0', marginRight: showProjectBox ? '0.25rem' : '0' }}
              >
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                  onClick={closeCategory}
                >
                  <FaTimes size={22} />
                </button>
                <h2 className="text-2xl font-bold text-black mb-2 font-rigraf">{selectedCategory.title}</h2>
                <p className="text-gray-800 mb-4 font-rigraf">{selectedCategory.description}</p>
                <div className="flex flex-col gap-2 w-full mt-2">
                  {selectedCategory.projects.length === 0 && (
                    <span className="text-gray-400 italic">No projects yet.</span>
                  )}
                  {selectedCategory.projects.map((proj, idx) => (
                    <button
                      key={idx}
                      ref={el => projectBtnRefs.current[idx] = el}
                      className={`text-left px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-200 transition-all duration-200 font-medium text-gray-700 shadow-sm font-rigraf ${selectedProject && selectedProject.name === proj.name ? 'ring-2 ring-gray-400' : ''}`}
                      onClick={() => openProject(proj, idx)}
                    >
                      {proj.name}
                    </button>
                  ))}
                </div>
                {showProjectBox && selectedProject && (
                  <div
                    className="absolute right-[-1.5rem] w-8 h-8 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full z-50 border-4 border-white transition-all duration-300"
                    style={{
                      top: circleTop ? `calc(${circleTop}px + 150px)` : 'calc(50% + 150px)',
                      transform: 'translateY(-50%)'
                    }}
                  ></div>
                )}
              </div>

              {/* Project Detail Box (sub-connected, right) */}
              {showProjectBox && selectedProject && (
                <div
                  className="relative bg-white rounded-2xl shadow-2xl p-8 w-[28rem] min-h-[22rem] flex flex-col items-start border-2 border-gray-400 ml-8 transition-all duration-500 animate-fade-in"
                  style={{
                    zIndex: 70,
                    marginTop: '7.75rem'
                  }}
      >
        <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                    onClick={closeProject}
        >
                    <FaTimes size={22} />
        </button>
                  <h3 className="text-xl font-bold text-black mb-2 font-rigraf">{selectedProject.name}</h3>
                  <p className="text-gray-700 mb-4 font-rigraf">{selectedProject.description}</p>
        <a
          href={selectedProject.link}
          target="_blank"
          rel="noopener noreferrer"
                    className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-900 transition-all duration-200 font-semibold"
        >
                    See More
        </a>
                </div>
              )}
      </div>
    </div>
  )}
</div>
      {/* Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(40px) scale(0.98); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </section>
);
};

export default Projects;

