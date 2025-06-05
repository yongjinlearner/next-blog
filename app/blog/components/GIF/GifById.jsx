'use client'

import React, { useState, useEffect } from 'react'
import { gf } from '@/lib/giphy'
import { Gif } from '@giphy/react-components'

const gifById = async (id) => {
    try {
        const res = await gf.gif(id)
        console.log('GIF by ID:', res.data)
        return res.data
    } catch (err) {
        console.error('Failed to fetch GIF:', err)
        return null
    }
}

export default function GifById({ gifId }) {
    const [gif, setGif] = useState(null)

    useEffect(() => {
        if (gifId) {
            gifById(gifId).then(setGif)
        }
    }, [gifId])

    if (!gif) return <p></p>

    return (
            <Gif gif={gif} width={200} />
    )
}
