
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { createContext, ReactNode, useEffect } from 'react';
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister, UseFormSetError } from 'react-hook-form';
import { schema } from '../components/FormsCadaster/schema';
import api from '../services/api';
import type { AndressProps, FormInputs } from '../types/Forms';



interface FormsContextData  {
   checkCep:(e:React.SyntheticEvent)=>void;
   register: UseFormRegister<FormInputs>;
  setError: UseFormSetError<FormInputs>;
  handleSubmit: UseFormHandleSubmit<FormInputs>
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
    const { register,setValue ,setFocus,formState:{errors},setError, handleSubmit} = useForm<FormInputs>({
      resolver:yupResolver(schema)
    });

 

    
useEffect(() => {
      checkCep
    }, [])
 
    
const checkCep= async (e:React.SyntheticEvent )=>{
    let target= e.target as HTMLInputElement;
    const cep= target.value.replace(/\D/g,'');
    if(!target.value){
      return 
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
      if (!data.complemento) {  
      setFocus("andressNumber")
      }
    
    
    }catch(e){
      console.log(e)
    }
   
   } 

    return (
        <FormsContext.Provider value={{checkCep,register,errors,setError,handleSubmit}  } >
                {children}
        </FormsContext.Provider>
    )
}