import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { 
  ChartBarIcon, 
  RocketLaunchIcon, 
  CloudIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const subsidiaries = [
  {
    id: 1,
    name: "KontaNibo.com",
    tagline: "Bangladesh's First Comparison Site",
    description: "Revolutionary comparison platform transforming how Bangladeshi consumers make informed decisions across financial products, services, and utilities.",
    operations: [
      "Real-time price comparison across 500+ providers",
      "Hosted on our proprietary database infrastructure",
      "AI-powered recommendation engine",
      "24/7 automated data synchronization"
    ],
    stats: {
      providers: "500+",
      comparisons: "1M+",
      savings: "৳2.5B+"
    },
    color: "from-blue-500 to-purple-600",
    icon: ChartBarIcon,
    website: "https://kontanibo.com"
  },
  {
    id: 2,
    name: "ATXR Racing",
    tagline: "Premier Racing Technology",
    description: "Elite racing team powered by cutting-edge technology, from brand identity to operational excellence, competing at the highest levels of motorsport.",
    operations: [
      "Real-time telemetry and performance analytics",
      "Brand management and digital presence",
      "Race strategy optimization systems",
      "Team communication and logistics platform"
    ],
    stats: {
      races: "50+",
      podiums: "15",
      uptime: "99.9%"
    },
    color: "from-red-500 to-orange-600",
    icon: RocketLaunchIcon,
    website: "#"
  },
  {
    id: 3,
    name: "Aeron X DCS",
    tagline: "Next-Gen Airline Management",
    description: "State-of-the-art flight booking system and comprehensive airline management platform designed for startup airlines to compete with industry giants.",
    operations: [
      "Departure Control System (DCS) with real-time processing",
      "Advanced load planning and weight distribution",
      "Complete fleet management and maintenance tracking",
      "Integrated crew management and scheduling"
    ],
    stats: {
      savings: "70%",
      airlines: "12+",
      flights: "10K+"
    },
    color: "from-emerald-500 to-teal-600",
    icon: CloudIcon,
    website: "#"
  }
];

const PortfolioSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Transition
          show={isVisible}
          enter="transition-all duration-1000 ease-out"
          enterFrom="opacity-0 translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <SparklesIcon className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-gray-300">Our Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Subsidiaries
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover our diverse portfolio of technology companies, each revolutionizing their respective industries with innovative solutions.
            </p>
          </div>
        </Transition>

        {/* Stack Cards */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] md:h-[700px]">
            {subsidiaries.map((subsidiary, index) => {
              const isActive = index === activeCard;
              const offset = index - activeCard;
              
              return (
                <div
                  key={subsidiary.id}
                  className="absolute inset-0 cursor-pointer transition-all duration-700 ease-out hover:scale-105"
                  style={{
                    zIndex: subsidiaries.length - Math.abs(offset),
                    transform: `translateY(${offset * 20}px) scale(${isActive ? 1 : 0.95 - Math.abs(offset) * 0.05}) rotateY(${offset * 3}deg)`,
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                  }}
                  onClick={() => setActiveCard(index)}
                >
                  <div className={`
                    relative h-full bg-gradient-to-br ${subsidiary.color} p-8 rounded-3xl
                    backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden
                    ${isActive ? 'ring-2 ring-white/30 shadow-3xl' : ''}
                    transform transition-all duration-500 hover:shadow-4xl
                  `}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl animate-pulse" />
                    </div>

                    <div className="relative h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl transform transition-all duration-300 hover:scale-110 hover:bg-white/30">
                            <subsidiary.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 transform transition-all duration-300">
                              {subsidiary.name}
                            </h3>
                            <p className="text-white/80 font-medium">
                              {subsidiary.tagline}
                            </p>
                          </div>
                        </div>
                        <a
                          href={subsidiary.website}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
                        </a>
                      </div>

                      {/* Content Grid */}
                      <div className="flex-1 grid md:grid-cols-2 gap-8">
                        {/* Description */}
                        <div className="space-y-6">
                          <p className="text-white/90 text-lg leading-relaxed">
                            {subsidiary.description}
                          </p>

                          {/* Operations */}
                          <div>
                            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                              <CpuChipIcon className="w-5 h-5" />
                              Key Operations
                            </h4>
                            <div className="space-y-3">
                              {subsidiary.operations.map((operation, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2"
                                  style={{ 
                                    animationDelay: `${idx * 0.1}s`,
                                    opacity: isActive ? 1 : 0.7 
                                  }}
                                >
                                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0 animate-pulse" />
                                  <span className="text-white/80 text-sm leading-relaxed">
                                    {operation}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Stats & Visual */}
                        <div className="space-y-6">
                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(subsidiary.stats).map(([key, value], idx) => (
                              <div
                                key={key}
                                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl transform transition-all duration-500 hover:scale-105 hover:bg-white/20"
                                style={{ 
                                  animationDelay: `${idx * 0.1}s`,
                                  transform: isActive ? 'scale(1)' : 'scale(0.9)',
                                  opacity: isActive ? 1 : 0.7 
                                }}
                              >
                                <div className="text-2xl font-bold text-white mb-1 animate-pulse">
                                  {value}
                                </div>
                                <div className="text-white/70 text-xs uppercase tracking-wide">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Visual Element */}
                          <div className="relative h-40 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-white/20 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center gap-2 text-white/80 text-sm">
                                <img 
                                  src="https://wrczctvglyhprlbkogjb.supabase.co/storage/v1/object/public/mob//aerondropshad.png" 
                                  alt="Aeron X" 
                                  className="w-4 h-4 opacity-80"
                                />
                                <span>Powered by Aeron X Technology</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {subsidiaries.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === activeCard 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <Transition
          show={isVisible}
          enter="transition-all duration-1000 ease-out delay-500"
          enterFrom="opacity-0 translate-y-8"
          enterTo="opacity-100 translate-y-0"
        >
          <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-500 group">
            <GlobeAltIcon className="w-6 h-6 text-purple-400 group-hover:animate-spin" />
            <span className="text-white font-medium">
              Interested in partnering with our subsidiaries?
            </span>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25">
              Get in Touch
            </button>
          </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default PortfolioSection; 