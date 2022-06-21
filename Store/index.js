import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../Features/categories'
import productsReducer from '../Features/products'
import cartReducer from '../Features/cart'
import orderReducer from '../Features/orders'
import authReducer from '../Features/auth'
import locationReducer from '../Features/locations'

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
        orders: orderReducer,
        auth: authReducer,
        locations: locationReducer,
    }
})

export default store;