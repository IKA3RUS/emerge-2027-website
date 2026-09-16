import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/composites/Footer";
import { Header } from "@/components/composites/Header";

import { AboutSection } from "./-components/AboutSection";
import { HeroSection } from "./-components/HeroSection";
import { ScheduleSection } from "./-components/ScheduleSection";
import { ThemeSection } from "./-components/ThemeSection";
import { VenueSection } from "./-components/VenueSection";

export const Route = createFileRoute("/(home)/")({ component: Home });

function Home() {
  return (
    <div className="h-dvh w-full p-2 sm:pt-0">
      <Header />
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <ScheduleSection />
      <VenueSection />
      <Footer />
    </div>
  );
}
