import {defaultTheme} from "../index";

export const getTheme = (theme) => {
    if(theme){
        return theme;
    } else {
        return defaultTheme
    }
}
