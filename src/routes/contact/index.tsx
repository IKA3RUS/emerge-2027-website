import { useRef } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { CMTAcknowledgement } from "@/components/layout/CMTAcknowledgement";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { contacts } from "@/data/contacts";

import { ContactCard } from "./-components/ContactCard";

export const Route = createFileRoute("/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  const viewportRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full flex-col overflow-hidden p-2 sm:pt-0">
      <div ref={viewportRef} className="pointer-events-none fixed inset-0" />

      <Header />

      <main className="mx-auto flex min-h-[calc(100dvh-20px)] w-full flex-col items-center justify-center gap-4 sm:min-h-[calc(100dvh-100px)]">
        <h1 className="text-7xl text-slate-300">contacts</h1>
        <p className="-my-2 text-sm text-slate-300">
          Have questions? We're here to help.
        </p>
        <div className="flex flex-col gap-4 xl:flex-row">
          {contacts.map(({ name, phone, email }) => (
            <ContactCard
              key={email}
              name={name}
              phone={phone}
              email={email}
              dragConstraints={viewportRef}
            />
          ))}
        </div>
      </main>

      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
