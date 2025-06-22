import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { Transition } from "@headlessui/react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: "What's included in the development process?",
      answer: "Our development process includes project planning, UI/UX design, frontend and backend development, testing, deployment, and post-launch support. We follow agile methodology to ensure quality delivery."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Startup projects typically take 4-6 weeks, Scale projects take 8-12 weeks, and Enterprise projects are custom-scoped based on requirements."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes! All plans include post-launch support. We offer bug fixes, security updates, performance monitoring, and feature enhancements based on your plan level."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time. We'll work with you to seamlessly transition and add the additional features and services."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies including React, Next.js, Node.js, Python, TypeScript, and cloud platforms like AWS and Azure. We choose the best tech stack for your specific needs."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally. We have experience serving clients across 50+ countries with flexible communication and project management processes."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Aeron X delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Logistics",
      text: "The team's professionalism and ability to deliver on time made our project a huge success. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "From concept to deployment, Aeron X guided us through every step. The final product was exactly what we envisioned.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aeron-purple/5 via-background to-aeron-blue/5" />
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Simple, transparent <span className="gradient-text">pricing</span>
              </h1>
            </Transition>
            
            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-200"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All plans include our core development services with scalable options for growth.
              </p>
            </Transition>

            <Transition
              show={isVisible}
              enter="transition-all duration-1000 ease-out delay-400"
              enterFrom="opacity-0 translate-y-10"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-aeron-purple" />
                  <span className="text-foreground/80">No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-aeron-purple" />
                  <span className="text-foreground/80">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-aeron-purple" />
                  <span className="text-foreground/80">24/7 support</span>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by <span className="gradient-text">businesses worldwide</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              See what our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-xl border border-border/50 hover:border-aeron-purple/30 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-aeron-purple text-aeron-purple" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Everything you need to know about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-sm border border-border/30 hover:border-aeron-purple/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still have <span className="gradient-text">questions?</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-12">
              Our team is here to help you choose the right plan for your business
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Button variant="outline" className="flex flex-col items-center gap-3 p-6 h-auto rounded-2xl border-border/50 hover:border-aeron-purple/30 transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-aeron-purple" />
                <span className="text-sm font-medium">Live Chat</span>
              </Button>
              
              <Button variant="outline" className="flex flex-col items-center gap-3 p-6 h-auto rounded-2xl border-border/50 hover:border-aeron-purple/30 transition-all duration-300">
                <Phone className="w-6 h-6 text-aeron-purple" />
                <span className="text-sm font-medium">Call Us</span>
              </Button>
              
              <Button variant="outline" className="flex flex-col items-center gap-3 p-6 h-auto rounded-2xl border-border/50 hover:border-aeron-purple/30 transition-all duration-300">
                <Mail className="w-6 h-6 text-aeron-purple" />
                <span className="text-sm font-medium">Email Support</span>
              </Button>
              
              <Button className="gradient-bg flex flex-col items-center gap-3 p-6 h-auto rounded-2xl hover:scale-105 transition-all duration-300">
                <Calendar className="w-6 h-6" />
                <span className="text-sm font-medium">Book a Call</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing; 