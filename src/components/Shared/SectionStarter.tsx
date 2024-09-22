import { ReactNode } from "react";

const SectionStarter = ({ children }: { children: ReactNode }) => {
  return <div className="py-28">{children}</div>;
};

export default SectionStarter;
