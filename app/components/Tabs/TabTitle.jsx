"use client";
import { useCallback } from "react";
import { TabTitleLi } from "./Tabs.styled";

const TabTitle = (props) => {
  const { title, setSelectedTab, index, isActive, icon } = props;

  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <TabTitleLi isActive={isActive} onClick={handleOnClick}>
      <span>{icon}</span>
      {title}
    </TabTitleLi>
  );
};

export default TabTitle;
