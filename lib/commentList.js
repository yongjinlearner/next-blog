import dbConnect from '@/lib/database';
import Comment from '@/schema/Comment';
import mongoose from 'mongoose';

export default async function showComments(blogId) {
    await dbConnect();

    try {
        const comments = await Comment.find({ blogId: blogId });
        console.log('Comments retrieved:', comments);
        return comments;
    } catch (error) {
        console.error('Error retrieving comments:', error);
        return [];
    }
}