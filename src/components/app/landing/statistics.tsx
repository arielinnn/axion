import React from "react";
import styled from "styled-components";

function Statistics() {
  const data = [
    { title: "1ON Global TVL", value: "$14M" },
    { title: "1ON Volume", value: "$153M" },
    { title: "Axion Marketcap", value: "$1.8B" },
    { title: "Backing Assets", value: "$53M" },
  ];
  return (
    <StatisticsWrapper>
      {data.map((item, index) => (
        <StatisticItem first={index === 0} key={item.value}>
          <Value>{item.value}</Value>
          <Title>{item.title}</Title>
        </StatisticItem>
      ))}
    </StatisticsWrapper>
  );
}

export default Statistics;

const StatisticsWrapper = styled.div`
  padding: 24px 32px;
  border-radius: 16px;
  display: flex;
  background: ${({ theme }) => theme.hexToRgba(theme.white, 0.5)};
  ${({ theme }) => theme.media.sm`
    flex-direction:column;
    gap:32px;
  `}
`;
const StatisticItem = styled.div<{ first: boolean }>`
  border-left: ${({ theme, first }) =>
    !first ? `1px solid ${theme.b1}` : "none"};
  padding-right: 32px;
  padding-left: ${({ first }) => (!first ? "32px" : "0")};
  flex: 1;

  ${({ theme }) => theme.media.sm`
    border-left: none;
    padding-right:0;
    padding-left:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;
const Value = styled.h4`
  font-family: Space Grotesk;
  font-size: 32px;
  font-weight: 500;
  line-height: 44.8px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ theme }) => theme.black};
`;
const Title = styled.h4`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  color: ${({ theme }) => theme.secondaryText};
`;
