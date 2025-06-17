import { NFT_ABI, NFT_ADDRESS } from "@/contract";
import { useNFT } from "@/hooks/useNFTInteraction";
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
  nft,
  onClose,
}: {
  nft: { id: string; image: string };
  onClose: () => void;
}) {
  if (!nft) return null;

  const { isLoadingNFTs } = useNFT();
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [nftMinted, setNftMinted] = useState<NFT | null>(null);
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
      if (userNFTs[0].length > 0) {
        const lastNFT = updatedNFTs[updatedNFTs.length - 1];
        setNftMinted(lastNFT);
      }
    } catch (error) {
      console.error("Failed to fetch NFTs:", error);
    }
  };

  useEffect(() => {
    if (!address || !publicClient) return;
    fetchUserNFTs();
  }, [address, publicClient]);

  if (isLoadingNFTs) {
    return <div>Loading...</div>;
  }

  console.log(nftMinted, "NFTS");

  if (!nftMinted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#181818] rounded-xl p-6 text-center relative max-w-xs w-[90%] shadow-2xl border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl hover:scale-110 transition-transform"
          aria-label="Fermer la popup"
        >
          ×
        </button>
        <h2 className="text-white text-2xl font-bold mb-4">Félicitations !</h2>
        <img
          src={nftMinted.metadata?.image?.replace(
            "ipfs.io",
            "gateway.pinata.cloud"
          )}
          alt={`NFT #${nftMinted.tokenId}`}
          className="w-40 h-40 object-cover rounded-lg mx-auto mb-4 border border-white/10"
        />
        <p className="text-white text-lg font-semibold mb-2">
          Tu viens de mint le NFT #{nftMinted.tokenId} !
        </p>
        <button
          onClick={onClose}
          className="mt-2 px-6 py-2 bg-gradient-to-r from-[#49FFFF] to-[#9900FF] text-white rounded font-bold uppercase shadow hover:opacity-90 transition"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
