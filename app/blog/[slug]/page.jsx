import React from 'react';
import BlogHeading from '@/app/blog/components/BlogHeading';
import Comment from '@/app/blog/components/Comment';
import CommentInput from '@/app/blog/components/CommentInput';

import blogs from '@/lib/dummyBlog.js';
import fakeComments from '@/lib/commentList';
import parseBlogContent  from '@/actions/parseBlogContent';

export default function Page({ params }) {
    const { slug } = params;
    console.log('slug', slug, typeof slug);

    const blogContent = blogs.find((blog) => blog.id == slug);

    return (
        <div className='flex flex-col items-center gap-5 min-h-screen'>
            <BlogHeading blogId={slug} commentCount={1}/>
            <div className="blog-content w-[50vw]">
                {parseBlogContent ? (
                    <div className="flex flex-col gap-5">
                        {parseBlogContent(blogContent.content)}
                    </div>
                ) : (
                    <p>Blog not found</p>
                )}
            </div>
            <CommentInput blogId={Number(slug)}/>
            <Comment blogId={Number(slug)}/>
        </div>
    );
}