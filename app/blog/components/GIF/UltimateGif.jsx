import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
} from '@giphy/react-components'
import React, { useContext, useState } from 'react'
import { GifContext, GifProvider } from '@/app/blog/components/GifContext'



// the search experience consists of the manager and its child components that use SearchContext
const SearchExperience = () => (
    <SearchContextManager apiKey={process.env.NEXT_PUBLIC_GIPHY_API_KEY} shouldDefaultToTrending={true}>
        <Components className="flex gap-3" />
    </SearchContextManager>
)

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern
const Components = () => {
    const { gifId, setGifId } = useContext(GifContext)
    const { fetchGifs, searchKey } = useContext(SearchContext)

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
                margin: '0 auto'
            }}
        >
            <SearchBar />
            <Grid key={searchKey} columns={3} width={500} fetchGifs={fetchGifs} onGifClick={handleGifClick} />
        </div>
    )
}

export default function UltimateGif() {
    const { gifId } = useContext(GifContext)
    return (
        <div className="flex items-center justify-center bg-green-800 p-5 rounded-md">
            {gifId !== '' && <SearchExperience />}
            {gifId === '' && <GifById gifId={gifId} />}
        </div>
    )
}