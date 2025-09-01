import { Button } from "@/components/ui/button";
import { ChevronRight, Radio, Zap } from "lucide-react";
import heroImage from "@/assets/hero-rf-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
           
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Power Your Networks
                </span>
                <br />
                <span className="text-foreground">
                  with Elite RF Engineering
                </span>
              </h1>
              <br /><br />
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                TeamUP Tech delivers contract RF engineers and turnkey RF solutions for the telecommunications and networking industry. From 5G and LTE to DOCSIS, Wi-Fi, MoCA, and public-safety systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="RF Engineering Technology"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;