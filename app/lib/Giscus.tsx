'use client';

import { createRef, useEffect } from 'react';
import { myInfo } from 'app/constants/myInfo';
import { useTheme } from 'next-themes';

export const Giscus = () => {
  const ref = createRef<HTMLDivElement>();
  const { resolvedTheme: theme } = useTheme();

  const giscusTheme = theme === 'dark' ? 'transparent_dark' : 'light';

  useEffect(() => {
    const currentRef = ref.current;
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    const config = {
      src: 'https://giscus.app/client.js',
      'data-repo': myInfo.comment.repo,
      'data-repo-id': myInfo.comment.repoId,
      'data-category-id': myInfo.comment.categoryId,
      'data-category': 'General',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': giscusTheme,
      'data-lang': 'ko',
      'data-loading': 'lazy',
      crossOrigin: 'anonymous',
      async: true,
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, `${value}`);
    });

    currentRef?.appendChild(script);

    return () => {
      currentRef?.childNodes.forEach((children) => {
        currentRef?.removeChild(children);
      });
    };
  }, [giscusTheme, ref, theme]);

  useEffect(() => {
    const iframe: HTMLIFrameElement | null = document.querySelector(
      'iframe.giscus-frame',
    );
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: giscusTheme,
          },
        },
      },
      'https://giscus.app',
    );
  }, [giscusTheme, theme]);

  return <div className="giscus" ref={ref} />;
};
