import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import ISettlement from '../models/ISettlement';

export const settlementsApi = createApi({
    reducerPath: 'settlementsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),
    endpoints: (build) => ({
        getSettlements: build.query<ISettlement[], string>({
            query: (search:string) => ({
                url: '/search.json',
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
    useGetSettlementsQuery,
} = settlementsApi