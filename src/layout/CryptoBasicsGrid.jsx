import React from 'react';

const CryptoBasicsGrid = () => {
  const cards = [
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png?w=768&fm=png",
      tag: "BEGINNER'S GUIDE",
      title: "What is Ethereum?",
      isBlue: true,
    },
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/2lrWtXLcleZPbsnzZnEeLB/bbd5a35075619f07e083fce5fdbf15f9/Learn_Illustration_What_is_DeFi.jpg?w=768&fm=png",
      tag: "KEY TERM",
      title: "What is DeFi?",
      isBlue: false,
    },
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/3hETt7h2hfvnOnVVrJIvlO/b7204c2b9a1a35d39d0dd396d2cf49bb/Learn_Illustration_What_is_a_stablecoin.jpg?w=768&fm=png",
      tag: "BEGINNER'S GUIDE",
      title: "What is a stablecoin?",
      isBlue: false,
    },
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/5fZ31B0CLFBDfIWK3DQPTN/b98e564a067cbb252995d654006cee09/Group_31612615.png?w=768&fm=png",
      tag: "GLOSSARY",
      title:
        "Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained",
      isBlue: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans scale-75">
      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {cards.map((card, index) => (
          <div key={index} className="group cursor-pointer flex flex-col">
            {/* Image Wrapper */}
            <div className="aspect-square mb-4 overflow-hidden bg-gray-100">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
              {card.tag}
            </span>
            <h3 className={`text-lg font-bold leading-snug group-hover:underline decoration-2 underline-offset-4 ${card.isBlue ? 'text-[#0052ff]' : 'text-black'}`}>
              {card.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center">
        <button className="bg-[#0052ff] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors flex items-center text-sm">
          See more crypto basics
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CryptoBasicsGrid;