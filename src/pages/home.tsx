import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AISupportSection from "@/components/ai-support-section";
import WebDevSection from "@/components/web-dev-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FullStackFlowDiagram from "@/components/fullstack-flow-diagram";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AISupportSection />
      <WebDevSection />
      <FullStackFlowDiagram />
      <ContactSection />
      <Footer />
    </div>
  );
}
