import React from 'react';
import blogs from '@/lib/dummyBlog.js';

export default function BlogHeading({blogId}) {

    console.log("blogs", blogs);
    const blog = blogs.find((blog)=> {
        console.log("blogId", blogId);
        console.log("blogID", blog.id);
        if (blog.id == blogId) {
            return blog;
        }
        console.log("not found")
    })

    console.log("blog", blog);
    if (!blog) {
        return <div>Blog not found</div>;
    }
    const { title, date, content } = blog;

    return (
        <div className="flex items-center justify-between p-4 mt-5 border-b border-gray-300">
            <div className="flex flex-col w-[500px] gap-5">
                <h1 className="blog-title text-5xl">{title}</h1>
                <h2 className="text-gray-700 text-sm">{date}</h2>
            </div>
            <div className="flex flex-col">
                <p className="text-gray-700 text-sm">{Math.ceil(content.split(' ').length / 200)} min read</p>
                <p className="text-gray-700 text-sm">3 comments</p>
            </div>
        </div>
    )
}