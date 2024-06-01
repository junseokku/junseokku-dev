import { ToggleDarkMode } from 'app/components/ToggleDarkMode';
import Link from 'next/link';

const MENU_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
];

export function Header() {
  return (
    <header className="flex flex-row gap-1 justify-end">
      <nav className="flex flex-row gap-2">
        {MENU_ITEMS.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="px-2 py-1 rounded-lg hover:bg-black hover:bg-opacity-20"
          >
            {name}
          </Link>
        ))}
        <ToggleDarkMode />
      </nav>
    </header>
  );
}
