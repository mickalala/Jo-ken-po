import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
   margin:0;
   padding:0;
   box-sizing: border-box;
   text-decoration: none;
   border:none;
   outline:none;
   transition:0.3s ease;
   font-family:'Poppins', sans-serif;
   }

 body{
   width:100%;
   height:100vh;
   display:flex;
   background:pink;
   justify-content:center;
  }
 button{
  cursor:pointer;
  &:hover{
    opacity:0.8;
  }

 &:active{
    opacity:0.6;
  }
}
`;
