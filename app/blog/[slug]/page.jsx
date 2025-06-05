'use client'
import React, { useState, useEffect, use } from 'react';

import BlogHeading from '@/app/blog/components/BLOGS/BlogHeading';
import CommentInput from '@/app/blog/components/COMMENTS/CommentInput';
import Comment from '@/app/blog/components/COMMENTS/Comment';
import parseBlogContent from '@/actions/blog/parseBlogContent';

export default function Page(props) {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('/api/blogs', { cache: 'no-store' })
          .then(res => res.json())
          .then(data => { 
              console.log('Fetched blogs in component:', data)
              setBlogs(data); // <-- set directly
              console.log('Blogs:', data);
          });
        }, []); // Fetch blogs from the API and set the state to array of blogs

    const { params } = props;
    const slug = params.slug; // Extract the slug from the URL parameters
    console.log('Slug:', slug);

    const blogContent = blogs.find((blog) => {
        console.log('Checking blog:', blog._id, 'against slug:', slug);
        console.log('Slug matches:', blog._id === slug);
        return blog._id === slug
    }); // Find the blog content based on the slug
    console.log('Blog Content:', blogContent);

    return (
        <div className='flex flex-col items-center gap-5 min-h-screen'>
          {blogContent ? (
            <>
              <BlogHeading title={blogContent.title} date={blogContent.date} />
              <div className="blog-content w-[50vw]">
                <div className="flex flex-col gap-5">
                  {parseBlogContent(blogContent.content)}
                </div>
              </div>
              <CommentInput blogId={blogContent._id} />
              <Comment blogId={blogContent._id}/>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
    );
}