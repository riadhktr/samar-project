import {configureStore} from '@reduxjs/toolkit'
import bookSlise from './book'
import favSlice from "./wishList"
export default configureStore({
    reducer:{
        Book: bookSlise ,
        wishlist :favSlice
    }
})