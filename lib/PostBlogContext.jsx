'use client'
import { createContext, useState } from 'react'

export const PostBlogContext = createContext()

export const PostBlogProvider = ({ children }) => {
    const [blogContent, setBlogContent] = useState([])

    return (
        <PostBlogContext.Provider value={{ blogContent, setBlogContent }}>
            {children}
        </PostBlogContext.Provider>
    )
}