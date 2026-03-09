import HeroSection from "../components/HeroSection";
import HeroSection2 from "../components/HeroSection2";
import Navbar from "../layout/Navbar";
import AdvancedImage from "../assets/images/Advanced.png"
import  TradeSection from "../assets/images/TradeSuccess.png"
import  MainPhone from "../assets/images/mainphone.png"
import InfoSection from "../layout/InfoSection";
import LearnBasics from "../layout/LearnBasicsLayout";
import HeroCTA from "../components/HeroCTA";
import HeroImage from "../assets/images/Hero.png"
import cryptoCurrencies from "../assets/images/cryptoCurrencies.png"
import currency1 from "../assets/images/currency1.webp"
import currency2 from "../assets/images/currency2.png"
import currency3 from "../assets/images/currency3.png"
const articleData = [
  {
    image:currency1,
    title: "USDC: The digital dollar for the global crypto economy",
    description: "Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more..."
  },
  {
    image:currency2,
    title: "Can crypto really replace your bank account?",
    description: "If you're a big enough fan of crypto, you've probably heard the phrase 'be your own bank' or the term 'bankless' — the idea being that..."
  },
  {
    image:currency3,
    title: "When is the best time to invest in crypto?",
    description: "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause..."
  }
];
function Home() {
  return (
    <div className="size-fit">
      <HeroCTA
        isReversed={false}
        imageVariant="gradient"
        title="The future of finance is here."
        subtitle="Trade crypto and more on a platform you can trust."
        imageSrc={HeroImage}
        footerText="Stocks and prediction markets not available in your jurisdiction."
      />
      <HeroSection2 />
     
          <InfoSection
            title="Powerful tools, designed for the advanced trader."
            description="Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience."
            buttonText="Start trading"
            imageSrc={AdvancedImage}
            imageBgColor="bg-white" // Matches the dark theme in image 1
            isReversed={false} // Text on the right
      />
      <InfoSection
             tag="Coinbase One"
             title="Zero trading fees, more rewards."
             description="Get more out of crypto with one membership: zero trading fees, boosted rewards, and priority support."
             buttonText="Claim free trial"
             imageSrc={TradeSection}
             imageBgColor="bg-gray-100"
             isReversed={true} // Text on the left
           />
           <InfoSection
                   tag="Base App"
                   title="Countless ways to earn crypto with the Base App."
                   description="An everything app to trade, create, discover, and chat, all in one place."
                   buttonText="Learn more"
                   imageSrc={MainPhone}
                   imageBgColor="bg-gray-100"
                   isReversed={false} // Text on the right
                 />
                 <LearnBasics
                     title={<>New to crypto?<br />Learn some crypto basics</>}
                     description="Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between"
                     buttonText="Read More"
                     articles={articleData}
                   />
      
                   <HeroCTA
                           isReversed={true}
                           imageVariant="gradient"
                           title="The future of finance is here."
                           subtitle="Trade crypto and more on a platform you can trust."
                           imageSrc={cryptoCurrencies}
                           footerText="Stocks and prediction markets not available in your jurisdiction."
                         />

    </div>
  );
}

export default Home;