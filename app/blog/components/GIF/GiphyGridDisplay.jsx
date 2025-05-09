// components/TrendingGifs.jsx
'use client';

import React, {useState, useEffect, use} from 'react';
import { gf } from '@/lib/giphy'
import { Grid } from '@giphy/react-components';

export default function GiphyGridDisplay({ giphySearch, setGifId }) {

    console.log('(GiphyGridDisplay.jsx) Giphy search term:', giphySearch);

    const [updateComponent, setUpdateComponent] = useState(false); // State to trigger re-render
    useEffect(() => {
        setUpdateComponent(!updateComponent); // Toggle the state to trigger re-render
        console.log('State updated to trigger re-render');
    }, [giphySearch]); // Re-run when giphySearch changes

    const fetchGifs = (offset) => gf.trending({ offset, limit: 10 }) ? giphySearch === '' : gf.search(giphySearch, { offset, limit: 10 });
    
    const handleGifClick = (gif, e) => {
        e.preventDefault();
        console.log('GIF clicked:', gif.id);
        setGifId(gif.id); // Set the selected GIF ID
    }

    return (
        <div 
            style={{ 
                width: '100%', 
                maxWidth: 500,
                height: 400, // Set a fixed height for the container
                overflowY: 'scroll', // Enable vertical scrolling 
                margin: '0 auto' }} 
                className="bg-green-700 p-5 flex flex-col items-center rounded-lg shadow-lg">
        <Grid
          width={400}
          columns={3}
          gutter={6}
          fetchGifs={fetchGifs}
          onGifClick={handleGifClick}
        />
        </div>
    );
};
