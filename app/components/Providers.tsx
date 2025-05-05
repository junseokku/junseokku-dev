'use client';

import { useMounted } from '@/utils/useMounted';
import { ThemeProvider } from 'next-themes';
import { Fragment, PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  return <ClientOnlyThemeProvider>{children}</ClientOnlyThemeProvider>;
};

const ClientOnlyThemeProvider = ({ children }: PropsWithChildren) => {
  const mounted = useMounted();
  if (!mounted) return <Fragment>{children}</Fragment>;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
