import { motion } from "framer-motion";
import { Globe, Clock, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import williamPhoto from "@assets/IMG_8297.jpeg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("web-dev");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">William Jordan</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                AI Expert & Full-Stack Web Developer
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I create intelligent AI customer support agents and develop cutting-edge web applications that drive business growth. Specializing in GPT-4o integration, multilingual support systems, and scalable full-stack solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToPortfolio}
                className="border-primary text-primary px-8 py-3 hover:bg-primary/10 transition-colors"
              >
                View Portfolio
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Globe className="text-success h-5 w-5" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-success h-5 w-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="text-success h-5 w-5" />
                <span>AI-Powered</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <div className="relative">
              <img 
                src={williamPhoto} 
                alt="William Jordan - Professional Photo" 
                className="rounded-2xl shadow-2xl w-80 object-contain object-center" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}