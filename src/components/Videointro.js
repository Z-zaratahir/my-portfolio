// import React from 'react';

// const VideoIntro = ({ onSkip }) => {
//   return (
//      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#6E8E9C] to-[#8F9AA4]">
//       {/* Video Background */}
//         <video className="absolute top-0 left-0 w-230 h-full object-cover" autoPlay muted loop>
//         <source src={require('../Videos/movingwindowscropped.mp4')} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-white">
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//         <button 
//           className="px-6 py-3 bg-blue-600 rounded-full text-white text-xl font-semibold"
//           onClick={onSkip}
//         >
//           Enter
//         </button>
//       </div>

//       {/* Remove the Dark Overlay */}
//       {/* This div is commented out to allow the video to be visible */}
//       {/* <div className="absolute top-0 left-0 w-full h-full bg-blue-300 opacity-50"></div> */}
//     </div>
//   );
// };

// export default VideoIntro;


// ////////////////////

// import React from 'react';

// const VideoIntro = ({ onSkip }) => {
//   return (
//     <div className="relative w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#6E8E9C] to-[#8F9AA4]">
//       {/* Video Background */}
//       <video className="absolute top-0 right-0 w-4/12 h-full object-cover" autoPlay muted loop>
//         <source src={require('../Videos/movingwindowscropped.mp4')} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Torn Paper Image */}
//       <img
//         src={require('../Images/image.png')} // Ensure the path is correct
//         alt="Torn Paper"
//         className="absolute top-32 left-8 w-8 transform translate-x-72 -translate-y-48"
//         style={{ width: '80%', maxWidth: '600px' }} // Adjust size as needed
//       />

//       {/* Overlay Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-white">
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//         <button 
//           className="px-6 py-3 bg-blue-600 rounded-full text-white text-xl font-semibold"
//           onClick={onSkip}
//         >
//           Enter
//         </button>
//       </div>

      
//     </div>
//   );
// };

// export default VideoIntro;


///////////////////////


// import React from 'react';

// const VideoIntro = ({ onSkip }) => {
//   return (
//     <div className="relative w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#6E8E9C] to-[#8F9AA4]">
//       {/* Video Background */}
// <video className="absolute top-0 right-0 w-4/12 h-full object-cover" autoPlay muted loop>        <source src={require('../Videos/movingwindowscropped.mp4')} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Torn Paper Image */}
//       <img
//         src={require('../Images/image.png')} // Ensure the path is correct
//         alt="Torn Paper"
//         className="absolute top-32 left-8 w-8 transform translate-x-72 -translate-y-48 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
//         style={{ width: '50%', maxWidth: '600px' }} // Adjust size as needed
//       />

//       {/* Overlay Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-white">
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//         <button 
//           className="px-6 py-3 bg-blue-600 rounded-full text-white text-xl font-semibold"
//           onClick={onSkip}
//         >
//           Enter
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoIntro;


//////////////////////


import React from 'react';

const VideoIntro = ({ onSkip }) => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-gradient-to-b from-[#6E8E9C] to-[#8F9AA4]">
      {/* Video Background */}
      <video 
        className="absolute top-0 right-0 w-4/12 h-full object-cover sm:w-7/12 md:w-4/12 lg:w-4/12" 
        autoPlay 
        muted 
        loop
      >
        <source src={require('../Videos/movingwindowscropped.mp4')} type="video/mp4" />
        
      </video>

      {/* Torn Paper Image */}
      <img src={require('../Images/image.png')}
        alt="Torn Paper"
        className="absolute top-32 left-8 w-full sm:w-8/12 sm:top-56 md:w-6/12 md:top-60 lg:w-6/12 lg:top-48 transform translate-x-72 -translate-y-48"
        style={{ maxWidth: '600px' }}
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        {/* <h1 className="text-4xl font-bold mb-4">I see things move</h1> */}
        <h1 className="text-8xl font-bold mb-9"> </h1>
        <button 
          className="px-12 py-5 bg-black rounded-full text-white text-2xl font-semibold font-babyboomer relative overflow-hidden group shadow-lg transition-transform duration-200 hover:scale-105"
          onClick={onSkip}
        >
          <span className="relative z-10">ᴇxᴘʟᴏʀᴇ</span>
          {/* Glowing animated border */}
          <span className="absolute inset-0 rounded-full pointer-events-none border-2 border-blue-400 opacity-60 group-hover:opacity-100 animate-glow" />
        </button>
        <style>{`
          @keyframes glow {
            0% { box-shadow: 0 0 8px 2px #60a5fa, 0 0 0px 0 #fff; }
            50% { box-shadow: 0 0 24px 8px #60a5fa, 0 0 8px 2px #fff; }
            100% { box-shadow: 0 0 8px 2px #60a5fa, 0 0 0px 0 #fff; }
          }
          .animate-glow {
            animation: glow 2s infinite alternate;
          }
        `}</style>
      </div>

      {/* Painter Image at Bottom Left */}
      <div className="fixed bottom-0 left-0 z-30 pointer-events-none">
        <img 
          src={require('../Images/painter-removebg-preview.png')} 
          alt="Painter" 
          className="w-72 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default VideoIntro;
