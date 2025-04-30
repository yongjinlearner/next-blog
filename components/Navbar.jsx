import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-(--header) p-4 px-10">
      <h1 className="text-3xl font-playwrite text-normal"><Link href="/">Yongjin Lee</Link></h1>
      <ul className="flex space-x-15">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}