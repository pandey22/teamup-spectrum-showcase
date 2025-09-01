import { Badge } from "@/components/ui/badge";

const About = () => {
  const trustedCompanies = [
    "Qualcomm", "CommScope", "Verizon", "Samsung", "ATX Networks", "HP", "Comcast", "SAIC", "KBR", "CACI"
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

          {/* Trusted by Industry Leaders */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="space-y-4">
              {trustedCompanies.map((company, index) => (
                <div 
                  key={company}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 flex items-center justify-between hover:bg-card/70 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <span className="text-foreground font-medium">
                    {company}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;