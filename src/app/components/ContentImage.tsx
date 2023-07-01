import Image from "next/image";

type ContentImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

export default function ContentImage(props: ContentImageProps) {
  return (
    <div className="flex justify-center lg:justify-start">
      <Image {...props} className="w-40 lg:ml-48 mb-5" />
    </div>
  );
}
