"use client";

import { useEffect, useState } from "react";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { WalletModal } from "./connect-modal";

export function WalletConnection() {
  const { address, isConnecting, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (address) {
      setIsInitialLoading(false);
    }
  }, [address]);

  const getDisplayText = () => {
    if (isConnecting || isInitialLoading) return "Loading...";
    return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
  };

  const isWrongNetwork = chainId !== 10143;

  const handleSwitchNetwork = async () => {
    try {
      await switchChainAsync({ chainId: 10143 });
    } catch (err) {
      console.error("Failed to switch network:", err);
    }
  };

  const handleDisconnect = async () => {
    try {
      disconnect();
    } catch (err) {
      console.error("Failed to disconnect:", err);
    }
  };

  if (address && isWrongNetwork) {
    return (
      <button
        onClick={handleSwitchNetwork}
        className="
          flex items-center rounded uppercase w-fit h-[40px] sm:h-[50px] px-2.5 sm:px-5 py-5
          text-lg sm:text-2xl text-white font-medium transition-all duration-300 ease-in-out
          disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          fontWeight: "900",
        }}
      >
        Switch Network
      </button>
    );
  }

  return (
    <div className="">
      {!address && (
        <WalletModal open={open} setOpen={setOpen}>
          <button
            onClick={() => setOpen(true)}
            className={`
                   flex items-center rounded uppercase mx-auto w-fit h-[40px] sm:h-[50px] px-2.5 sm:px-5 py-5
                   text-lg sm:text-xl text-white transition-all duration-300 ease-in-out
                   ${isConnecting ? "opacity-50 cursor-not-allowed" : ""}`}
            style={{
              fontWeight: "900",
            }}
          >
            Connect Wallet
          </button>
        </WalletModal>
      )}

      {address && !isWrongNetwork && (
        <div className="flex items-center gap-4">
          <button
            onClick={handleDisconnect}
            className={`
              flex items-center rounded uppercase mx-auto w-fit h-[40px] sm:h-[50px] px-2.5 sm:px-5 py-5
              text-lg sm:text-xl text-white font-semibold transition-all duration-300 ease-in-out
              ${isConnecting || isInitialLoading ? "animate-pulse" : ""}`}
            style={{
              fontWeight: "900",
            }}
          >
            {getDisplayText()}
          </button>
        </div>
      )}
    </div>
  );
}
