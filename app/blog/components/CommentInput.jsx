'use client'
import React, {useState, useEffect} from 'react';
import uploadComment from '@/actions/uploadComment';
import TrendingGifs from '@/app/blog/components/TrendingGif';
import { Grid } from '@giphy/react-components'

export default function CommentInput({ blogId }) {

    const [showGif, setShowGif] = useState(false)




    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData(event.target);

        try {
            await uploadComment(formData); // Call the uploadComment action
            window.location.reload(); // Automatically reload the page
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const loadGifForm = async (event) => {
        event.preventDefault(); // Prevent default button behavior
        console.log('Loading GIF form...');
        try {
            fetch('/api/giphy')
                .then((response) => response.json())
                .then((data) => {
                    console.log('GIFs:', data);
                })
                .catch((error) => {
                    console.error('Error fetching GIFs:', error);
                });
        } catch (error) {
            console.error('Error loading GIF form:', error);
        }
    }

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
                required
            />
            <button onClick={handleGIF} className="bg-gray-200 text-gray-700 p-2 rounded-md">
                GIF
            </button>
            {showGif && <TrendingGifs/>}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                Submit Comment
            </button>
        </form>
        </div>
    );
}