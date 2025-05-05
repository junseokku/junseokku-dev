import { Metadata } from 'next';
import { myInfo } from './myInfo';

export const SEOConfig: Metadata = {
  title: myInfo.blog.name,
  description: myInfo.description,
  metadataBase: new URL(myInfo.blog.url),
  alternates: { canonical: myInfo.blog.url },
  viewport: { width: 'device-width', initialScale: 1 },
  keywords: ['junseokku', 'blog', 'junseokku.dev', '이준석'],
  referrer: 'origin-when-cross-origin',
  creator: myInfo.name,
  publisher: myInfo.name,
  authors: [{ name: myInfo.nickname }, { url: myInfo.blog.url }],
  twitter: {
    title: myInfo.blog.name,
    description: myInfo.description,
    card: 'summary',
    images: [
      {
        url: myInfo.thumbnail,
        alt: `${myInfo.nickname} profile image`,
      },
    ],
  },
  openGraph: {
    title: myInfo.blog.name,
    description: myInfo.description,
    url: 'https://junseokku.dev',
    locale: 'ko_KR',
    images: [
      {
        url: myInfo.thumbnail,
        alt: `${myInfo.nickname} profile image`,
      },
    ],
  },
};
