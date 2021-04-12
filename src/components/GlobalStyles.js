import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@media screen and (max-width: 1250px) {
    html{
    font-size: 14px;
    .icon{
        font-size: 1.2rem;
    }
}
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Poppins', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    max-width: 100vw;
    /* Variables */
    --main-blue: #02e1f5;
}
button{
    border: none;
    font-size: 0.85rem;
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
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
ul{
    list-style: none;
}
img{
    display: block;
}
`;

export default GlobalStyle;
