import { cn } from "@/helpers/cn";
import { ReactNode } from "react";

const RootContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("container mx-auto px-4 md:px-8", className)}>
      {children}
    </div>
  );
};

export default RootContainer;
