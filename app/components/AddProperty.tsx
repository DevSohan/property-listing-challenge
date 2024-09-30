import { X } from 'lucide-react'
import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addNewProperty } from '../lib/Store/propertiesSlice'

const AddProperty = ({openAddProperty, setOpenAddProperty}: {openAddProperty: boolean, setOpenAddProperty: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [newProperty, setNewProperty] = useState({
        id: "0",
        createdAt: new Date().toISOString(),
        name: '',
        address: '',
        type: '',
        rooms: 0,
        plotSurface: 0,
        floor: 0
    })

    const dispatch = useDispatch()

    const hidePropertyAddForm = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault()
        setOpenAddProperty(!openAddProperty)
    }


    const handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        (dispatch as any)(addNewProperty(newProperty))
        setOpenAddProperty(!openAddProperty);
    };
    console.log(newProperty)

    return (
        <div className='w-full -ml-4 md:w-2/6 z-10 absolute top-0 md:right-0 h-screen bg-gray-50 overflow-hidden md:justify-between'>
            <div className='bg-white flex justify-between items-center gap-10 p-4 shadow-sm shadow-black/40'>
                <div className='flex-1 flex justify-between flex-row-reverse md:flex-row items-center'>
                    <div className='text-lg'>New Property</div>
                    <X onClick={hidePropertyAddForm} />
                </div>
                <button onClick={handleSubmit} className='flex md:hidden items-center gap-2 bg-red-500 py-2 px-3 rounded text-white'>
                    <span className='text-base'>Add</span>
                </button>
            </div>
            <div className='p-4 flex flex-col h-full flex-1 shadow-sm shadow-black/40'>
                <div className='font-bold text-lg mb-10'>Property details</div>
                <form className='flex flex-col h-full max-h-96 md:max-h-96 gap-4 flex-1 justify-around'>
                    <fieldset className='flex flex-col'>
                        <label className='text-xs text-gray-400'>Property title</label>
                        <input onChange={(e) => setNewProperty({...newProperty, name: e.target.value})} className='bg-transparent text-base w-full border-b-[1px] border-gray-300' type="text" name='title' placeholder="Enter property title" />
                    </fieldset>
                    <fieldset>
                        <div className='flex flex-row gap-2 items-center relative border-b-[1px] border-gray-300'>
                            <select onChange={(e)=>{
                                if(e.target.value == "house" || e.target.value == "apartment"){
                                    setNewProperty({...newProperty, type: e.target.value})
                                }
                            }} className='bg-transparent appearance-none block px-0 pr-6 relative text-gray-400 w-full' name="type">
                                <option value="-">Type</option>
                                <option value="house">House</option>
                                <option value="apartment">Apartment</option>
                            </select>

                            <span className="pointer-events-none h-full absolute right-0 flex items-center  text-gray-700">
                                    <FaCaretDown />
                                </span>
                        </div>
                    </fieldset>
                    <fieldset className='flex flex-col'>
                        <label className='text-xs text-gray-400'>Price</label>
                        <input onChange={(e) => setNewProperty({...newProperty, address: e.target.value})} className='bg-transparent text-base w-full border-b-[1px] border-gray-300' type="text" name='price' placeholder="Enter property Price" />
                    </fieldset>
                    <fieldset>
                        <input onChange={(e) => setNewProperty({...newProperty, plotSurface: parseInt(e.target.value)})} className='bg-transparent text-base w-full border-b-[1px] border-gray-300' type="text" name='plot-size' placeholder="Plot size" />
                    </fieldset>
                    <fieldset>
                        <input onChange={(e) => setNewProperty({...newProperty, rooms: parseInt(e.target.value)})} className='bg-transparent text-base w-full border-b-[1px] border-gray-300' type="text" name='rooms' placeholder="Rooms" />
                    </fieldset>
                </form>
            </div>
            <div className='bg-white flex justify-between items-center gap-10 p-4 absolute w-full bottom-0'>
                <button onClick={handleSubmit} className='hidden md:flex items-center gap-2 bg-red-500 py-2 px-3 rounded text-white'>
                    <span className='text-base'>Create Property</span>
                </button>
            </div>
        </div>
    )
}

export default AddProperty
