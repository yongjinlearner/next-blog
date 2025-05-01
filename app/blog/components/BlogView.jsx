'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const handleSubscription = async (formData) => {
    'use server'
    // Handle the form submission here
    const email = formData.get('email')
    console.log(email)
}

export default function BlogView() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <form action={handleSubscription}>
                <label>Subscribe to the blog!</label>
                <input type='email' name='email' placeholder='Enter your email' required />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    )
}