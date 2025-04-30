import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-6 bg-(--nav-color)'>
      <div>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <ul className='flex space-x-4 items-center space-x-20 text-xl font-bold'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="chat">Chatbot</Link></li>
      </ul>
    </nav>
  )
}