import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
 
const projects = defineCollection({
  name: "Project",
  directory: "src/projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    date: z.iso.date(),
    content: z.string()
  }),
  transform: async (project, context) => {
    return {
      ...project,
      url: `/projects/${project._meta.path}`,
      html: await compileMarkdown(context, project)
    };
  }
});

const pages = defineCollection({
  name: "Page",
  directory: "src/pages",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string()
  }),
  transform: async (page, context) => {
    return {
      ...page,
      id: page._meta.path, 
      mdx: await compileMDX(context, page)
    };
  }
});

export default defineConfig({
  collections: [projects, pages],
});