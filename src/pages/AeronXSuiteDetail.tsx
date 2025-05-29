
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plane, CheckCircle2, Clock, Users, BarChart, Calendar, Globe2 } from "lucide-react";

const AeronXSuiteDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          {/* Back button */}
          <div className="mb-6 animate-on-scroll">
            <Button 
              variant="outline" 
              className="mb-6 flex items-center gap-2"
              onClick={() => navigate("/products")}
            >
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Button>
          </div>
          
          {/* Hero section */}
          <div className="relative mb-24 animate-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-aeron-purple to-aeron-pink opacity-20 rounded-3xl"></div>
            <div className="relative p-10 md:p-16 rounded-3xl flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-6 h-6 text-aeron-purple" />
                  <span className="text-aeron-purple font-medium uppercase tracking-wider">Airline Management System</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Aeron X Suite</h1>
                <p className="text-xl text-foreground/70 mb-8">
                  Our flagship comprehensive airline management system specifically designed for startup airlines to launch and scale their operations in record time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="gradient-bg rounded-full">Schedule Demo</Button>
                  <Button variant="outline" className="rounded-full">Download Brochure</Button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Aeron X Suite Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-aeron-purple to-aeron-pink p-4 rounded-xl shadow-lg">
                    <div className="text-white text-sm font-bold">TRUSTED BY</div>
                    <div className="text-white text-2xl font-bold">15+ Airlines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-24">
            <Tabs defaultValue="overview" className="w-full" onValueChange={(value) => setActiveTab(value)}>
              <TabsList className="grid grid-cols-4 mb-8 animate-on-scroll">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Core Features</TabsTrigger>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="animate-on-scroll">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">The Complete Solution for Startup Airlines</h2>
                    <p className="text-lg text-foreground/70 mb-8">
                      Aeron X Suite is a comprehensive airline management system designed to help startup airlines get off the ground quickly and efficiently. Our integrated platform provides all the essential tools needed to manage operations, from departure control and booking engines to crew scheduling and flight tracking.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-aeron-purple mt-1" />
                        <div>
                          <h3 className="text-xl font-bold">Rapid Deployment</h3>
                          <p className="text-foreground/70">Implement the complete system in 60-90 days, cutting time-to-market by up to 70%</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-aeron-purple mt-1" />
                        <div>
                          <h3 className="text-xl font-bold">Customizable</h3>
                          <p className="text-foreground/70">Adapt the system to your specific needs while maintaining industry standards</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-aeron-purple mt-1" />
                        <div>
                          <h3 className="text-xl font-bold">Scalable Architecture</h3>
                          <p className="text-foreground/70">Grows with your airline from 2 aircraft to 200+ without system changes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-aeron-purple/10 to-aeron-pink/10 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { icon: <Clock className="h-5 w-5" />, title: "Faster Launch", value: "60-90 Days", description: "From signing to operation" },
                        { icon: <Users className="h-5 w-5" />, title: "Team Size", value: "Reduced by 40%", description: "Fewer technical staff needed" },
                        { icon: <BarChart className="h-5 w-5" />, title: "Operational Costs", value: "30% Savings", description: "Compared to legacy systems" },
                        { icon: <Globe2 className="h-5 w-5" />, title: "Global Reach", value: "24/7 Support", description: "Worldwide technical assistance" },
                      ].map((item, index) => (
                        <Card key={index} className="border-border">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-aeron-purple/20 flex items-center justify-center">
                                {item.icon}
                              </div>
                              <h4 className="font-bold">{item.title}</h4>
                            </div>
                            <div className="text-2xl font-bold text-aeron-purple">{item.value}</div>
                            <p className="text-sm text-foreground/70">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  <span className="gradient-text">Core Features</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Departure Control System",
                      description: "Comprehensive check-in, boarding, and weight & balance capabilities designed for efficient terminal operations",
                      features: ["Automated check-in process", "Real-time weight & balance calculation", "Mobile boarding passes", "Baggage reconciliation"]
                    },
                    {
                      title: "Booking Engine",
                      description: "Complete online booking system with GDS connectivity, payment processing, and ancillary revenue management",
                      features: ["Multi-channel distribution", "Fare management", "Ancillary product sales", "Payment gateway integration"]
                    },
                    {
                      title: "Operations Control",
                      description: "Real-time flight tracking, monitoring and operations management to ensure smooth daily operations",
                      features: ["Flight status monitoring", "Delay management", "Aircraft rotation visualization", "Disruption recovery tools"]
                    },
                    {
                      title: "Crew Management",
                      description: "Comprehensive crew scheduling and management with duty time compliance and qualification tracking",
                      features: ["Roster optimization", "Duty time compliance", "Qualification tracking", "Mobile crew notifications"]
                    },
                    {
                      title: "Revenue Management",
                      description: "Maximize revenue with dynamic pricing, yield management, and demand forecasting tools",
                      features: ["Dynamic pricing", "Competitive fare analysis", "Demand forecasting", "Revenue optimization"]
                    },
                    {
                      title: "Analytics Dashboard",
                      description: "Data-driven insights and reporting to optimize operations and improve business performance",
                      features: ["Real-time performance metrics", "Custom report builder", "Trend analysis", "Executive dashboards"]
                    }
                  ].map((feature, index) => (
                    <Card key={index} className="border-border card-hover">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-foreground/70 mb-6">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.features.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center mt-1">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                              <span className="text-foreground/80 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="modules" className="animate-on-scroll">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="gradient-text">Modular Architecture</span>
                  </h2>
                  <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                    Aeron X Suite's modular design allows airlines to implement only what they need, when they need it, with seamless integration between components.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-aeron-purple/5 to-aeron-pink/5 rounded-3xl"></div>
                  <div className="relative p-8 rounded-3xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {[
                        { name: "Reservation System", status: "Core" },
                        { name: "Departure Control", status: "Core" },
                        { name: "Flight Operations", status: "Core" },
                        { name: "Crew Management", status: "Core" },
                        { name: "Revenue Management", status: "Add-on" },
                        { name: "Loyalty Program", status: "Add-on" },
                        { name: "Maintenance Planning", status: "Add-on" },
                        { name: "Catering Management", status: "Add-on" },
                        { name: "Ground Handling", status: "Add-on" },
                        { name: "Fuel Management", status: "Add-on" },
                        { name: "Cargo Operations", status: "Add-on" },
                        { name: "Business Intelligence", status: "Add-on" }
                      ].map((module, index) => (
                        <Card key={index} className={`border-border ${module.status === "Core" ? "bg-gradient-to-br from-aeron-purple/10 to-aeron-pink/10" : "bg-background/80"}`}>
                          <CardContent className="p-4 text-center">
                            <h3 className="font-medium">{module.name}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${module.status === "Core" ? "bg-aeron-purple/20 text-aeron-purple" : "bg-foreground/10 text-foreground/60"}`}>
                              {module.status}
                            </span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-background/60 rounded-xl backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-4">Integration Capabilities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold mb-2">Industry Systems</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-aeron-purple" />
                              <span>IATA & ICAO Standard Messaging</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-aeron-purple" />
                              <span>Global Distribution Systems (GDS)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-aeron-purple" />
                              <span>Navigation Data Providers</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Third-Party Software</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-aeron-purple" />
                              <span>Accounting & ERP Systems</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-aeron-purple" />
                              <span>Payment Gateways</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-aeron-purple" />
                              <span>CRM & Marketing Platforms</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="testimonials" className="animate-on-scroll">
                <h2 className="text-3xl font-bold mb-10 text-center">
                  <span className="gradient-text">What Our Clients Say</span>
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {[
                    {
                      quote: "Aeron X Suite allowed us to launch our airline in just 75 days. The integrated system saved us millions in development costs and continues to provide exceptional value.",
                      author: "CEO, StartAir",
                      role: "Regional Airline, Asia"
                    },
                    {
                      quote: "The modular approach meant we could start with core functionality and add features as we grew. The system has scaled perfectly from our initial 3 aircraft to our current fleet of 15.",
                      author: "CTO, SkyConnect",
                      role: "Charter Airline, Middle East"
                    },
                    {
                      quote: "We evaluated multiple systems, but only Aeron X Suite offered the comprehensive functionality with the flexibility we needed. Their team's airline experience was evident throughout implementation.",
                      author: "COO, BlueSky Airlines",
                      role: "Low-cost Carrier, Europe"
                    },
                    {
                      quote: "The analytics and reporting capabilities have transformed our decision-making process. We now have real-time insights that directly improve our bottom line.",
                      author: "Head of Revenue Management, AirVista",
                      role: "Premium Airline, Americas"
                    }
                  ].map((testimonial, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-8">
                        <div className="mb-6 text-4xl text-aeron-purple/20">"</div>
                        <p className="italic text-lg mb-6">{testimonial.quote}</p>
                        <div>
                          <p className="font-bold">{testimonial.author}</p>
                          <p className="text-sm text-foreground/70">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Airline Operations?</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button className="gradient-bg rounded-full px-8 py-6">
                      Schedule a Consultation
                    </Button>
                    <Button variant="outline" className="rounded-full px-8 py-6">
                      Download Case Studies
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Timeline Section */}
          <div className="mb-24 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-10 text-center">
              <span className="gradient-text">Implementation Timeline</span>
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aeron-purple to-aeron-pink"></div>
              
              {/* Timeline Items */}
              <div className="relative space-y-12">
                {[
                  { 
                    phase: "Phase 1: Discovery", 
                    time: "Weeks 1-2", 
                    description: "Requirements gathering, system configuration planning, and project roadmap development",
                    icon: <Calendar className="h-6 w-6" />
                  },
                  { 
                    phase: "Phase 2: Core Setup", 
                    time: "Weeks 3-6", 
                    description: "Installation and configuration of core modules: reservation system and operations control",
                    icon: <Clock className="h-6 w-6" />
                  },
                  { 
                    phase: "Phase 3: Integration", 
                    time: "Weeks 7-10", 
                    description: "Connection to third-party systems, data migration, and integration testing",
                    icon: <Globe2 className="h-6 w-6" />
                  },
                  { 
                    phase: "Phase 4: Training", 
                    time: "Weeks 11-12", 
                    description: "Staff training, user acceptance testing, and final adjustments before going live",
                    icon: <Users className="h-6 w-6" />
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row md:flex-row-reverse' : 'flex-row'}`}>
                    <div className="w-full md:w-1/2 px-8 md:px-12">
                      <div className={`bg-background p-6 rounded-xl shadow-lg border border-border ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                        <h3 className="text-xl font-bold mb-2">{item.phase}</h3>
                        <p className="text-aeron-purple font-medium mb-3">{item.time}</p>
                        <p className="text-foreground/70">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex-shrink-0 mx-2 md:mx-0">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Ready for Takeoff?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Join the growing number of airlines revolutionizing their operations with Aeron X Suite. Let's build the future of aviation together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gradient-bg rounded-full text-lg px-8 py-6">
                Request a Consultation
              </Button>
              <Button variant="outline" className="rounded-full text-lg px-8 py-6">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AeronXSuiteDetail;
