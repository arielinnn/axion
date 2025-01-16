import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Values() {
  return (
    <ValuesWrapper>
      <Description>
        AXION is minted and redeemed through smart contracts, maintaining a 1:1
        ratio with its underlying assets of tokenized real-world assets for full
        transparency.
        <br />
        <br />
        This entire process is conducted on-chain, granting open access for
        everyone to explore and review historical transaction records related to
        minting, redemption, and circulation.
      </Description>
      <ImageWrapper
        width={556}
        height={406}
        src={"/images/valuesChart.png"}
        layout="responsive"
        alt={"ValuesChart"}
      />
    </ValuesWrapper>
  );
}

export default Values;

const ValuesWrapper = styled.div`
  display: flex;
  gap: 48px;
  ${({ theme }) => theme.media.sm`
    flex-direction:column;
  `}
`;
const Description = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: ${({ theme }) => theme.secondaryText};
  flex: 1;
`;
const ImageWrapper = styled(Image)`
  flex: 1;
`;
