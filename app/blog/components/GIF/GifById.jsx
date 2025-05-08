'use client'
import React, { useEffect, useState } from 'react'
import { gf } from '@/lib/giphy'
import { Gif } from '@giphy/react-components'

console.log('Giphy client initialized:', gf)

const gifById = async (id) => {
    const res = await gf.gif(id)
    console.log('GIF by ID:', res.data)
    return res.data
}

export default function GifById({ gifId }) {
    if (!gifId) return null
    const [gif, setGif] = useState(null)

    useEffect(() => {
        gifById(gifId).then(setGif)
    }, [gifId])

    if (!gif) return <p>Loading...</p>

    return <Gif gif={gif} width={200} />
}
