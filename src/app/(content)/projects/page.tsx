import { MDXContent } from "@content-collections/mdx/react";
import { allPages, allProjects } from "content-collections";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Projects() {
  const page = allPages.findLast(p => p.id == 'projects');
  
  if (!page) {
    notFound();
  }

  return <MDXContent code={page.mdx} components={{ Link: Link }} projects={allProjects} />;
}
