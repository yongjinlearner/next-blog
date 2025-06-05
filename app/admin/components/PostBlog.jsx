'use client'

import React from 'react'
import { useState, useContext } from 'react'
import { PostBlogContext } from '@/lib/PostBlogContext'
import AddText from './posting-blog/AddText'
import AddImage from './posting-blog/AddImage'
import uploadBlog from '@/actions/blog/uploadBlog'

export default function PostBlog() {
    const { blogContent, setBlogContent } = useContext(PostBlogContext)
    const [textActive, setTextActive] = useState(false)
    const [imageActive, setImageActive] = useState(false)

    console.log('Current blog content:', blogContent)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        
        await uploadBlog(formData, blogContent)

        setBlogContent([]) // Clear the blog content after submission
        form.reset() // Reset the form fields
        setTextActive(false) // Reset the text active state
        setImageActive(false) // Reset the image active state
        alert('Blog posted successfully!') // Notify the user
    }

    return (
        <form className="flex flex-col items-center w-[40vw] gap-4 rounded-3xl bg-green-700 m-3" onSubmit={handleSubmit}>
            <label className='text-2xl mt-10 text-white'><h1>Post a new blog</h1></label>
            <input type='text' placeholder='Enter blog title' name='title' className='border border-gray p-2 bg-white rounded-lg w-[50%]'></input>
            <input type='text' placeholder='Enter preview' name='preview' className='border border-gray p-2 bg-white rounded-lg w-[50%]'></input>
            <input type='text' placeholder='Enter thumbnail' name='thumbnail' className='border border-gray p-2 bg-white rounded-lg w-[50%]'></input>
            <div>
                {textActive && <AddText />}
                {imageActive && <AddImage />}
            </div>
            <div className="flex gap-4">
                <button type="button" onClick={() => { setTextActive(true); setImageActive(false) }} className={`btn-primary ${textActive ? 'bg-blue-500' : ''}`}>Add Text</button>
                <button type="button" onClick={() => { setImageActive(true); setTextActive(false) }} className={`btn-primary ${imageActive ? 'bg-blue-500' : ''}`}>Add Image</button>
            </div>
            <button type="submit" className="text-white bg-red-500 p-4 rounded-lg hover:bg-red-700">Post the blog!</button>
        </form>

    ) 
}