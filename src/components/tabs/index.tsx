import React, { useState } from "react";
import styled from "styled-components";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultActive: string;
}

const Tabs: React.FC<TabsProps> = ({ defaultActive, tabs }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <TabsWrapper>
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          isActive={activeTab === tab.value}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabsWrapper>
  );
};

export default Tabs;

const TabsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-family: Inter;
  font-size: 16px;
  line-height: 22.4px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.black : theme.hexToRgba(theme.white, 0.4)};
  font-weight: ${({ isActive }) => (isActive ? "500" : "400")};
  color: ${({ isActive, theme }) =>
    isActive ? theme.white : theme.secondaryText};
`;
