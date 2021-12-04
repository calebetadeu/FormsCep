
import { createContext, ReactNode, useEffect, useState } from 'react';
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import api from '../services/api';
import type { AndressProps, FormInputs } from '../types/Forms';



interface FormsContextData  {
   checkCep:(e:React.SyntheticEvent)=>void;
   register: UseFormRegister<FormInputs>;
  handleSubmit: UseFormHandleSubmit<FormInputs>
  message: string;
   errors:{ 
      name?: FieldError  
    cep?: FieldError;
    andress?: FieldError;
    andressNumber?: FieldError;
    neighborhood?: FieldError;
    city?: FieldError;
    uf?: FieldError;};
    
  
}
type FormsProviderProps={
     children: ReactNode  
     
}

export const FormsContext = createContext<FormsContextData>({} as FormsContextData)

export function FormsProvider({children} : FormsProviderProps ){

    const [message,setMessage]= useState('')
    const { register,setValue ,setFocus,formState:{errors},setError, handleSubmit,} = useForm<FormInputs>()

 

    
useEffect(() => {
      checkCep
    }, [])
 
    
const checkCep= async (e:React.SyntheticEvent )=>{
    let target= e.target as HTMLInputElement;
    const cep= target.value.replace(/\D/g,'');


    if(!target.value){
      return setMessage('Esse Campo Obrigatório')
    }
   
    try{ 
      const response= await api.get(`https://viacep.com.br/ws/${cep}/json`)
   const data:AndressProps=await response.data
      setValue("andress",data.logradouro)
      setValue("neighborhood",data.bairro)
      setValue("city", data.localidade)
      setValue("uf", data.uf)
      
      
      if(!data.bairro ){
        return setFocus("neighborhood")
        
      }
      
        
      setFocus("andressNumber")
      
    
    
    }catch(e){
      console.log(e)
    }
   
   } 

    return (
        <FormsContext.Provider value={{checkCep,register,errors,handleSubmit,message}}>
                {children}
        </FormsContext.Provider>
    )
}