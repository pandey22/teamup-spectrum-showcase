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
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <Badge variant="outline" className="mb-4">
                About TeamUP Tech
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

          </div>

          {/* Additional content can go here if needed */}
        </div>
      </div>
    </section>
  );
};

export default About;