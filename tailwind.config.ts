import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textColor: 'var(--text-color)',
        backgroundColor: 'var(--background-color)',
        borderColor: 'var(--border-color)',
        textGrayColor: 'var(--text-gray-color)',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
