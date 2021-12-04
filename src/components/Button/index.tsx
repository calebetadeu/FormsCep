import React, { ReactNode } from 'react'
import * as S from './style'

interface  ButtonProps {
  children:ReactNode
} 

export default function Button( { children  }:ButtonProps  ) {
    return (
        <S.ButtonStyle>      
      <button type="submit" className='submitButton' >
            {children}
      </button>
        </S.ButtonStyle>
    )
}
