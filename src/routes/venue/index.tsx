import { createFileRoute } from "@tanstack/react-router";

import { CMTAcknowledgement } from "@/components/layout/CMTAcknowledgement";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { VenueSection } from "@/routes/(home)/-components/VenueSection";

export const Route = createFileRoute("/venue/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen w-full flex-col p-2 sm:pt-0">
      <Header />

      <main className="w-full flex-1 py-40 pt-0">
        <VenueSection />
      </main>

      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
