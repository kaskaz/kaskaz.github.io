import ContentImage from "@/app/components/ContentImage";

export default function Education() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Education</h1>
      <ContentImage src={"/images/logo-isel.png"} alt={"ISEL"} width={309} height={186} />
      <ul className="text-lg">
				<li className="mb-3">
          <h2 className="text-xl font-semibold">Licentiate degree in Electronics, Computer Systems and Telecommunications</h2>
          <p className="ml-5">Final project in Vehicle-To-Vehicle/Infrastructure Communications</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Master degree in Computer Systems Networking and Telecommunications</h2>
          <p className="ml-5">Master thesis in Antenna Design</p>
          <p className="ml-5">R&amp;D at GIEST focused in <em>Near Field Communication</em> and <em>Intelligent Transportation Systems</em></p>
          <p className="ml-5">Co-founder at IEEE ISEL Student Branch</p>
        </li>
			</ul>
    </>
  )
}
