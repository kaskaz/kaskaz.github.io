import React from "react";
import Image from 'next/image';

export default function BackgoundedLayout({
  bgImgSrc, bgImgAlt, content
}: {
  bgImgSrc: string, bgImgAlt: string, content: React.ReactNode
}) {
  return (
    <div style={{height: '100vh', width: '100vw', position: 'relative', zIndex: 0}}>
      <Image
        priority
        src={bgImgSrc}
        alt={bgImgAlt}
        fill={true}
        style={{
          WebkitFilter: 'grayscale(80%)',
          objectFit: 'cover',
          zIndex: 0
        }}
      />
      <div style={{zIndex: 10}}>
        { content }
      </div>
    </div>
  );
}
