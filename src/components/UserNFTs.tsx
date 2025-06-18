"use client";
import { NFT_ABI, NFT_ADDRESS } from "@/contract";
import { useEffect, useState } from "react";
import { readContract } from "viem/actions";
import { useAccount, usePublicClient } from "wagmi";

type NFTMetadata = {
  name: string;
  description: string;
  image: string;
  animation_url: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
};

type NFT = {
  tokenId: string;
  metadataId: string;
  tokenURI: string;
  metadata: NFTMetadata | null;
};

export function UserNFTs() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const metadataCache = new Map<string, NFTMetadata>();

  const IPFS_GATEWAYS = ["https://ipfs.io/ipfs/"];
  const getRandomGateway = () => {
    return IPFS_GATEWAYS[Math.floor(Math.random() * IPFS_GATEWAYS.length)];
  };

  const fetchNftMetadata = async (
    tokenUri: string
  ): Promise<NFTMetadata | null> => {
    const cached = metadataCache.get(tokenUri);
    if (cached) return cached;

    const gateway = getRandomGateway();
    const url = tokenUri.startsWith("ipfs://")
      ? tokenUri.replace("ipfs://", gateway)
      : tokenUri;

    try {
      const res = await fetch(
        `/api/pinata?cidOrPath=${encodeURIComponent(url)}`,
        {
          method: "GET",
        }
      );
      if (!res.ok) {
        return null;
      }

      const metadata = await res.json();
      if (metadata.image?.startsWith("ipfs://")) {
        metadata.image = metadata.image.replace("ipfs://", gateway);
      }

      metadataCache.set(tokenUri, metadata);
      return metadata;
    } catch (e) {
      console.error("IPFS fetch error", e);
      return null;
    }
  };

  const fetchUserNFTs = async () => {
    if (!publicClient || !address) return;

    try {
      const userNFTs = (await readContract(publicClient, {
        address: NFT_ADDRESS,
        abi: NFT_ABI,
        functionName: "getUserNFTsDetailed",
        args: [address],
      })) as [bigint[], bigint[], string[]];

      const updatedNFTs: NFT[] = [];

      for (let i = 0; i < userNFTs[0].length; i++) {
        const tokenId = userNFTs[0][i].toString();
        const tokenURI = userNFTs[2][i];

        const metadata = await fetchNftMetadata(tokenURI);

        updatedNFTs.push({
          tokenId,
          metadataId: userNFTs[1][i].toString(),
          tokenURI,
          metadata,
        });
      }

      setNfts((prev) => {
        const prevIds = prev.map((nft) => nft.tokenId);
        const updatedIds = updatedNFTs.map((nft) => nft.tokenId);

        const hasChanged =
          prevIds.length !== updatedIds.length ||
          !updatedIds.every((id) => prevIds.includes(id));

        return hasChanged ? updatedNFTs : prev;
      });
    } catch (error) {
      console.error("Failed to fetch NFTs:", error);
    }
  };

  useEffect(() => {
    if (!address || !publicClient) return;
    fetchUserNFTs();

    const interval = setInterval(fetchUserNFTs, 30_000); // toutes les 30s
    return () => clearInterval(interval);
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
            const tokenId = nft.tokenId;
            const metadata = nft.metadata;
            const nftName = metadata?.name || `NFT #${tokenId}`;
            return (
              <div
                key={`nft-${tokenId}`}
                className="relative transition-all duration-500 min-w-[145px] pb-3 rounded-[9px] scrollbar-hide"
              >
                <div className="bg-[rgba(255,255,255,0.37)] backdrop-blur-md rounded-[9px] overflow-hidden p-1">
                  <div className="relative w-full h-auto">
                    {!metadata?.animation_url ? (
                      <video
                        src={metadata?.animation_url?.replace(
                          "ipfs.io",
                          "gateway.pinata.cloud"
                        )}
                        className="w-full h-[134px] sm:h-[134px] object-cover rounded-lg"
                        loop
                        muted
                        autoPlay
                        controls={false}
                      />
                    ) : (
                      <img
                        src={metadata?.image?.replace(
                          "ipfs.io",
                          "gateway.pinata.cloud"
                        )}
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
          {/* TODO: remove this */}
          {true ? (
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
