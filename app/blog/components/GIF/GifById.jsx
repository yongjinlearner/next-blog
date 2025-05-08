import React, { useEffect, useState } from 'react'
import { Gif } from '@giphy/react-components'

const gifById = (id) => {
    return gf.gif(id).then(res => res.data)
}

export default function GifById({ id }) {
    const [gif, setGif] = useState(null)

    useEffect(() => {
        gifById(id).then(setGif)
    }, [id])

    if (!gif) return <p>Loading...</p>

    return <Gif gif={gif} width={200} />
}
