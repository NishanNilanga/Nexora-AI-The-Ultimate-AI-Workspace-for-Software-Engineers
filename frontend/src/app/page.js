import Navbar from "@/components/landing/Navbar";
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import TrustedLogos from "@/components/landing/TrustedLogos";
import BentoFeatures from "@/components/landing/BentoFeatures";
import AIShowcase from "@/components/landing/AIShowcase";
import Testimonials from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816]">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <TrustedLogos />
      <BentoFeatures />
      <AIShowcase />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}