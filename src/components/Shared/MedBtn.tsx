import { cn } from "@/helpers/cn";
import { ReactNode } from "react";

const MedBtn = ({
  className,
  children,
  handleOnClick,
}: {
  className?: string;
  children: ReactNode;
  handleOnClick?: () => void;
}) => {
  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "bg-med-green p-2 rounded-full font-bold text-base text-white min-w-[160px] uppercase",
        className
      )}
    >
      {children}
    </button>
  );
};

export default MedBtn;
