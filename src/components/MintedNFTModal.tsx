import { NFT_ABI, NFT_ADDRESS } from "@/contract";
import { useEffect, useState } from "react";
import { readContract } from "viem/actions";
import { useAccount, usePublicClient } from "wagmi";

type NFT = {
  tokenId: string;
  metadataId: string;
  tokenURI: string;
  metadata: NFTMetadata | null;
};

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

export function MintedNFTModal({
  mintingStep,
  onClose,
  mintedTokenId,
}: {
  mintingStep: string;
  onClose: () => void;
  mintedTokenId?: string;
}) {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [nftMinted, setNftMinted] = useState<NFT | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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

  const fetchSpecificNFT = async (tokenId: string) => {
    if (!publicClient || !address) return;

    try {
      setIsLoading(true);

      const tokenURI = (await readContract(publicClient, {
        address: NFT_ADDRESS,
        abi: NFT_ABI,
        functionName: "tokenURI",
        args: [BigInt(tokenId)],
      })) as string;

      const metadata = await fetchNftMetadata(tokenURI);

      const nft: NFT = {
        tokenId,
        metadataId: tokenId,
        tokenURI,
        metadata,
      };

      setNftMinted(nft);
    } catch (error) {
      console.error("Failed to fetch specific NFT:", error);
      await fetchLastNFT();
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLastNFT = async () => {
    if (!publicClient || !address) return;

    try {
      setIsLoading(true);
      const userNFTs = (await readContract(publicClient, {
        address: NFT_ADDRESS,
        abi: NFT_ABI,
        functionName: "getUserNFTsDetailed",
        args: [address],
      })) as [bigint[], bigint[], string[]];

      if (userNFTs[0].length > 0) {
        const lastIndex = userNFTs[0].length - 1;
        const tokenId = userNFTs[0][lastIndex].toString();
        const tokenURI = userNFTs[2][lastIndex];

        const metadata = await fetchNftMetadata(tokenURI);

        const lastNFT: NFT = {
          tokenId,
          metadataId: userNFTs[1][lastIndex].toString(),
          tokenURI,
          metadata,
        };

        setNftMinted(lastNFT);
      }
    } catch (error) {
      console.error("Failed to fetch last NFT:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!address || !publicClient || mintingStep !== "success") return;

    if (mintedTokenId) {
      fetchSpecificNFT(mintedTokenId);
    } else {
      fetchLastNFT();
    }
  }, [address, publicClient, mintingStep, mintedTokenId]);

  if (mintingStep !== "success") {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-[fadeIn_0.3s_ease-in-out]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        style={{
          boxShadow: "0 0 30px 0 rgba(0, 238, 255, 0.2)",
        }}
        className="bg-[#020202] rounded-xl text-center relative max-w-[440px] px-10 py-8 pb-12 w-[90%] animate-[scaleIn_0.3s_ease-in-out]"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl hover:scale-110 transition-transform"
          aria-label="Fermer la popup"
        >
          ×
        </button>

        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">
          Mint Successful!
        </h2>

        <div className="w-[200px] h-[200px] mx-auto mb-4 border border-white/10 rounded-lg overflow-hidden bg-black/20">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-[#49FFFF] border-opacity-20 rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-[#9900FF] border-opacity-40 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 w-12 h-12 bg-gradient-to-r from-[#49FFFF] to-[#9900FF] rounded-full animate-spin"></div>
              </div>
            </div>
          ) : nftMinted?.metadata?.animation_url ? (
            <video
              src={
                nftMinted.metadata.animation_url.includes("ipfs://")
                  ? nftMinted.metadata.animation_url.replace(
                      "ipfs://",
                      "https://gateway.pinata.cloud/ipfs/"
                    )
                  : nftMinted.metadata.animation_url.replace(
                      "ipfs/",
                      "https://gateway.pinata.cloud/ipfs/"
                    )
              }
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : nftMinted?.metadata?.image ? (
            <img
              src={
                nftMinted.metadata.image.includes("ipfs://")
                  ? nftMinted.metadata.image.replace(
                      "ipfs://",
                      "https://gateway.pinata.cloud/ipfs/"
                    )
                  : nftMinted.metadata.image.replace(
                      "ipfs/",
                      "https://gateway.pinata.cloud/ipfs/"
                    )
              }
              alt={nftMinted.metadata.name || `Lost Disc #${nftMinted.tokenId}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#49FFFF] to-[#9900FF] opacity-20">
              <span className="text-white/60 text-sm font-bold">
                NFT #{nftMinted?.tokenId || "?"}
              </span>
            </div>
          )}
        </div>

        <p className="text-white text-base sm:text-lg font-semibold mb-2">
          {nftMinted?.metadata?.name ||
            `Lost Disc #${nftMinted?.tokenId || "..."}`}
        </p>
        <p className="text-white text-xs sm:text-sm font-montserrat mb-2 text-white/80">
          Your NFT has been minted successfully.
        </p>
        <button
          onClick={() => {
            window.open(`https://magiceden.io/monad-testnet`, "_blank");
          }}
          className="px-6 py-3 mt-6 mx-auto w-full sm:w-[240px] bg-[#836EF9] text-white rounded-md font-medium shadow hover:opacity-90 transition flex items-center text-xs sm:text-sm justify-center gap-2"
        >
          View on Marketplace
        </button>
        <button
          onClick={() => {
            const tweetText = `I just minted my Lost Discs #${
              nftMinted?.metadata?.name || nftMinted?.tokenId || "NFT"
            } from @Monshape! 🎉`;
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              tweetText
            )}`;
            window.open(tweetUrl, "_blank");
          }}
          className="mt-3 px-6 py-3 mx-auto bg-[#1D1D1D] w-full sm:w-[240px] text-white rounded-md font-medium shadow hover:opacity-90 transition flex items-center text-xs sm:text-sm justify-center gap-2"
        >
          Share on X (Twitter)
        </button>
      </div>
    </div>
  );
}
