import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import ICurrentWeatherResponse from '../models/ICurrentWeatherResponse';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),
    endpoints: (build) => ({
        getCurrentWeather: build.query<ICurrentWeatherResponse, string>({
            query: (search:string) => ({
                url: '/current.json',
                method: 'GET',
                params: {
                    key: process.env.REACT_APP_API_KEY,
                    q: search
                }
            })
        }),
    })
})

export const {
    useGetCurrentWeatherQuery
} = weatherApi