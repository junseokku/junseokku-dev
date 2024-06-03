'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

/** system일 경우 추가 */
export const ToggleDarkMode = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }

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
