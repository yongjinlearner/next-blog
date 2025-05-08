import dbConnect from '@/lib/database';
import Comment from '@/schema/Comment';
import mongoose from 'mongoose';

export default async function showComments(blogId) {
    await dbConnect();

    try {
        const comments = await Comment.find({ blogId: blogId });
        comments.sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort comments by time in descending order
        return comments;
    } catch (error) {
        console.error('Error retrieving comments:', error);
        return [];
    }
}