import React from 'react'
import Blogs from './components/BLOGS/Blogs'
import { handleSubscription } from '@/actions/blog/handleSubscription';

export default function Blog() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className='flex flex-col items-center justify-center text-center min-h-[30vh] gap-5'>
                <h1 className='text-3xl font-bold'>Welcome to the Blog!</h1>
                <p className='text-lg'>I began this blog after leaving the Korean army to document my journey of faith and learning. Subscribe to keep up with the latest posts!</p>
                <form action={handleSubscription}>
                    <input type='email' name='email' placeholder='Enter your email' required className='text-center border border-solid'/>
                    <br/>
                    <button type='submit' className="btn-primary">Subscribe</button>
                </form>
            </div>
            <Blogs />
        </div>
    )
}