import Link from 'next/link';
import '../styles/globals.css';
import Image from 'next/image';
import GoogleAnalytics from '../components/GoogleAnalytics';
import type { Metadata } from 'next';

const siteName = 'N-hack-blog';
const description = 'techblog by naohiko';
const url = 'https://nextjs13-blog-m0q4i0mnd-naohiko560.vercel.app/';
const ogImageUrl = 'images/home_page.jpg';

export const metadata: Metadata = {
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
      <div className="flex items-center space-x-5 my-5">
        {/* <div>
          <Image
            alt="logo"
            src="/logo.png"
            width={40}
            height={40}
            className="mx-auto"
          />
        </div> */}
        <Link href={'/'} className="md:hover:text-gray-600">
          <h1 className="text-3xl font-bold">{siteName}</h1>
        </Link>
      </div>
      <nav className="my-5 hidden md:block">
        <ul className="flex space-x-5">
          <li className="">
            <a
              href="/"
              className="hover:bg-blue-300 hover:text-white rounded-md px-3 py-2 font-medium"
            >
              ホーム
            </a>
          </li>
          <li className="">
            <a
              href="/profile"
              className="hover:bg-blue-300 hover:text-white rounded-md px-3 py-2 font-medium"
            >
              プロフィール
            </a>
          </li>
          <li className="">
            <a
              href="/contact"
              className="hover:bg-blue-300 hover:text-white rounded-md px-3 py-2 font-medium"
            >
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
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
      <GoogleAnalytics />
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
