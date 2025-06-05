'use client'
import React, { useState, useContext } from 'react';
import GifInterface from '@/app/blog/components/GIF/GifInterface'
import {GifContext} from '@/lib/GifContext'

export default function CommentInput({ blogId }) {
    const [showGif, setShowGif] = useState(false)
    const { gifId } = useContext(GifContext)

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData(event.target);

          await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    };

    const handleGIF = (event) => {
        event.preventDefault(); // Prevent default button behavior
        setShowGif(!showGif);
        console.log('GIF button clicked');
    }

    return (
        <div className="flex flex-col items-center gap-5 border-t-2 w-[50vw] border-gray-300 pt-5">
            <h2 className="text-2xl font-bold font-serif">Leave a Comment</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[30vw]">
                <input
                    type="hidden"
                    name="blogId"
                    value={blogId}
                />
                <input
                    type="text"
                    name="nickname"
                    placeholder="Nickname"
                    className="border border-gray-300 p-2 rounded-md"
                    required
                />
                <textarea
                    name="comment"
                    placeholder="Write your comment..."
                    className="border border-gray-300 p-2 rounded-md"
                />
                <button onClick={handleGIF} className="bg-gray-200 text-gray-700 p-2 rounded-md">
                    GIF
                </button>
                <input
                    type="hidden"
                    name="gifId"
                    value={gifId ? gifId : ''}
                >
                </input>
                {showGif && <GifInterface className="w-[50vw]"/>}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    Submit Comment
                </button>
            </form>
        </div>
    );
}