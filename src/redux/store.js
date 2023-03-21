import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filters/filters.slice';
import { contactsReducer } from './contacts/contacts.slice';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth.slice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants'

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['list']
}


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user']
}


export const store = configureStore({
  reducer: { 
    contacts: persistReducer(contactsPersistConfig, contactsReducer), 
    filters: filtersReducer, 
    auth: persistReducer(authPersistConfig, authReducer)
  },
 middleware: getDefaultMiddleware => getDefaultMiddleware({ 
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }}
 )
});


export const persistor = persistStore(store)
