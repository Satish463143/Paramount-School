import {configureStore} from '@reduxjs/toolkit'
import userReducer from "../reducer/user.reducer"
import { BannersApi } from "../api/banner.api"
import { PageApi } from '@/api/page.api'

const storeConfig = configureStore({
  reducer:{
    user :userReducer,
    [BannersApi.reducerPath]: BannersApi.reducer,
    [PageApi.reducerPath]: PageApi.reducer,

  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware()
    .concat(BannersApi.middleware)
    .concat(PageApi.middleware)
    
})

export default storeConfig
