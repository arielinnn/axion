import Button from "@/components/button";
import CheckList from "@/components/checkList";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Explore() {
  return (
    <ExploreSection>
      <ExploreWrapper className="container">
        <Text>DeFi superconductor: explore 1ON</Text>
        <CheckList
          variant="secondary"
          items={["An algo-stable you can trust", "Provable on-chain reserves"]}
        />
        <Button variant="secondary">Check reserves</Button>
      </ExploreWrapper>
      <ImageContent
        width={1440}
        height={570}
        layout="responsive"
        src={"/images/exploreBg.png"}
        alt={"alt"}
      />
    </ExploreSection>
  );
}

export default Explore;

const ExploreSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.black};
  overflow: hidden;
`;
const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 120px;
  position: relative;
  z-index: 2;
`;
const Text = styled.h2`
  font-family: Space Grotesk;
  font-size: 60px;
  font-weight: 500;
  line-height: 63px;
  letter-spacing: -0.01em;
  text-align: center;
  max-width: 636px;
  color: ${({ theme }) => theme.white};
`;
const ImageContent = styled(Image)`
  position: absolute;
  top: 0;
  z-index: 1;
  object-fit: cover;
  height: 100% !important;
`;
