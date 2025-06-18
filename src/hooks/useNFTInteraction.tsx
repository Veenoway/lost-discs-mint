"use client";

import { NFT_ABI, NFT_ADDRESS } from "@/contract";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { formatUnits, parseUnits } from "viem/utils";
import {
  useAccount,
  useConnect,
  usePublicClient,
  useReadContract,
  useSignMessage,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { readContract } from "wagmi/actions";

interface NFTMetadata {
  tokenId: bigint;
  metadataId: bigint;
  name: string;
  description: string;
  image: string;
  attributes: Array<{ trait_type: string; value: string }>;
}

interface UserNFTDetailed {
  tokenId: bigint;
  metadataId: bigint;
  tokenURI: string;
  metadata?: NFTMetadata;
  normalizedImage?: string;
}

export function useNFT() {
  const { address, isConnected } = useAccount();
  const queryClient = useQueryClient();
  const { connect, connectors } = useConnect();
  const publicClient = usePublicClient();
  const [lastMintedTokenId, setLastMintedTokenId] = useState<bigint | null>(
    null
  );
  const isFirstMount = useRef(true);
  const [mintPrice, setMintPrice] = useState<bigint>(BigInt(0));
  const [userNFTs, setUserNFTs] = useState<UserNFTDetailed[]>([]);
  const [nftMetadata, setNftMetadata] = useState<NFTMetadata[]>([]);
  const [isLoadingNFTs, setIsLoadingNFTs] = useState(false);
  const refreshIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const {
    signMessage,
    data: signature,
    isError: isSignError,
    isLoading: isSignLoading,
  } = useSignMessage();
  const { writeContractAsync } = useWriteContract();

  const { data: maxSupply } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "MAX_SUPPLY",
  });

  const { data: totalMinted } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "totalMinted",
  });

  const { data: price } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "PRICE",
  });

  const { data: remainingSupply } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "remainingSupply",
  });

  const { data: isPaused } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "paused",
  });

  const { data: userMintStatus } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "getUserMintStatus",
    args: address ? [address] : undefined,
  });

  const { data: mintPhaseInfo } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "getMintPhaseInfo",
  });

  const { data: isUserWL } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "isWhitelisted",
    args: address ? [address] : undefined,
  });

  const { data: isUserOG } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "isOG",
    args: address ? [address] : undefined,
  });

  const { data: isUserFCFS } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "isFCFS",
    args: address ? [address] : undefined,
  });

  const { data: isUserTeam } = useReadContract({
    address: NFT_ADDRESS,
    abi: NFT_ABI,
    functionName: "isTeamMember",
    args: address ? [address] : undefined,
  });

  const { writeContract, data: txHash, error } = useWriteContract();
  const { isLoading: isMintLoading, isSuccess: isMintSuccess } =
    useWaitForTransactionReceipt({ hash: txHash });

  const formatMON = (weiAmount: bigint | undefined): string => {
    if (!weiAmount) return "0";
    return formatUnits(weiAmount, 18);
  };

  const parseMON = (monAmount: string): bigint => {
    try {
      return parseUnits(monAmount, 18);
    } catch (error) {
      console.error("Error parsing MON amount:", error);
      return BigInt(0);
    }
  };

  useEffect(() => {
    getMintPrice();
  }, [mintPhaseInfo]);

  const getMintPrice = (): bigint => {
    const currentPhase = formatMintPhaseInfo()?.currentPhase;

    if (
      typeof isUserTeam !== "undefined" &&
      isUserTeam !== null &&
      Boolean(isUserTeam)
    ) {
      return BigInt(0);
    }

    switch (currentPhase) {
      case "Team Only": {
        setMintPrice(BigInt(0));
        return BigInt(0);
      }
      case "Whitelist": {
        setMintPrice(BigInt(1 * 10 ** 18));
        return BigInt(1 * 10 ** 18);
      }
      case "First Come First Served": {
        setMintPrice(BigInt(3 * 10 ** 18));
        return BigInt(3 * 10 ** 18);
      }
      case "Public Mint": {
        setMintPrice(BigInt(50 * 10 ** 18));
        return BigInt(50 * 10 ** 18);
      }
      default:
        return BigInt(0);
    }
  };

  const getFormattedPrice = (): string => {
    const mintPrice = getMintPrice();
    return formatMON(mintPrice);
  };

  const mint = async (isOG: boolean = false) => {
    if (!isConnected) {
      await connect({ connector: connectors[0] });
      return false;
    }
    if (!publicClient) {
      throw new Error("Client unavailable");
    }

    const mintPrice = getMintPrice();

    try {
      const hash = await writeContractAsync({
        address: NFT_ADDRESS,
        abi: NFT_ABI,
        functionName: "mint",
        args: [isOG],
        value: mintPrice,
        gas: BigInt(300_000),
      });

      const { status } = await publicClient.waitForTransactionReceipt({ hash });
      return status === "success";
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err &&
        "shortMessage" in err &&
        typeof err.shortMessage === "string" &&
        err.shortMessage.includes("User rejected")
      ) {
        console.log("Transaction rejetée");
      } else {
        console.error("Error during mint:", err);
      }
      return false;
    }
  };

  const invalidateQueries = () => {
    if (!queryClient) return;

    const queries = [
      "totalMinted",
      "MAX_SUPPLY",
      "getUserMintStatus",
      "remainingSupply",
      "getMintPhaseInfo",
      "getUserNFTsDetailed",
    ].map((functionName) => ({
      queryKey: [
        "readContract",
        {
          address: NFT_ADDRESS,
          functionName,
        },
      ],
    }));

    queries.forEach((query) => queryClient.invalidateQueries(query));
  };

  useEffect(() => {
    if (address && publicClient) {
      if (isFirstMount.current) {
        isFirstMount.current = false;
      }

      refreshIntervalRef.current = setInterval(() => {
        invalidateQueries();
      }, 10000);

      return () => {
        if (refreshIntervalRef.current) {
          clearInterval(refreshIntervalRef.current);
          refreshIntervalRef.current = null;
        }
      };
    }
  }, [address, publicClient]);

  useEffect(() => {
    if (txHash && publicClient) {
      (async () => {
        const receipt = await publicClient.waitForTransactionReceipt({
          hash: txHash,
          confirmations: 1,
        });
        if (receipt.status === "success") {
          invalidateQueries();

          try {
            const currentTotalMinted = (await readContract(publicClient, {
              address: NFT_ADDRESS,
              abi: NFT_ABI,
              functionName: "totalMinted",
            })) as bigint;

            const newTokenId = currentTotalMinted - BigInt(1);
            setLastMintedTokenId(newTokenId);
          } catch (err) {
            console.error("Error retrieving totalMinted:", err);
          }
        }
      })();
    }
  }, [txHash, publicClient]);

  const formatUserMintStatus = () => {
    if (
      !userMintStatus ||
      !Array.isArray(userMintStatus) ||
      userMintStatus.length < 5
    ) {
      return null;
    }

    return {
      canCurrentlyMint: Boolean(userMintStatus[0]),
      mintsDone: Number(userMintStatus[1]),
      mintsAllowed: Number(userMintStatus[2]),
      mintsRemaining: Number(userMintStatus[3]),
      userStatus: String(userMintStatus[4]),
    };
  };

  const formatMintPhaseInfo = () => {
    if (
      !mintPhaseInfo ||
      !Array.isArray(mintPhaseInfo) ||
      mintPhaseInfo.length < 5
    ) {
      return null;
    }

    return {
      currentPhase: String(mintPhaseInfo[0]),
      isActive: Boolean(mintPhaseInfo[1]),
      totalSupply: Number(mintPhaseInfo[2]),
      mintedCount: Number(mintPhaseInfo[3]),
      remainingCount: Number(mintPhaseInfo[4]),
    };
  };

  const verifySignature = async (
    address: string,
    signature: string,
    message: string
  ) => {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, signature, message }),
      });
      const data = await response.json();
      return data.isValid;
    } catch (error) {
      console.error("Error verifying signature:", error);
      return false;
    }
  };

  const requestSignature = async () => {
    if (!isConnected) {
      await connect({ connector: connectors[0] });
      return null;
    }
    try {
      const message = "I confirm I own this wallet. Mint with signature";
      await signMessage({ message });
      return signature;
    } catch (error) {
      console.error("Erreur lors de la signature:", error);
      return null;
    }
  };

  const mintWithSignature = async () => {
    if (!isConnected) {
      await connect({ connector: connectors[0] });
      return;
    }

    if (!signature) {
      await requestSignature();
      return;
    }

    const message = "I confirm I own this wallet. Mint with signature";
    const isValid = await verifySignature(
      address || "",
      signature || "",
      message
    );
    if (!isValid) {
      await requestSignature();
      return;
    }

    const success = await mint();
    return success;
  };

  return {
    maxSupply: Number(maxSupply ?? 0),
    totalMinted: Number(totalMinted ?? 0),
    price,
    remainingSupply: Number(remainingSupply ?? 0),
    isPaused: Boolean(isPaused),

    mint,
    isLoading: isMintLoading,
    isSuccess: isMintSuccess,
    error,
    lastMintedTokenId,
    isLoadingNFTs,

    getMintPrice,
    getFormattedPrice,
    formatMON,
    parseMON,

    isConnected,
    userMintStatus: formatUserMintStatus(),
    isUserWL: Boolean(isUserWL),
    isUserOG: Boolean(isUserOG),
    isUserFCFS: Boolean(isUserFCFS),
    isUserTeam: Boolean(isUserTeam),

    mintPhaseInfo: formatMintPhaseInfo(),

    mintPrice,
    nftMetadata,
    userNFTs,

    verifySignature,
    requestSignature,
    signature,
    isSignError,
    isSignLoading,
    mintWithSignature,
  };
}
