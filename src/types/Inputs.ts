import { InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    label?: string
    name?: string
    
}
export interface InputFunctionProps extends InputProps {
    onBlur?: (e:React.SyntheticEvent)=>void
  onChange?: (e:React.SyntheticEvent)=>void
    onClick?:()=>void
}