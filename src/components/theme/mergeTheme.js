import merge from 'lodash-es/merge'

function mergeTheme(originalTheme, themeOverride) {
    return merge(originalTheme, themeOverride);
}

export default mergeTheme;
