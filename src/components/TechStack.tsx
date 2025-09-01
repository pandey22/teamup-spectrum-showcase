import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = [
    {
      title: "Languages & Automation",
      items: ["Python", "Bash", "LabVIEW", "MATLAB", "Excel/DataPower for analytics"]
    },
    {
      title: "RF/Analog Simulation & PCB",
      items: ["AWR Microwave Office", "ADS", "LTspice/TI-Spice", "ADIsimPLL", "Mentor/Siemens Expedition & PADS", "Cadence OrCAD/Allegro", "iCD Stackup Planner"]
    },
    {
      title: "Test & Measurement",
      items: ["Spectrum/Signal analyzers", "VNAs", "oscilloscopes", "power meters", "RSAs", "signal generators", "QAM analyzers", "Spirent traffic generators", "FieldFox", "PR100", "waveguide calibration"]
    },
    {
      title: "Protocols & Standards",
      items: ["5G/LTE/UMTS/GSM", "VoLTE", "Wi-Fi/BLE", "MoCA 2.0", "DOCSIS/CMTS/CCAP", "P25 LMR", "FCC/FAA submissions and acceptance testing workflows"]
    },
    {
      title: "RAN/OSS & Planning",
      items: ["Ericsson ENM/AMOS", "Huawei U2000", "Atoll", "Actix", "XCAP/XCAL", "TEMS", "MapInfo", "WindCatcher", "Nemo", "Invex", "PRB analyzers"]
    },
    {
      title: "Systems & Platforms",
      items: ["FPGA-centric RF (SoC FPGAs)", "ATE (HP93K, Teradyne)", "IP video (QAM, satellite/IP ingest)", "VLAN/QoS testbeds", "Remote PHY"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Technology Stack and
            </span>
            <span className="text-foreground"> Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-leading tools and technologies across simulation, testing, 
            measurement, and deployment for complete RF engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-card border border-card-border rounded-xl backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span 
                    key={itemIndex}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-border/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;