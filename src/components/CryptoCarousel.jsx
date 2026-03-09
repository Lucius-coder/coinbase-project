import pigImage from '../assets/images/piggyBank.png'
import staking from '../assets/images/staking.png'
import NormalButton from '../common/NormalButton'

let items = [
  {
    imageName: pigImage, heading: "Earn 3.5% AER on your cash savings", description: "Savings Account with interest paid daily. Instant Access.FCFS protected. Powered by ClearBank.", buttonText: "Get Started"
  },
  { imageName: staking, heading: "Earn up to 14% APY on your crypto", description: "put your crypto to work by staking with Coinbase and earn rewards up to 14% APY on your holdings", buttonText: "Explore staking options" }
]

export default function CryptoCard() {
  return (
    // Changed 'inline' to 'flex' and added 'gap' to separate cards
    <div className="bg-[rgba(0,0,0,0.9)] h-screen w-screen p-15 overflow-x-scroll">
      <div className='inline-flex w-screen gap-x-5'>
      {items.map((item, index) => (
        // Added a unique 'key' and closed the div correctly
        <div key={index} className=" bg-[rgba(0,0,0,0.95)] p-6 gap-2 rounded-[64px]   flex  items-center">
          <div className='w-2xl'>
            <img src={item.imageName} alt={item.heading} className='w-full' />
          </div>
          <div className='m-4'>
            <h1 className='text-white font-bold text-4xl mb-2'>
              {item.heading}
            </h1>
            <p className='text-white mb-3'>{item.description}</p>
            <NormalButton 
              text={item.buttonText} 
              text_color={"text-black"} 
              color={"bg-white p-3 rounded-full"} 
            />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}