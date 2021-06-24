import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`



@media screen and (max-width: 1250px) {
    html{
    font-size: 12px;
    .icon{
        font-size: 1.2rem;
    }
}   
}
@media screen and (max-width: 1500px) {
    html{
    font-size: 15px;
    .icon{
        font-size: 1.2rem;
    }
}
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --Nav-Black: black;
}
body{
    font-family: 'Poppins', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    max-width: 100vw;

    /* Variables */
    --main-blue: #02e1f5;
    --large-screen-padding: 6rem;
    --medium-screen-padding: 3rem;
    --mobile-screen-padding: 1rem;
    
}
button{
    border: none;
    font-size: 0.85rem;
    outline: none;
    width: 8rem;
    height: 2rem;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);

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
