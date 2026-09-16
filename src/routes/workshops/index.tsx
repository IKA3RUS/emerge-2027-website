import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/composites/Footer";
import { Header } from "@/components/composites/Header";

import { CMTAcknowledgement } from "../(home)/-components/CMTAcknowledgement";

export const Route = createFileRoute("/workshops/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden p-2 sm:pt-0">
      <Header />

      <main className="mx-auto flex min-h-fit w-full max-w-[1920px] flex-1 flex-col items-start justify-end gap-1 px-13 py-13 text-2xl text-emerge-blue uppercase sm:p-4 md:p-13">
        <p>Stay Tuned.</p>
        <p>
          More details on workshops will be announced <em>soon.</em>
        </p>
      </main>

      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
