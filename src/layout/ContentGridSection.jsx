import React from 'react';

const ContentGridSection = ({ title, subtitle, items, buttonText }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-sans border-t border-gray-100 scale-75">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">{title}</h2>
        {subtitle && <p className="text-slate-500 text-base md:text-lg">{subtitle}</p>}
      </div>

      {/* Responsive Grid (1 col mobile, 2 cols desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-14">
        {items.map((item, index) => (
          <div key={index} className="group cursor-pointer flex flex-col">
            {/* Media Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-6 rounded-sm">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Play Button Overlay (Visible only if isVideo is true) */}
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#384d65]/90 rounded-full flex items-center justify-center shadow-xl group-hover:bg-[#0052ff] transition-colors">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="flex flex-col space-y-2">
              {item.tag && (
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  {item.tag}
                </span>
              )}
              <h3 className={`text-xl md:text-2xl font-bold leading-tight ${item.isBlue ? 'text-[#0052ff]' : 'text-black'}`}>
                {item.title}
              </h3>
              {item.description && (
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Centered CTA Button */}
      <div className="flex justify-center">
        <button className="bg-[#0052ff] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors flex items-center text-sm">
          {buttonText}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ContentGridSection;