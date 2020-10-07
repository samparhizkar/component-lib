import {defaultTheme} from './themes/defaultTheme';

function mergeTheme(userTheme) {
    const mergedTheme = {
        ...defaultTheme,
    };

    if (userTheme) {
        Object.keys(mergedTheme).forEach(key => {
            if (userTheme[key]) {
                mergedTheme[key] = { ...defaultTheme[key], ...userTheme[key] };
            }
        });
    }
    console.log("passed theme", userTheme)
    return mergedTheme;
}

export default mergeTheme;
