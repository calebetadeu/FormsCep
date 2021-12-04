import React, { ReactNode } from 'react'
import * as S from './style'

interface  ButtonProps {
  children:ReactNode
 OnClick?:()=>void 
 disabled:boolean
} 

export default function Button( { children,OnClick,disabled }:ButtonProps  ) {
    return (
        <S.ButtonStyle>      
      <button type="submit" className='submitButton' onClick={OnClick} disabled={disabled}  >
            {children}
      </button>
        </S.ButtonStyle>
    )
}
