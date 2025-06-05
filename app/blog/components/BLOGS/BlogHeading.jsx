import React from 'react';
import blogs from '@/lib/dummyBlog.js';

export default function BlogHeading({ blogId }) {

    const blog = blogs.find((blog) => {
        if (blog.id == blogId) {
            return blog;
        }
        console.log("not found")
    })

    if (!blog) {
        return <div>Blog not found</div>;
    }
    const { title, date, content } = blog;

    return (
        <div className="flex flex-col items-center justify-between p-4 mt-5 border-b border-gray-300 w-[50vw] gap-5">
            <div>
                <h1 className="blog-title text-5xl">{title}</h1>
            </div>
            <div className="flex justify-between gap-5 w-[100%]">
                <h2 className="text-gray-700 text-sm">{date}</h2>
            </div>
        </div>
    )
}