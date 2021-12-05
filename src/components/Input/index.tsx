import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { InputProps } from "../../types/Inputs";
import * as S from "./style";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, name, placeholder, htmlFor, ...rest },
  ref
) => {
  return (
    <S.FormContainer>
      <label className="labelInput" htmlFor={htmlFor}>
        {" "}
        {label}{" "}
      </label>
      <input
        className="inputStyle"
        placeholder={placeholder}
        name={name}
        ref={ref}
        {...rest}
      />
    </S.FormContainer>
  );
};
export const Input = forwardRef(InputBase);
