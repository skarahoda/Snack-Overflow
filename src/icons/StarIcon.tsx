import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const StarIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PEACH
}) => {
  const color = useIconColor(colorKey);
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.005 5.926c.757-1.848 1.135-2.773 1.75-2.9.161-.034.329-.034.49 0 .615.127.993 1.052 1.75 2.9.43 1.052.645 1.577 1.048 1.935.112.1.235.19.366.266.465.275 1.045.326 2.207.428 1.966.173 2.95.26 3.25.809.062.113.104.237.125.364.1.616-.623 1.26-2.069 2.55l-.401.357c-.676.603-1.014.904-1.21 1.28a2.277 2.277 0 0 0-.232.72c-.062.417.037.854.235 1.728l.071.313c.355 1.568.532 2.351.31 2.737a1.182 1.182 0 0 1-.97.586c-.45.021-1.085-.486-2.356-1.5-.836-.669-1.255-1.003-1.72-1.133a2.403 2.403 0 0 0-1.299 0c-.464.13-.883.464-1.72 1.133-1.27 1.014-1.905 1.521-2.355 1.5a1.182 1.182 0 0 1-.97-.586c-.222-.386-.045-1.17.31-2.737l.07-.313c.199-.874.298-1.311.236-1.729a2.277 2.277 0 0 0-.232-.719c-.196-.376-.534-.677-1.21-1.28l-.401-.358c-1.446-1.289-2.168-1.933-2.069-2.549.02-.127.063-.25.125-.364.3-.55 1.284-.636 3.25-.809 1.161-.102 1.742-.153 2.208-.428.13-.077.253-.166.366-.266.402-.358.617-.883 1.047-1.935z" fill={color}/>
      </svg>
  );
}
