import React from 'react';
import uploadComment from '@/actions/uploadComment';

export default function CommentInput({ blogId }) {
    
    return (
        <form action={uploadComment(blogId)} className="flex flex-col gap-3 w-[50vw]">
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
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                Submit Comment
            </button>
        </form>
    );
}