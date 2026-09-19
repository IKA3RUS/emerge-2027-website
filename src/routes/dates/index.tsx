import { createFileRoute } from "@tanstack/react-router";

import { CMTAcknowledgement } from "@/components/layout/CMTAcknowledgement";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

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
