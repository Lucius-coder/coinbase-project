import { useState } from 'react' // No useEffect needed
import BitcoinLogo from '../assets/images/bitcoin.png'
import xrp from '../assets/images/xrp.png'
import  tether from '../assets/images/Tether.png'
import ethereum from '../assets/images/Ethereum.png'
import  bnb from '../assets/images/bnb.png'
import  usdc from '../assets/images/usdc.png'
import   polkadot from '../assets/images/usdc.png'
import  aptos from '../assets/images/usdc.png'
import  nearProtocol from '../assets/images/usdc.png'
import  uniswap from '../assets/images/usdc.png'
import  allora from '../assets/images/usdc.png'
import  blocklords from '../assets/images/usdc.png'
const Tradeable = [
  { currencyImage: BitcoinLogo, currency: "Bitcoin", cost: 7000, risingState: "10" },
  { currencyImage: ethereum, currency: "Ethereum", cost: 7000, risingState: "10" },
  { currencyImage: tether, currency: "Tether", cost: 7000, risingState: "10" },
  { currencyImage: xrp, currency: "xrp", cost: 7000, risingState: "100" },
  { currencyImage: bnb, currency: "BNB", cost: 7000, risingState: "100" },
  { currencyImage: usdc, currency: "USDC", cost: 7000, risingState: "100" },
]
const Topgainer = [
  { currencyImage: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/93d8c0b7916fda3a29b08b6f671aac31c9223e66d7279eaa977041adfd46529d.png", currency: "Plume", cost: 16.83, risingState: "19.34" },
  { currencyImage: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/376fdcf1dbe58411cb447264813018adea558c64ebba8a6054b3fc6b429d7c6e.png", currency: "Subsquid", cost: 0.33, risingState: "38.27" },
  { currencyImage: "https://asset-metadata-service-production.s3.amazonaws.com/asset_icons/88c32c0bbde5675faad60979e1c7040479ab2f5b9f4c02abe4672dbb836329a4.png", currency: "Parcl", cost: 10.14, risingState: "11.22" },
  { currencyImage: "https://dynamic-assets.coinbase.com/a45a3d8b379f06648690db6c55095c3bafde62a93a9dd5e67d232efbb41d466b4387f442b8afe22f4586c272eca95856c1aaaa8cae1f9535a7fc8cd893f325f2/asset_icons/9f45369a344455ed1665d585cbb1540b4f29b566ca8de7ff12776aac215fdc59.png", currency: "Polkastarter", cost: 12.00, risingState: "11.73" },
  { currencyImage: "https://dynamic-assets.coinbase.com/0af32726aeb45962e553e56e07892340d8f67eb080418e5b480306e8ba6fa27be929213a5e4284be97d806e26ae87588b3065be071ad1fbf82664bea81193866/asset_icons/dbab544e37174b2fabb17b9315c3c288fb5766b58cf01b1ef9a0cb2dd18ae7b9.png", currency: "Ocean Protocol", cost: 42.49, risingState: "13.04" },
  { currencyImage: "https://dynamic-assets.coinbase.com/aa7465e72a285a2271200386174937063b4abe3cb746f0bf88201c173bdccb4cc3c92e249541bc2caea36050e47cd6002456fe600a0f5becb38981e8facb3f60/asset_icons/76c47ff30721e8c15a606b2fe80653f3bdb7ff677dccf1cb0f37d28cdde6b750.png", currency: "illuvium", cost: 1.14, risingState: "0.37" },
]
export default function Example() {
  // Pass Tradeable directly as the starting value
  const [currencyState, setCurrencyState] = useState(Tradeable);
const [active,setActive]=useState(false)
  return (
    <div>
      <div className='grid grid-cols-2 h-[90vh] bg-gray-100'>
        <div className='grid grid-cols-1 items-center p-10'>
          <div>
            <h1 className='text-2xl font-medium mb-2'>Explore crypto like Bitcoin, Ethereum, and Dogecoin.</h1>
            <p className='text-gray-600 text-sm mb-3'>Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
            <button className='bg-black px-5 py-2 text-white rounded-2xl text-sm'>See more assets</button>
          </div>
        </div>

        <div className=''>
          <div className='bg-[rgba(0,0,0,0.95)] p-4 size-full scale-90 rounded-4xl'>
            <div className='flex gap-x-6 mb-4'>
              <button className='text-white text-sm bg-[rgba(255,255,255,0.05)] px-3 py-2 rounded-3xl' onClick={()=>setCurrencyState(Tradeable)}>Tradeable</button>
              <button className='text-white text-sm hover:bg-[rgba(255,255,255,0.05)] px-3 py-2 rounded-3xl' onClick={()=>setCurrencyState(Topgainer)}>Top gainers</button>
              <button className='text-white text-sm hover:bg-[rgba(255,255,255,0.05)] px-3 py-2 rounded-3xl'>New on coinbase</button>
            </div>

            <div>
              {/* Loop from currencyState */}
              {currencyState.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 text-white w-full">
                  <div className="flex items-center gap-3">
                    <img src={item.currencyImage} className='size-6' alt={item.currency} />
                    <h1 className="text-3xl font-semibold">{item.currency}</h1>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-medium">
                      <span className="text-gray-400 text-xs">GHS</span> {item.cost}
                    </div>
                    <div className="text-green-400 text-sm font-medium">
                      +{item.risingState}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}