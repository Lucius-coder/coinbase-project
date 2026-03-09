import pigImage from "../assets/images/piggyBank.png"
export default function CryptoCard() {
  return (
    
    <div className="bg-black p-3 rounded-[64px]  flex">
           <div className='size-[60%]'>
             
             <img src={pigImage} className=''/>
           </div>
           <div className='m-4'>
             <h1 className='text-white  text-5xl mb-2'> Earn 3.5% AER on your cash savings </h1>
             <p className='text-white mb-3'>Savings Account with interest paid daily. Instant Access. FSCS protected. Powered by ClearBank</p>
             <NormalButton text={"Get started"} text_color={"text-black"} color={"bg-white p-2 rounded-full"}></NormalButton>
           </div>
         </div>   
    
  );
}
