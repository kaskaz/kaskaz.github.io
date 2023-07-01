import React from 'react';

export default function Template({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-white bg-opacity-80 rounded-3xl max-h-[80vh] lg:h-fit w-3/4 lg:w-full overflow-y-scroll py-4 px-7">
      {children}
    </section>
  );
}
