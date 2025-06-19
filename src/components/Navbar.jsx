'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const links = ['Graph', 'Customer', 'Cards', 'Stats'];

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 sticky top-0 z-50 shadow-md transition-colors duration-300">
      <h1 className="text-xl font-bold">Frontend Battle</h1>
      <ul className="hidden sm:flex gap-4 text-sm sm:text-base">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover:underline cursor-pointer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setDark(!dark)}
        className="ml-4 px-3 py-1 rounded text-sm"
      >
        Toggle {dark ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
}
