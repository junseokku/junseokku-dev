'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useState, Dispatch, SetStateAction, useLayoutEffect } from 'react';

const Theme = {
  Light: 'light',
  Dark: 'dark',
  System: 'system',
} as const;

type ThemeKeys = (typeof Theme)[keyof typeof Theme];

/** system일 경우 추가 */
export const ToggleDarkMode = () => {
  const [theme, setTheme] = useState<ThemeKeys>('system');

  useDarkModeInitiailizer(setTheme);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
      return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-[#EDEDED] dark:hover:bg-opacity-10 px-2 py-1 rounded-lg"
    >
      {theme === 'dark' ? (
        <MoonIcon width={18} height={18} />
      ) : (
        <SunIcon width={18} height={18} />
      )}
    </button>
  );
};

const useDarkModeInitiailizer = (
  setTheme: Dispatch<SetStateAction<ThemeKeys>>,
) => {
  // SSR 문제로 다른 곳으로 옮기기
  useLayoutEffect?.(() => {
    if (!('theme' in localStorage)) {
      localStorage.setItem('theme', 'system');
      return;
    }

    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      return;
    }
  }, [setTheme]);
};
