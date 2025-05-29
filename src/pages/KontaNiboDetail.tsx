
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, GitCompare, BarChart4, Database, RefreshCw, Lock, LineChart } from "lucide-react";

const KontaNiboDetail = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef<HTMLDivElement[]>([]);

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
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="w-full lg:w-1/2 animate-on-scroll">
              <span className="text-sm text-aeron-purple font-medium uppercase tracking-wider mb-2 flex items-center gap-2">
                <GitCompare className="w-5 h-5 text-aeron-purple" />
                Comparison Platform
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">KontaNibo.com</h1>
              <p className="text-xl text-foreground/70 mb-8">
                Bangladesh's first comprehensive comparison site empowering consumers to make informed decisions across multiple product categories and services.
              </p>
              <div className="bg-gradient-to-br from-aeron-blue to-aeron-indigo p-[1px] rounded-lg">
                <div className="bg-background/90 rounded-lg p-4 backdrop-blur-sm">
                  <p className="italic text-foreground/80">
                    "KontaNibo has revolutionized how our customers discover and choose financial products. The integration was seamless and results extraordinary."
                  </p>
                  <p className="mt-3 font-medium">— Leading Bank in Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="KontaNibo Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-aeron-blue to-aeron-indigo p-5 rounded-xl shadow-lg">
                  <div className="text-white font-bold text-xl">1M+</div>
                  <div className="text-white text-sm">Monthly Comparisons</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-24 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-10 text-center">
              <span className="gradient-text">Key Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <BarChart4 className="h-6 w-6 text-aeron-blue" />, title: "Multi-Category Comparison", description: "Compare products across financial services, telecom, travel, and more in one place" },
                { icon: <Database className="h-6 w-6 text-aeron-purple" />, title: "Proprietary Database", description: "Our integrated database ensures accurate, up-to-date information across all product categories" },
                { icon: <RefreshCw className="h-6 w-6 text-aeron-indigo" />, title: "Real-time Updates", description: "Provider information is constantly updated to ensure users have the latest rates and features" },
                { icon: <Lock className="h-6 w-6 text-aeron-blue" />, title: "Secure & Trustworthy", description: "Bank-grade encryption and privacy controls to protect user data and comparison activities" },
                { icon: <GitCompare className="h-6 w-6 text-aeron-purple" />, title: "Side-by-side Analysis", description: "Interactive comparison tables that highlight differences and similarities between offerings" },
                { icon: <LineChart className="h-6 w-6 text-aeron-indigo" />, title: "Analytics Dashboard", description: "For business users to track performance and customer acquisition metrics" }
              ].map((feature, index) => (
                <Card key={index} className="border-border card-hover animate-on-scroll" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="mb-24">
            <div className="bg-gradient-to-r from-aeron-blue/10 to-aeron-indigo/10 rounded-3xl p-8 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-center">Interactive Preview</h2>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                  <div className="bg-background/60 rounded-xl p-6 backdrop-blur-md shadow-lg">
                    <div className="flex justify-between mb-4">
                      <div className="text-xl font-bold">Mobile Plan Comparison</div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="text-left p-3 border-b">Provider</th>
                            <th className="text-left p-3 border-b">Price</th>
                            <th className="text-left p-3 border-b">Data</th>
                            <th className="text-left p-3 border-b">Minutes</th>
                            <th className="text-left p-3 border-b">SMS</th>
                            <th className="text-left p-3 border-b">Rating</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-aeron-purple/5">
                            <td className="p-3 border-b">TelcoOne</td>
                            <td className="p-3 border-b">৳499</td>
                            <td className="p-3 border-b">10 GB</td>
                            <td className="p-3 border-b">500</td>
                            <td className="p-3 border-b">Unlimited</td>
                            <td className="p-3 border-b">★★★★☆</td>
                          </tr>
                          <tr>
                            <td className="p-3 border-b">MobilePro</td>
                            <td className="p-3 border-b">৳649</td>
                            <td className="p-3 border-b">15 GB</td>
                            <td className="p-3 border-b">Unlimited</td>
                            <td className="p-3 border-b">Unlimited</td>
                            <td className="p-3 border-b">★★★★★</td>
                          </tr>
                          <tr className="bg-aeron-purple/5">
                            <td className="p-3 border-b">NetConnect</td>
                            <td className="p-3 border-b">৳399</td>
                            <td className="p-3 border-b">5 GB</td>
                            <td className="p-3 border-b">300</td>
                            <td className="p-3 border-b">100</td>
                            <td className="p-3 border-b">★★★☆☆</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <Button className="gradient-bg rounded-full">View Detailed Comparison</Button>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-4">
                  <Card className="border-border flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Why Users Love Us</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center mt-1">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span>Saves time finding the best deals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center mt-1">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span>Transparent side-by-side comparison</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center mt-1">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                          <span>Unbiased product information</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-border flex-1">
                    <CardContent className="p-6 bg-gradient-to-br from-aeron-blue/10 to-aeron-indigo/10">
                      <h3 className="font-bold mb-2">Get Started</h3>
                      <p className="text-sm mb-4">Experience the power of KontaNibo.com for your business or personal needs</p>
                      <Button className="w-full gradient-bg">Request Demo</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Decision Making?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Join thousands of satisfied users who make smarter choices with KontaNibo.com's comparison tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="gradient-bg rounded-full text-lg px-8 py-6">
                Visit KontaNibo.com
              </Button>
              <Button variant="outline" className="rounded-full text-lg px-8 py-6">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KontaNiboDetail;
