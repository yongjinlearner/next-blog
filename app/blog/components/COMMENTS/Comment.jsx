import React, { useState, useEffect } from 'react';
import GifById from '@/app/blog/components/GIF/GifById';

export default function Comment({blogId}){
    
    const [comments, setComments] = useState([]);
        
        useEffect(() => {
            fetch('/api/comments', { cache: 'no-store' })
              .then(res => res.json())
              .then(data => { 
                  console.log('Fetched blogs in component:', data)
                  setComments(data); // <-- set directly
                  console.log('Comments:', data);
              });
            }, []); // Fetch blogs from the API and set the state to array of blogs

    const thisBlogsComments = comments.filter((comment) => comment.blogId == blogId);
    
    const sortedComments = thisBlogsComments.sort(
        (a, b) => new Date(b.time) - new Date(a.time) // newest first
    );

    const commentShow = sortedComments.map((comment, index) => {
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