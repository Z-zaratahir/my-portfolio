// import React from 'react';

// const Home = () => {
//   return (
//     <div className="section bg-zinc-50">
//       <h1 className="text-black text-3xl p-32">Home Page</h1>
//     </div>
//   );
// };

// export default Home;

//////////////

// import React from 'react';

// const Home = () => {
//   return (
//     <div className="section bg-zinc-50 flex flex-col items-center">
//       <h1 className="text-black text-3xl p-32">Home Page</h1>
//       <img 
//         src={require('../Images/phone.png')} 
//         alt="Television" 
//         className="w-52 h-96" 
//       />
//     </div>
//   );
// };

// export default Home;


////////////////////////////////

// import React from 'react';

// const Home = () => {
//   return (
//     <div className="relative section bg-white flex flex-col items-center">
//       {/* GIF between Home and About */}
//       <div className="absolute left-[40%] top-24 w-screen flex justify-center items-center" style={{ transform: 'translateY(-50%)' }}>
//         <img 
//           src={require('../Videos/birdsketch.gif')} 
//           alt="Birds in Sky" 
//           className="w-[420px] h-[200px]"  // Adjust width and height as needed
//         />
//       </div>
//       <h1 className="text-black text-3xl p-32">Home Page</h1>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';

// const Home = () => {
//   return (
//     <div className="relative section bg-white flex flex-col items-center">
//       {/* GIF between Home and About */}
//       <div className="absolute left-[40%] top-20 w-screen flex justify-center items-center" style={{ transform: 'translateY(-50%)' }}>
//         <img 
//           src={require('../Videos/birdsketch.gif')} 
//           alt="Birds in Sky" 
//           className="w-[30vw] max-w-[520px] h-auto"  // Adjust width, max width, and height auto for responsiveness
//         />

        
//       </div>
//       <h1 className="text-black text-3xl p-32">Home Page</h1>
//     </div>
//   );
// };

// export default Home;

/////////////////////


import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import visionImg from '../Images/vision.png';
import woodarrow from '../Images/woodarrow.png';

const Home = () => {
  return (
    <div className="relative section bg-white flex flex-col items-center">
      {/* Container for Images */}
      <div className="absolute left-[22%] top-0 transform -translate-x-1/2 w-screen flex flex-col items-center" style={{ zIndex: 10 }}>
        {/* Flying Bird GIF */}
        <img 
          src={require('../Videos/birdsketch.gif')} 
          alt="Birds in Sky" 
          className="w-[30vw] max-w-[520px] h-auto"
        />
      </div>

      {/* Name and Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-black text-7xl pt-24 font-babyboomer"> {/* Adjusted padding for upward movement */}
          Zara Tahir
        </h1>
        <h2 className="text-gray-700 text-3xl mt-9"> {/* Subheading for the title */}
          ᴅᴇᴠᴇʟᴏᴘᴇʀ • ᴅᴇꜱɪɢɴᴇʀ • ᴛʜɪɴᴋᴇʀ
        </h2>
      </div>

      {/* Sign image, bottom right, with rotating text in front */}
      <div className="absolute bottom-0 right-9 w-[220px] h-[180px] pointer-events-none select-none z-20">
        {/* Sign image, moved further right */}
        <img 
          src={require('../Images/sign.png')} 
          alt="Sign" 
          className="absolute right-0 bottom-4 w-[100px] h-[160px] object-contain z-0"
          style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.22))' }}
        />
        {/* Spinning text stays centered in the container */}
        <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2 animate-spin-slow z-10" style={{ width: '120px', height: '120px' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <text fontFamily="DXRigraf, Rigraf, sans-serif" fontSize="12" fill="#FFD700" fontWeight="bold">
              <textPath xlinkHref="#circlePath" startOffset="0%">Think. Build. Improve.</textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Vision image, middle bottom */}
      <img 
        src={visionImg} 
        alt="Vision" 
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-48 z-30 pointer-events-none select-none"
      />
      {/* Curved 'vision' text near torn eye area */}
      <div className="absolute left-1/2 bottom-40 -translate-x-[80%] z-40 pointer-events-none select-none" style={{ width: '120px', height: '40px' }}>
        <svg viewBox="0 0 120 40" width="120" height="40">
          <path id="curve" d="M10,20 Q60,40 110,20" fill="transparent" />
          <text width="120" style={{ fontFamily: 'DXRigraf, Rigraf, sans-serif', fontSize: '20px', fill: '#222', fontWeight: 'bold', letterSpacing: '2px' }}>
            <textPath xlinkHref="#curve" startOffset="10%">ᴠɪꜱɪᴏɴ</textPath>
          </text>
        </svg>
      </div>

      {/* Wood Arrow image, top right */}
      <img 
        src={woodarrow} 
        alt="Wood Arrow" 
        className="absolute top-0 right-52 w-40 z-40 pointer-events-none select-none"
      />

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 7s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
