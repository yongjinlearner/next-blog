'use client';

import { useSearchParams } from 'next/navigation';
import { confirmEmail } from '@/app/actions/email/confirmEmail';

export default function ConfirmEmail() {
    const searchParams = useSearchParams(); // Access query parameters
    const token = searchParams.get('token'); // Get the 'token' query parameter

    console.log('Token from URL:', token);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        if (!token) {
            alert('Invalid or missing token');
            return;
        }

        try {
            const result = await confirmEmail(token); // Call the async function
            console.log('Email confirmed:', result);
            alert('Email successfully confirmed!');
        } catch (error) {
            console.error('Error confirming email:', error);
            alert('Failed to confirm email. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center min-h-screen">
            <button type="submit" className="btn-primary">
                Confirm Email
            </button>
        </form>
    );
}