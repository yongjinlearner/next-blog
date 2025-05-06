import React from 'react';
import BlogHeading from '@/app/blog/components/BlogHeading';
import Comment from '@/app/blog/components/Comment';
import CommentInput from '@/app/blog/components/CommentInput';

import blogs from '@/lib/dummyBlog.js';
import fakeComments from '@/lib/fakeComments';
import parseBlogContent  from '@/actions/parseBlogContent';

export default async function BlogPage({ params }) {
    const { slug } = params;

    console.log('this is the slug', slug);
    // Find the blog by its ID
    const blogContent = blogs.find((blog) => blog.id == slug);
    console.log('this is the blog content', blogContent);
    const comments = fakeComments.filter((comment) => comment.postId == slug);
    const commentCount = comments.length;

    return (
        <div className='flex flex-col items-center gap-5 min-h-screen'>
            <BlogHeading blogId={slug} commentCount={commentCount}/>
            <div className="blog-content w-[50vw]">
                {parseBlogContent ? (
                    <div className="flex flex-col gap-5">
                        {parseBlogContent(blogContent.content)}
                    </div>
                ) : (
                    <p>Blog not found</p>
                )}
            </div>
            <CommentInput blogId={slug}/>
            <Comment blogId={slug}/>
        </div>
    );
}