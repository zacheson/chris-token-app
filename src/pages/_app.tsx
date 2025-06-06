import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { useStore, usePersistor } from "../store"
import { PersistGate } from "redux-persist/integration/react"

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore()
  const persistor = usePersistor()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
