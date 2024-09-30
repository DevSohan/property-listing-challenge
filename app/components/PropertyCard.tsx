import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProperty } from '../lib/Store/propertiesSlice'


interface Property {
    id: string
    title: string
    rooms: number
    floor: number
    owner: string
    createdAt: string
    address: string
    price: string
    type: string
    plotSize: number
}

const PropertyCard = ({ info }: { info: Property }) => {
    const dispatch = useDispatch()

    return (
        <div className='w-full md:w-1/2 lg:w-1/3 2xl:w-1/4'>
        <div className='p-3 pb-0 bg-white border-b-[1px] border-gray-300 mx-3 mb-3'>
            <div className='flex justify-between items-center'>
                <div>{info?.title}</div>
                <X className='cursor-pointer' onClick={() => (dispatch as any)(removeProperty(info.id))}/>
            </div>
            <div className='py-3 flex gap-3'>
                <div className='w-2/5 bg-black'><Image className='object-cover h-24' src="/images/property-placeholder.jpeg" alt={info?.title} width={250} height={250} objectFit='cover' objectPosition='center' /></div>
                <div className='w-3/5 flex flex-col gap-1'>
                    <div className='flex justify-between'>
                        <div className='text-gray-600'>Rooms</div>
                        <div>{info?.rooms}</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-gray-600'>Plot Size</div>
                        <div>{info?.floor} <span>m<sup>2</sup></span></div>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <div className='text-gray-600'>Price</div>
                        <div>{info?.price} <span className='text-sm'>EUR</span></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PropertyCard
