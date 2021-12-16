import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const HomeIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PEACH
}) => {
  const color = useIconColor(colorKey);
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.314 9.482C4 10.114 4 10.833 4 12.272v4.49c0 1.998 0 2.997.67 3.617.623.578 1.6.618 3.473.62v-5.295c0-1.208 1.032-2.06 2.143-2.06h3.428c1.11 0 2.143.852 2.143 2.06V21c1.873-.003 2.85-.043 3.474-.62.669-.621.669-1.62.669-3.617V12.27c0-1.438 0-2.157-.314-2.79-.313-.631-.902-1.1-2.08-2.035l-1.143-.908C14.333 4.846 13.268 4 12 4c-1.268 0-2.333.846-4.463 2.538l-1.142.908c-1.179.936-1.768 1.404-2.081 2.036zM13.857 21v-5.294a.067.067 0 0 0-.014-.018.188.188 0 0 0-.129-.044h-3.428a.188.188 0 0 0-.129.044.067.067 0 0 0-.014.018V21h3.714z" fill={color} />
      </svg>
  );
}
