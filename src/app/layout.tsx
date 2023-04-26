import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Naohiko's Blog",
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div>
        <h1>
          <Link href={'/'}>Naohiko's Blog</Link>
        </h1>
        <p>ようこそ私のテックブログへ</p>
        <br />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <br />
        <h3>Developed by Naohiko</h3>
      </div>
    </footer>
  );

  return (
    <html lang="ja">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
