import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Target, Settings, Lock, TrendingUp } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
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
    },
    {
      icon: Settings,
      title: "Interference & KPI Fixers",
      description: "Practical PIM/VSWR hunts, noise-floor mitigation, and parameter tuning to unlock real-world performance."
    },
    {
      icon: Lock,
      title: "Security-Ready",
      description: "OTAR/encryption workflows, public-safety acceptance testing, disciplined change control."
    },
    {
      icon: TrendingUp,
      title: "Clear Outcomes",
      description: "We tie work to measurable targets—MER/EVM thresholds, accessibility/retainability, yield %, and downtime reductions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Why Choose
            </span>
            <span className="text-foreground"> TeamUP Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven expertise, measurable results, and end-to-end accountability 
            across the entire RF engineering lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-card border border-card-border rounded-xl backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in flex flex-col items-start"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 shadow-glow">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;