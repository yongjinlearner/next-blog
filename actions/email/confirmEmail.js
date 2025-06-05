'use server';

import User from '@/schema/User';
import dbConnect from '@/lib/database';

export const confirmEmail = async (token) => {
    try {
        await dbConnect();
        const confirmedUser = await User.findOne({ id: token });
        if (!confirmedUser) {
            return new Error('User not found');
        }
        console.log('User found:', confirmedUser);
        confirmedUser.confirmed = true;
        await confirmedUser.save();
        return { success: true, message: 'Email confirmed successfully!' };
    } catch (error) {
        console.error('Error confirming email:', error);
        return { success: false, message: 'Failed to confirm email.' };
    }
};