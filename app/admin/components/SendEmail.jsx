'use client'

import React from 'react'
import { useState } from 'react'

export default function SendEmail() {
    const [loading, setLoading] = useState(false);


    const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const subject = formData.get('subject');
    const body = formData.get('body');
    try {
        const response = await fetch('/api/nodemailer', {
            method: 'POST',
            headers: { // <-- should be 'headers', not 'header'
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject,
                body,
            }),
        });
        const data = await response.json();
        if (data.success) {
            alert('Email sent!');
        } else {
            alert('Failed to send email: ' + data.error);
        }
    } catch (error) {
        console.error("Error sending email:", error);
    }
    e.target.reset(); // Reset the form after submission
    setLoading(false);
    };

    return (
        <form onSubmit={handleSendEmail} className="flex flex-col items-center w-[40vw] gap-4 border rounded-3xl bg-green-900 m-3">
            <label className='text-2xl text-white mt-10'>Send out newsletter</label>
            <input type='text' placeholder='Enter email subject' name='subject' className='border border-gray p-2 bg-white rounded-lg'></input>
            <textarea placeholder="Enter the email body" name='body' className='border border-gray p-2 w-[30vw] h-[20vh] bg-white rounded-lg'></textarea>
            <button type="submit" className="btn-primary">{loading ? 'Sending...' : 'Send Email'}</button>
        </form>
    ) 
}