import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MySection = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-16 ">
    <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span className="text-5xl sm:text-7xl">Time</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div className="flex mt-8">
                <Link href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                    Get started
                </Link>
                <Link href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </Link>
            </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <Image 
                src="/assets/images/slide4.png" 
                alt="Time illustration" 
                width={400} 
                height={400} 
                className="max-w-xs md:max-w-sm m-auto" 
            />
        </div>
    </div>
</div>
  )
}

export default MySection
