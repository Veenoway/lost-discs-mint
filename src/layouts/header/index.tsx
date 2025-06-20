import { WalletConnection } from "@/components/connect-wallet";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="absolute pt-[20px] lg:pt-[40px] flex justify-between max-w-[95%] top-0 left-1/2 -translate-x-1/2 w-full">
      <div className="h-[60px] md:h-[115px] flex items-center justify-center z-[1]">
        <img
          src="/icon/Logo_SVG.svg"
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>{" "}
      <ul
        className="items-center hidden lg:flex gap-10 h-[40px] sm:h-[50px]  text-lg sm:text-xl text-white transition-all duration-300 ease-in-out uppercase"
        style={{
          fontWeight: "900",
        }}
      >
        <li>
          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#836EF9]"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#836EF9]"
          >
            Lore
          </Link>
        </li>
        <li>
          <Link
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#836EF9]"
          >
            Collection
          </Link>
        </li>
        <li>
          <Link
            href="https://monshapes-documents.gitbook.io/lore/i.-the-lore-of-monshapes-founding"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#836EF9]"
          >
            Docs
          </Link>
        </li>
      </ul>
      <WalletConnection />
    </header>
  );
};
