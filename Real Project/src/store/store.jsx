import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './reducers/UserReducer'
import ProductReducer from './reducers/ProductReducer'

export default configureStore({
  reducer: {
    userReducer:UserReducer,
    productReducer: ProductReducer
  }
})