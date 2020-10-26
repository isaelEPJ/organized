import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
}
body{
    -webkit-font-smoothing: antialiased;
}
border-style,input,button{
    font:16px Roboto, sans-serif;
}
button{
    cursor:pointer
}
`;
