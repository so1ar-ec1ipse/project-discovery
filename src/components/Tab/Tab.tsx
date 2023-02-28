import { ReactElement } from "react";
import TabItem from "./TabItem";

type TabProps = {
  children?: ReactElement | string | number;
};

export default function Tab({ children }: TabProps) {
  return (
    <>
      {["Vulnerabilities", "Assets", "Archive"].map((text) => (
        <TabItem isSelected={false} text={text} count={20} />
      ))}
    </>
  );
}
