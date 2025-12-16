import ContentImage from "@/app/components/ContentImage";

import { allPages } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

export default function Education() {
  const page = allPages.findLast(p => p.id == 'education');

  if (!page) {
    notFound();
  }

  return <MDXContent code={page.mdx} components={{ ContentImage: ContentImage }} />;
}
