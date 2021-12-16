import React, { FunctionComponent } from "react";
import { ThemeProvider as BaseThemeProvider }from "styled-components";

import { theme } from "./theme";

import "@fontsource/poppins";


export const ThemeProvider: FunctionComponent = ({ children }) => (
    <BaseThemeProvider theme={theme}>
        {children}
    </BaseThemeProvider>
)
