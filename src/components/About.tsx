import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, ChevronRight } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Operators to OEMs",
      description: "We've sat in every chair—MNO RAN teams, cable OEMs, device makers, and government programs—so we design for the lab and the field."
    },
    {
      icon: Zap,
      title: "Prototype-to-Production",
      description: "Architecture, PCB/layout guidance, automated DVT, factory test, and field acceptance—one accountable team."
    },
    {
      icon: Target,
      title: "Automation First",
      description: "Python/LabVIEW and Spirent-driven frameworks standardize KPIs, speed root-cause, and lift yield/quality."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <Badge variant="outline" className="mb-4">
                About Teamup Tech
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Elite RF Engineering
                </span>
                <span className="text-foreground"> Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Teamup Tech is a specialized engineering services firm delivering contract RF engineering talent 
                and end-to-end solutions for telecom and networking programs. Our engineers have shipped and 
                supported large-scale cable infrastructure (DOCSIS/CMTS), 5G/LTE RAN, enterprise Wi-Fi/BLE, 
                MoCA systems, IP video backbones, and public-safety P25 networks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Teams bring hands-on experience from organizations like Qualcomm, Arris/CommScope, Verizon, 
                Samsung, ATX Networks, HP, Comcast, SAIC, KBR, CACI, and U.S. Government programs—trusted 
                to design, validate, and scale high-reliability RF systems in the lab and in the field.
              </p>
            </div>

            <Button variant="hero" size="lg" className="group">
              Learn More About Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Features */}
          <div className="space-y-6 animate-slide-in">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 bg-gradient-card border border-card-border rounded-xl backdrop-blur-sm hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;