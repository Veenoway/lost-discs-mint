"use client";
import { NFT_ABI, NFT_ADDRESS } from "@/contract";
import { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
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
      setIsLoading(true);
      const userNFTs = (await publicClient.readContract({
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

      setHasLoaded(true);
    } catch (error) {
      console.error("Failed to fetch NFTs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!address || !publicClient) return;
    fetchUserNFTs();

    const interval = setInterval(fetchUserNFTs, 5000);
    return () => clearInterval(interval);
  }, [address, publicClient]);

  if (!address) {
    return (
      <div className="mt-10">
        <h2 className="text-lg sm:text-2xl text-white font-bold">
          MY NFTS ( 0 )
        </h2>
        <div className="h-48 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#49FFFF] to-[#9900FF] opacity-20 animate-pulse"></div>
            <p className="text-white/70 text-sm sm:text-lg font-medium">
              Connect your wallet to see your NFTs
            </p>
            <p className="text-white/50 text-xs sm:text-sm mt-2">
              Your Lost Discs will appear here
            </p>
          </div>
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
        {isLoading && (
          <div className="">
            <div className="w-5 h-5 mx-auto border-2 border-white/30 border-t-white/80 rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {isLoading && !hasLoaded ? (
        // État de chargement initial
        <div className="h-[200px] flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-[#49FFFF] border-opacity-20 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border-4 border-[#9900FF] border-opacity-40 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-[#49FFFF] to-[#9900FF] animate-spin"></div>
            </div>
            <p className="text-white/80 text-sm sm:text-lg font-medium">
              Loading your Lost Discs...
            </p>
            <p className="text-white/50 text-xs sm:text-sm mt-2">
              Discovering your collection
            </p>
          </div>
        </div>
      ) : nfts && nfts.length > 0 ? (
        // NFTs trouvés
        <div className="flex overflow-x-auto gap-3 scrollbar-hide">
          {nfts.map((nft) => {
            const tokenId = nft.tokenId;
            const metadata = nft.metadata;
            const nftName = metadata?.name || `NFT #${tokenId}`;
            return (
              <div
                key={`nft-${tokenId}`}
                className="relative transition-all duration-500 min-w-[145px] pb-3 rounded-[9px] scrollbar-hide hover:scale-105"
              >
                <div className="bg-[rgba(255,255,255,0.37)] backdrop-blur-md rounded-[9px] overflow-hidden p-1 border border-white/20 hover:border-white/40 transition-all duration-300">
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
        <div className="h-[200px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#49FFFF] to-[#9900FF] opacity-60 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-white/80 text-sm sm:text-lg font-medium">
              No Lost Discs found
            </p>
            <p className="text-white/50 text-xs sm:text-sm mt-2 max-w-xs">
              {address && isLoading
                ? "Loading your Lost Discs..."
                : address
                ? "Mint your first Lost Disc to start your collection"
                : "Connect your wallet to see your NFTs"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
