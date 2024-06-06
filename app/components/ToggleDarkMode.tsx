'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

/** TODO - system일 경우 추가, 드롭다운 형식 변경 */
export const ToggleDarkMode = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }

    setTheme('dark');
  };

  // TODO - mounted로 임시로 아이콘을 가리는게 아닌 script로 상태 주입할 수 있도록 변경하기
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-[#EDEDED] dark:hover:bg-opacity-10 px-2 py-1 rounded-lg"
    >
      {mounted ? (
        <>
          {theme === 'dark' ? (
            <MoonIcon width={18} height={18} />
          ) : (
            <SunIcon width={18} height={18} />
          )}
        </>
      ) : (
        <SunIcon width={18} height={18} className="opacity-0" />
      )}
    </button>
  );
};
