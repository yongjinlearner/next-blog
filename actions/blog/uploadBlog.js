'use server'
import dbConnect from '@/lib/database';
import Blog from '@/schema/Blog';

export default async function uploadBlog(formData, blogContent) {
    console.log('formdata', formData);
    console.log('blogContent', blogContent);
    await dbConnect();

    const title = formData.get('title');
    const thumbnail = formData.get('thumbnail');
    const preview = formData.get('preview');

    try {
        const newBlog = await Blog.create({ title, 
                                            thumbnail, 
                                            content:blogContent, 
                                            preview
         });
        console.log('Blog uploaded:', newBlog);
    } catch (error) {
        console.error('Error uploading blog:', error);

    }
};