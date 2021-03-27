import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* html{
    font-size: 16px;
} */

body{
    /* background-color: #111111; */
    font-family: 'Poppins', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
}

button{

    border: none;
    outline: none;
    width: 8rem;
    height: 2rem;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    &:hover{
        background-color: #02e1f5;
        cursor: pointer;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    font-weight: 300;
    font-size: 1.5rem;
}
h4{

}
span{
    
}
a{
    font-size: 1.1rem;
    text-decoration: none;
    color: black;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
ul{
    list-style: none;
}

`;

export default GlobalStyle;
