import { commentComponentsExtension } from "@tanstack/markdown/extensions/comment-components";
import { parseMarkdown } from "@tanstack/markdown/parser";
import {
  Markdown as MarkdownContent,
  type MarkdownComponents,
} from "@tanstack/markdown/react";
import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/composites/Footer";
import { Header } from "@/components/composites/Header";

import tracksSource from "@/data/markdown/tracks.md?raw";

import { Track } from "./-components/Track";

const extensions = [
  commentComponentsExtension({
    transformComponent: (node) =>
      node.name === "track"
        ? { ...node, tagName: "conference-track", properties: node.attributes }
        : node,
  }),
];

const tracksDocument = parseMarkdown(tracksSource, { extensions });

const markdownComponents = {
  h2: (props) => (
    <h2
      className="px-4 font-medium text-emerge-blue select-none lg:px-12"
      {...props}
    />
  ),
  "conference-track": Track,
} satisfies MarkdownComponents;

export const Route = createFileRoute("/call-for-papers/")({
  head: () => ({
    meta: [{ title: "Submissions • Emerge 2027" }],
  }),
  component: CallForSubmissions,
});

function CallForSubmissions() {
  return (
    <div className="w-full p-2 sm:pt-0">
      <Header />
      <main className="mt-28">
        <section className="mx-auto flex w-full max-w-200 flex-col gap-4 p-4 pt-0 transition-[padding] lg:p-0">
          <h1 className="text-5xl font-medium tracking-tight lowercase md:text-7xl">
            Call for papers
          </h1>
          <p>
            Emerge 2027 invites original research and practice-based
            contributions across the tracks below.
          </p>
        </section>
        <article className="mt-12 flex w-full flex-col gap-2">
          <MarkdownContent components={markdownComponents}>
            {tracksDocument}
          </MarkdownContent>
        </article>
      </main>
      <Footer />
    </div>
  );
}
