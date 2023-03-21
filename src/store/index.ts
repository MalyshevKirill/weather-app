import {configureStore} from '@reduxjs/toolkit';
import {settlementsApi} from '../services/settlementsApi';
import {weatherApi} from '../services/weatherApi';

export const store = configureStore({
    reducer: {
        [settlementsApi.reducerPath]: settlementsApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            settlementsApi.middleware,
            weatherApi.middleware
        )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch