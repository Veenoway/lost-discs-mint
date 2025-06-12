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
        className="sm:max-w-[600px] px-10 py-8 rounded-xl bg-[#858585] backdrop-blur-sm w-full mx-auto bg-[#ffffff13] border border-[rgba(255,255,255,0.37)] text-2xl uppercase text-white transition-all duration-300 ease-in-out"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-4xl mb-3 text-white uppercase">
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-wrap gap-5 w-full">
          {connectors?.map((connector, i) => (
            <button
              key={i}
              style={{
                width: "calc(50% - 10px)",
                fontWeight: "800",
              }}
              onClick={() => {
                connect({ connector });
                setOpen(false);
              }}
              className="bg-gradient-to-r from-[rgba(73,255,255,0.5)] to-[rgba(153,0,255,0.5)] hover:from-[rgba(73,255,255,0.8)] hover:to-[rgba(153,0,255,0.8)] transition-all duration-300 ease-in-out flex items-center justify-center rounded h-[66px] px-2 font-thin text-xl"
            >
              <img
                src={connector.icon}
                alt={connector.name}
                className="w-6 h-6 mr-3"
              />
              {connector.name}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
