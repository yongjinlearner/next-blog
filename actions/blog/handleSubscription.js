'use server'
import dbConnect from '@/lib/database';
import User from '@/schema/User';
import crypto from 'crypto';

export async function handleSubscription(formData) {
    await dbConnect();
    const email = formData.get('email')
    console.log(email)

    var id = crypto.randomUUID();
    console.log(id)

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log('user already exists')
        return
    }

    try {
        const user = await User.create({ id, email });
        console.log('User created:', user);

    } catch (error) {
        console.error('Error creating user:', error);

    }
}