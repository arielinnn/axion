import React from "react";
import Button from "../button";
import styled from "styled-components";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
}
function BlogCard({ description, imageUrl, title }: BlogCardProps) {
  return (
    <ShadowWrapper>
      <Wrapper>
        <ImageWrapper src={imageUrl} alt={title} />
        <TextContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <ButtonWrapper variant="neutral">Read More</ButtonWrapper>
        </TextContent>
      </Wrapper>
    </ShadowWrapper>
  );
}

export default BlogCard;

const ShadowWrapper = styled.div`
  background: ${({ theme }) => theme.hexToRgba(theme.white, 0.05)};
  padding: 8px;
  border-radius: 24px;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.black};
  padding: 24px;
  border-radius: 16px;
`;
const ImageWrapper = styled.img`
  width: 100%;
  max-height: 269px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 24px;
`;
const TextContent = styled.div`
  height: 218px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const CardTitle = styled.h6`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  min-height: 56px;
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.lineClamp(2)};
`;
const CardDescription = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.lineClamp(3)};
`;
const ButtonWrapper = styled(Button)`
  align-self: flex-start;
  margin-top: auto;
`;
