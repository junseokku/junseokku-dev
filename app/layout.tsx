import type { Metadata } from 'next';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Providers } from './components/Providers';
import { SEOConfig } from './constants/SEOConfig';
import { pretendard } from './libs/font';
import { GoogleAnalytics } from './libs/GoogleAnalytics';
import './styles/globals.css';

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
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
      {process.env.NODE_ENV !== 'development' && <GoogleAnalytics />}
    </html>
  );
}

export const metadata: Metadata = SEOConfig;
