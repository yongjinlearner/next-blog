'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-green-800 mt-10">
            <div className="flex items-center justify-between text-white p-4 text-lg">
                <Link href='/admin'><p>Yongjin Lee 2025</p></Link>
            <div className="logo-container flex justify-between">
                <a href="https://github.com/yongjinlearner" target='_blank'><Image 
                    src="/github.png"
                    alt="Github logo"
                    height={45}
                    width={45}
                /></a>
                <a href="https://www.linkedin.com/in/yongjin-lee-29b215252/" target='_blank'><Image 
                    src="/linkedin.png"
                    alt='Linkedin logo'
                    height={50}
                    width={50}
                /></a>
                <a href="https://www.instagram.com/yongjinleee/" target='_blank'><Image 
                    src="/instagram.png"
                    alt="Instagram logo"
                    height={50}
                    width={50}
                /></a>
            </div>
            </div>
        </footer>
    )
}