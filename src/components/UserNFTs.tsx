"use client";
import { useNFT } from "@/hooks/useNFTInteraction";
import { useEffect, useRef } from "react";
import { useAccount } from "wagmi";

export function UserNFTs() {
  const { refreshUserNFTs, userNFTs, isLoadingNFTs } = useNFT();
  const { address } = useAccount();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (address && !hasInitialized.current) {
      console.log("Initial NFT loading");
      refreshUserNFTs().then(() => {
        hasInitialized.current = true;
      });
    }
  }, [address, refreshUserNFTs]);

  if (!address) {
    return (
      <div className="mt-10">
        <h2 className="text-2xl sm:text-4xl text-white mb-4">MY NFTS (0)</h2>
        <div className="h-48 flex items-center justify-center">
          <p className="text-[rgba(255,255,255,1)] uppercase text-xl sm:text-3xl">
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
          MY NFTS ( {userNFTs.length || 0} )
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

      {userNFTs && userNFTs.length > 0 ? (
        <div className="flex overflow-x-auto gap-3 scrollbar-hide">
          {userNFTs.map((nft) => {
            const tokenId = nft.tokenId.toString();
            const nftName = nft.metadata?.name || `NFT #${tokenId}`;
            return (
              <div
                key={`nft-${tokenId}`}
                className="relative transition-all duration-500 min-w-[145px] pb-3 rounded-[9px] scrollbar-hide"
              >
                <div className="bg-[rgba(255,255,255,0.37)] backdrop-blur-md rounded-[9px] overflow-hidden p-1">
                  <div className="relative w-full h-auto">
                    {nft.normalizedImage &&
                    (nft.normalizedImage.endsWith(".mp4") ||
                      nft.normalizedImage.endsWith(".wav") ||
                      nft.normalizedImage.endsWith(".webm")) ? (
                      <video
                        src={nft.normalizedImage}
                        controls
                        className="w-full h-[134px] sm:h-[134px] object-cover rounded-lg"
                        loop
                        muted
                      />
                    ) : (
                      <img
                        src={nft.normalizedImage || ""}
                        alt={nftName}
                        width={400}
                        height={262}
                        className=" h-[134px] sm:h-[134px] w-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <div className="px-2 sm:px-2 py-1 pb-0.5">
                    <h3
                      className="text-white text-sm sm:text-[15px] font-bold"
                      style={{
                        fontWeight: "900",
                      }}
                    >
                      {nftName}
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
