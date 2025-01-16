import Button from "@/components/button";
import CheckList from "@/components/checkList";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

function Products() {
  const cards = [
    {
      id: 1,
      logo: "/images/products/10n.png",
      logoWidth: 67,
      logoHeight: 32,
      items: [
        "Hard backing in AMOs",
        "Non-liquid backing in veNFTSs",
        "Integrated across all of DeFi",
      ],
      primaryButton: "Buy $10N",
      secondaryButton: "Farm $10N",
    },
    {
      id: 2,
      logo: "/images/products/axion.png",
      logoWidth: 129,
      logoHeight: 29.5,
      items: [
        "Governance token",
        "Deflationary: collateral generates profits, a portion used to burn Axion",
      ],
      primaryButton: "Buy $XION",
      secondaryButton: "Farm $XION",
    },
  ];
  return (
    <ProductsWrapper>
      {cards.map((item) => (
        <Product key={item.id}>
          <Content>
            <Image
              src={item.logo}
              width={item.logoWidth}
              height={item.logoHeight}
              alt="product"
              layout="fixed"
            />
            <CheckList items={item.items} />
            <Actions>
              <Button>{item.primaryButton}</Button>
              <Button variant="bordered"> {item.secondaryButton} </Button>
            </Actions>
          </Content>
        </Product>
      ))}
    </ProductsWrapper>
  );
}

export default Products;

const ProductsWrapper = styled.div`
  display: flex;
  gap: 24px;
  ${({ theme }) => theme.media.sm`
    flex-direction:column;
  `}
`;
const Product = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.hexToRgba(theme.white, 0.4)};
  border-radius: 16px;
  padding: 8px;
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  background: ${({ theme }) => theme.white};
  border-radius: 16px;
  width: 100%;
`;
const Actions = styled.div`
  margin-top: auto;
  display: flex;
  gap: 16px;
`;
