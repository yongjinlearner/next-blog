import React, { useState, useContext } from 'react';
import { PostBlogContext } from '@/lib/PostBlogContext';

export default function AddText() {
    const { blogContent, setBlogContent } = useContext(PostBlogContext);
    const [text, setText] = useState('');

    const handleSubmit = () => {
        // Do something with `text`
        console.log('Textarea value:', text);
        // Example: setBlogContent([...blogContent, text]);
        setBlogContent(prevContent => [...prevContent, { type: 'text', content: text }]);
        setText(''); // Clear the textarea after submission
        alert('Text added successfully!');
    };

    return (
        <div className='flex flex-col items-center gap-4'>
            <textarea
                placeholder="Enter text"
                name='text'
                value={text}
                onChange={e => setText(e.target.value)}
                className='border border-gray p-2 w-[30vw] h-[20vh] bg-white rounded-lg'
            />
            <button type='button' className="btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
    );
}