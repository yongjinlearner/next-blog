'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socialClick = () => {
    console.log("clicked")
}

export default function Footer() {
    return (
        <footer className="bg-green-800">
            <div>yongjin</div>
            <div className="socials" onClick={socialClick}>
                click me!
            </div>
        </footer>
    )
}