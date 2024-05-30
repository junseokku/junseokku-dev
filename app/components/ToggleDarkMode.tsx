'use client';

import { useState, useEffect } from 'react';

const Theme = {
  Light: 'light',
  Dark: 'dark',
  System: 'system',
} as const;

type ThemeKeys = (typeof Theme)[keyof typeof Theme];

/** system일 경우 추가 */
export const ToggleDarkMode = () => {
  const [theme, setTheme] = useState<ThemeKeys>(
    localStorage.getItem('theme') as ThemeKeys,
  );

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

  // SSR 문제로 다른 곳으로 옮기기
  useEffect(() => {
    if (!('theme' in localStorage)) {
      localStorage.setItem('theme', 'system');
    }

    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      return;
    }

    document.documentElement.classList.remove('dark');
    setTheme('light');
  }, []);

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};
