import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
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
 
export default defineConfig({
  collections: [projects],
});