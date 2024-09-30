"use client"
import React, { Suspense, use, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import { useDispatch, useSelector } from 'react-redux'
import { Order, Property, SearchTerms, fetchProperties } from '../lib/Store/propertiesSlice'


const PropertyListing = () => {
    const properties = useSelector(({properties}: {properties: Property[]}) => properties)
    const dispatch = useDispatch()

    const searchParams = useSelector(({searchTerms}: {searchTerms: SearchTerms}) => searchTerms)
    console.log(searchParams)

    useEffect(() => {
        (dispatch as any)(fetchProperties())
    }, [])

    let filteredData:Property[] = []

    if(properties.length > 0){
        filteredData = properties
        if(searchParams.text){
            filteredData = filteredData!.filter((property) => property.title.toLowerCase().includes(searchParams.text!.toLowerCase()))
            console.log(filteredData)
        }
        
        if(searchParams.type !== ""){
            filteredData = filteredData!.filter((property) => property.type == searchParams.type)
            console.log(filteredData)
        }
        if(searchParams.order !== Order.Default){
            filteredData = filteredData!.sort((a, b) => {
                if(searchParams.order == Order.Price_Ascending){
                    return parseInt(a.price) - parseInt(b.price)
                } else if(searchParams.order == Order.Name_Ascending){
                    return a.title.localeCompare(b.title)
                }else if(searchParams.order == Order.Name_Descending){
                    return b.title.localeCompare(a.title)
                }
                else{
                    return parseInt(b.price) - parseInt(a.price)
                }
            })
        }
    }
    console.log(properties)




    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='flex flex-col md:flex-row md:flex-wrap'>
                    {
                        filteredData?.map((property) => (
                            <PropertyCard key={property.id} info={property} />
                        ))
                    }
                </div>
            </Suspense>
        </>
    )
}

export default PropertyListing
