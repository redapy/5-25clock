import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --lightBackground: #CAFAFE;
    --darkBackground: #5D5C61;
    --timerLight: #3FEEE6;
    --timerDark: #379683;
    --buttonLight: #FC4445;
    --buttonDark: #557A95;
    --textLight: black;
    --textDark: white;

}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    width: 100%;
    min-height: 100vh;
   
}
`;