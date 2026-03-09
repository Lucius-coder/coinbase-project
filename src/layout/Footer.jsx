import React from 'react';

const FooterSection = ({ title, links }) => (
  <div className="mb-8">
    <h3 className="text-[14px] font-bold text-black mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-[14px] text-[#5b616e] hover:underline transition-all"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-4 md:px-8 font-sans mt-64">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 scale-75">
        
        {/* Logo Column */}
        <div className="flex flex-col items-start">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
            <img alt="Coinbase Logo" height="44" src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg" width="44"/>
          </div>
        </div>

        {/* Column 1: Company & Learn */}
        <div>
          <FooterSection 
            title="Company" 
            links={["About", "Careers", "Affiliates", "Blog", "Press", "Security", "Investors", "Vendors", "Legal & privacy", "Cookie policy", "Cookie preferences", "Digital Asset Disclosures"]} 
          />
          <FooterSection 
            title="Learn" 
            links={["Explore", "Market statistics", "Coinbase Bytes newsletter", "Crypto basics", "Tips & tutorials", "Crypto glossary", "Market updates", "What is Bitcoin?", "What is crypto?", "What is a blockchain?", "How to set up a crypto wallet?", "How to send crypto?", "Taxes"]} 
          />
        </div>

        {/* Column 2: Individuals, Businesses, Institutions */}
        <div>
          <FooterSection 
            title="Individuals" 
            links={["Buy & sell", "Earn free crypto", "Base App", "Coinbase One", "Debit Card"]} 
          />
          <FooterSection 
            title="Businesses" 
            links={["Asset Listings", "Coinbase Business", "Payments", "Commerce", "Token Manager"]} 
          />
          <FooterSection 
            title="Institutions" 
            links={["Prime", "Staking", "Exchange", "International Exchange", "Derivatives Exchange", "Verified Pools"]} 
          />
        </div>

        {/* Column 3: Developers */}
        <div>
          <FooterSection 
            title="Developers" 
            links={[
              "Developer Platform", "Base", "Server Wallets", "Embedded Wallets", 
              "Base Accounts (Smart Wallets)", "Onramp & Offramp", "x402", "Trade API", 
              "Paymaster", "OnchainKit", "Data API", "Verifications", "Node", 
              "AgentKit", "Staking", "Faucet", "Exchange API", 
              "International Exchange API", "Prime API", "Derivatives API"
            ]} 
          />
        </div>

        {/* Column 4: Support & Prices */}
        <div>
          <FooterSection 
            title="Support" 
            links={["Help center", "Contact us", "Create account", "ID verification", "Account information", "Payment methods", "Account access", "Supported crypto", "Status"]} 
          />
          <FooterSection 
            title="Asset prices" 
            links={["Bitcoin price", "Ethereum price", "Solana price", "XRP price"]} 
          />
          <FooterSection 
            title="Stock prices" 
            links={["NVIDIA price", "Apple price", "Microsoft price", "Amazon price"]} 
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;