import { Gif } from '@giphy/react-components'
import React, { useContext } from 'react'
import { GifContext } from '@/lib/GifContext'
import { gf } from '@/lib/giphy'

export default async function GifPreview() {
    const { gifId } = useContext(GifContext)

    const res = await gf.gif(gifId) // Retrieve GIF with ID
    
    return <Gif gif={res.data} width={200} />
}