import React from 'react';

const InfoSection= ({ 
  tag, 
  title, 
  description, 
  buttonText, 
  buttonOnClick, 
  imageSrc, 
  imageAlt,
  imageBgColor = "bg-[#F3F4F6]", // default light gray
  isReversed = false 
}) => {
  return (
    <div className=" px-6 py-12 scale-75">
      <div className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image / Graphic Side */}
        <div className="w-full md:w-1/2">
          <div className={`rounded-[40px] p-8 flex justify-center items-center  ${imageBgColor}`}>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="max-w-full rounded-3xl" 
            />
          </div>
        </div>

        {/* Text Content Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          {tag && (
            <div className="mb-6 flex items-center gap-2 border border-gray-200 px-3 py-1 rounded-lg text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              {tag}
            </div>
          )}
          
          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
            {description}
          </p>
          
          <button 
            onClick={buttonOnClick}
            className="bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            {buttonText}
          </button>
        </div>

      </div>
    </div>
  );
};

export default InfoSection;