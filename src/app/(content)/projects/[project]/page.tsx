import { MDXContent } from "@content-collections/mdx/react";
import { allPages, allProjects } from "content-collections";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    project: project._meta.path,
  }))
}

export const generateMetadata = ({ params }: { params: { project: string } }) => {
  const project = allProjects.find((project) => project._meta.path === params.project);
  return { title: project?.title || '' }
}

export default function Project({ params }: { params: { project: string } }) {
  const project = allProjects.find((project) => project._meta.path === params.project);
  const page = allPages.findLast(p => p.id == 'project');
  
  if (!project || !page) {
    notFound();
  }

  return <MDXContent code={page.mdx} project={project} />;
}
