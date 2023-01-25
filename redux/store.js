import { configureStore } from '@reduxjs/toolkit'
import countReducer from './countSlice'
import {createWrapper} from 'next-redux-wrapper';
import {countApi} from './countApi';

export const store = configureStore({
  reducer: {
    count: countReducer,
    [countApi.reducerPath]: countApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countApi.middleware),
})

export const wrapper = createWrapper(()=>store);