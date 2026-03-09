import React from 'react';

const CryptoHeader = ({ title, indexName, indexChange, timeFrame }) => {
  const isDown = indexChange < 0;

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mt-0">{title}</h1>
      <div className="flex items-center mt-2 text-sm text-gray-500">
        <span>{indexName} is</span>
        <span className={`flex items-center ml-2 ${isDown ? 'text-red-500' : 'text-green-500'}`}>
          {isDown ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17l-5-5 5-5m-5 5h12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 7l5 5-5 5m5-5H6" />
            </svg>
          )}
          {Math.abs(indexChange)}%
        </span>
        <span className="ml-1">({timeFrame})</span>
        <span className="ml-2 text-gray-400">●</span>
      </div>
    </div>
  );
};

export default CryptoHeader;