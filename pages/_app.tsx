import { AppProps } from 'next/app'
import { FC } from 'react'
import '../styles/global.css'

// This default export is required in a new `pages/_app.js` file.
const App: FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }: any) => {
    return <Component {...pageProps} />
}

export default App;
