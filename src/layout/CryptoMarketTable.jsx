

// --- Helper Components (defined within the main file) ---

// Small icon for indicating sorting direction on table headers
const SortIcon = () => (
    <svg className="w-3 h-3 inline-block ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    </svg>
);

// Small icon for the percentage change in the table row
const ChangeIcon = ({ isNegative }) => (
    <svg className={`w-3 h-3 inline-block mr-1 ${isNegative ? 'text-red-500' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d={isNegative ? "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V5a1 1 0 112 0v9.586l2.293-2.293a1 1 0 011.414 0z" : "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"} clipRule="evenodd" />
    </svg>
);

// A simple sparkline chart using SVG
const SparklineChart = ({ color = 'gray' }) => (
    <div className="w-24 h-8">
        <svg viewBox="0 0 100 25" preserveAspectRatio="none">
            <polyline
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                points="0,15 10,18 20,12 30,20 40,18 50,15 60,10 70,14 80,8 90,12 100,10"
            />
        </svg>
    </div>
);


// --- Main Crypto Market Table Component ---

const CryptoMarketTable = ({ title, assetCount, marketSummary, assets = [] }) => {
  return (
    <div className="bg-white p-6 sm:p-8 font-sans">
        
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-baseline space-x-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h1>
            <span className="text-gray-500 font-medium">{assetCount.toLocaleString()} assets</span>
        </div>
        <p className="text-gray-600 mt-2 max-w-3xl">
          {marketSummary}
        </p>
        <a href="#" className="text-blue-600 hover:underline mt-1 inline-block">Read more</a>
      </div>

      {/* Filter Bar Section */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button className="flex items-center bg-gray-100 text-gray-800 font-semibold px-3 py-1.5 rounded-md text-sm">All assets <span className="ml-1">▾</span></button>
        <button className="flex items-center bg-gray-100 text-gray-800 font-semibold px-3 py-1.5 rounded-md text-sm">1D <span className="ml-1">▾</span></button>
        <button className="flex items-center bg-gray-100 text-gray-800 font-semibold px-3 py-1.5 rounded-md text-sm">GHS <span className="ml-1">▾</span></button>
        <button className="flex items-center bg-gray-100 text-gray-800 font-semibold px-3 py-1.5 rounded-md text-sm">10 rows <span className="ml-1">▾</span></button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset <SortIcon /></th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Market price <SortIcon /></th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Chart</th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Change <SortIcon /></th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider text-blue-600">Mkt cap <SortIcon /></th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Volume <SortIcon /></th>
              <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets.map((asset) => {
              const isNegative = asset.change < 0;
              return (
                <tr key={asset.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-400">★</td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-8 w-8 rounded-full" src={asset.iconUrl} alt={`${asset.name} logo`} />
                      <div className="ml-3">
                        <div className="text-sm font-bold text-gray-900">{asset.name}</div>
                        <div className="text-sm text-gray-500">{asset.ticker}</div>
                        {asset.specialNote && <div className="text-xs text-green-600 font-semibold">{asset.specialNote}</div>}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">{asset.price}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right"><SparklineChart color={asset.chartColor} /></td>
                  <td className={`px-4 py-4 whitespace-nowrap text-right text-sm font-medium ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
                    <ChangeIcon isNegative={isNegative} /> {Math.abs(asset.change).toFixed(2)}%
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">{asset.marketCap}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">{asset.volume}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700">Trade</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CryptoMarketTable;