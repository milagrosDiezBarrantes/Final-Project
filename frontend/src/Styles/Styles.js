import { createTheme } from "@mui/material/styles";


// const Colors = {
//     primary: "#212121",
//     secondary: "#b71c1c",
//     success: "#4CAF50",
//     info: "#00a2ff",
//     danger: "#FF5722",
//     warning: "#FFC107",
//     dark: "#0e1b20",
//     light: "#aaa",
//     border: "#DDDFE1",
//     inverse: "#2F3D4A",
//     shaft: "#333",
//     dove_gray: "#d5d5d5",
//     body_bg: "#f3f6f9",
//     //////////////
//     //Solid color
//     //////////////
//     white: "#fff",
//     black: "#000"
// };


const theme = createTheme({
    palette: {
        primary: {
            light: '#484848',  //Secundario
            main: '#212121',
            dark: '#000000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f05545',  //Secundario
            main: '#b71c1c',
            dark: '#7f0000',
            contrastText: '#A90000',
        },
    },
});

export default theme;