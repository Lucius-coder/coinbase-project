import React from 'react';

// A simple arrow icon component
const ArrowIcon = ({ isDown }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 inline-block ${isDown ? '' : 'transform rotate-180'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);


const StatCard = ({ title, value, change, chartColor = 'red' }) => {
  const isNegative = change < 0;

  return (
    <div className="bg-gray-50 rounded-lg p-4 flex-shrink-0 w-60">
      <p className="text-gray-500 text-sm">{title}</p>
      <div className="flex items-center mt-1">
        <p className="text-lg font-bold text-gray-900">{value}</p>
        <div className={`ml-2 text-sm font-semibold flex items-center ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
          <ArrowIcon isDown={isNegative} />
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
      {/* Placeholder for the sparkline chart */}
      <div className="mt-4 h-16">
         <svg viewBox="0 0 150 50" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 0 30 L 10 25 L 20 35 L 30 20 L 40 28 L 50 15 L 60 25 L 70 30 L 80 40 L 90 20 L 100 25 L 110 15 L 120 22 L 130 32 L 140 25 L 150 30" 
            stroke={chartColor} fill="none" strokeWidth="1.5"/>
            <path d="M 0 30 L 10 25 L 20 35 L 30 20 L 40 28 L 50 15 L 60 25 L 70 30 L 80 40 L 90 20 L 100 25 L 110 15 L 120 22 L 130 32 L 140 25 L 150 30 L 150 50 L 0 50 Z" 
            fill={`url(#gradient-${chartColor})`} stroke="none" />
            <defs>
                <linearGradient id={`gradient-${chartColor}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={chartColor} stopOpacity="0.3"/>
                <stop offset="100%" stopColor={chartColor} stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
      </div>
    </div>
  );
};

export default StatCard;