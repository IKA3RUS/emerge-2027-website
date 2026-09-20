import { Markdown, type MarkdownComponents } from "@tanstack/markdown/react";
import { createFileRoute } from "@tanstack/react-router";

import { CMTAcknowledgement } from "@/components/layout/CMTAcknowledgement";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import submissionsSource from "@/data/markdown/submissions.md?raw";

const markdownComponents = {
  a: (props) => {
    const external = props.href?.startsWith("http") ?? false;
    return (
      <a
        {...props}
        target={external ? "_blank" : props.target}
        rel={external ? "noopener noreferrer" : props.rel}
      />
    );
  },
} satisfies MarkdownComponents;

export const Route = createFileRoute("/submissions/")({
  head: () => ({
    meta: [{ title: "Submissions • Emerge 2027" }],
  }),
  component: Submissions,
});

function Submissions() {
  return (
    <div className="w-full p-2 sm:pt-0">
      <Header />
      <main className="mt-28 pb-28">
        <section className="mx-auto flex w-full max-w-200 flex-col gap-4 p-4 pt-0 transition-[padding] lg:p-0">
          <h1 className="text-5xl font-medium tracking-tight lowercase md:text-7xl">
            Submissions
          </h1>
        </section>
        <article className="mx-auto mt-12 flex w-full max-w-200 flex-col gap-6 p-4 pt-0 transition-[padding] lg:p-0 [&_a]:text-emerge-blue [&_a]:underline [&_a]:underline-offset-2 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-emerge-blue [&_h2]:uppercase [&_h2]:select-none [&_h3]:text-base [&_h3]:font-medium [&_h3]:select-none [&_li]:leading-relaxed [&_li]:marker:text-emerge-blue [&_p]:leading-relaxed [&_strong]:font-medium [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1 [&_ul]:pl-5">
          <Markdown components={markdownComponents}>
            {submissionsSource}
          </Markdown>
        </article>
      </main>
      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
