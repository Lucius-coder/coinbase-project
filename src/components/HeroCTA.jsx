import React from 'react';

const HeroCTA = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt = "Hero Image",
  isReversed = false, // false = text left, true = text right
  imageVariant = "plain", // "plain" (icon cluster) or "gradient" (phone mockup)
  footerText = "",
  placeholder = "satoshi@nakamoto.com",
  buttonText = "Sign up"
}) => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 overflow-hidden">
      <div className={`max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-20 scale-75
        ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Visual Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          {imageVariant === "gradient" ? (
            /* Variant: Blue gradient box for phone mockup */
            <div className="scale-150   rounded-[48px] md:rounded-[64px] p-8 md:p-12 aspect-square flex items-end justify-center overflow-hidden w-full max-w-[540px]">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-auto translate-y-12 drop-shadow-2xl rounded-t-3xl object-contain" 
              />
            </div>
          ) : (
            /* Variant: Plain / Transparent for icon clusters */
            <div className="w-full flex justify-center items-center max-w-125">
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-auto object-contain" 
              />
            </div>
          )}
          
          {/* Optional Disclaimer Footer */}
          {footerText && (
            <p className="mt-6 text-[11px] text-gray-400 text-left w-full max-w-[540px]">
              {footerText}
            </p>
          )}
        </div>

        {/* Text Content Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tighter mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium max-w-md">
            {subtitle}
          </p>

          {/* Form Area */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
            <input
              type="email"
              placeholder={placeholder}
              className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all text-lg"
            />
            <button className="bg-[#0052FF] hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all active:scale-95 whitespace-nowrap">
              {buttonText}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroCTA;