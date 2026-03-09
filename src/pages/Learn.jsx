import React from 'react';
import CryptoHeading from "../components/CryptoHeading"
import CryptoContentSection from '../layout/CryptoContentSection';
import CryptoCategories from '../layout/CryptoCategories';
import CryptoBasics from '../layout/CryptoBasics';
import CryptoBasicsGrid from '../layout/CryptoBasicsGrid';
import CryptoGlossary from '../layout/CryptoGlossary';
import ContentGridSection from '../layout/ContentGridSection';
const tipsData = [
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/63o0Mbwyiqcqq8CLZKToLs/4d007f0923a20999c6c4765d6fdc35bf/Donating-Crypto.png?w=768&fm=png",
    tag: "GETTING STARTED",
    title: "How to donate crypto",
    isVideo: false,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png",
    tag: "VIDEO TUTORIAL",
    title: "How to set up a crypto wallet",
    isVideo: true,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png",
    tag: "VIDEO TUTORIAL",
    title: "When is the best time to invest?",
    isVideo: true,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/5Crc40l3fe9Mm22C4HGRgx/71defd6861e1ee2c4927e709604ea099/Crypto___Retirement_Op2-D.png?w=768&fm=png",
    tag: "YOUR CRYPTO",
    title: "Invest via retirement account",
    isVideo: false,
  },
];

const advancedData = [
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/50bz6qkc8hSzqqHhbiMtKb/1e4d3f35ff2cd049580a4eb20f861a6e/Learn_Illustration_What_is_Technical_Analysis__1_.png?w=768&fm=png",
    tag: "CRYPTERM",
    title: "What is technical analysis?",
    isVideo: false,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/4zm6shyv9LYK0W74kUrMQ4/2ecc82c8215405ecfba08f1f652095a6/charting-indicators.png?w=768&fm=png",
    tag: "ADVANCED GUIDE",
    title: "Futures market data for spot trading",
    isVideo: false,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/1As6H6C4F2KcJsyLzzWPgX/7b13a011336a72f1f90f5d87bf32eee7/advance-trading.png?w=768&fm=png",
    tag: "ADVANCED GUIDE",
    title: "How to read trading charts",
    isVideo: true,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/4q6K5epqo9YLwaQ79i1M5N/9693bdbae13fffb3c37406d71f294244/order-book__1_.png?w=768&fm=png",
    tag: "CRYPTERM",
    title: "What is an order book?",
    isVideo: true,
  },
];
const futuresData = [
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/7mOyQ8m1ax3GFyzTSIENQy/2977ec18240fcc1851eb4a460a5915c3/Article_1_-_Visual_-_1.png?w=768&fm=png",
    title: "Futures: Introductions and origins",
    isBlue: true, // As seen in image
    isVideo: false,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/P1YwgqZX7jfnJ0l1xdbED/7a1d8654bf047462d68a377f7d21f39c/Article_2_-_Visual_-_1.png?w=768&fm=png",
    title: "Futures fundamentals: Understanding the basics",
    isVideo: false,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/3REMTvIb9OoMmr8EPya1zU/f06976781a368ab76f5fa4b3edfdcc66/Article_3_-_Visual_-_1.png?w=768&fm=png",
    title: "Opening, holding, and closing a position in the futures market",
    isVideo: false,
  },
  {
    image:
      "https://images.ctfassets.net/q5ulk4bp65r7/EnVSYIBpxhx5Aicjq3A8f/08d26b8be710727725c2523746a710de/Article_4_-_Visual_-_1.png?w=768&fm=png",
    title:
      "Trading strategies: Speculating, hedging, and spreading in the futures market",
    isVideo: false,
  },
];

  const walletData = [
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/3mfq3iIdYW3CDfWoh5vm9j/e79252903418650aa29f66ee313ef44e/How_to_Coinbase_Wallet_Op1-B.png?w=768&fm=png",
      title: "What's the difference between Coinbase and Coinbase Wallet?",
      description:
        "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered.",
      isVideo: false,
    },
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/5wgZmGhDLxwejh5MDDxRAn/aa73d7119d45e95ab417b9ae5e5e8f56/Video_02.png?w=768&fm=png",
      tag: "VIDEO TUTORIAL",
      title: "How to set up a crypto wallet",
      description: "Learn how to setup and get started with a crypto wallet.",
      isVideo: true, // Adds the play button overlay
    },
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/3G50jPNvtkBsSz7we9TaxK/a50e3a2103bad2af0355644349e57476/how_to_fund_coinbase_wallet.png?w=768&fm=png",
      tag: "GETTING STARTED",
      title: "How to add crypto to your Coinbase Wallet",
      description:
        "A quick guide on how to add crypto to your Coinbase self-custody wallet.",
      isVideo: false,
    },
    {
      image:
        "https://images.ctfassets.net/q5ulk4bp65r7/4ktmMla57tgU3ZYleBOlLm/71ef298196ffcf1d1eb6d2b43abe49d4/Learn_Illustration_How_to_Send_Crypto.png?w=768&fm=png",
      title: "How to send or receive crypto using Coinbase Wallet",
      description:
        "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers.",
      isBlue: true, // As seen in image
      isVideo: false,
    },
  ];
export default function Learn() {
  return (
    <div className='leading-none'>
      <CryptoHeading/>
      <CryptoContentSection />
      <CryptoCategories />
      <CryptoBasics />
      <CryptoBasicsGrid />
      <CryptoGlossary />
      <ContentGridSection 
             title="Tips and tutorials"
             subtitle="Get practical, step-by-step answers to all things crypto"
             items={tipsData}
             buttonText="See more tips and tutorials"
           />
     
           <ContentGridSection 
             title="Advanced trading"
             subtitle="Ready to advance? Learn the tools and terminology you need"
             items={advancedData}
             buttonText="See more advanced trading"
      />
      <ContentGridSection 
              title="Futures"
              subtitle="New to futures trading? Get up to speed on the basics."
              items={futuresData}
              buttonText="See more about futures"
            />
      
            {/* Reusable Section: All Things Wallet */}
            <ContentGridSection 
              title="All Things Wallet"
              subtitle="Earn yield, dive into crypto apps, control your holdings, and much more"
              items={walletData}
              buttonText="See more Wallet articles"
            />

    </div>
  );
}
