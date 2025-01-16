import React from "react";
import styled from "styled-components";
import Statistics from "./statistics";
import Socials from "@/components/socials";
import CheckList from "@/components/checkList";
import Button from "@/components/button";

function Hero() {
  return (
    <div>
      <HeroContent>
        <div>
          <LandingText>A stablecoin </LandingText>
          <GradientText>optimised for DeFi</GradientText>
        </div>
        <CheckList
          items={[
            "Transparent on-chain reserves",
            "vePowered AMOs",
            "All-weather burn mechanism",
            "Boosted algo-stable farming / earn the best yield",
          ]}
        />
        <Actions>
          <Button>Discover AXION</Button>
          <Socials />
        </Actions>
      </HeroContent>
      <Statistics />
    </div>
  );
}

export default Hero;

const HeroContent = styled.div`
  padding: 120px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GradientText = styled.h1`
  font-family: "Space Grotesk";
  font-size: 80px;
  font-weight: 500;
  line-height: 80px;
  letter-spacing: -0.015em;
  text-align: left;

  background: linear-gradient(90.2deg, #61d9ff 0.25%, #2970ed 66.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const LandingText = styled.h1`
  font-family: "Space Grotesk";
  font-size: 80px;
  font-weight: 500;
  line-height: 80px;
  letter-spacing: -0.015em;
  text-align: left;
  color: ${({ theme }) => theme.black};
`;
const Actions = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  margin-top: 12px;
`;
