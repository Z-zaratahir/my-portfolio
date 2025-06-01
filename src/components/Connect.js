import React, { useRef, useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const Connect = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="connect" ref={sectionRef} className="w-screen flex items-center justify-center bg-white p-6 min-h-screen relative">
      <div className="absolute bottom-0 right-0 z-30 pointer-events-none">
        <img 
          src={require('../Images/hillroad-removebg-preview.png')} 
          alt="Hill Road" 
          className="w-82 h-auto object-contain"
        />
      </div>
      <div className="max-w-xl w-full bg-white bg-opacity-90 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center relative" style={{maxHeight: '500px', minHeight: 'auto'}}>
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-4 text-center font-babyboomer">Connect With Me</h1>
        <p className="text-sm md:text-base text-gray-700 mb-2 text-center font-rigraf">
          Whether you're here to collaborate, brainstorm, or just peek into what I'm building — I'd love to hear from you.
        </p>
        <div className="mb-2 text-base text-center font-rigraf">
          <div className="mb-1">🧠 Got a project in mind?</div>
          <div className="mb-1">🎨 Want to talk design, dev, or ideas over tea?</div>
          <div className="mb-1">📬 Or just want to say hey?</div>
        </div>
        <p className="text-sm md:text-base text-gray-700 mb-2 text-center font-rigraf">Let's connect.</p>
        <div className="flex flex-col gap-2 items-center mb-2 font-rigraf">
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-800">
            <span role="img" aria-label="email">📧</span>
            <span>zaratahir1928@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-800">
            <span role="img" aria-label="linkedin">🔗</span>
            <a href="https://www.linkedin.com/in/zara--tahir/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 font-normal no-underline">LinkedIn</a>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-900">
            <span role="img" aria-label="github">💻</span>
            <a href="https://github.com/Z-zaratahir" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 font-normal no-underline">GitHub</a>
          </div>
        </div>
        <p className="italic text-xs text-gray-600 text-center mt-1 font-rigraf">
          I scroll, I explore, I create — your message might just spark my next idea.
        </p>
      </div>
      {/* Flower Movement GIF at Top Left */}
      <div className="absolute top-0 left-[-175px] z-40">
        <img 
          src={require('../Videos/pinterest-video-46-pintod-kT0h-unscreen.gif')} 
          alt="Flower Movement" 
          className="w-[650px] h-[700px] object-contain"
        />
      </div>
    </section>
  );
};

export default Connect;
