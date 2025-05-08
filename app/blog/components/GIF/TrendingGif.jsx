// components/TrendingGifs.jsx
'use client';

import React, {useState} from 'react';
import { Grid } from '@giphy/react-components';

const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

export default function TrendingGifs({setSelectedGif}) {
  
  const handleGifClick = (gif, e) => {
    e.preventDefault();
    console.log('GIF clicked:', gif.id);
    setSelectedGif(gif.id); // Set the selected GIF ID
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
