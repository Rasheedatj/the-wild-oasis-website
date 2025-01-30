'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    id: 1,
    href: '/cabins',
    label: 'Cabins',
  },
  {
    id: 2,
    href: '/about',
    label: 'About',
  },
  {
    id: 3,
    href: '/account',
    label: 'Guest area',
  },
];

export default function Navigation() {
  const pathName = usePathname();
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`hover:text-accent-400 py-3 px-5 transition-colors ${
                pathName === link.href && 'bg-primary-900'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
