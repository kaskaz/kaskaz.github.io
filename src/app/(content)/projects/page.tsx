import { allProjects } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Projects() {
	const projects = allProjects.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
		<>
			<h1 className="text-2xl font-bold mb-5">Projects</h1>
			{projects.map((project, key) => {
				return (
					<div key={key} className="mb-5">
						<Link href={project.url} className="text-xl font-semibold">{project.title}</Link>
						<time className="block" dateTime={project.date}>{format(parseISO(project.date), 'LLLL d, yyyy')}</time>
					</div>
				)
			})}
		</>
  )
}
