'use client'
import React, {useState, useEffect} from 'react';
import GiphySearchBar from '@/app/blog/components/GIF/GiphySearchBar';
import GiphyGridDisplay from '@/app/blog/components/GIF/GiphyGridDisplay';

export default function GiphyBrowsing( {setSelectedGifId} ) {

    const [giphySearch, setGiphySearch] = useState(''); // search term for Giphy
    console.log('Giphy search term:', giphySearch)
    const [gifId, setGifId] = useState('') // IF a gif is selected, this is the id of the selected gif

    useEffect(()=>{
        setSelectedGifId(gifId)
    },[gifId])


    return (
        <div className="flex flex-col items-center gap-5">
            <GiphySearchBar setGiphySearch={setGiphySearch}/>
            <GiphyGridDisplay giphySearch={giphySearch} setGifId={setGifId}/>
        </div>
    )

}