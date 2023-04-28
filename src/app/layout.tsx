import Link from 'next/link';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

const siteName = "Naohiko's Blog";
const description = 'techblog by naohiko';
const url = 'https://nextjs13-blog-m0q4i0mnd-naohiko560.vercel.app/';
const ogImageUrl = 'images/home_page.jpg';

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description: description,
    url: url,
    siteName: siteName,
    images: [
      {
        url: ogImageUrl,
        width: 1800,
        height: 1600,
        alt: '当サイトのOG画像',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: description,
    site: '@naohiko_blog',
    creator: '@naohiko_blog',
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          alt="logo"
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
        />
        <Link href={'/'}>
          <h1 className="text-3xl text-white font-bold mt-3">Naohiko's Blog</h1>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-9 mb-3 py-5 text-center text-slate-400">
        <h3>Developed by Naohiko</h3>
      </div>
    </footer>
  );

  return (
    <html lang="ja">
      <body>
        <div className="mx-auto max-w-3xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
