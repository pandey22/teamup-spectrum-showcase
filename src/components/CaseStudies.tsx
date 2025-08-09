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
      title: "CMTS Downstream Line Card — EOL Redesign & Output Power Expansion",
      shortDesc: "Redesigned a DOCSIS/CMTS downstream line card to eliminate EOL parts, add active analog gain control, and boost channel capacity—without changing the software interface.",
      category: "DOCSIS Infrastructure",
      client: "Tier-1 cable infrastructure vendor",
      problem: "Multiple EOL RF parts; new MCM gain curve broke calibration and constrained output power.",
      approach: "Re-architected RF lineup; implemented AGC loop compatible with legacy control plane; re-qualified PLL/clock and power-detector chains; updated PCB stackup; scripted LabVIEW for multi-port regression.",
      tools: "AWR/ADS, ADIsimPLL, LabVIEW, spectrum/VNA, high-BW DACs; DOCSIS QAM/OFDM MER/ACLR tests.",
      outcome: ">99.9% factory parametric yield; increased channel output while maintaining accuracy; reduced field failures with predictive VCO diagnostics.",
      impact: "Avoided multi-year software rework; accelerated time-to-market; sustained flagship CMTS revenue."
    },
    {
      id: 2,
      title: "5G/LTE RAN Optimization — KPI Lift & Interference Resolution",
      shortDesc: "Drove multi-market LTE/5G optimization: KPI uplift, PCI/neighbor audits, interference hunts, and Option-3A NSA integrations.",
      category: "5G/LTE Networks",
      client: "National MNO and defense customer networks",
      problem: "Throughput drops, call drops/blocks, high noise floors, delayed 5G deployments.",
      approach: "Drive tests + WindCatcher/Actix post-processing; parameter tuning (a1–a5, b1/b2), CA rollout, PIM/VSWR mitigation; Atoll-based redesigns and link budgets; ENM/AMOS scripts for mass updates.",
      tools: "Atoll, XCAP/XCAL, TEMS, PRB analyzers, FieldFox/PR100; Ericsson ENM/AMOS, Huawei U2000.",
      outcome: "Double-digit % improvements to Accessibility/Retainability/Throughput; faster 5G NSA turn-ups; reduced trouble tickets.",
      impact: "Better user experience and SLA compliance; smoother feature launches."
    },
    {
      id: 3,
      title: "Enterprise Wi-Fi/BLE & MoCA DVT — Automated RF Test at Scale",
      shortDesc: "Built Python/LabVIEW test frameworks for Wi-Fi/BLE/MoCA devices, cutting lab downtime and standardizing RF data collection across six global labs.",
      category: "Enterprise Networking",
      client: "Consumer/enterprise device vendors and network equipment makers",
      problem: "Fragmented labs, inconsistent device health checks, manual Spirent runs, slow debug.",
      approach: "Centralized asset DB; Python device-status pingers and auto-recovery; Spirent orchestration; standardized RF DVT suites (radiated/conducted, coexistence, antenna placement).",
      tools: "Python, LabVIEW, Spirent, QAM analyzers, VNAs, RSAs; Excel/DataPower reporting.",
      outcome: "Measurable reduction in downtime; faster triage; repeatable KPIs (MER, constellations, BER).",
      impact: "Higher test throughput and clearer release gates."
    },
    {
      id: 4,
      title: "Public-Safety P25 Radio Systems — Encryption, Coverage & DAS/BDA Acceptance",
      shortDesc: "Led P25 system upgrades—encryption/OTAR, subscriber programming, DAS/BDA performance validation, and RF interference hunts for mission-critical users.",
      category: "Public Safety",
      client: "Government/public-safety agencies",
      problem: "Legacy programming, coverage gaps, and DAS compliance issues.",
      approach: "Program governance and OTAR upgrades; acceptance test plans; field surveys; interference root-cause analysis; user training and technical guidelines.",
      tools: "Spectrum analyzers, power meters, P25 test sets; IT support for CAD/MDT and router fleets.",
      outcome: "Clean acceptance on new DAS/BDA sites; reduced outages; standardized radio use.",
      impact: "More reliable comms for first responders; streamlined ops and maintenance."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id} 
              className="bg-gradient-card border-card-border backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in flex flex-col aspect-square max-w-sm mx-auto"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex-1 pb-2">
                <Badge variant="secondary" className="w-fit mb-1 text-xs">
                  {study.category}
                </Badge>
                <CardTitle className="text-base font-bold text-foreground line-clamp-3">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-xs line-clamp-4">
                  {study.shortDesc}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline-hero" size="sm" className="group w-full text-xs h-8">
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