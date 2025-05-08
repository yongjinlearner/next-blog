import React from 'react';
import GifById from '@/app/blog/components/GIF/GifById';
import showComments from '@/lib/commentList'; 

export default async function Comment({blogId}){
    
    const listOfComments = await showComments(blogId);

    const comments = listOfComments.filter((comment) => comment.blogId == blogId);
    
    const commentShow = comments.map((comment, index) => {
        return (
            <div key={index} className="flex flex-col gap-2 p-4 border-b border-gray-300 w-[40vw]">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{comment.nickname}</h3>
                    {/*<p className="text-sm text-gray-500">{comment.time}</p>*/}
                </div>
                <p className="text-gray-700">{comment.comment}</p>
                <GifById gifId={comment.gifId} />
            </div>
        )
    })

    return (
        <div className="flex flex-col items-center gap-5">
            {commentShow}
        </div>
    )
}