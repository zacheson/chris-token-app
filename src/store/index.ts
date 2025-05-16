import { combineReducers, configureStore } from "@reduxjs/toolkit"
import themeConfigSlice from "./theme/themeConfigSlice"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import storage from "redux-persist/lib/storage"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist"
import { useMemo } from "react"

let store: ReturnType<typeof makeStore>
const isServer = typeof window === "undefined"

const PERSISTED_KEYS: string[] = ["themeConfig"]
const UNPERSISTED_KEYS: string[] = []

const persistConfig = {
  key: "NextjsTSAppStore",
  whitelist: PERSISTED_KEYS,
  blacklist: UNPERSISTED_KEYS,
  storage,
  version: 1,
}

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

function makeStore(preloadedState = undefined) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    preloadedState,
  })
}

const initializeStore = (preloadedState: any = undefined) => {
  let _store = store ?? makeStore(preloadedState)

  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined as any
  }

  if (typeof window === "undefined") return _store

  if (!store) {
    store = _store
  }

  return _store
}

store = initializeStore()

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const persistor = persistStore(store, undefined, () => {})

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useStore = (initialState: any = undefined) => {
  return useMemo(() => initializeStore(initialState), [initialState])
}

export default store
