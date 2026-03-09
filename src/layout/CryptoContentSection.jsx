import React from 'react';

const CryptoContentSection = () => {
  const popularItems = [
    { tag: "BEGINNER'S GUIDE", title: "What is cryptocurrency?" },
    { tag: "GETTING STARTED", title: "How to earn crypto rewards" },
    { tag: "GETTING STARTED", title: "How to add crypto to your Coinbase Wallet" },
    { tag: "YOUR CRYPTO", title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports" },
    { tag: "GETTING STARTED", title: "Beginner's guide to dapps" },
    { tag: "MARKET UPDATE", title: "Everything you need to know about the first-ever U.S. Bitcoin ETF" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans scale-75">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* LEFT COLUMN: FEATURED */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Featured</h2>
          
          {/* Video Container */}
          <div className="relative group cursor-pointer overflow-hidden rounded-sm mb-6 aspect-video bg-gray-100">
            <video 
              className="w-full h-full object-cover"
              poster="https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png" // Placeholder for the thumbnail
            >
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-[#384d65]/90 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>

          {/* Featured Content Text */}
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-2">
              Video Tutorial
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight">
              When is the best time to invest in crypto?
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: POPULAR */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Popular</h2>
          <div className="space-y-8">
            {popularItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-1">
                  {item.tag}
                </span>
                <h4 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CryptoContentSection;