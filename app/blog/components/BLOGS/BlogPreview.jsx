import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPreview({ index, blog }) {
    return (
        <div
            key={index}
            className="flex justify-center items-center bg-gray-300 shadow-md rounded-lg p-4 border w-[50vw] animate-slide-in-left-hidden"
            style={{
                animationDelay: `${index * 0.2}s`, // Staggered delay for each blog
                animationFillMode: 'forwards', // Ensures the animation stays in its final position
            }}
        >
            {/* Image container */}
            <div className="w-[200px] h-[200px] relative overflow-hidden rounded-md">
                <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    className="object-cover"
                />
            </div>
        
            {/* Text content */}
            <div className="flex flex-col ml-4 flex-1 overflow-hidden text-left">
                <h2 className="text-xl font-bold truncate">{blog.title}</h2>
                <h2 className="text-gray-700 text-sm line-clamp-3">{blog.date?.slice(0, 10)}</h2>
                <p className="text-gray-700 text-sm line-clamp-3">{blog.preview}</p>
                <Link href={`/blog/${blog._id}`} className="text-blue-500 hover:underline text-sm">
                    Read more
                </Link>
            </div>
        </div>
    )
}