import { Badge } from "@/components/ui/badge";

const AreasOfExpertise = () => {
  const expertiseAreas = [
    {
      title: "RAN & Cellular",
      description: "5G NR NSA/Option 3x, LTE/LTE-A/VoLTE, UMTS/WCDMA, GSM; parameter tuning (events a1–a5, b1/b2), PCI planning, CA rollout, PRB analysis, neighbor/CSFB/SRVCC audits."
    },
    {
      title: "Cable & Fixed Access",
      description: "DOCSIS CMTS/CCAP downstream Tx line cards, Remote PHY nodes, QAM/OFDM generation, splitter/combiner networks, hitless sparing."
    },
    {
      title: "Enterprise & CPE",
      description: "Wi-Fi (AP/STA), BLE, MoCA 2.0; antenna characterization, coexistence and SI/EMI troubleshooting."
    },
    {
      title: "Public-Safety & LMR",
      description: "P25 systems (VHF/UHF/700/800 MHz), subscriber programming, OTAR/encryption, DAS/BDA performance verification."
    },
    {
      title: "Positioning & Special Comms",
      description: "GNSS/PNT, DOA estimation, LPI/LPD waveform assessment, SIGINT-adjacent testing."
    },
    {
      title: "Test & Bring-Up",
      description: "MER/ACLR/ACPR, EVM/constellation, phase noise/jitter, return loss/VSWR/PIM, link budgets, thermal derating, IR-drop considerations for high-current RF stages."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Areas of Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Technical
            </span>
            <span className="text-foreground"> Specializations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep expertise across the full spectrum of RF engineering disciplines, 
            from 5G cellular networks to specialized communications systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-card border border-card-border rounded-xl backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfExpertise;