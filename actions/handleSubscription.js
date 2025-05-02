'use server'
import dbConnect from '@/lib/database';
import User from '@/schema/User';
import crypto from 'crypto';

export async function handleSubscription(formData) {
    const email = formData.get('email')
    console.log(email)

    var id = crypto.randomUUID();
    console.log(id)

    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log('user already exists')
        return
    }

    try {
        const user = await User.create({ id, email });

    } catch (error) {
        console.error('Error creating user:', error);

    }
}