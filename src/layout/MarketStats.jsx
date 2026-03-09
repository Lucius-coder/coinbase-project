import React from 'react';
import StatCard from '../layout/StatCard'; // Make sure the path is correct

const MarketStats = () => {
  // Sample data to populate the cards
  const stats = [
    { title: 'Total market cap', value: 'GHS 24.31T', change: -1.73, chartColor: 'red' },
    { title: 'Trade volume', value: 'GHS 1.43T', change: -26.81, chartColor: 'red' },
    { title: 'Buy-sell ratio', value: 'GHS 0.79', change: -4.08, chartColor: 'red' },
    { title: 'BTC Dominance', value: '60.03%', change: 0.55, chartColor: 'green' },
    // Add more stats as needed
  ];

  return (
    <div className="bg-white md:w-[60vw]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900">Market stats</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl">
        The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.31 trillion, representing a 4.01% increase from last week.
      </p>
      <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">
        Read more
      </a>

      {/* Stats Cards Section - Horizontally Scrollable */}
      <div className="mt-6">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              chartColor={stat.chartColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketStats;