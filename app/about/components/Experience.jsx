import React from 'react';
import staticData from '@/lib/staticData.js'
import Image from 'next/image';

const experienceData = staticData.find((item) => item.page === "experience");

const experience = experienceData.experiences.map((exp, index)=> {
    return (
        <div key={index} className='flex flex-col bg-gray-300 shadow-md rounded-lg p-4 border'>
            <h2 className='text-xl font-bold'>{exp.title}</h2>
            <div className="w-[300px] h-[300px] relative overflow-hidden rounded-md mb-3 mt-3">
                <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                />
            </div>
            <p className='text-gray-700'>{exp.company}</p>
            <p className='text-gray-500'>{exp.location}</p>
            <p className='text-gray-500'>{exp.date}</p>
            <a href="#"><p className="text-blue-500 underline underline-offset-2">Read more</p></a>
        </div>
    )
})

export default function Experience() {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {experience}
        </div>
    )
}