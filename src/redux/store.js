// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsStorageReducer } from './contactsStorageReducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsStoragepostDetailsPersistConfig = {
  key: 'contactsStorage',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    contactsStorage: persistReducer(
      contactsStoragepostDetailsPersistConfig,
      contactsStorageReducer
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
