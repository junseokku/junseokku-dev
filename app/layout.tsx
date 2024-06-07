import './styles/globals.css';
import type { Metadata } from 'next';
import { Header } from './components/Header';
import { pretendard } from './libs/font';
import { Providers } from './components/Providers';
import { SEOConfig } from './constants/SEOConfig';
import { GoogleAnlytics } from './libs/GoogleAnalytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressContentEditableWarning>
      <body>
        <Providers>
          <div className={`${pretendard.className} flex justify-center`}>
            <div className="max-md:px-6 max-w-3xl w-full py-8 flex flex-col gap-8">
              <Header />
              {children}
            </div>
          </div>
        </Providers>
      </body>
      <GoogleAnlytics />
    </html>
  );
}

export const metadata: Metadata = SEOConfig;
