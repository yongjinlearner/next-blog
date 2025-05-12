'use client'
import React, {useState, useEffect} from 'react';

import GifById from './GifById';
import GiphyBrowsing from './GiphyBrowsing';


export default function GiphyInterface({setSelectedGif}){
    const [selectedGifId, setSelectedGifId] = useState('') // the id of the selected gif
    
    useEffect(()=>{
        setSelectedGif(selectedGifId)
    }
    , [selectedGifId])

    return (
        <div className="p-5 flex flex-col items-center">
            {selectedGifId!=='' ? <GifById gifId={selectedGifId} /> : <GiphyBrowsing setSelectedGifId={setSelectedGifId}/>}
        </div>
    )
}