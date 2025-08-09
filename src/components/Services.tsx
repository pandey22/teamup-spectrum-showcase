import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Wrench, ChevronRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Contract RF Engineers On-Demand",
      description: "Flexible specialists to fill skill gaps fast—RF DVT, network optimization, lab bring-up, and post-silicon/systems debug.",
      features: [
        "Network RF optimization & turn-ups: 5G/LTE/VoLTE site design",
        "Product/RF DVT & validation: Wi-Fi/BLE/MoCA and DOCSIS line cards",
        "Lab & ATE: Multi-site lab setup/operations, inventory tracking",
        "Public-safety & LMR: P25 infrastructure and subscriber programming"
      ]
    },
    {
      icon: Wrench,
      title: "End-to-End RF Engineering Services",
      description: "Own a program from concept to deployment—architecture, verification, automation, and field acceptance.",
      features: [
        "RF hardware architecture & redesign: PLL/VCO chains, mixers/filters",
        "Automation & data engineering: Python/LabVIEW frameworks",
        "Field trials & acceptance: Drive test planning, KPI baselining",
        "Reliability & sustainment: EOL component redesigns, diagnostics"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Featured Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Reliable Service
            </span>
            <span className="text-foreground"> for Your Company</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are dedicated to keeping your business connected with efficient networking solutions. 
            We ensure your company has the reliability and scalability needed to thrive in today's digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-card-border backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 shadow-glow">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;