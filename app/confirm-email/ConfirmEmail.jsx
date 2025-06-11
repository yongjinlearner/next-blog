'use client';

import { useSearchParams } from 'next/navigation';
import { confirmEmail } from '@/actions/email/confirmEmail';

export default function ConfirmEmail() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      alert('Invalid or missing token');
      return;
    }

    try {
      const result = await confirmEmail(token);
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
