import Image from "next/image";
import React from "react";
import Button from "../button";
import styled from "styled-components";

function Header() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const HeaderLinks = [
    { title: "Products", target: "products" },
    { title: "Values", target: "values" },
    { title: "Partners", target: "partners" },
    { title: "Learn", target: "learn" },
    { title: "Support", target: "support" },
  ];

  return (
    <HeaderWrapper className="container">
      <Image
        width={110}
        height={19}
        layout="fixed"
        src={"/images/Logo.png"}
        alt={"logo"}
      />
      <ItemsWrapper>
        {HeaderLinks.map((link) => (
          <HeaderItem
            key={link.title}
            onClick={() => scrollToSection(link.target)}
          >
            {link.title}
          </HeaderItem>
        ))}
        <Button>Discover AXION</Button>
      </ItemsWrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px !important;
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 16px 32px;
  background: ${({ theme }) => theme.hexToRgba(theme.white, 0.5)};
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;

const HeaderItem = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: ${({ theme }) => theme.secondaryText};
`;
