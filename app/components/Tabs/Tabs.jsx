"use client";
import { useState } from "react";
import TabTitle from "./TabTitle";

import { TabsWrapper, TabsHeader } from "./Tabs.styled";

const Tabs = (props) => {
  const { children, preSelectedTabIndex } = props;

  // First tab is shown by default
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    preSelectedTabIndex || 0
  );

  return (
    <TabsWrapper>
      <TabsHeader>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
            icon={item.props.icon}
          />
        ))}
      </TabsHeader>

      {/* show selcted tab by index*/}
      {children[selectedTabIndex]}
    </TabsWrapper>
  );
};

export default Tabs;
