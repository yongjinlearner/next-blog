'use client'
import React, { useState, useEffect, use } from 'react';

import BlogHeading from '@/app/blog/components/BLOGS/BlogHeading';
import Comment from '@/app/blog/components/COMMENTS/Comment';
import CommentInput from '@/app/blog/components/COMMENTS/CommentInput';

import parseBlogContent from '@/actions/blog/parseBlogContent';
import showComments from '@/lib/commentList'

export default function Page(props) {
    const [blogs, setBlogs] = useState([]);
    
        useEffect(() => {
          fetch('/api/blogs')
            .then(res => res.json())
            .then(data =>{ 
                console.log('Fetched blogs in component:', data)
                setBlogs(data)});
        }, []);
    const { params } = props;
    const slug = params.slug;
    console.log('Slug:', slug);

    const blogContent = blogs.find((blog) => blog._id === slug);

    return (
        <div className='flex flex-col items-center gap-5 min-h-screen'>
            <BlogHeading blogId={slug} />
            <div className="blog-content w-[50vw]">
                {blogContent ? (
                    <div className="flex flex-col gap-5">
                        {parseBlogContent(blogContent.content)}
                    </div>
                ) : (
                    <p>Blog not found</p>
                )}
            </div>
            <CommentInput blogId={slug} />
            <Comment blogId={slug} />
        </div>
    );
}