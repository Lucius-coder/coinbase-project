import React from 'react';

const CryptoGlossary = () => {
  const terms = [
    "Bitcoin", "Blockchain", "Cardano", "Crypto wallet", "DeFi", 
    "Ethereum", "Fork", "Inflation", "Market cap", "NFT", 
    "Private key", "Protocol", "Smart contract", "Token", 
    "Volatility memecoin"
  ];

  return (
    <section className="bg-[#f0f2f5] py-20 px-6 ">
      <div className="max-w-5xl mx-auto text-center scale-75">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          What is...
        </h2>

        {/* Tags Container */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {terms.map((term, index) => (
            <button
              key={index}
              className="bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-sm md:text-base font-bold text-black min-w-[100px]"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button className="bg-[#0052ff] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors text-sm">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default CryptoGlossary;