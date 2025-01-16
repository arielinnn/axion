import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Socials from "../socials";

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <Content>
          <Image
            width={110}
            height={19}
            layout="fixed"
            src={"/images/Logo.png"}
            alt={"logo"}
          />
          <About>The world’s best staking ecosystem.</About>
          <Rights>@ 2024 Axion. All rights reserved.</Rights>
          <Socials />
        </Content>
        <ImageWrapper
          width={1045}
          height={552}
          layout="fixed"
          src={"/images/footerImage.png"}
          alt={"footer"}
        />
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.white};
  width: 100%;
  padding: 160px 0;
  position: relative;
  ${({ theme }) => theme.media.sm`
    overflow:hidden;
  `}
`;
const Content = styled.div`
  dislpay: flex;
  gap: 16px;
`;
const About = styled.p`
  font-family: Space Grotesk;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.black};
`;
const Rights = styled.p`
  font-family: Space Grotesk;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 16px;
`;
const ImageWrapper = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;

  ${({ theme }) => theme.media.sm`
    width: 80% !important;
    height: auto !important;
    bottom: 10%;
    right: -20%;
  `}
`;
