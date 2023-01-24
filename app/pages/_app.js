import Head from 'next/head'
import '../styles/global.css'
// Import WalletConnectionProvider from components
import { Connectwalletprovider  } from '../components/Connectwalletprovider'
// Import the solana wallet css
import "@solana/wallet-adapter-react-ui/styles.css"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
               <Connectwalletprovider>
                    <Component {...pageProps} /></Connectwalletprovider>
            </main>
        </>
    )
}

export default MyApp
