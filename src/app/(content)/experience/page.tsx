import ContentImage from "@/app/components/ContentImage";
import CONTENT, { CardProps } from "@/content/pages/experiences";
import { MDXContent } from "@content-collections/mdx/react";
import { allPages } from "content-collections";
import { notFound } from "next/navigation";

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
  const page = allPages.findLast(p => p.id == 'experience');

  if (!page) {
    notFound();
  }

  return <MDXContent code={page.mdx} components={{ ContentImage: ContentImage, Card: Card }} experiences={CONTENT} />;
}
