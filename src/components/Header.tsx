import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
              Teamup Tech
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </a>
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline-hero" size="sm">
              Get Quote
            </Button>
            <Button variant="hero" size="sm">
              Hire RF Engineers
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors">
                Expertise
              </a>
              <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline-hero" size="sm">
                  Get Quote
                </Button>
                <Button variant="hero" size="sm">
                  Hire RF Engineers
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;