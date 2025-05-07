// components/TrendingGifs.jsx
'use client';

import React from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

console.log('hello world')
const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY); // Replace with your actual API key

const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

const TrendingGifs = () => {
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
      />
    </div>
  );
};

export default TrendingGifs;
