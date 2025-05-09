import React from 'react';
import BlogHeading from '@/app/blog/components/BLOGS/BlogHeading';
import Comment from '@/app/blog/components/COMMENTS/Comment';
import CommentInput from '@/app/blog/components/COMMENTS/CommentInput';

import blogs from '@/lib/dummyBlog.js';
import parseBlogContent  from '@/actions/blog/parseBlogContent';

export default async function Page(props) {
    const { params } = props;
    const slug = Number(params.slug);

    const blogContent = blogs.find((blog) => blog.id === slug);

    return (
        <div className='flex flex-col items-center gap-5 min-h-screen'>
            <BlogHeading blogId={slug} commentCount={1}/>
            <div className="blog-content w-[50vw]">
                {blogContent ? (
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