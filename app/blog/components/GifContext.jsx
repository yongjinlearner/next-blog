'use client'
import { createContext, useState } from 'react'

// Create the context
export const GifContext = createContext()

// Create a provider component
export const GifProvider = ({ children }) => {
    const [gifId, setGifId] = useState('hello!')


    return (
        <GifContext.Provider value={{ gifId, setGifId }}>
            {children}
        </GifContext.Provider>
    )
}