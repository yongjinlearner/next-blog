import { Suspense } from 'react';
import ConfirmEmail from './ConfirmEmail'; // assuming your component is in same dir

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmEmail />
    </Suspense>
  );
}