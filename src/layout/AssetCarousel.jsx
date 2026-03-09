import React from 'react';

// Helper Component: Arrow Icon (for navigation and price change)
// Kept inside the same file as it's a small, specific dependency.
const ArrowIcon = ({ direction, className = 'h-5 w-5' }) => {
  const path = {
    up: 'M5 10l7-7 7 7',
    down: 'M5 14l7 7 7-7',
    left: 'M15 19l-7-7 7-7',
    right: 'M9 5l7 7-7 7',
  }[direction];

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
};

// --- Main Reusable Carousel Component ---

const AssetCarousel = ({ title, subtitle, items = [], cardType }) => {
  
  // The rendering logic for each card is now directly inside the main component.
  const renderCard = (item) => {
    // --- "Mover" Card Style ---
    if (cardType === 'mover') {
      const isPositive = item.change >= 0;
      return (
        <div className="bg-gray-50 rounded-2xl p-4 w-40 flex-shrink-0 text-center flex flex-col items-center">
          <img src={item.iconUrl} alt={`${item.ticker} logo`} className="w-10 h-10 rounded-full mb-2" />
          <span className="text-sm text-gray-500">{item.ticker}</span>
          <div className={`flex items-center text-lg font-semibold mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            <ArrowIcon direction={isPositive ? 'up' : 'down'} className="w-4 h-4 mr-1" />
            <span>{Math.abs(item.change).toFixed(2)}%</span>
          </div>
          <span className="text-sm text-gray-800 mt-1">{item.price}</span>
        </div>
      );
    }

    // --- "New Asset" Card Style (default) ---
    if (cardType === 'newAsset') {
      return (
        <div className="bg-gray-50 rounded-2xl p-4 w-40 flex-shrink-0 text-center flex flex-col items-center">
          <img src={item.iconUrl} alt={`${item.name} logo`} className="w-10 h-10 rounded-full mb-2" />
          <span className="text-sm text-gray-500 uppercase">{item.ticker}</span>
          <span className="text-lg font-bold text-gray-900 mt-1">{item.name}</span>
          <span className="text-sm text-gray-500 mt-1">{item.dateAdded}</span>
        </div>
      );
    }

    // Return null or a placeholder if cardType is not recognized
    return null;
  };

  return (
    <div className="p-6 bg-white font-sans">
      {/* Header and Navigation */}
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex space-x-2">
            <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                <ArrowIcon direction="left" className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                <ArrowIcon direction="right" className="h-5 w-5 text-gray-600" />
            </button>
        </div>
      </div>
      {subtitle && <p className="text-gray-500 mb-4">{subtitle}</p>}

      {/* Horizontally Scrolling Card Container */}
      <div className="flex space-x-4 overflow-x-auto pb-4 mt-4">
        {items.map((item) => (
          <div key={item.id}>
             {renderCard(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetCarousel;