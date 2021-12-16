import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const SearchIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PEACH
}) => {
  const color = useIconColor(colorKey);
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="2"/>
        <path d="m20 20-3-3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
  );
}
