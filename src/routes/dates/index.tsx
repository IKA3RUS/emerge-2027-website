import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/composites/Footer";
import { Header } from "@/components/composites/Header";

import { CMTAcknowledgement } from "@/routes/(home)/-components/CMTAcknowledgement";
import { KeyDatesSection } from "@/routes/(home)/-components/KeyDatesSection";

export const Route = createFileRoute("/dates/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full p-2 sm:pt-0">
      <Header />

      <main className="w-full py-40 pt-0">
        <KeyDatesSection />
      </main>

      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
