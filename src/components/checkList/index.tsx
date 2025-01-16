import CheckIcon from "@/icons/CheckIcon";
import React from "react";
import styled, { css } from "styled-components";

interface CheckListProps {
  items: string[];
  variant?: "primary" | "secondary";
}
function CheckList({ items, variant = "primary" }: CheckListProps) {
  return (
    <Wrapper>
      {items.map((item) => (
        <CheckListItem variant={variant} key={item}>
          <CheckIcon />
          <Text variant={variant}>{item}</Text>
        </CheckListItem>
      ))}
    </Wrapper>
  );
}

export default CheckList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const CheckListItem = styled.div<{ variant: "primary" | "secondary" }>`
  display: flex;
  flex-direction: row;
  gap: 12px;
  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      svg {
        path {
          stroke: ${theme.white};
        }
      }
    `}
`;
const Text = styled.p<{ variant: "primary" | "secondary" }>`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.SecondaryText : theme.white};
`;
