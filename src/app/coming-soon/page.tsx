import Image from 'next/image'
import React from 'react'
import img from '../../../public/comingSoonImg.svg'

const ComingSoon = () => {
    return (
        <div className='flex justify-center items-center flex-col pt-20 mb-44 px-4 md:px-8 lg:px-16'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-gray-800 mb-6 text-center'>
                Smarter Connections, Seamless Experiences
            </h1>
            <p className='mb-14 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium text-gray-800 text-center'>
                Automating outbound calls with AI-driven efficiency.
            </p>
            <Image src={img} alt='Coming Soon' className='mb-16 w-full max-w-md' />
            <p className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight text-center'>
                Be the first to know!
            </p>
            <p className='leading-relaxed text-lg md:text-xl lg:text-2xl text-gray-800 mb-10 text-center'>
                Signup to get exclusive access when we launch
            </p>
            <input
                type='text'
                placeholder='Enter your email'
                className='mb-6 border-gray-300 border px-4 py-2 rounded w-full max-w-md'
            />
            <button className='bg-black text-white px-20 py-3 rounded'>
                Notify
            </button>
        </div>
    )
}

export default ComingSoon
