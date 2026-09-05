import { createFileRoute } from "@tanstack/react-router";

import { allMarkdowns } from "content-collections";
import type { Markdown } from "content-collections/types";

import { Footer } from "@/components/composites/Footer";
import { Header } from "@/components/composites/Header";

function getMarkdown(slug: string): Markdown {
  const markdown = allMarkdowns.find(
    (markdown) => markdown._meta.path === slug,
  );
  if (!markdown) {
    throw new Error(`content-collections: no markdown found for "${slug}"`);
  }
  return markdown;
}

const tracksMarkdown = getMarkdown("tracks");

export const Route = createFileRoute("/submissions/")({
  head: () => ({
    meta: [{ title: "Submissions • Emerge 2027" }],
  }),
  component: CallForSubmissions,
});

function CallForSubmissions() {
  return (
    <div className="h-dvh w-full p-2 sm:pt-0">
      <Header />
      <main>
        <section className="mx-auto max-w-3xl px-4 pt-16 pb-8">
          <h1 className="text-4xl font-medium">Call for Submissions</h1>
          <p className="mt-4 text-neutral-600">
            Emerge 2027 invites original research and practice-based
            contributions across the tracks below.
          </p>
        </section>
        <article
          className="mx-auto prose max-w-3xl px-4 pb-16 prose-neutral"
          dangerouslySetInnerHTML={{ __html: tracksMarkdown.html }}
        />
      </main>
      <Footer />
    </div>
  );
}
