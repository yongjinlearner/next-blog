import React from 'react';

// retrieve comments from the database
import fakeComments from '@/lib/fakeComments'; // fake comments for testing

export default function Comment({blogId}){
    const comments = fakeComments.filter((comment) => comment.postId == blogId);
    const commentShow = comments.map((comment, index) => {
        return (
            <div key={index} className="flex flex-col gap-2 p-4 border-b border-gray-300 w-[40vw]">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{comment.name}</h3>
                    <p className="text-sm text-gray-500">{comment.time}</p>
                </div>
                <p className="text-gray-700">{comment.comment}</p>
            </div>
        )
    })

    return (
        <div className="flex flex-col items-center gap-5">
            {commentShow}
        </div>
    )
}