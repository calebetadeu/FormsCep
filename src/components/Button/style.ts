import styled from 'styled-components'

export const ButtonStyle= styled.div ` 
display: flex;
margin-top:10px;
padding:0 50px;



button{
   width: 260px;
  height: 4rem;
  border: 0;
  border-radius: 2rem;
  background: var(--yellow-500);
  color: var(--gray-900);
  font-size: 1.25rem;
  font-weight: bold;

 
  transition: filter 0.2s;
&:disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
  &:hover {
    filter: brightness(0.8);
  } 
}
   

`