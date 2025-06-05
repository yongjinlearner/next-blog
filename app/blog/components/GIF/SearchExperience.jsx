import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
} from '@giphy/react-components'
import {GifContext} from '@/lib/GifContext'
import React, { useContext, useState } from 'react'

export const SearchExperience = () => (
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
            <Grid key={searchKey} columns={3} width={350} fetchGifs={fetchGifs} onGifClick={handleGifClick} />
        </div>
    )
}