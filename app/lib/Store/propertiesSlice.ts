import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { create } from "domain";
import { isError } from "util";

export interface Property {
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

export interface NewProperty{
    id: string
    createdAt: string
    name: string
    address: string
    type: string
    rooms: number
    plotSurface: number
    floor: number
}
export enum Type {
    All = '',
    House = 'house',
    Apartment = 'apartment'
}

export enum Order {
    Default = '',
    Price_Ascending = 'price-asc',
    Price_Descending = 'price-desc',
    Name_Ascending = 'name-asc',
    Name_Descending = 'name-desc'
}

export interface SearchTerms {
    text: string
    type: Type
    order: Order
}

const initialState = {
    isloading: false,
    properties: [] as Property[],
    isError: false,
    searchTerms: {
        text: '',
        type: Type.All,
        order: Order.Default
    }
}



export const fetchProperties = createAsyncThunk('property/fetchProperties', async () => {
    const response = await axios.get('https://6438f9604660f26eb1a7568b.mockapi.io/api/properties')
    const data = await response.data
    return data
})

export const addNewProperty = createAsyncThunk('property/addNewProperty', async (property: NewProperty) => {
    const response = await axios.post('https://6438f9604660f26eb1a7568b.mockapi.io/api/properties', property)
    const data = await response.data
    return data
})

export const removeProperty = createAsyncThunk('property/removeProperty', async (id: string) => {
    const response = await axios.delete(`https://6438f9604660f26eb1a7568b.mockapi.io/api/properties/${id}`)
    const data = await response.data
    return data
})

const propertiesSlice = createSlice({
    name: 'property',
    initialState,
    reducers: {
        searchProperties: (state, action: PayloadAction<SearchTerms>) => {
            state.searchTerms = {
                ...state.searchTerms,
                ...action.payload
            }
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProperties.pending, (state) => {
                state.isloading = true
            })
            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.isloading = false
                state.properties = action.payload
            })
            .addCase(fetchProperties.rejected, (state) => {
                state.isloading = false
                state.isError = true
            })
            .addCase(addNewProperty.pending, (state) => {
                state.isloading = true
            })
            .addCase(addNewProperty.fulfilled, (state, action) => {
                state.properties.push(action.payload)
                state.isloading = false
            })
            .addCase(addNewProperty.rejected, (state) => {
                state.isloading = false
                state.isError = true
            })
            .addCase(removeProperty.pending, (state) => {
                state.isloading = true
            })
            .addCase(removeProperty.fulfilled, (state, action) => {
                state.properties = state.properties.filter((property) => property.id !== action.payload.id)
                state.isloading = false
            })
            .addCase(removeProperty.rejected, (state) => {
                state.isloading = false
                state.isError = true
            })
    }
})

export const { searchProperties } = propertiesSlice.actions

export default propertiesSlice.reducer