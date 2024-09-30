'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/persons">Personnes</Link></li>
        <li><Link href="/animals">Animaux</Link></li>
      </ul>
      <style jsx>{`
        nav {
          background-color: #EEE;
          padding: 1rem;
        }
        ul {
          list-style: none;
          display: flex;
          gap: 1rem;
        }
      `}</style>
    </nav>
  );
}