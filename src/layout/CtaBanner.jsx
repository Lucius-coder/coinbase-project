import React from 'react';

const CtaBanner = ({ 
  title = "Create a Coinbase account to trade crypto. It's quick, easy, and secure.", 
  buttonText = "Start Trading" 
}) => {
  return (
    <div 
      className="ml-0 bg-[#0052ff]  scale-75 p-6 grid grid-cols-3 items-center"
      
    >
      {/* Left Content */}
      <div className="col-span-2 text-white">
        <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-10 max-w-md">
          {title}
        </h2>
        
        <button className="bg-[#f0f3fa] text-black hover:bg-white transition-colors px-8 py-4 rounded-full font-bold flex items-center gap-6 group">
          <span className="text-lg">{buttonText}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

      {/* Right Graphic (Recreated with SVG) */}
      <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 scale-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 240 120"><path fill="#CED2DB" d="M240 64H0v56h240z"/><path fill="#0052FF" d="M192 64h-32v8h32z"/><path fill="#3CC28A" d="M136 32h-32v32h32zm-8-8h-16v8h16z"/><path fill="#0052FF" d="M128 96h-16v8h16z"/><path fill="#E13947" d="M80 48H48v16h32zm-8-8H56v8h16z"/><path fill="#0052FF" d="M72 112H56v8h16zm8-48H48v48h32zm56 0h-32v32h32z"/><path fill="#3CC28A" d="M192 8h-32v56h32zm-8-8h-16v8h16z"/><path fill="#0052FF" d="M184 72h-16v8h16z"/><path fill="#0A0B0E" fill-rule="evenodd" d="M48 9H16V7h32zm8 8H16v-2h40zm-8 8H16v-2h32zm131.506-1.437-13.125-3.8.556-1.921 15.046 4.356-4.356 15.045-1.921-.556z" clip-rule="evenodd"/><path fill="#0A0B0E" fill-rule="evenodd" d="m39.544 103.209 140.85-81.32 1 1.732-140.85 81.32z" clip-rule="evenodd"/></svg>
      </div>
    </div>
  );
};

export default CtaBanner;