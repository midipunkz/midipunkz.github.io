import { ThirdwebNftMedia, ThirdwebProvider, useContract, useNFT } from "@thirdweb-dev/react";


export default function Song1() {

    // Connect to your NFT contract
    const { contract } = useContract("0xc5c1390dc3f304fff4c1595c2777f455b4ce2b8a");
    // Load the NFT metadata from the contract using a hook
    const { data: nft, isLoading, error } = useNFT(contract, "0");

    // Render the NFT onto the UI
    if (!isLoading && (error || !nft)) return <div>NFT not found</div>;

    return (
        <>      {isLoading ? <div>Loading...</div> : <></>}
            {(error || !nft) ? <div>NFT not found</div> : <></>}
            {nft && nft.metadata && <ThirdwebNftMedia metadata={nft.metadata} style={{ backgroundColor: "#000", }} />}
        </>



    )
}
