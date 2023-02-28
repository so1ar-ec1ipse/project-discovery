import { ReactElement, useState } from "react";
import TabItem from "./TabItem";

type TabProps = {
  children?: ReactElement | string | number;
};

export default function Tab({ children }: TabProps) {
  const [selectedTab, setSelectedTab] = useState("Vulnerabilities");
  return (
    <>
      {["Vulnerabilities", "Assets", "Archive"].map((text, index) => (
        <TabItem
          key={index}
          isSelected={text === selectedTab}
          text={text}
          count={20}
          setSelectedTab={setSelectedTab}
        />
      ))}
    </>
  );
}
