import Discord from "@/icons/Discord";
import GitHub from "@/icons/GitHub";
import X from "@/icons/X";
import React from "react";
import styled from "styled-components";

function Socials() {
  return (
    <SocialsWrapper>
      <SocialsItem>
        <GitHub />
      </SocialsItem>
      <SocialsItem>
        <Discord />
      </SocialsItem>
      <SocialsItem>
        <X />
      </SocialsItem>
    </SocialsWrapper>
  );
}

export default Socials;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
const SocialsItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.hexToRgba(theme.lightGray, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
