"use client";
import { NFT_ABI, NFT_ADDRESS } from "@/contract";
import { useNFT } from "@/hooks/useNFTInteraction";
import { useEffect, useState } from "react";
import { readContract } from "viem/actions";
import { useAccount, usePublicClient } from "wagmi";

export function UserNFTs() {
  const { isLoadingNFTs } = useNFT();
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [nfts, setNfts] = useState<
    Array<{
      tokenId: string;
      metadataId: string;
      tokenURI: string;
      metadata: {
        name: string;
        description: string;
        image: string;
        animation_url: string;
        attributes: Array<{
          trait_type: string;
          value: string;
        }>;
      };
    }>
  >([]);

  const IPFS_GATEWAY = "https://ipfs.io/ipfs/";

  const fetchNftMetadata = async (tokenUri: string) => {
    const url = tokenUri.startsWith("ipfs://")
      ? tokenUri.replace("ipfs://", IPFS_GATEWAY)
      : tokenUri;
    try {
      const response = await fetch(url, { cache: "no-store" });

      if (!response.ok) {
        throw new Error(`Failed to fetch tokenURI: ${response.statusText}`);
      }

      const metadata = await response.json();
      if (metadata.image?.startsWith("ipfs://")) {
        metadata.image = metadata.image.replace(
          "ipfs://",
          "https://gateway.pinata.cloud/ipfs/"
        );
      }

      if (metadata.animation_url?.startsWith("ipfs://")) {
        metadata.animation_url = metadata.animation_url.replace(
          "ipfs://",
          "https://gateway.pinata.cloud/ipfs/"
        );
      }

      return metadata;
    } catch (err) {
      console.error("Erreur lors du fetch du metadata:", err);
      return null;
    }
  };

  const fetchUserNFTs = async () => {
    try {
      if (!publicClient) return [];

      const userNFTs = await readContract(publicClient, {
        address: NFT_ADDRESS,
        abi: NFT_ABI,
        functionName: "getUserNFTsDetailed",
        args: [address],
      });

      if (!userNFTs || !Array.isArray(userNFTs)) {
        console.error("Invalid response format for user NFTs");
        return [];
      }

      const formattedNFTs = [];

      for (let i = 0; i < userNFTs[0].length; i++) {
        const nft = {
          tokenId: userNFTs[0][i],
          metadataId: userNFTs[1][i],
          tokenURI: userNFTs[2][i],
        };

        let metadata = await fetchNftMetadata(nft.tokenURI);
        while (!metadata) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          metadata = await fetchNftMetadata(nft.tokenURI);
        }
        formattedNFTs.push({ ...nft, metadata });
      }

      setNfts(formattedNFTs);
    } catch (error) {
      console.error("Error fetching user NFTs:", error);
      return [];
    }
  };

  useEffect(() => {
    if (address && publicClient) {
      fetchUserNFTs();
      const interval = setInterval(() => {
        fetchUserNFTs();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [address, publicClient]);

  if (!address) {
    return (
      <div className="mt-10">
        <h2 className="text-lg sm:text-2xl text-white font-bold">
          MY NFTS ( 0 )
        </h2>
        <div className="h-48 flex items-center justify-center">
          <p className="text-white text-sm sm:text-xl">
            Connect your wallet to see your NFTs
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-0 sm:mt-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg sm:text-2xl text-white font-bold">
          MY NFTS ( {nfts.length || 0} )
        </h2>
        {/* <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className={`${
              isLoadingNFTs
                ? "bg-[rgba(255,255,255,0.1)] cursor-not-allowed"
                : "bg-brandColor hover:bg-[#6C07D1]"
            } px-6 py-2 rounded text-base sm:text-xl flex uppercase transition-all duration-300 ease-in-out items-center gap-2`}
            disabled={isLoadingNFTs}
          >
            {isLoadingNFTs && (
              <div className="animate-spin mr-2 ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke={"currentColor"}
                    strokeWidth={2}
                  />
                  <path
                    className="opacity-75"
                    fill={"currentColor"}
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
            )}
            Refresh
          </button>
        </div> */}
      </div>

      {nfts && nfts.length > 0 ? (
        <div className="flex overflow-x-auto gap-3 scrollbar-hide">
          {nfts.map((nft) => {
            const tokenId = nft.tokenId.toString();
            const metadata = nft.metadata;
            const nftName = metadata?.name || `NFT #${tokenId}`;
            return (
              <div
                key={`nft-${tokenId}`}
                className="relative transition-all duration-500 min-w-[145px] pb-3 rounded-[9px] scrollbar-hide"
              >
                <div className="bg-[rgba(255,255,255,0.37)] backdrop-blur-md rounded-[9px] overflow-hidden p-1">
                  <div className="relative w-full h-auto">
                    {metadata?.animation_url ? (
                      <video
                        src={metadata?.image}
                        className="w-full h-[134px] sm:h-[134px] object-cover rounded-lg"
                        loop
                        muted
                        autoPlay
                        controls={false}
                      />
                    ) : (
                      <img
                        src={metadata?.image || ""}
                        alt={nftName}
                        width={400}
                        height={262}
                        className="h-[134px] sm:h-[134px] w-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <div className="px-2 sm:px-2 py-1 pb-0.5">
                    <h3
                      className="text-white text-sm sm:text-[14px] font-bold"
                      style={{
                        fontWeight: "900",
                      }}
                    >
                      {metadata?.name?.split("#")?.[0] || nftName}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[100px] sm:h-48 flex items-center justify-center">
          {isLoadingNFTs ? (
            <div className="flex flex-col items-center">
              <div className="animate-spin w-8 h-8 border-4 border-[#ffffff] border-t-transparent rounded-full"></div>
            </div>
          ) : (
            <p className="text-white text-sm sm:text-xl">No NFTs found.</p>
          )}
        </div>
      )}
    </div>
  );
}
