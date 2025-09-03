import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight, X } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "5G/LTE RAN Optimization",
      shortDesc: "Enhanced Verizon's 5G/LTE networks through targeted optimization and interference resolution, ensuring improved reliability and customer experience.",
      category: "Verizon",
      client: "Verizon, a Tier-1 mobile network operator.",
      problem: "Network performance degradation in urban markets, with frequent throughput drops, call drops, and interference from overlapping neighbor cells.",
      approach: "Conducted drive tests and post-processing (WindCatcher/Actix), optimized handover parameters, audited neighbor relations, mitigated PIM/VSWR issues, and implemented Atoll-based redesigns with new link budgets.",
      tools: "Atoll, Actix, Ericsson ENM/AMOS, Huawei U2000, PRB analyzers.",
      outcome: "Delivered smoother 5G NSA rollouts, improved accessibility and retainability KPIs, and restored user satisfaction with higher throughput stability.",
      impact: "Achieved measurable improvements in network performance and customer satisfaction across multiple urban markets."
    },
    {
      id: 2,
      title: "RF Hardware Validation",
      shortDesc: "Validated Samsung's next-generation Wi-Fi and BLE devices at scale, ensuring seamless connectivity and compliance across global markets.",
      category: "Samsung",
      client: "Samsung Electronics, consumer and enterprise device manufacturer.",
      problem: "Fragmented labs with inconsistent test setups and manual debug created delays in bringing Wi-Fi/BLE/MoCA products to market.",
      approach: "Designed automated RF test frameworks in Python/LabVIEW, centralized device status monitoring, streamlined Spirent integration, and standardized DVT suites for coexistence and antenna placement.",
      tools: "Python, LabVIEW, Spirent traffic generators, QAM analyzers, RSAs, VNAs.",
      outcome: "Achieved consistency across six global test labs, reduced debugging cycles, and ensured global compliance for fast market release.",
      impact: "Significantly accelerated time-to-market for multiple product lines while maintaining quality standards."
    },
    {
      id: 3,
      title: "DOCSIS/CMTS Redesign",
      shortDesc: "Redesigned DOCSIS line cards for Comcast's CMTS infrastructure, extending product life and enhancing system reliability.",
      category: "Comcast",
      client: "Comcast Cable, Tier-1 cable provider.",
      problem: "Multiple RF component EOL issues threatened flagship DOCSIS downstream line cards, risking outages and loss of customer trust.",
      approach: "Re-architected RF lineup with new AGC loop design, re-qualified PLL/clock/power-detector chains, and updated PCB stackup. Automated multi-port regression with LabVIEW.",
      tools: "ADS, ADIsimPLL, spectrum/VNA analyzers, LabVIEW.",
      outcome: "Sustained Comcast's core DOCSIS platform revenues, improved system reliability, and avoided costly software rework.",
      impact: "Enabled continued service delivery while maintaining customer satisfaction and revenue streams."
    },
    {
      id: 4,
      title: "CMTS Hardware Expansion",
      shortDesc: "Partnered with Arris/CommScope to expand CMTS downstream capacity while maintaining backward compatibility.",
      category: "Arris/CommScope",
      client: "Arris/CommScope, a global cable infrastructure provider.",
      problem: "Existing CMTS hardware faced channel capacity limitations and calibration issues with new MCMs.",
      approach: "Enhanced active analog gain control, implemented JESD timing fixes, and validated over extended temperature ranges. Standardized FCC compliance workflows.",
      tools: "AWR, ADS, Spirent, JESD timing simulators.",
      outcome: "Enabled higher downstream channel density, extended product roadmap viability, and ensured compliance for multiple operator deployments.",
      impact: "Successfully expanded system capacity while maintaining reliability and regulatory compliance."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Case Studies
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Real Results
            </span>
            <span className="text-foreground"> from Real Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from those who've experienced the difference. Our customers share success stories, 
            showcasing the impact of our solutions. From small businesses to leaders, see how we've helped 
            people achieve results. Let their experiences inspire you!
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id} 
              className="bg-gradient-card border-card-border backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in flex flex-col w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit mb-2 text-xs">
                  {study.category}
                </Badge>
                <CardTitle className="text-lg font-bold text-foreground line-clamp-3 mb-2">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm line-clamp-5 flex-1">
                  {study.shortDesc}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-4 mt-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline-hero" size="sm" className="group w-50 text-sm h-10">
                      Read Full Case Study
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-background border border-border">
                    <DialogHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {study.category}
                          </Badge>
                          <DialogTitle className="text-2xl font-bold text-foreground pr-8">
                            {study.title}
                          </DialogTitle>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-6">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Client/Context</h4>
                        <p className="text-muted-foreground">{study.client}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Problem</h4>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Approach</h4>
                        <p className="text-muted-foreground">{study.approach}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Tools/Tech</h4>
                        <p className="text-muted-foreground">{study.tools}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Outcome</h4>
                        <p className="text-muted-foreground">{study.outcome}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                        <p className="text-muted-foreground">{study.impact}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;