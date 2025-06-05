'use client'

import React from 'react'

export default function AdminForm({setAuthenticated}) {

    const handleAdminSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const password = formData.get('password')

        if(password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD){
            setAuthenticated(true)
        } else {
            alert('Wrong password')
        }

    }


    return (
        <form className='flex gap-4' onSubmit={handleAdminSubmit}>
            <input type='password' name='password' placeholder='Enter password' className='border border-gray p-2 bg-white rounded-lg' required/>
            <button type='submit' className='btn-primary'>Login</button>
        </form>
    )
}