import React from "react";
import ThemeContext from "./ThemeContext"
import mergeTheme from "./mergeTheme";

// const withTheme = ({ theme: userTheme, children, ...props }) => {
//     return (
//         <ThemeProvider theme={{...mergeTheme(defaultTheme,userTheme)}}>
//             {children}
//         </ThemeProvider>
//     );
// };
function withTheme(Component) {
    return class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {theme => {
                        return <Component theme={mergeTheme(theme)} {...this.props} />;
                    }}
                </ThemeContext.Consumer>
            );
        }
    };
}

export default withTheme;
