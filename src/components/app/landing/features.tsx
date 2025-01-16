import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Features() {
  const data = [
    {
      id: 1,
      title: "Transparency",
      description:
        "This entire process is conducted on-chain, granting open access for everyone to explore and review historical transaction records related to minting, redemption, and circulation.",
      image: "/images/transparency.png",
    },
    {
      id: 2,
      title: "Fit for DeFi",
      description:
        "This entire process is conducted on-chain, granting open access for everyone to explore and review historical transaction records related to minting, redemption, and circulation.",
      image: "/images/defi.png",
    },
    {
      id: 3,
      title: "Security",
      description:
        "This entire process is conducted on-chain, granting open access for everyone to explore and review historical transaction records related to minting, redemption, and circulation.",
      image: "/images/security.png",
    },
    {
      id: 4,
      title: "Decentralized",
      description: "tbd",
      image: "/images/decentralized.png",
    },
    {
      id: 5,
      title: "Incentives",
      description: "tbd",
      image: "/images/incentives.png",
    },
  ];
  return (
    <FeaturesWrapper>
      {data.map((feat, index) => (
        <FeatureItem reverse={index % 2 > 0} key={feat.id}>
          <Content>
            <Title>{feat.title}</Title>
            <Decription>{feat.description}</Decription>
          </Content>
          <ImageWrapper
            width={588}
            height={336}
            src={feat.image}
            layout="responsive"
            alt={feat.title}
          />
        </FeatureItem>
      ))}
    </FeaturesWrapper>
  );
}

export default Features;

const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;
const FeatureItem = styled.div<{ reverse: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 80px;

  ${({ theme }) => theme.media.sm`
    flex-direction: column;
  `}
`;
const Content = styled.div`
  flex: 1;

  ${({ theme }) => theme.media.sm`
    width: 100%;
  `}
`;
const Title = styled.h4`
  font-family: Space Grotesk;
  font-size: 48px;
  font-weight: 500;
  line-height: 61.25px;
  text-align: left;
  color: ${({ theme }) => theme.black};
  margin-bottom: 16px;
`;
const Decription = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: ${({ theme }) => theme.secondaryText};
`;
const ImageWrapper = styled(Image)`
  flex: 1;
`;
