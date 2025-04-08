import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
   font-family: "Roboto";
   src: url("../assets/fonts/Roboto-Regular.woff2");
   font-weight: 400;
   font-style: normal;
   font-display: swap;
}
@font-face {
   font-family: "Roboto";
   src: url("../assets/fonts/Roboto-Medium.woff2");
   font-weight: 500;
   font-style: normal;
   font-display: swap;
}
@font-face {
   font-family: "Gilroy";
   src: url("../assets/fonts/Gilroy-Bold.woff2");
   font-weight: 700;
   font-style: normal;
   font-display: swap;
}
@font-face {
   font-family: "Gilroy";
   src: url("../assets/fonts/Gilroy-Medium.woff2");
   font-weight: 500;
   font-style: normal;
   font-display: swap;
}
@font-face {
   font-family: "Gilroy";
   src: url("../assets/fonts/Gilroy-Regular.woff2");
   font-weight: 400;
   font-style: normal;
   font-display: swap;
}
@font-face {
   font-family: "Gilroy";
   src: url("../assets/fonts/Gilroy-UltraLight.woff2");
   font-weight: 200;
   font-style: normal;
   font-display: swap;
}
*,
*::before,
*::after{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
} 

body {
   /* font-family: "",-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale; */
   font-family: "Gilroy",sans-serif;
   font-weight: 400;
   font-size: 18px;

}

a {
   text-decoration: none;
   cursor: pointer;
  
}

ul {
   list-style: none;
}

button {
 background-color  : unset ;
 border: none;
 cursor: pointer;
 }


`;
