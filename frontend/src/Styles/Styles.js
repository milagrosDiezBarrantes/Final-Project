import { createTheme } from "@mui/material/styles";


const Colors = {
    primary: "#00adb5",
    secondary: "#9e9e9e",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    //////////////
    //Solid color
    //////////////
    white: "#fff",
    black: "#000"
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    }
});

export default theme;