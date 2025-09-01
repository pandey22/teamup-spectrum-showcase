import { Badge } from "@/components/ui/badge";

const TrustedBy = () => {
  const companies = [
    "Qualcomm", "CommScope", "Verizon", "Samsung", 
    "ATX Networks"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-foreground">Trusted by</span>
            <span className="bg-gradient-text bg-clip-text text-transparent"> Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our engineers bring hands-on experience from leading organizations in telecommunications, 
            defense, and technology sectors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {companies.map((company, index) => (
            <div 
              key={company}
              className="text-muted-foreground/70 hover:text-foreground transition-colors duration-300 font-medium text-lg animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;