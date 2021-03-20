import { createGlobalStyle } from 'styled-components';

// font-family: 'Caveat', cursive;
// font-family: 'Roboto', sans-serif;
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{ 
    /* background-color: #111111; */
    font-family: 'Roboto', sans-serif;
}

button{
    font-weight: bold;
    font-size: 1.1rem;

    &:hover{
        background-color: #23d997;
        color: #1b1b1b;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
span{
    font-weight: bold;
    color: #23d997;
}
a{
    font-size: 1.1rem;
    text-decoration: none;
    color: white;
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
