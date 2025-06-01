// import React from 'react';
// import HorizontalScroll from 'react-scroll-horizontal';
// import Navbar from './components/Verticalnavbar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Connect from './components/Connect';

// function App() {
//   return (
//     <div className="w-screen h-screen overflow-hidden">
//       <Navbar />
//       <HorizontalScroll className="w-screen h-screen">
//         <div id="home" className="w-screen h-screen flex justify-center items-center bg-blue-500">
//           <Home />
//         </div>
//         <div id="about" className="w-screen h-screen flex justify-center items-center bg-blue-800">
//           <About />
//         </div>
//         <div id="projects" className="w-screen h-screen flex justify-center items-center bg-red-600">
//           <Projects />
//         </div>
//         <div id="connect" className="w-screen h-screen flex justify-center items-center bg-amber-500 border-2 border-red-500">
//           <Connect />
//         </div>
//         {/* <div id="comments" className="w-screen h-screen flex justify-center items-center bg-amber-500 border-2 border-green-500">
//           <Comments />
//         </div> */}
//       </HorizontalScroll>
//     </div>
//   );
// }

// export default App;



////////////////////////////



import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Verticalnavbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import VideoIntro from './components/Videointro';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './App.css';

const sectionOrder = ['home', 'about', 'projects', 'connect'];

function App() {
  const [showVideoIntro, setShowVideoIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const scrollRef = useRef(null);

  const handleSkipIntro = () => {
    setShowVideoIntro(false);
  };

  // Scroll to a section by id
  const scrollToSection = (sectionId) => {
    const container = scrollRef.current;
    const section = document.getElementById(sectionId);
    if (container && section) {
      const left = section.offsetLeft - container.offsetLeft;
      console.log('Scrolling to:', sectionId, 'section.offsetLeft:', section.offsetLeft, 'container.offsetLeft:', container.offsetLeft, 'left:', left);
      container.scrollTo({ left, behavior: 'smooth' });
    }
  };

  // Helper to get current section in view
  useEffect(() => {
    if (showVideoIntro) return;
    const handleScroll = () => {
      let minDist = Infinity;
      let closest = 'home';
      sectionOrder.forEach(id => {
        const el = document.getElementById(id);
        if (el && scrollRef.current) {
          const rect = el.getBoundingClientRect();
          const containerRect = scrollRef.current.getBoundingClientRect();
          const dist = Math.abs(rect.left - containerRect.left);
          if (dist < minDist) {
            minDist = dist;
            closest = id;
          }
        }
      });
      setCurrentSection(closest);
    };
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, [showVideoIntro]);

  // Navigation handlers for arrows
  const goToSection = (direction) => {
    const idx = sectionOrder.indexOf(currentSection);
    let nextIdx = idx;
    if (direction === 'left' && idx > 0) nextIdx = idx - 1;
    if (direction === 'right' && idx < sectionOrder.length - 1) nextIdx = idx + 1;
    const nextId = sectionOrder[nextIdx];
    scrollToSection(nextId);
  };

  useEffect(() => {
    if (!showVideoIntro) {
      scrollToSection('home');
    }
    // eslint-disable-next-line
  }, [showVideoIntro]);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <style>{`
        html, body, #root {
          height: 100%;
          overflow: hidden;
        }
        /* Hide horizontal scrollbar for the main scroll container */
        .horizontal-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .horizontal-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {showVideoIntro ? (
        <VideoIntro onSkip={handleSkipIntro} />
      ) : (
        <>
          <Navbar scrollToSection={scrollToSection} />
          {/* Static navigation arrows */}
          <div className="fixed top-6 right-8 z-[100] flex gap-4">
            <button
              aria-label="Previous section"
              className={`bg-gray-100 hover:bg-gray-300 text-black rounded-full p-3 shadow-lg transition-all duration-200 border-2 border-black ${currentSection === 'home' ? 'opacity-40 cursor-default' : ''}`}
              onClick={() => currentSection !== 'home' && goToSection('left')}
              disabled={currentSection === 'home'}
            >
              <FaArrowLeft size={32} />
            </button>
            <button
              aria-label="Next section"
              className={`bg-gray-100 hover:bg-gray-300 text-black rounded-full p-3 shadow-lg transition-all duration-200 border-2 border-black ${currentSection === 'connect' ? 'opacity-40 cursor-default' : ''}`}
              onClick={() => currentSection !== 'connect' && goToSection('right')}
              disabled={currentSection === 'connect'}
            >
              <FaArrowRight size={32} />
            </button>
          </div>
          <div
            ref={scrollRef}
            className="horizontal-scroll-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollBehavior: 'smooth',
              width: '100vw',
              height: '100vh',
              margin: 0,
              padding: 0,
            }}
          >
            <div id="home" style={{ minWidth: '100vw', height: '100vh', margin: 0, padding: 0 }}>
              <Home />
            </div>
            <div id="about" style={{ minWidth: '100vw', height: '100vh', margin: 0, padding: 0 }}>
              <About />
            </div>
            <div id="projects" style={{ minWidth: '100vw', height: '100vh', margin: 0, padding: 0 }}>
              <Projects />
            </div>
            <div id="connect" style={{ minWidth: '100vw', height: '100vh', margin: 0, padding: 0 }}>
              <Connect />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;




//////////////////////////


