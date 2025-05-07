'use server'
import dbConnect from '@/lib/database';
import Comment from '@/schema/Comment';

export default async function uploadComment(formData) {
    console.log('formdata', formData);
    await dbConnect();

    const blogId = formData.get('blogId');
    const comment = formData.get('comment');
    const nickname = formData.get('nickname');

    console.log(`${nickname} coomment ${comment} on blog ${blogId}`);

    try {
        const newComment = await Comment.create({ blogId, nickname, comment });
        console.log('Comment uploaded:', newComment);

        console.log('Now retrieving renewed comments to post on the blog...');

    } catch (error) {
        console.error('Error uploading coment:', error);

    }
};