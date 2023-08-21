import { allProjects } from "contentlayer/generated"
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    project: project._raw.flattenedPath,
  }))
}

export const generateMetadata = ({ params }: { params: { project: string } }) => {
  const project = allProjects.find((project) => project._raw.flattenedPath === params.project);
  return { title: project?.title || '' }
}

export default function Project({ params }: { params: { project: string } }) {
  const project = allProjects.find((project) => project._raw.flattenedPath === params.project)
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="mb-5">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <time dateTime={project.date}>{format(parseISO(project.date), 'LLLL d, yyyy')}</time>
      </div>
      <article
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: project.body.html }}
      />
		</>
  );
}
