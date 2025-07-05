import React from 'react';

const OurBrandsSection = () => {
  return (
    <section className="py-16 relative bg-gradient-to-br from-[#0A0A0F] via-[#111127] to-[#1A1A2E]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Our Brands
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Kontanibo.com */}
          <div className="flex flex-col items-center text-center">
            <a href="https://kontanibo.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//Untitled%20(1080%20x%20500%20px).png" alt="Kontanibo Logo" className="h-24 w-auto mb-6 filter brightness(0) invert(1)" />
            </a>
            <p className="text-lg text-white/70">
              Kontanibo.com is Bangladesh's premier finance and lifestyle comparison platform, meticulously built in-house to offer consumers unparalleled insights. We empower users to effortlessly discover the best deals across various financial products and lifestyle services, leveraging our advanced technology for rapid, descriptive comparisons that simplify complex decisions and optimize savings.
            </p>
          </div>
          {/* Flowscape.xyz */}
          <div className="flex flex-col items-center text-center">
            <a href="https://flowscape.xyz" target="_blank" rel="noopener noreferrer">
              <img src="https://cpwowrsesrefnugctpos.supabase.co/storage/v1/object/public/logos//f.png" alt="Flowscape Logo" className="h-24 w-auto mb-6 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </a>
            <p className="text-lg text-white/70">
              Flowscape.xyz redefines digital presence with its AI-driven, subscription-based website and app development service. We offer a revolutionary model where businesses can rent service-based digital platforms without the burden of a hefty one-time fee. Our seamless interactivity and swift service delivery form the backbone of a robust, scalable solution designed to propel businesses forward in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrandsSection; 