import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const BasketIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PEACH
}) => {
  const color = useIconColor(colorKey);
  return (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-10 5V9h20v3c-.375 0-.563 0-.728.028a2 2 0 0 0-1.521 1.22c-.063.155-.104.338-.185.704l-.87 3.916c-.334 1.501-.5 2.252-1.049 2.692-.548.44-1.317.44-2.856.44H9.71c-1.539 0-2.308 0-2.856-.44-.549-.44-.715-1.19-1.05-2.692l-.87-3.916c-.08-.366-.121-.549-.184-.704a2 2 0 0 0-1.521-1.22C3.063 12 2.875 12 2.5 12zm6.336 1.014a1 1 0 0 1 1.15.822l.5 3a1 1 0 1 1-1.972.328l-.5-3a1 1 0 0 1 .822-1.15zm7.328 0a1 1 0 0 1 .822 1.15l-.5 3a1 1 0 1 1-1.973-.328l.5-3a1 1 0 0 1 1.151-.822z" fill={color}/>
      </svg>
  );
}
