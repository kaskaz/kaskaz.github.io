import ContentImage from "@/app/components/ContentImage";
import { CONTENT } from "@/pages/abouts";
import { MDXContent } from "@content-collections/mdx/react";
import { allPages } from "content-collections";
import { notFound } from "next/navigation";

export default function AboutMe() {
const page = allPages.findLast(p => p.id == 'aboutme');

  if (!page) {
    notFound();
  }

  return <MDXContent code={page.mdx} components={{ ContentImage: ContentImage }} abouts={CONTENT} />;
};
