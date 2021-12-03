import styled from 'styled-components';

export const Form = styled.div `
      margin:20px;
      display:block;
      align-items: center;
        
 h1{
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: sans-serif;
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background:var(--gray-50) ;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 40px 70px;
   border-radius: 10px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 10px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #000000;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #DE3C4B;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;}
`;
