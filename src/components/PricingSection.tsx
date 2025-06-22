import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { 
  Check, 
  Sparkles, 
  Rocket, 
  Building2, 
  Crown,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Code,
  Globe,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('pricing');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const plans = [
    {
      name: "Startup",
      badge: "POPULAR",
      description: "Launch your business with essential development services",
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-aeron-purple to-aeron-indigo",
      features: [
        "5 Custom Web Pages",
        "Mobile-Responsive Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "3 Months Support",
        "Source Code Included",
        "1 Revision Round"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Scale",
      badge: "BILLED YEARLY",
      description: "Scale your business with advanced features and integrations",
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      icon: <Building2 className="w-6 h-6" />,
      gradient: "from-aeron-blue to-aeron-cyan",
      features: [
        "15 Custom Web Pages",
        "Advanced UI/UX Design",
        "E-commerce Integration",
        "Payment Gateway Setup",
        "6 Months Support",
        "Database Integration",
        "API Development",
        "3 Revision Rounds"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Enterprise",
      badge: "CUSTOM",
      description: "Custom solutions with dedicated support for large organizations",
      monthlyPrice: null,
      yearlyPrice: null,
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-aeron-cyan to-aeron-pink",
      features: [
        "Unlimited Custom Pages",
        "Custom Architecture",
        "Advanced Security",
        "24/7 Priority Support",
        "Dedicated Project Manager",
        "Custom Integrations",
        "Performance Optimization",
        "Unlimited Revisions"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const additionalFeatures = [
    { name: "Custom Development", icon: <Code className="w-5 h-5" /> },
    { name: "Cloud Deployment", icon: <Globe className="w-5 h-5" /> },
    { name: "Technical Support", icon: <Headphones className="w-5 h-5" /> },
    { name: "Team Collaboration", icon: <Users className="w-5 h-5" /> },
    { name: "Security Audits", icon: <Shield className="w-5 h-5" /> },
    { name: "Performance Monitoring", icon: <Zap className="w-5 h-5" /> }
  ];

  const formatPrice = (price: number | null, yearly: boolean) => {
    if (price === null) return "Custom";
    const finalPrice = yearly ? price : price;
    return `$${finalPrice.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aeron-purple/10 to-aeron-blue/10 border border-aeron-purple/20 mb-6">
              <Sparkles className="w-4 h-4 text-aeron-purple" />
              <span className="text-sm font-medium text-foreground/80">Pricing Plans</span>
            </div>
          </Transition>
          
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-200"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Choose the perfect plan for your business
            </h2>
          </Transition>
          
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-400"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Get professional software development services. Upgrade to add custom features, 
              advanced integrations, and premium support.
            </p>
          </Transition>

          {/* Billing Toggle */}
          <Transition
            show={isVisible}
            enter="transition-all duration-1000 ease-out delay-600"
            enterFrom="opacity-0 translate-y-10"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-foreground/50'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onChange={setIsYearly}
                className={`${
                  isYearly ? 'bg-gradient-to-r from-aeron-purple to-aeron-blue' : 'bg-muted'
                } relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-aeron-purple focus-visible:ring-opacity-75`}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    isYearly ? 'translate-x-6' : 'translate-x-0'
                  } pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
              <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-foreground/50'}`}>
                Yearly
                <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-aeron-purple to-aeron-blue text-white rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </Transition>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Transition
              key={index}
              show={isVisible}
              enter="transition-all duration-1000 ease-out"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div
                className={`relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-card/80 to-card/40 border-aeron-purple/50 shadow-2xl shadow-aeron-purple/10 scale-105' 
                    : 'bg-gradient-to-br from-card/50 to-card/20 border-border/50 hover:border-aeron-purple/30'
                } ${hoveredCard === index ? 'scale-105 shadow-2xl' : ''} backdrop-blur-xl hover:shadow-2xl`}
                style={{ animationDelay: `${800 + index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-aeron-purple to-aeron-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6 text-white`}>
                    {plan.icon}
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    {!plan.popular && (
                      <div className="text-xs text-foreground/60 font-medium mb-2">{plan.badge}</div>
                    )}
                    <p className="text-foreground/70 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice, isYearly)}
                      </span>
                      {plan.monthlyPrice && (
                        <span className="text-foreground/60">
                          /{isYearly ? 'year' : 'project'}
                        </span>
                      )}
                    </div>
                    {isYearly && plan.monthlyPrice && (
                      <p className="text-sm text-foreground/60 mt-1">
                        Billed annually, save ${((plan.monthlyPrice * 12) - plan.yearlyPrice!).toLocaleString()}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-aeron-purple/20 to-aeron-blue/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-aeron-purple" />
                        </div>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full rounded-full py-6 text-lg font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'gradient-bg hover:scale-105 hover:shadow-xl hover:shadow-aeron-purple/25' 
                        : 'bg-muted hover:bg-muted/80 text-foreground hover:scale-105'
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-aeron-purple to-aeron-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
            </Transition>
          ))}
        </div>

        {/* Additional Features */}
        <Transition
          show={isVisible}
          enter="transition-all duration-1000 ease-out delay-1400"
          enterFrom="opacity-0 translate-y-10"
          enterTo="opacity-100 translate-y-0"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">All plans include</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm border border-border/30 hover:border-aeron-purple/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-aeron-purple/20 to-aeron-blue/20 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-sm text-foreground/80 text-center font-medium">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Transition>

        {/* FAQ or Contact Section */}
        <Transition
          show={isVisible}
          enter="transition-all duration-1000 ease-out delay-1600"
          enterFrom="opacity-0 translate-y-10"
          enterTo="opacity-100 translate-y-0"
        >
          <div className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-card/20 to-card/10 backdrop-blur-sm border border-border/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need a custom solution?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Contact our team to discuss your specific requirements and get a tailored quote for your project.
            </p>
            <Button className="gradient-bg rounded-full px-8 py-6 hover:scale-105 hover:shadow-xl hover:shadow-aeron-purple/25 transition-all duration-300">
              Contact Sales Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default PricingSection; 