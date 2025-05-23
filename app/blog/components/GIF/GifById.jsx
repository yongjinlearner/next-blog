'use client'
import React, { useContext, useState, useEffect } from 'react'
import { GifContext, GifProvider } from '@/app/blog/components/GifContext'
import { gf } from '@/lib/giphy'
import { Gif } from '@giphy/react-components'

const gifById = async (id) => {
    const res = await gf.gif(id)
    console.log('GIF by ID:', res.data)
    return res.data
}

export default function GifById(id) {
    const { gifId } = useContext(GifContext)

    const [gif, setGif] = useState(null)

    useEffect(() => {
        gifById(gifId).then(setGif)
    }, [gifId])

    if (!gif) return <p>Loading...</p>

    return <Gif gif={gif} width={200} />
}
