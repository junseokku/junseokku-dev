import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Providers } from './components/Providers';
import { pretendard } from './lib/font';
import { GoogleAnalytics } from './lib/GoogleAnalytics';
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
