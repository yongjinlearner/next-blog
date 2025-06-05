'use server'

import dbConnect from '@/lib/database'
import User from '@/schema/User'
import crypto from 'crypto'
import sendAuthEmail from '@/actions/email/sendAuthEmail'

export async function handleSubscription(formData) {
  console.log("handling the subscription")
  await dbConnect()
  const email = formData.get('email')
  const id = crypto.randomUUID()

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return { success: false, message: 'You already subscribed with this email account!' }
  }

  try {
    const user = await User.create({ id, email })
    sendAuthEmail(email)
    return {
      success: true,
      message: 'Thank you for subscribing! A confirmation email has been sent.',
    }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, message: 'Something went wrong. Try again later.' }
  }
}
