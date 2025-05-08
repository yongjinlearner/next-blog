'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import typeWriter from '@/actions/general/typeWriter'

export default function Home() {
  const text = typeWriter()

  return (
    <div className="flex items-center justify-center min-h-screen gap-10 shadow-2xl shadow-black">
      <div>
        <Image
          src="/home-photo.jpeg"
          alt="Hero Image"
          width={300}
          height={200}
          className="rounded-full shadow-2xl hover:shadow-black transition-shadow duration-1000 ease-in-out"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-5">
        <h1 className="text-5xl font-serif">Yongjin Lee</h1>
        <h2>{text}</h2>
        <blockquote className="text-center text-gray-400 italic">
          <p>"Solving problems with innovative digital solutions"</p>
        </blockquote>
        <div className="home-buttons flex gap-4">
        <Link href="/about"><button className="btn-primary">More about me</button></Link>
        <Link href="/chatbot"><button className="btn-primary">ChatYJT</button></Link>
        </div>
      </div>
    </div>
  );
}
