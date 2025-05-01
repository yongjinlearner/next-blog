
import React from 'react'
import BlogView from './components/BlogView'

const handleSubscription = async (formData) => {
    'use server'
    // Handle the form submission here
    const email = formData.get('email')
    console.log(email)
}

export default function Blog() {
    return (
        <div>
            <div>
                <form action={handleSubscription}>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <BlogView />
        </div>
    )
}