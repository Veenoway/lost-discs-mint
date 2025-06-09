import { cn } from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-[#858585] w-full justify-center mx-auto bg-[#ffffff13] border border-[rgba(255,255,255,0.37)] flex items-center rounded-lg h-[45px] sm:h-[53px] text-2xl uppercase text-white transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
