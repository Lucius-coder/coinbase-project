import GetStartedCard from "../layout/GetStartedCard";
import CryptoHeader from "../layout/ExploreCrypto";
import AssetSearchBar from "../layout/AssetSearch";
import AssetCarousel from "../layout/AssetCarousel";
import MarketStats from "../layout/MarketStats";
import CryptoMarketTable from "../layout/CryptoMarketTable";
import CtaBanner from "../layout/CtaBanner"
import BitcoinLogo from '../assets/images/bitcoin.png'
import xrp from '../assets/images/xrp.png'
import  tether from '../assets/images/Tether.png'
import ethereum from '../assets/images/Ethereum.png'
import  bnb from '../assets/images/bnb.png'
import  usdc from '../assets/images/usdc.png'

const topMoversData = [
  {
    id: "alcx",
    iconUrl: "https://dynamic-assets.coinbase.com/de1809b24ff2b8ed9fca46b724d19187c3b0c91cb5b2450ac698a140fc13d114197a37d1e935fccbb8a21af60e60e7530840c8fdae1548d3a0568b26126e64d5/asset_icons/0c985c71c38dc9739f2b140999854f2c945d8382f0490caea544dbda22822817.png",
    ticker: "ALCX",
    change: 42.19,
    price: "GHS 70.84",
  },
  {
    id: "fai",
    iconUrl: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/875ca2eb7b8f1e35c3cc387a559e2008cb04c1ab4e7acbb4d3541bf3768bf5fb.png",
    ticker: "FAI",
    change: 35.29,
    price: "GHS 0.0908",
  },
  {
    id: "prime",
    iconUrl: "https://via.placeholder.com/40/FBBF24/FFFFFF.png?text=P",
    ticker: "PRIME",
    change: 28.5,
    price: "GHS 15.20",
  },
];

const newOnCoinbaseData = [
  {
    id: "hype",
    iconUrl: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/6a8c816c50549afbdb1a73933132c71d7aa26ba900d285e624d5a24ce9b068c4.png",
    ticker: "HYPE",
    name: "Hyperliquid",
    dateAdded: "Added Feb 5",
  },
  {
    id: "jup",
    iconUrl: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/5d6ff9739df73322f2ce9938a299a319e555c6c21653209e23decbee853a2808.png",
    ticker: "JUPITER",
    name: "Jupiter",
    dateAdded: "Added Dec 9",
  },
];
const marketAssets = [
  {
    id: "btc",
    name: "Bitcoin",
    ticker: "BTC",
    iconUrl: BitcoinLogo,
    price: "GHS 730,311.96",
    change: -2.04,
    marketCap: "GHS 14.6T",
    volume: "GHS 358.6B",
    chartColor: "#F7931A",
    specialNote: null,
  },
  {
    id: "eth",
    name: "Ethereum",
    ticker: "ETH",
    iconUrl: ethereum,
    price: "GHS 21,291.94",
    change: -2.21,
    marketCap: "GHS 2.6T",
    volume: "GHS 170.7B",
    chartColor: "#627EEA",
    specialNote: null,
  },
  {
    id: "usdt",
    name: "Tether",
    ticker: "USDT",
    iconUrl: tether,
    price: "GHS 10.77",
    change: 0.01,
    marketCap: "GHS 2.0T",
    volume: "GHS 691.1B",
    chartColor: "#26A17B",
    specialNote: null,
  },
  {
    id: "bnb",
    name: "BNB",
    ticker: "BNB",
    iconUrl: bnb,
    price: "GHS 6,730.79",
    change: -1.2,
    marketCap: "GHS 921.1B",
    volume: "GHS 12.5B",
    chartColor: "#F3BA2F",
    specialNote: null,
  },
  {
    id: "xrp",
    name: "XRP",
    ticker: "XRP",
    iconUrl: xrp,
    price: "GHS 14.63",
    change: -0.78,
    marketCap: "GHS 899.5B",
    volume: "GHS 19.8B",
    chartColor: "#000000",
    specialNote: null,
  },
  {
    id: "usdc",
    name: "USDC",
    ticker: "USDC",
    iconUrl: usdc,
    price: "GHS 10.77",
    change: 0.0,
    marketCap: "GHS 832.6B",
    volume: "GHS 85.5B",
    chartColor: "#2775CA",
    specialNote: "Earns 3.35% APY",
  },
];
const marketSummaryText =
  "The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.31 trillion, representing a 4.01% increase from last week.";
export default function ExplorePage() {
  return (
    <div className="m-5">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="grid grid-cols-4 items-center">
            <div className="col-span-2">
              <CryptoHeader
                title="Explore crypto"
                indexName="Coinbase 50 Index"
                indexChange={-4.96}
                timeFrame="24hrs"
              />
            </div>
            <div className=" col-span-2 m-4">
              <AssetSearchBar placeholder="Search for an asset" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <GetStartedCard
            title="Get started"
            description="Create your account today"
            buttonText="Sign up"
          />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <MarketStats />
        </div>
        <div className="col-span-1">
          <AssetCarousel
            title="Top movers"
            subtitle="24hr change"
            items={topMoversData}
            cardType="mover"
          />
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <CryptoMarketTable
            title="Crypto market prices"
            assetCount={18591}
            marketSummary={marketSummaryText}
            assets={marketAssets}
          />
        </div>
        <div className="col-span-1">
          <AssetCarousel
            title="New on Coinbase"
            items={newOnCoinbaseData}
            cardType="newAsset"
          />
        </div>
      </div>
      <div className=" absolute left-[-100px]">
      
      <CtaBanner/>
      </div> 
    </div>
  );
}
