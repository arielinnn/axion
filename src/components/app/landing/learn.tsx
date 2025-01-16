import BlogCard from "@/components/blogCard";
import Heading from "@/components/heading";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Learn() {
  const data = [
    {
      id: 1,
      title: "Steering an Algo-Stable flywheel",
      description:
        "Minting and AMOs are powerful engines. Learning how to harness them generates wealth and stability",
      imageUrl: "/images/blog/post1.png",
    },
    {
      id: 2,
      title: "Beyond USDT dominance: incentivised stable coins",
      description:
        "DEFI has the tools to build safer and more incentivised stablecoins than generates wealth and stability DEFI has the tools to build safer and more incentivised stablecoins than generates wealth and stability",
      imageUrl: "/images/blog/post2.png",
    },
    {
      id: 3,
      title: "Redefining on-chain FX trading",
      description:
        "Sourcing FX liquidity where cheap and abundant, and bridging it on-chain for generates wealth and stability",
      imageUrl: "/images/blog/post3.png",
    },
  ];
  return (
    <LearnSection id="learn">
      <LearnWrapper className="container">
        <Heading isWhite>Learn</Heading>
        <div>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Mi convallis tempus lectus
            facilisi tristique auctor. Velit condimentum.
          </Text>
          <Cards>
            {data.map((post) => (
              <Card key={post.id}>
                <BlogCard
                  title={post.title}
                  description={post.description}
                  imageUrl={post.imageUrl}
                />
              </Card>
            ))}
          </Cards>
        </div>
      </LearnWrapper>
      <ImageContent
        width={1440}
        height={1041}
        layout="responsive"
        src={"/images/learnBg.png"}
        alt={"alt"}
      />
    </LearnSection>
  );
}

export default Learn;

const LearnSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.black};
`;
const LearnWrapper = styled.div`
  padding: 120px 0;
  position: relative;
  z-index: 2;
`;
const Text = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  max-width: 540px;
  color: ${({ theme }) => theme.white};
`;

const Cards = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: stretch;
  gap: 16px;
  overflow-x: auto;
`;
const Card = styled.div`
  flex: 1;
  min-width: 280px;
`;
const ImageContent = styled(Image)`
  position: absolute;
  top: 0;
  z-index: 1;
`;
