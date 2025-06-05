'use client'
import React, {useState, useEffect} from 'react';
import BlogPreview from '@/app/blog/components/BLOGS/BlogPreview';



export default function Blogs() {
    const [visibleItemCount, setVisibleItemCount] = useState(3)
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      fetch('/api/blogs')
        .then(res => res.json())
        .then(data =>{ 
            console.log('Fetched blogs in component:', data)
            setBlogs(data)});
    }, []);

    const handleLoadMore = () => {
        setVisibleItemCount(prevCount => prevCount + 4);
    }
    
    const slicedBlogs = blogs.slice(0, Math.min(blogs.length, visibleItemCount))
    
    const blogList = slicedBlogs.map((blog, index) => {
        console.log(blog._id);
        return (
            <BlogPreview key={blog._id} index={index} blog={blog} /> 
        );
    });
    
    return (
        <div className="flex flex-col gap-5 min-h-screen">
            {blogList}
            {blogs.length>visibleItemCount && <button onClick={handleLoadMore} className="btn-primary">Load More</button>}
        </div>
    );
}