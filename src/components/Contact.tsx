import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Ready to Connect?
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Ready to Amplify
            </span>
            <br />
            <span className="text-foreground">Your RF Capabilities?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's discuss how Teamup Tech can accelerate the success of your next telecom or networking program. 
            Whether you're optimizing nationwide 5G coverage, advancing DOCSIS infrastructure, deploying enterprise 
            Wi-Fi networks, or upgrading mission-critical public-safety systems — we're here to help.
          </p>
          
          <div className="flex justify-center">
            <Button variant="hero" size="xl" className="group">
              <Mail className="w-5 h-5" />
              engage@teamuptech.com
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="bg-gradient-card border-card-border backdrop-blur-sm hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Get in touch for project inquiries</p>
              <a 
                href="mailto:engage@teamuptech.com"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                engage@teamuptech.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-card-border backdrop-blur-sm hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground mb-4">We respond within 24 hours</p>
              <span className="text-primary">Fast turnaround guaranteed</span>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-card-border backdrop-blur-sm hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Global Reach</h3>
              <p className="text-muted-foreground mb-4">Serving clients worldwide</p>
              <span className="text-primary">Remote & on-site capabilities</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;