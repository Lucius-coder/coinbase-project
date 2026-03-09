import React from 'react';

const CryptoCategories = () => {
  const categories = [
    {
      title: "Crypto basics",
      icon: "https://images.ctfassets.net/q5ulk4bp65r7/3y6qEXfZEKWUIFCXitE2CM/975c866ebacafdff5c23779fa2168c51/3.png", // Replace with your local asset path
      link: "#",
    },
    {
      title: "Tips and tutorials",
      icon: "https://images.ctfassets.net/q5ulk4bp65r7/31wYl0Vic7W3ZktCPHMOQ8/472cc5a7d6220c2c852619898c12e1a8/4.png", 
      link: "#",
    },
    {
      title: "Advanced trading",
      icon: "https://images.ctfassets.net/q5ulk4bp65r7/55csxsO3KyYgwnwNQHXAXi/efeb47068c8c76d35e1e62df77638124/AdvancedTrading_ChartsIndicatorsCandlesEtc.png",
      link: "#",
    },
    {
      title: "Futures",
      icon: "https://images.ctfassets.net/q5ulk4bp65r7/6baYypQ3LKoYOzMQyRQusH/645784649490f41b75dca08f955369fe/futures_anchor.png",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl  border-t border-gray-100 scale-75">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
        {categories.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 group cursor-pointer">
            {/* Icon Container */}
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
              {/* Using a div with background color/placeholder to simulate the art style */}
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <a 
                href={item.link} 
                className="text-sm text-slate-500 flex items-center mt-1 group-hover:text-blue-500 transition-colors"
              >
                See more
                <span className="ml-1 text-lg transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoCategories;