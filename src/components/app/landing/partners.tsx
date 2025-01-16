import Tabs from "@/components/tabs";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Partners() {
  const ImageUrls = [
    "/images/partners/partner0.png",
    "/images/partners/partner1.png",
    "/images/partners/partner2.png",
    "/images/partners/partner3.png",
    "/images/partners/partner4.png",
    "/images/partners/partner5.png",
  ];
  return (
    <div>
      <Content>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Mi convallis tempus lectus
          facilisi tristique auctor. Velit condimentum.
        </Text>
        <Tabs
          tabs={[
            {
              label: "Backers",
              value: "1",
            },
            {
              label: "Partners",
              value: "2",
            },
            {
              label: "Farms",
              value: "3",
            },
          ]}
          defaultActive={"1"}
        />
      </Content>
      <ImageWrapper>
        {ImageUrls.map((item) => (
          <StyledImage key={item}>
            <Image
              src={item}
              alt="partner"
              layout="responsive"
              width={100} /* Arbitrary width */
              height={100}
              objectFit="contain"
            />
          </StyledImage>
        ))}
      </ImageWrapper>
    </div>
  );
}

export default Partners;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  ${({ theme }) => theme.media.sm`
    flex-direction: column-reverse;
    gap:24px;
  `}
`;
const Text = styled.p`
  max-width: 540px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  color: ${({ theme }) => theme.secondaryText};
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const StyledImage = styled.div`
  flex: 1;
`;
