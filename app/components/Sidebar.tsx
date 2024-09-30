import React from 'react'

const Sidebar = () => {
    return (
        <div className='bg-white md:z-10 w-full md:w-20 h-16 md:h-screen border-r-1 shadow-sm md:shadow-md  shadow-black/20 md:shadow-black/40'>
            <div className='flex h-full w-full justify-center items-center md:items-start text-3xl font-bold py-4 px-4'>
                E<span className='text-red-500'>&</span>V
            </div>
        </div>
    )
}

export default Sidebar
