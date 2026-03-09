import React from 'react';

const CryptoBasics = () => {
  const cards = [
    {
      image: "https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp?w=768&fm=png", // Replace with your Bitcoin illustration
      tag: "BEGINNER'S GUIDE",
      title: "What is Bitcoin?",
      description: "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.",
      titleColor: "text-[#0052ff]", // Specific Coinbase blue
    },
    {
      image: "https://images.ctfassets.net/q5ulk4bp65r7/3rv8jr1B1Z1dZ2EhHqo7dp/e74ddbf1cd4836b83d34fe5cec351d78/Alt-Coin.png?w=768&fm=png", // Replace with your Altcoin illustration
      tag: "BEGINNER'S GUIDE",
      title: "Guide to DeFi tokens and altcoins",
      description: "From Aave to Zcash, decide what to trade with our beginner's guide",
      titleColor: "text-black",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans scale-75">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
          Crypto basics
        </h2>
        <p className="text-slate-500 text-lg">
          New to crypto? Not for long — start with these guides and explainers
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {cards.map((card, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image Container */}
            <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-6">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                {card.tag}
              </span>
              <h3 className={`text-2xl md:text-3xl font-bold leading-tight ${card.titleColor}`}>
                {card.title}
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CryptoBasics;