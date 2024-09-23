import { ReactNode } from "react";

const SectionSpacer = ({ children }: { children: ReactNode }) => {
  return <div className="py-28">{children}</div>;
};

export default SectionSpacer;
