import {defaultTheme} from "..";

export const getTheme = (theme) => {
    if(theme){
        return theme;
    } else {
        return defaultTheme
    }
}
