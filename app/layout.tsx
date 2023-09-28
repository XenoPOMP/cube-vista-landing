import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { AppConstants } from '@/app/app.constants';
import Footer from '@/src/components/layout/Footer/Footer';
import Header from '@/src/components/layout/Header/Header';
import Providers from '@/src/components/layout/Providers/Providers';

import './globals.scss';

const mainFont = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${AppConstants.appName}`,
    default: AppConstants.appName,
  },
  description: 'Сайт Minecraft сервера Cube Vista',
  keywords: [
    'cube vista',
    'Cube Vista',
    'minecraft',
    'сервер',
    `сервер ${AppConstants.targetGameVersion}`,
    `pvp`,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={mainFont.className}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
