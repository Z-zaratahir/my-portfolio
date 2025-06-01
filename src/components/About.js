import React from 'react';
import treeAndBird from '../Videos/growingtree.gif';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-white p-6 relative overflow-hidden">
      {/* Main text card */}
      <div className="max-w-2xl w-full bg-white bg-opacity-90 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center z-10" style={{maxHeight: '540px', minHeight: 'auto'}}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 text-center font-babyboomer">About Me</h1>
        <p className="text-base md:text-lg text-black mb-4 text-center">
          Hi, I'm <span className="font-bold text-black">Zara Tahir</span>, a Computer Science student at FAST NUCES Islamabad, currently in my 4th semester. With roots in architecture, creativity runs in the family—and design was my first stop in the world of tech.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
          But I'm not just a designer. I'm a curious builder, constantly experimenting—be it web development, UI/UX, logic-heavy coding, or whatever tomorrow throws my way. I'm in the exciting phase of discovering what sticks, and every project teaches me something new.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4 text-center">
          I find joy in testing, refining, and presenting what I create—and I'm always chasing that spark of "this could be something."
        </p>
        <blockquote className="italic text-base md:text-lg text-purple-700 border-l-4 border-blue-400 pl-4 mb-4 text-center">
          "You have to be ODD to be number ONE."
        </blockquote>
        <p className="text-base md:text-lg text-gray-700 text-center">
          Let's connect—who knows what we'll create next?
        </p>
      </div>
      {/* Growing tree GIF at bottom right, half visible */}
      <img 
        src={treeAndBird} 
        alt="Tree and Bird" 
        className="absolute bottom-4 right-[-79px] w-[500px] max-w-[40vw] h-auto z-0 opacity-90 pointer-events-none select-none"
        style={{ minWidth: '120px' }}
      />
    </section>
  );
};

export default About;

