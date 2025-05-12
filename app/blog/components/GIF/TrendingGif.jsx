// components/TrendingGifs.jsx
'use client';

import React, { useState } from 'react';
import { gf } from '@/lib/giphy'
import { Grid, Gif } from '@giphy/react-components';

import GifById from './GifById';

const searchTerm = 'kim jong un'; // Default search term for trending GIFs

const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });
const fetchGifsSearch = (offset) => gf.search(searchTerm, { offset, limit: 10 });


export default function TrendingGifs({ setSelectedGif }) {
  const [gifClicked, setGifClicked] = useState(false); // State to track the selected GIF
  console.log('gifClicked:', gifClicked)
  const [gifThatIClicked, setGifThatIClicked] = useState(null); // State to store the selected GIF ID

  const handleGifClick = (gif, e) => {
    e.preventDefault();
    console.log('GIF clicked:', gif.id);
    setGifThatIClicked(gif.id); // Store the clicked GIF ID
    setSelectedGif(gif.id); // Set the selected GIF ID
    setGifClicked(true); // Set the state to indicate a GIF has been clicked
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 500,
        height: 400, // Set a fixed height for the container
        overflowY: 'scroll', // Enable vertical scrolling 
        margin: '0 auto'
      }}
      className="bg-green-700 p-5 flex flex-col items-center rounded-lg shadow-lg"
    >
      {!gifClicked && (
        <Grid
          width={400}
          columns={3}
          gutter={6}
          fetchGifs={fetchGifsSearch}
          onGifClick={handleGifClick}
        />
      )}
      {gifClicked && <GifById gifId={gifThatIClicked} />}
    </div>
  );
};
