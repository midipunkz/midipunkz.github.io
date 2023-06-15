import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Song1 from "@/components/Song1";
import TikSong1 from "@/components/TikTokEmbedSong1";
import { ThirdwebNftMedia, useContract, useContractEvents, useContractMetadata, useNFT } from "@thirdweb-dev/react";
import { truncateAddress } from "@/utils/truncateAddress";
import { HistoryCard } from "@/components/HistoryCard";
import Link from "next/link";


export default function Home() {
  const contractAddress = '0xc5c1390dc3f304fff4c1595c2777f455b4ce2b8a'
  const id = 0
  const { contract } = useContract(contractAddress);
  const { data: nft, isLoading } = useNFT(contract, id);
  // const { data: contractMetadata } = useContractMetadata(contract);
  const { data: eventsData, isLoading: eventsLoading } = useContractEvents(
    contract,
    "Transfer",
    {
      queryFilter: {
        filters: {
          tokenId: id,
        },
        order: "desc",
      },
    },
  );

  return (

    <>
      {/* <Banner /> */}


      <Header />

      <main className="container mx-auto pt-4">

        {/* <MiDiPunkz/> */}

        {/* <h1 style={{color:'white', fontSize: '40px'}}>MiDiPunkz Collab Song</h1> */}

        {/* <br/> */}

        {/* Now Available as a Sound on Tiktok and Instagram */}



        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 md:flex-row">
          <div className="flex flex-col px-10 md:min-h-screen md:w-1/2">
            {nft ? (
              <ThirdwebNftMedia
                metadata={nft?.metadata}
                className="!md:h-96 !md:w-96 !h-full !max-h-[600px] !w-full !max-w-[600px] !rounded-lg !object-cover"
              />
            ) : (
              isLoading && (
                <div className="h-full max-h-[600px] w-full !max-w-[600px] animate-pulse rounded-lg bg-gray-800 md:h-96 md:w-96" />
              )
            )}

            {eventsData && eventsData?.length > 0 ? (
              <p className="mt-8 hidden text-lg font-semibold uppercase text-[#646D7A] md:flex">
                History
              </p>
            ) : (
              isLoading && (
                <div className="mt-8 hidden h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:flex" />
              )
            )}

            {eventsLoading ? (
              <div className="mt-2 hidden h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:flex" />
            ) : (
              <div className="mt-4 hidden flex-col gap-4 md:flex">
                {eventsData?.map((event) => (
                  <HistoryCard event={event} />
                ))}
              </div>
            )}
          </div>

          <div className="mt-10 flex w-full flex-col gap-6 px-10 md:mt-0 md:min-h-screen md:w-1/2">
            {/* <div className="flex flex-col">
            {contractMetadata?.name ? (
              <p className="text-lg font-semibold uppercase text-[#646D7A]">
                collection
              </p>
            ) : (
              isLoading && (
                <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
              )
            )}

            {isLoading ? (
              <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
            ) : (
              <p className="text-3xl font-bold text-white">
                {contractMetadata?.name}
              </p>
            )}
          </div> */}

            <div className="flex flex-col">
              {/* <p className="text-lg font-semibold uppercase text-[#646D7A]">
              #{id}
            </p> */}

              {nft?.metadata.name ? (
                <p className="text-3xl font-bold text-white">
                  {String(nft?.metadata.name).split("#")[0]}
                </p>
              ) : (
                isLoading && (
                  <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
                )
              )}
            </div>

            {/* <div className="flex flex-col">
            {nft?.owner ? (
              <p className="text-lg font-semibold uppercase text-[#646D7A]">
                CURRENT OWNER
              </p>
            ) : (
              isLoading && (
                <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
              )
            )}

            {isLoading ? (
              <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
            ) : (
              <p className="text-3xl font-bold text-white">
                {truncateAddress(nft?.owner!)}
              </p>
            )}
          </div> */}

            {nft?.metadata.description ? (
              <p className="text-lg font-semibold uppercase text-[#646D7A]">
                Description
              </p>
            ) : (
              isLoading && (
                <div className="mt-8 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
              )
            )}

            {isLoading ? (
              <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
            ) : (
              <p className="text-lg font-medium text-white">
                {nft?.metadata.description}
              </p>
            )}

            <div className="-mt-4 flex flex-col gap-4">
              {nft?.metadata.attributes &&
                // @ts-ignore
                nft?.metadata.attributes.length > 0 && (
                  <>
                    {isLoading ? (
                      <div className="mt-2 h-8 w-1/2 animate-pulse rounded-lg bg-gray-800" />
                    ) : (
                      <p className="text-lg font-semibold uppercase text-[#646D7A]">
                        Attributes
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4">
                      {/* @ts-ignore */}
                      {nft?.metadata.attributes?.map(
                        (attr: { trait_type: string; value: string }) => (
                          <div className="flex flex-col rounded-lg border border-gray-700 p-4">
                            <h2 className="text-sm font-semibold text-[#646D7A]">
                              {attr.trait_type}
                            </h2>
                            <h1 className="text-xl font-semibold text-gray-200">
                              {attr.value}
                            </h1>
                          </div>
                        ),
                      )}
                    </div>
                  </>
                )}

              {eventsData && eventsData?.length > 0 ? (
                <p className="mt-8 flex text-lg font-semibold uppercase text-[#646D7A] md:hidden">
                  History
                </p>
              ) : (
                isLoading && (
                  <div className="mt-8 flex h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:hidden" />
                )
              )}

              {eventsLoading ? (
                <div className="mt-2 flex h-8 w-1/2 animate-pulse rounded-lg bg-gray-800 md:hidden" />
              ) : (
                <div className="mt-4  flex flex-col gap-4 md:hidden">
                  {eventsData?.map((event) => (
                    <HistoryCard event={event} />
                  ))}
                </div>
              )}
            </div>

            <p className="text-lg font-semibold uppercase text-[#646D7A]" >

              Now Available as a Sound on <Link href="https://www.tiktok.com/music/DJ-DJ-Spin-That-Record-For-Me-7237240495876868098?_d=secCgYIASAHKAESPgo8zsFTN3jJOLSm0ag6TmPEoFBC%2BwgP0ZXfuziBqHu36myRLL5DzSnaB4qtCKDpKS8%2Bpb84oeann0wS7kCrGgA%3D&_r=1&checksum=7e4a44963689ec80fac51ca72b594ea26ada62f710ae71375a407021a13912bd&sec_user_id=MS4wLjABAAAADKlFpY-GgepMOGp2De_5-RTk_3q6aQVKBNMhkzW0iVEI_g30zeg4O_6GFTDHx8QC&share_app_id=1233&share_link_id=781240C8-FE77-47C6-BC06-18C51A4689A1&share_music_id=7237240495876868098&sharer_language=en&source=h5_m&timestamp=1685301497&tt_from=copy&u_code=e4ihfl8blkbgd1&ug_btm=b2878%2Cb5171&user_id=7162051082000221190&utm_campaign=client_share&utm_medium=ios&utm_source=copy">Tiktok</Link> and <Link href="https://www.instagram.com/reels/audio/1670526693377987/">Instagram</Link></p>
            <TikSong1 />


            {/* <div className="mb-8 mt-auto md:mb-40 md:w-full">
            <PoweredBy />
          </div> */}
          </div>
        </div>




        {/* See you soon! */}
        {/* Hello World. <Link href="/about">About</Link> */}

      </main>


      <Footer />
    </>

  )
}
