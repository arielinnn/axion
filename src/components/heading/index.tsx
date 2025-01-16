import styled from "styled-components";

const Heading = styled.h2<{ isWhite?: boolean }>`
  font-family: Space Grotesk;
  font-size: 80px;
  font-weight: 500;
  line-height: 80px;
  letter-spacing: -0.01em;
  margin-bottom: 80px;
  color: ${({ theme, isWhite }) => (isWhite ? theme.white : theme.black)};

  ${({ theme }) => theme.media.sm`
  font-size: 60px;
  line-height: 60px;
  margin-bottom: 40px;
  `}
`;

export default Heading;
