import React, { useState, useContext } from 'react';
import { PostBlogContext } from '@/lib/PostBlogContext';

export default function AddText() {
    const { setBlogContent } = useContext(PostBlogContext);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        // Do something with `text`
        console.log(image, description);
        // Example: setBlogContent([...blogContent, text]);
        setBlogContent(prevContent => [...prevContent, { type: 'image', content: image, alt: description, caption: description }]);
        setDescription(''); // Clear the textarea after submission
        setImage(''); // Clear the input after submission
        alert('Text added successfully!');
    };

    return (
        <div className='flex flex-col items-center gap-4'>
            <input 
                type='text' 
                placeholder='Enter file path' 
                name='path' 
                value={image}
                className='border border-gray p-2 bg-white rounded-lg w-[50%]'
                onChange={e => setImage(e.target.value)}>
            </input>
            <textarea
                placeholder="Enter description"
                name='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='border border-gray p-2 w-[30vw] h-[20vh] bg-white rounded-lg'
            />
            <button type='button' className="btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    );
}