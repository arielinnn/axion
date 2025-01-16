import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "neutral" | "bordered";

interface StyledButtonProps {
  variant?: ButtonVariant;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  return <StyledButton variant={variant} {...props} />;
};

export default Button;

const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px 16px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;

  ${({ variant, theme }) => {
    switch (variant) {
      case "primary": // Black Button
        return css`
          background: ${theme.black};
          color: ${theme.white};
          border-color: ${theme.black};

          &:hover {
            background: #333;
          }
        `;
      case "secondary": // Blue Button
        return css`
          background: ${theme.primary};
          color: ${theme.white};
          border-color: ${theme.primary};

          &:hover {
            background: #0056b3;
          }
        `;
      case "neutral": // White Button
        return css`
          background: ${theme.white};
          color: ${theme.black};
          border-color: ${theme.white};

          &:hover {
            background: #f7f7f7;
            border-color: #ccc;
          }
        `;
      case "bordered": // Transparent with border
        return css`
          background: transparent;
          position: relative;

          color: #000;
          z-index: 1;

          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(90.2deg, #61d9ff 0.25%, #2970ed 66.47%) border-box;

          &:hover {
            background: linear-gradient(#f7f7f7, #f7f7f7) padding-box,
              linear-gradient(90.2deg, #61d9ff 0.25%, #2970ed 66.47%) border-box;
          }
        `;
      default:
        return css`
          background: transparent;
          color: inherit;
          border-color: transparent;
        `;
    }
  }}
`;
