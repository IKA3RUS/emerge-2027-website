import {
  defineCollection,
  defineConfig,
  type Meta,
} from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";

const markdownSchema = z.object({
  content: z.string(),
});

export type Markdown = z.infer<typeof markdownSchema> & {
  html: string;
  _meta: Meta;
};

export default defineConfig({
  content: [
    defineCollection({
      name: "markdown",
      directory: "./src/data/markdown",
      include: "*.md",
      schema: markdownSchema,
      transform: async (doc, context): Promise<Markdown> => {
        const html = await compileMarkdown(context, doc);
        return { ...doc, html };
      },
    }),
  ] as const,
});
