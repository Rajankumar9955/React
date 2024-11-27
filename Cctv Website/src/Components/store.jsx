import { configureStore } from "@reduxjs/toolkit";
import myData from "./addtocartSlice";


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, myData)

const store =configureStore({
    reducer:{
        addCart:persistedReducer
    }
})
export default store;
export const  persistor = persistStore(store)