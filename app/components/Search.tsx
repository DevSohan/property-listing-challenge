"use client"
import { Plus, PlusIcon, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import AddProperty from './AddProperty'
import { Order, searchProperties, SearchTerms, Type } from '../lib/Store/propertiesSlice'
import { useDispatch, useSelector } from 'react-redux'


const Search = () => {
    const [openAddProperty, setOpenAddProperty] = useState(false)
    const showPropertyAddForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setOpenAddProperty(!openAddProperty)
    }
    
    const searchParams = useSelector(({searchTerms}: {searchTerms: SearchTerms}) => searchTerms)
    console.log(searchParams)

    const dispatch = useDispatch()

    return (
        <div className='mb-10 md:px-3'>
            <form className='lg:flex gap-10'>
                <fieldset className='w-full lg:w-3/6 relative flex gap-4 pb-4'>
                    <div className='relative flex-1'>
                        <SearchIcon className='w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1 text-gray-400'/>
                        <input onChange={(e) => (dispatch as any)(searchProperties({text: e.target.value}))} placeholder="Search" type="text" name='search' className='h-full w-full pl-8 lg:text-lg py-1 rounded' />
                    </div>
                    <button  onClick={showPropertyAddForm} className='flex lg:hidden items-center gap-2 bg-red-500 py-2 px-3 rounded text-white'>
                        <PlusIcon />
                        <span className='text-base'>Add</span>
                    </button>
                </fieldset>
                <fieldset className='flex lg:w-3/6 flex-row gap-10 justify-between items-center  pb-4'>
                    <div className='flex flex-row gap-10'>
                        <div className='flex flex-row gap-2 items-center relative'>
                            <span>Type:</span>
                            <select onChange={(e) => (dispatch as any)(searchProperties({type: e.target.value as keyof typeof Type}))} className='bg-transparent appearance-none block px-0 pr-6 relative' name="type">
                                {
                                    Object.entries(Type).map(([key, value]) => <option key={key} value={value}>{key.replace('_', ' ')}</option>)
                                }
                            </select>

                            <span className="pointer-events-none h-full absolute right-0 flex items-center  text-gray-700">
                                    <FaCaretDown />
                                </span>
                        </div>
                        <div className='flex flex-row gap-2 items-center relative'>
                            <select onChange={(e) => (dispatch as any)(searchProperties({order: e.target.value as keyof typeof Order}))} className='bg-transparent appearance-none block px-0 pr-6 relative' name="order">
                                {
                                    Object.entries(Order).map(([key, value]) => <option key={key} value={value}>{key.replace('_', ' ')}</option>)
                                }
                            </select>

                            <span className="pointer-events-none h-full absolute right-0 flex items-center  text-gray-700">
                                    <FaCaretDown />
                                </span>
                        </div>
                    </div>
                    <button onClick={showPropertyAddForm} className='hidden lg:flex items-center gap-2 bg-red-500 py-2 px-3 rounded text-white'>
                        <PlusIcon />
                        <span className='text-base'>Add Property</span>
                    </button>
                </fieldset>
            </form>

            <hr className='border-gray-300' />
            {openAddProperty && <AddProperty setOpenAddProperty={setOpenAddProperty} openAddProperty={openAddProperty} />}
        </div>
    )
}

export default Search
