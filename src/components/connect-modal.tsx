"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/lib/shadcn/modal";
import { FC, PropsWithChildren } from "react";
import { useConnect } from "wagmi";

export const WalletModal: FC<
  PropsWithChildren & { open: boolean; setOpen: (value: boolean) => void }
> = ({ children, open, setOpen }) => {
  const { connect, connectors } = useConnect();
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        close={() => setOpen(false)}
        style={{
          boxShadow: "0 0 30px 0 rgba(0, 238, 255, 0.2)",
        }}
        className="fixed bg-[#020202] z-[100] max-w-[500px] w-[90%] py-6 sm:py-8 px-6 sm:px-10 flex flex-col items-center justify-center bg-black/70 rounded-2xl"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl sm:mb-3 mb-2 text-white uppercase">
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-3 sm:gap-5 w-full">
          {connectors?.map((connector, i) => {
            return (
              <button
                key={i}
                style={{
                  width: "calc(50% - 10px)",
                }}
                onClick={() => {
                  connect({ connector });
                  setOpen(false);
                }}
                className="bg-[#836EF9] hover:bg-[#836EF9]/80 transition-all duration-300 ease-in-out flex items-center justify-center rounded-md h-[45px] sm:h-[54px] px-2 font-normal text-sm sm:text-lg"
              >
                <img
                  src={
                    connector.icon
                      ? (connector.icon as string)
                      : connector.name === "MetaMask"
                      ? "/social/metamask.webp"
                      : connector.name === "WalletConnect"
                      ? "/social/wallet-connect.png"
                      : "/social/link.png"
                  }
                  alt={connector.name}
                  className={`${
                    connector.name === "Injected" ? "w-4 h-4" : "w-5 h-5"
                  } mr-3`}
                />
                {connector.name}
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};
