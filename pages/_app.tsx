import { ThirdwebProvider } from '@thirdweb-dev/react';
import { AppProps } from 'next/app'
import { FC } from 'react'
import '../styles/global.css'
import { useRouter } from 'next/router';


// This default export is required in a new `pages/_app.js` file.
const App: FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }: any) => {

    const router = useRouter();

    const nftRoutes = ['/gm'];

    return  <>
    {
        nftRoutes.includes(router.pathname) ? <ThirdwebProvider activeChain="polygon">
         <Component {...pageProps} />
        </ThirdwebProvider> :  <Component {...pageProps} />}
    </>

    }
export default App;
