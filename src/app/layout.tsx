import React from 'react';
import './globals.css'
import { Titillium_Web } from 'next/font/google'
import Image from 'next/image';
import BackgroundedLayout from './components/BackgroundedLayout';
import Script from 'next/script';

const font = Titillium_Web({
  weight: ['200', '300', '400', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-main'
});

export const metadata = {
  title: 'Nuno Cascalho',
  description: 'My personal webpage created with NextJs and Tailwind CSS',
}

type SocialLinkProps = {
  link: string,
  imgSrc: string,
  imgAlt: string,
  width: number,
  height: number
}

const NAV_LINKS: Array<{ name: string, link: string }> = [
  {name: "About me", link: "/aboutme"},
  {name: "Education", link: "/education"},
  {name: "Experience", link: "/experience"},
  {name: "Projects", link: "/projects"}
];

const SOCIAL_LINKS: Array<SocialLinkProps> = [
  {link: "https://github.com/kaskaz", imgSrc: "/images/github.png", imgAlt: "github", width: 64, height: 64 },
  {link: "https://www.linkedin.com/in/nunocascalho/", imgSrc: "/images/linkedin.png", imgAlt: "linkedin", width: 77, height: 66 }
];

const MapIcon = ({ className }: {className: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

const NavButton = ({name, link}: {name: string, link: string}) => {
  return (
    <a
      className="w-fit whitespace-nowrap p-1.5 bg-white bg-opacity-70 hover:bg-opacity-90 rounded font-semibold hover:text-gray-700"
      role="button"
      href={link}
    >
      {name}
    </a>
  );
};

const SocialLink = ({link, imgSrc, imgAlt, width, height}: SocialLinkProps) => {
  return (
    <a href={link} target="_blank" className='opacity-70 hover:opacity-90 w-8'>
      <Image src={imgSrc} alt={imgAlt} width={width} height={height} />
    </a>
  );
};

const Header = () => {
  return (
    <header>
      <a
        href='https://goo.gl/maps/EDsfKxnufbCRsVbR6'
        target='_blank'
        className='fixed top-3.5 right-4 flex space-x-2 text-white bg-black bg-opacity-50 rounded p-1.5'
      >
        <MapIcon className='w-4 h-4 lg:w-6 lg:h-6'/>
        <span className='text-xs lg:text-base'>Sobral da Adiça, Moura (Portugal)</span>
      </a>
    </header>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="fixed lg:flex top-16 lg:top-28 h-full w-full lg:ml-20 lg:space-x-48 space-y-10 lg:space-y-0 text-gray-500">
      <div className="flex-col content-start space-y-3">
        <div>
          <a href="/" className='block m-auto w-fit h-fit rounded-full'>
            <Image
              priority
              src="/images/me.jpg"
              alt="me"
              width={4616} height={3462}
              className="rounded-full border border-solid border-slate-300 w-36 h-36 lg:w-52 lg:h-52 object-cover object-left"
            />
          </a>
        </div>
        <div className="flex justify-center space-x-2">
          {NAV_LINKS.map((props,i) => <NavButton key={i} {...props} />)}
        </div>
        <div className="flex justify-center space-x-2 h-8 items-center">
          {SOCIAL_LINKS.map((props,i) => <SocialLink key={i} {...props} />)}
        </div>
      </div>
      <div className='flex justify-center h-full w-full'>
        {children}
      </div>
    </main>
  );
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='select-none'>
      <body className={font.className}>
        <BackgroundedLayout
          bgImgSrc={'/images/background.jpg'}
          bgImgAlt={'Backgound'}
          content={(
            <>
              <Header />
              <Content>
                {children}
              </Content>
            </>
          )}          
        />
      </body>
      <Script
        defer
        type='text/javascript'
        src='https://api.pirsch.io/pirsch.js'
        id='pirschjs'
        data-code={process.env.NEXT_PUBLIC_PIRSCH_ID || ''}
      />
    </html>
  );
}
