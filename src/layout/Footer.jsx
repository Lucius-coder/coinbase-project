import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Affiliates", href: "/affiliates" },
        { name: "Blog", href: "https://www.coinbase.com/blog" },
        { name: "Press", href: "/press" },
        { name: "Security", href: "https://www.coinbase.com/security" },
        { name: "Investors", href: "https://investor.coinbase.com/" },
        { name: "Vendors", href: "/vendors/vendors-at-coinbase" },
        { name: "Legal & privacy", href: "/legal" },
        { name: "Cookie policy", href: "/legal/cookie" },
        { name: "Digital Asset Disclosures", href: "/legal/digital-asset-disclosures" },
      ]
    },
    {
      title: "Learn",
      links: [
        { name: "Explore", href: "/explore" },
        { name: "Market statistics", href: "/market-stats" },
        { name: "Coinbase Bytes newsletter", href: "/bytes" },
        { name: "Crypto basics", href: "/learn/crypto-basics" },
        { name: "Tips & tutorials", href: "/learn/tips-and-tutorials" },
        { name: "Market updates", href: "/learn/market-updates" },
        { name: "What is Bitcoin?", href: "/learn/crypto-basics/what-is-bitcoin" },
        { name: "What is crypto?", href: "/learn/crypto-basics/what-is-cryptocurrency" },
        { name: "Taxes", href: "/learn/crypto-basics/understanding-crypto-taxes" },
      ]
    },
    {
      title: "Individuals",
      links: [
        { name: "Buy & sell", href: "/" },
        { name: "Earn free crypto", href: "/learning-rewards" },
        { name: "Base App", href: "https://base.app" },
        { name: "Coinbase One", href: "/one" },
        { name: "Debit Card", href: "/card" },
      ]
    },
    {
      title: "Businesses",
      links: [
        { name: "Asset Listings", href: "https://www.coinbase.com/listings" },
        { name: "Coinbase Business", href: "https://www.coinbase.com/business" },
        { name: "Payments", href: "https://www.coinbase.com/payments" },
        { name: "Commerce", href: "https://www.coinbase.com/commerce" },
        { name: "Token Manager", href: "https://www.coinbase.com/tokenmanager" },
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "Developer Platform", href: "https://www.coinbase.com/developer-platform" },
        { name: "Base", href: "https://base.org" },
        { name: "Server Wallets", href: "/developer-platform/products/wallets" },
        { name: "Trade API", href: "/developer-platform/products/trade-api" },
        { name: "AgentKit", href: "/developer-platform/products/agentkit" },
        { name: "Staking", href: "/developer-platform/products/staking" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help center", href: "https://help.coinbase.com" },
        { name: "Contact us", href: "https://help.coinbase.com/contact-us/" },
        { name: "Create account", href: "https://help.coinbase.com/coinbase/getting-started" },
        { name: "ID verification", href: "https://help.coinbase.com/coinbase/identity-verification" },
        { name: "Status", href: "https://status.coinbase.com" },
      ]
    }
  ];

  return (
    <footer className="w-full bg-white text-slate-600 py-16 px-4 md:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-12">
          {/* Logo Section - Visible on Desktop side */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-8">
            <div className="flex items-center text-blue-600 font-bold text-2xl mb-4">
              {/* Simplified Coinbase Logo Placeholder */}
              <img src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg" className="size-16"/>
            </div>
          </div>

          {/* Dynamic Link Sections */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h3 className="text-slate-900 font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-sm hover:underline hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
          {/* Social Icons & Copyright */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><XIcon /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><LinkedInIcon /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><InstagramIcon /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity"><TikTokIcon /></a>
            </div>
            <div className="flex flex-wrap items-center text-xs text-slate-400 gap-x-2">
              <span>© 2026 Coinbase</span>
              <span className="hidden md:inline">•</span>
              <a href="/legal/privacy" className="hover:underline">Privacy</a>
              <span className="hidden md:inline">•</span>
              <a href="/legal/user_agreement" className="hover:underline">Terms & Conditions</a>
            </div>
          </div>

          {/* Language / Region Selectors */}
          <div className="flex items-center space-x-4 text-sm font-medium">
            <button className="flex items-center space-x-2 hover:bg-slate-50 p-2 rounded">
              <span className="text-slate-400">󰄚</span> {/* Browser/Global Icon */}
              <span>Global</span>
            </button>
            <span className="text-slate-200">|</span>
            <button className="hover:bg-slate-50 p-2 rounded">English</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Simplified SVG Icons components for brevity
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-1.8.7-2.1 1.2v-1h-3.4v7.8h3.4v-4.1c0-.4 0-.8.2-1 .4-.8 1-.8 1.4-.8.9 0 1.2.7 1.2 1.7v4.2h3.4M7 9.8h3.4V18.5H7V9.8M8.7 4.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TikTokIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V15c0 1.94-.66 3.82-1.88 5.32A8.003 8.003 0 0 1 4.08 15c0-3.62 2.73-6.49 6-6.89V12c-1.1.25-2.01.94-2.51 1.93-.5.98-.5 2.15 0 3.13.5.98 1.41 1.67 2.51 1.92.17.04.34.06.51.06 1.1 0 2.09-.9 2.09-2V0l-.07.02z"/>
    </svg>
);

export default Footer;