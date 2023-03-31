import { ThirdwebProvider } from '@thirdweb-dev/react';
import { AppProps } from 'next/app'
import { FC } from 'react'

// This default export is required in a new `pages/_app.js` file.
const App: FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }: any) => {
    return <ThirdwebProvider activeChain="polygon">
        <Component {...pageProps} />
    </ThirdwebProvider>
}

export default App;
