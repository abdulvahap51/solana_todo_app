import {WalletAdapterNetwork} from  "@solana/wallet-adapter-base";
import {ConnectionProvider,WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui"
import {GlowWalletAdapter,PhantomWalletAdapter,SlopeWalletAdapter} from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";


export const Connectwalletprovider = ({children}) => {
    const network = WalletAdapterNetwork.Devnet

    const endpoint = useMemo(()=>{
        if(network === WalletAdapterNetwork.Devnet){
            return "https://broken-old-telescope.solana-devnet.discover.quiknode.pro/263e1b9091ba12165d26d6868dc3eef64dcf7678/"
        }
        return clusterApiUrl(network)
    },[network])
const wallets = useMemo(()=> 
   [ new PhantomWalletAdapter()],[network]
)


    return (
        <ConnectionProvider endpoint={endpoint}>
<WalletProvider wallets={wallets}>
    <WalletModalProvider>{children}</WalletModalProvider>
</WalletProvider>
        </ConnectionProvider>
    )
}