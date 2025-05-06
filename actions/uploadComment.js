'use server'
import dbConnect from '@/lib/database';
import Comment from '@/schema/Comment';

export default async function uploadComment(formData, blogId) {
    await dbConnect();

    const comment = formData.get('comment');
    const nickname = formData.get('nickname');

    console.log(`${nickname} coomment ${comment} on blog ${blogId}`);

    try {
        const comment = await Comment.create({ blogId, nickname, comment });
        console.log('Comment uploaded:', comment);

        console.log('Now retrieving renewed comments to post on the blog...');

    } catch (error) {
        console.error('Error uploading coment:', error);

    }
};