import React, {useContext} from "react";
import {getTheme} from "./utils/themeHelper";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import {defaultTheme} from "./themes/defaultTheme";
import mergeTheme from "./mergeTheme";

//
export default function ThemeProvider({theme, themeOverride, ...props}) {
    function getCurrentTheme() {
        if (theme) {
            return theme;
        } else {
            return defaultTheme;
        }
    }

    function getMergedTheme(themeOverride = {}) {
        const currentTheme = getCurrentTheme();
        return mergeTheme(currentTheme, themeOverride);
    }

    return (
        <StyledThemeProvider theme={getMergedTheme(themeOverride)}>
            {
                props.children
            }
        </StyledThemeProvider>
    );
}
