import Image from "next/image";

export default function Experience() {
  return (
		<>
			<h1 className="text-2xl font-bold mb-5">Experience</h1>
			<Image src="/images/logo-novabase.svg" alt="logo-novabase" width={1130} height={350} className="w-40 ml-48 mb-5" />
			<ul className="text-lg">
				<li className="mb-3">
          <h2 className="text-xl font-semibold">Quality Assurance Automation Developer</h2>
          <p className="ml-5">At Wizzio (Novabase product)</p>
          <p className="ml-5">Webservices and Browser test automation</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Software Developer</h2>
          <p className="ml-5">At Bank Opening Account Platform</p>
          <p className="ml-5">Production support, application maintenance and development</p>
        </li>
			</ul>
		</>
  )
}
