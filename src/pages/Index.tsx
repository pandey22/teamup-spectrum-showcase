import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import TechStack from "@/components/TechStack";
import WhyChoose from "@/components/WhyChoose";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <AreasOfExpertise />
      <TechStack />
      <WhyChoose />
      <CaseStudies />
      <Contact />
    </div>
  );
};

export default Index;
