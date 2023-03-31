import style from './index.module.scss'
import { ThirdwebNftMedia, ThirdwebProvider, useContract, useNFT } from "@thirdweb-dev/react";


export default function GM() {

// Connect to your NFT contract
  const { contract } = useContract("0x3a29f9f90ea83893b70ed7725afab758d9779acb");
  // Load the NFT metadata from the contract using a hook
  const { data: nft, isLoading, error } = useNFT(contract, "11");

  // Render the NFT onto the UI
  if (!isLoading && (error || !nft)) return <div>NFT not found</div>;

  return (

    <div className={style.parent}>
      <div className={style.content}>
      {isLoading ? <div>Loading...</div>: <></>}
      { (error || !nft) ? <div>NFT not found</div> : <></>}
      {nft && nft.metadata && <ThirdwebNftMedia metadata={nft.metadata} style={{ backgroundColor: "#000", width: '50vw', height: '50vh'}}/>}
      </div>
    </div>
 

  )
}
