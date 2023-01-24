import { configureStore } from '@reduxjs/toolkit'
import countReducer from './countSlice'
import {createWrapper} from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
})

export const wrapper = createWrapper(()=>store);