'use client'

import { handleSubscription } from '@/actions/blog/handleSubscription';
import React, { useState } from 'react'

export default function SubscribeForm() {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const formData = new FormData(e.target)
    const result = await handleSubscription(formData)
    setLoading(false)

    if (result?.message) {
      alert(result.message)
      form.reset()
    }
  }

  return (
    <form onSubmit={onSubmit}>
        <input type='email' name='email' placeholder='Enter your email' required className='text-center border border-solid'/>
        <br/>
        <button type='submit' className="btn-primary">{loading ? 'Submitting...' : 'Subscribe'}</button>
    </form>
  )
}
