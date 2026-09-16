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

      <p className="flex min-h-0 flex-1 items-end justify-center gap-1 text-2xl text-emerge-blue uppercase max-sm:mt-28">
        Stay Tuned.
        <br />
        More details on workshops will be announced <em>soon.</em>
      </p>

      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
