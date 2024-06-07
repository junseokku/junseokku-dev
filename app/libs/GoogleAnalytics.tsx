import Script from 'next/script';

export const GoogleAnlytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P75MSZTKWZ"
      />
      <Script id="google-anlytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-P75MSZTKWZ', {
            page_path: window.location.pathname,
          });
          `}
      </Script>
    </>
  );
};
