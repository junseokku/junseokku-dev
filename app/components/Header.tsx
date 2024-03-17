import Link from "next/link";

const MENU_ITEMS = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
];

export function Header() {
    return (
        <header className="flex flex-row gap-2 justify-between">
            <Link href={'/'} className="mb-8 text-center text-2xl font-bold">
                Junseokku
            </Link>
            <div className="flex flex-row gap-2">
                {MENU_ITEMS.map(({ name, href }, idx) => (
                    <Link href={href}>{name}</Link>
                ))}
            </div>
        </header>
    );
}