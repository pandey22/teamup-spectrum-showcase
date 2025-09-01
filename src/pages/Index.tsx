import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import About from "@/components/About";
import Services from "@/components/Services";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import TechStack from "@/components/TechStack";
import WhyChoose from "@/components/WhyChoose";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <AreasOfExpertise />
      <TechStack />
      <WhyChoose />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
