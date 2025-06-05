'use client'
import React, {useState} from "react";
import SendEmail from '@/app/admin/components/SendEmail'
import PostBlog from '@/app/admin/components/PostBlog'
import AdminForm from '@/app/admin/components/AdminForm'
import { PostBlogProvider } from '@/lib/PostBlogContext'

export default function Admin(){
    const [authenticated, setAuthenticated] = useState(false)

    return (
        <div className="flex items-center justify-center min-h-screen">
            {authenticated && <div className="flex justify-center min-h-screen mt-5">
                <SendEmail />
                <PostBlogProvider>
                    <PostBlog />
                </PostBlogProvider>
            </div>}
            {!authenticated && <AdminForm setAuthenticated={setAuthenticated}/>}
        </div>
    )
}