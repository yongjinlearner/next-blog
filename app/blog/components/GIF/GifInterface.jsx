import React, { useContext } from 'react'
import { GifContext } from '@/lib/GifContext'
import { SearchExperience } from './SearchExperience'
import GifById from './GifById'


export default function GifInterface() {
    const { gifId, setGifId } = useContext(GifContext)
    return (
        <div className="flex items-center justify-center bg-green-800 p-5 rounded-md">
            {gifId === '' && <SearchExperience />}
            {gifId !== '' && 
                <div className="flex flex-col gap-4">
                    <button onClick={()=> {setGifId('')}} className="bg-white rounded-md">Back to browse</button>
                    <GifById gifId={gifId} />
                </div>
            }
        </div>
    )
}