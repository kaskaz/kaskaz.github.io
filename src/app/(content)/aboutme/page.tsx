import React from "react";

type About = {
	section: string
	description: (string | React.ReactNode)[]
}

const CONTENT: Array<About> = [
	{
		section: "Short bio",
		description: [
			"From Seixal (Lisbon's south side), Portugal",
			"Born in the 90's",
			<>
				Hobbyist trombone player (
					<a
						className="underline"
						href="https://www.instagram.com/sunglasses.dixieband"
						target="_blank"
					>
						check out my band!
					</a>
				)
			</>
		]
	},
	{
		section: "Skills",
		description: [
			"Programming: Java/Kotlin, Javascript/Typescript, HTML, CSS, AngularJs, React, Python, C, HDL",
			"Frameworks/Libraries: Spring, Hibernate, Mockito, JUnit, Docker, NextJs",
			"Message queueing: Kafka, NATS/JetStream",
			"Databases: MongoDB, Postgres",
			"Project management: JIRA, Confluence, Stash",
			"Tools/Infrastructure: ELK, Grafana, Datadog, SonarQube, Netlify, CircleCI, AWS (basic), Heroku"
		]
	},
	{
		section: "Interests",
		description: [
			"Keep working with Kotlin, React, CI/CD, Microservices, DDD, Event Sourcing, CQRS & BPMN",
			"Work on new trends like AI or Web3",
			"Learn new tech like Golang, Cloud services (AWS, GCP, etc), GraphQL, Kubernetes"
		]
	}
];

export default function AboutMe() {
  return (
		<>
			<h1 className="text-2xl font-bold mb-5">About me</h1>
			<ul className="text-lg">
				{CONTENT.map(entry => {
					return (
						<li className="mb-3">
							<h2 className="text-xl font-semibold">{entry.section}</h2>
							{entry.description.map(text => <p className="ml-5">{text}</p>)}
						</li>
					);
				})}
			</ul>
		</>
  );
};
