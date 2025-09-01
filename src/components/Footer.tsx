import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
              TeamUP Tech
            </span>
          </div>
          <p className="text-muted-foreground">
            Elite RF Engineering Excellence
          </p>
          <p className="text-sm text-muted-foreground mt-8">
            © 2024 Teamup Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;