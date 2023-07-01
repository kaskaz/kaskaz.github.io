import ContentImage from "@/app/components/ContentImage";

export default function Projects() {
  return (
		<>
			<h1 className="text-2xl font-bold mb-5">Projects</h1>
			<ContentImage src={"/images/coming-soon.gif"} alt={"Coming soon"} width={624} height={232} />
		</>
  )
}
