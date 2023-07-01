import ContentImage from "@/app/components/ContentImage";

type CardPositionProps = {
  title: string,
  description: string[]
}

type CardProps = {
  imgSrc: string
  imgAlt: string
  imgHeight: number
  imgWidth: number
  positions: CardPositionProps[]
}

const CONTENT: Array<CardProps> = [
  {
    imgSrc: "/images/logo-clairify.png",
    imgAlt: "Clairify",
    imgHeight: 1000,
    imgWidth: 1000,
    positions: [
      {
        title: "Dec. '21 to current as Backend Software Developer",
        description: [
          "Development and maintenance of the Public API and new services",
          "Backend services with Springboot, Kotlin, Hibernate and Postgres",
          "Use of NATS/JetStream to exchange messages between services",
          "Use of Grafana to monitor the whole Dockerized system",
          "Use of Grafana as headless service to generate alerts based on IAQ measurements"
        ]
      }
    ]
  },
  {
    imgSrc: "/images/logo-vwds.png",
    imgAlt: "VWDS",
    imgHeight: 1773,
    imgWidth: 7901,
    positions: [
      {
        title: "Jun. '20 to Nov. '21 at MAN Digital Hub as Fullstack Software Developer",
        description: [
          "Development of electric vehicles and fleet management/monitoring web platform",
          "Backend microservices with Kotlin, AWS, Docker, Kafka, Postgresql",
          "Frontend with React (w/ Redux)",
          "Agile development",
        ]
      }
    ]
  },
  {
    imgSrc: "/images/logo-novabase.svg",
    imgAlt: "Novabase",
    imgHeight: 350,
    imgWidth: 1130,
    positions: [
      {
        title: "Dec. '19 to May '20 at Bankinter as Backend Software Developer",
        description: [
          "Development of the bank opening account mobile platform",
          "Develop gateway services to support Android and iOS applications",
          "Backend with Java and  SOAP services integration",
          "Test automation and documentation of developed services",
        ]
      },
      {
        title: "Sep. '18 to Nov. '19 at CTT Bank as Fullstack Software Developer",
        description: [
          "Development and maintainance of the bank opening account platform",
          "REST and SOAP services integration",
          "Backend with Java (Maven project), Hibernate and SQL Server database",
          "Frontend with AngularJs (browser) and C#/XAML (Microsoft Surface)",
        ]
      },
      {
        title: "Oct. '17 to Sep. '18 at Wizzio project as QA Test Automation Developer",
        description: [
          "Test automation for microservices & web browser",
          "Scripting with Java (Maven), TestNg, REST-assured and Cucumber",
          "REST and SOAP for microservices",
          "Selenium (web driver) for web browser",
          "Develop Maven plugins for test execution tasks",
          "TestRail (gurock) for test management",
        ]
      },
    ]
  },
];

const Card = ({imgSrc, imgAlt, imgHeight, imgWidth, positions}: CardProps) => {
  return (
    <div className="my-10">
      <ContentImage src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      <ul className="text-lg">
        {positions.map((p, i) => {
          return (
            <li key={i} className="mb-3">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              {p.description.map((text, k) =>  <p key={k} className="ml-5">{text}</p>)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function Experience() {
  return (
		<>
			<h1 className="text-2xl font-bold mb-5">Experience</h1>
      {CONTENT.map((entry, i) => {
        return (
          <Card
            key={i}
            imgSrc={entry.imgSrc}
            imgAlt={entry.imgAlt}
            imgHeight={entry.imgHeight} 
            imgWidth={entry.imgWidth}
            positions={entry.positions}        
          />          
        );
      })}
		</>
  )
}
