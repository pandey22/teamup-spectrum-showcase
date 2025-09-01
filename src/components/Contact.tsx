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
            Let's discuss how TeamUP Tech can accelerate the success of your next telecom or networking program. 
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
          

         
        </div>
    </section>
  );
};

export default Contact;