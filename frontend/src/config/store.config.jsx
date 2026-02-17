import {configureStore} from '@reduxjs/toolkit'
import userReducer from "../reducer/user.reducer"
import { BannersApi } from "../api/banner.api"
import { PageApi } from '@/api/page.api'
import { ContactApi } from '@/api/contact.api'
import { TeamApi } from '@/api/team.api'
import { TestimonalApi } from '@/api/testimonal.api'
import { EventsApi } from '@/api/events.api'
import { GalleryCategoryApi } from '@/api/galleryCategory.api'
import { NoticeApi } from '@/api/notice.api'
import { GalleryApi } from '@/api/gallery.api'

const storeConfig = configureStore({
  reducer:{ 
    user :userReducer,
    [BannersApi.reducerPath]: BannersApi.reducer,
    [PageApi.reducerPath]: PageApi.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
    [TeamApi.reducerPath]: TeamApi.reducer,
    [TestimonalApi.reducerPath]: TestimonalApi.reducer,
    [GalleryCategoryApi.reducerPath]: GalleryCategoryApi.reducer,
    [EventsApi.reducerPath]: EventsApi.reducer,
    [NoticeApi.reducerPath]: NoticeApi.reducer,
    [GalleryApi.reducerPath]: GalleryApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware()
    .concat(BannersApi.middleware)
    .concat(PageApi.middleware)
    .concat(ContactApi.middleware)
    .concat(TeamApi.middleware)
    .concat(TestimonalApi.middleware)
    .concat(GalleryCategoryApi.middleware)
    .concat(EventsApi.middleware)
    .concat(NoticeApi.middleware)
    .concat(GalleryApi.middleware)
    
})

export default storeConfig
