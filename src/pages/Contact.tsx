
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Setup animations for elements that come into view
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

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-on-scroll">
              Let's Talk About Your Project
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 animate-on-scroll">
              Share your vision with us, and let's collaborate to create exceptional digital solutions that drive your business forward.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            <div className="bg-muted/30 backdrop-blur-md rounded-xl p-8 border border-border hover:border-aeron-purple/40 transition-all duration-300 animate-on-scroll card-hover">
              <div className="w-12 h-12 rounded-full bg-aeron-purple/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-aeron-purple" />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-foreground/70 mb-3">Our team is here to help you</p>
              <a href="mailto:info@aeronxtt.com" className="text-aeron-purple hover:text-aeron-blue transition-colors font-medium">
                info@aeronxtt.com
              </a>
            </div>

            <div className="bg-muted/30 backdrop-blur-md rounded-xl p-8 border border-border hover:border-aeron-purple/40 transition-all duration-300 animate-on-scroll card-hover delay-100">
              <div className="w-12 h-12 rounded-full bg-aeron-purple/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-aeron-purple" />
              </div>
              <h3 className="text-lg font-bold mb-2">Our Locations</h3>
              <p className="text-foreground/70 mb-3">Melbourne, VIC, 3000, & Dhaka, Bangladesh 1215</p>
              <p className="text-aeron-purple font-medium">
                ABN: 61 278 718 345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-muted/30 relative animate-on-scroll">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 animate-on-scroll">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What information do you need to provide a quote?",
                  answer: "To provide an accurate quote, we typically need to understand your project scope, timeline, features required, and any specific technical requirements. Our interactive form helps gather this information, but we're also happy to schedule a call to discuss in more detail."
                },
                {
                  question: "How long does it typically take to build a custom solution?",
                  answer: "Project timelines vary based on complexity, features, and scope. A simple website might take 4-6 weeks, while a complex enterprise solution could take several months. During our initial consultation, we'll provide a more specific timeline tailored to your project."
                },
                {
                  question: "Do you provide ongoing support after the project launch?",
                  answer: "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally after launch. Our team can provide regular updates, security patches, performance monitoring, and feature enhancements based on your needs."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We have deep expertise in Travel & Aviation, Finance & Banking, Healthcare, Manufacturing, eCommerce, and Consumer Technology. However, our technical capabilities allow us to create effective solutions across many other industries as well."
                },
              ].map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-aeron-purple/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
