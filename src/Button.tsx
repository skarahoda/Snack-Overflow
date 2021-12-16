import React, { FunctionComponent } from "react";
import { styled } from "./styled";

interface ButtonWrapperProps {
  variant?: "primary" | "secondary";
}

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 56px;
  padding: 0 56.5px;
  background-color: ${({
    theme,
    variant
  }) => {
    switch (variant) {
      case "secondary":
        return theme.colors.karlPressed;
      case "primary":
      default:
        return theme.colors.peach;
    }
  }};
  border-radius: 8px;
  border: none;
  font-family: Poppins, monospace;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: ${({
              theme,
              variant
            }) => {
    switch (variant) {
      case "secondary":
        return theme.colors.peach;
      case "primary":
      default:
        return theme.colors.white;
    }
  }};
  
  &:active {
    background-color: ${({
                           variant
                         }) => {
      switch (variant) {
        case "secondary":
          return "#d4d1d4";
        case "primary":
        default:
          return "#c05f32";
      }
    }};
  }
`

interface ButtonProps extends ButtonWrapperProps {
    text: string;
    icon?: React.ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({ text, icon, variant }) => {
  return (
    <ButtonWrapper variant={variant}>
        {icon}
        <div>{text}</div>
    </ButtonWrapper>
  );
};
