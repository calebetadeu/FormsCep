import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { InputProps } from '../../types/Inputs'
import * as S from './style'


const InputBase:ForwardRefRenderFunction<HTMLInputElement, InputProps >=({label,name ,placeholder, ...rest },ref  ) =>{
   
    return (
        <S.FormContainer>
             
      <label > {label} </label>
      <input className="inputStyle"  placeholder={ placeholder } name={name} ref={ref} {...rest} /> 
        </S.FormContainer>
    )
}
export const Input =forwardRef(InputBase)
