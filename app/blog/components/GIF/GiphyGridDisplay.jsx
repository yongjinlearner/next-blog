// components/TrendingGifs.jsx
'use client';

import React, {useState, useEffect, useCallback} from 'react';
import { gf } from '@/lib/giphy'
import { Grid } from '@giphy/react-components';

export default function GiphyGridDisplay({ giphySearch, setGifId }) {

    console.log('(GiphyGridDisplay.jsx) Giphy search term giphySearch:', giphySearch);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        console.log('State updated to trigger re-render');
        setSearchTerm(giphySearch)
    }, [giphySearch]); // Re-run when giphySearch changes


    const fetchTrendingGifs = (offset) => gf.trending({ offset, limit: 10 })
    console.log('searchTerm', searchTerm)
    const fetchSearchedGifs = useCallback((offset) => {
        return gf.search(searchTerm, { offset, limit: 10 });
    }, [searchTerm]);
       
    
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
        {/*true && <Grid
          width={400}
          columns={3}
          gutter={6}
          onGifClick={handleGifClick}
          fetchGifs={fetchTrendingGifs}
          /> */}
          {true && <Grid
          width={400}
          columns={3}
          gutter={6}
          onGifClick={handleGifClick}
          fetchGifs={fetchSearchedGifs}
          />}
        </div>
    );
};
