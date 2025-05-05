import React from 'react';
import BlogHeading from '@/app/blog/components/BlogHeading';
import blogs from '@/lib/dummyBlog.js';

export default async function BlogPage({ params }) {
    const { slug } = params;

    // Find the blog by its ID
    const blogContent = blogs.find((blog) => blog.id == slug);

    return (
        <div className='flex flex-col items-center gap-5 min-h-screen'>
            <BlogHeading blogId={slug} />
            <div className="blog-content w-[30%]">
                {/* Render the blog content */}
                {blogContent ? (
                    <p>{blogContent.content}</p>
                ) : (
                    <p>Blog not found</p>
                )}
            </div>
        </div>
    );
}