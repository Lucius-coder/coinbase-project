import React from 'react';

const ArticleCard = ({ image, title, description }) => (
  <div className="flex flex-col group cursor-pointer">
    {/* Image Container */}
    <div className="mb-6 overflow-hidden rounded-4xl">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>
    {/* Text Content */}
    <h3 className="text-2xl font-semibold text-gray-900 leading-tight mb-4">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
      {description}
    </p>
  </div>
);

const LearnBasics = ({ 
  title, 
  description, 
  buttonText, 
  articles = [] 
}) => {
  return (
    <section className="size-fit ">
      <div className=" mx-auto scale-[80%]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 ">
              {title}
            </h2>
          </div>
          
          <div className="md:w-1/3 flex flex-col items-start gap-6">
            <p className="text-gray-500 text-lg leading-relaxed">
              {description}
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
              {buttonText}
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default LearnBasics;