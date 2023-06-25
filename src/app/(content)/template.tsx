import React from 'react';

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-white bg-opacity-70 rounded-3xl h-fit w-full py-4 px-7">
      {children}
    </section>
  );
}
