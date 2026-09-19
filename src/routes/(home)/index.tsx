import { createFileRoute } from "@tanstack/react-router";

import { CMTAcknowledgement } from "@/components/layout/CMTAcknowledgement";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { AboutSection } from "./-components/AboutSection";
import { ContactSection } from "./-components/ContactSection";
import { HeroSection } from "./-components/HeroSection";
import { KeyDatesSection } from "./-components/KeyDatesSection";
import { SponsorsSection } from "./-components/SponsorsSection";
import { ThemeSection } from "./-components/ThemeSection";
import { VenueSection } from "./-components/VenueSection";

export const Route = createFileRoute("/(home)/")({ component: Home });

function Home() {
  return (
    <div className="w-full p-2 sm:pt-0">
      <Header />

      <main className="pb-40">
        <HeroSection />
        <SponsorsSection />
        <AboutSection />
        <ThemeSection />
        <KeyDatesSection />
        <VenueSection />
        <ContactSection />
      </main>

      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
