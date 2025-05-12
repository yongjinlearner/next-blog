import React from 'react'

export default function GifSearch() {
    return (
        <div className="flex items-center justify-center gap-5 w-[50vw]">
            <input type="text" placeholder="Search GIFs..." className="border border-gray-300 rounded p-2 w-full" />
            <button className="bg-blue-500 text-white rounded p-2">Search</button>
        </div>
    )
}