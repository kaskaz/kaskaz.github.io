import Image from "next/image";

export default function Projects() {
  return (
		<>
			<h1 className="text-2xl font-bold mb-5">Projects</h1>
			<Image src="/images/coming-soon.gif" alt="coming-soon" width={624} height={232} className="w-40 ml-48 mb-5" />
		</>
  )
}
