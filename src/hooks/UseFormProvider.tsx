
import { useRouter } from 'next/router';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useState } from 'react';
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import api from '../services/api';
import type { AndressProps, FormInputs } from '../types/Forms';



interface FormsContextData  {
   checkCep:(e:React.SyntheticEvent)=>void;
   register: UseFormRegister<FormInputs>;
  handleSubmit: UseFormHandleSubmit<FormInputs>
  setMessage:Dispatch<SetStateAction<string>>;
  buttonController:boolean
  inputController:string
  handlePagination:(e:React.SyntheticEvent)=>void;
  handleKeyUp:(e:React.FormEvent<HTMLInputElement>)=>void
 handleOnChangeUser :(e:React.SyntheticEvent)=>void
  message:string;
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

    const [buttonController,setButtonController] =useState(true)
    const [message,setMessage]= useState('')
    const { register,setValue ,setFocus,formState:{errors},setError, handleSubmit,resetField} = useForm<FormInputs>()
    const [ inputController,setInputController ]=useState(null)
    const router=useRouter()
    const [pagination,setPagination] = useState(false)

useEffect(() => {
      checkCep
      handleOnChangeUser
      
    }, [])


  const handlePagination=(e:React.SyntheticEvent)=> {
    e.preventDefault
    
     if(!pagination){
       router.push('/test')
    }
 }

    const handleKeyUp= useCallback((e:React.FormEvent<HTMLInputElement>)=>{
        const target=e.currentTarget.value
       let value=e.currentTarget.value
       value=value.replace(/\D/g,"")
        value=value.replace(/^(\d{5})(\d)/,"$1-$2")
        e.currentTarget.value=value
        },[])
   
     function handleOnChangeUser(e:React.SyntheticEvent  ){
          const target=e.target as HTMLInputElement
        const {maxLength,value}=target

 
   
      function handleOnChangeError (){
       
        if(!value && value.length<=7 ){
          setButtonController(true) 
        }
        if(value.length>8){
         setInputController(value.slice(0,maxLength))
         setMessage('')
        }
        else if(value.length<=9){
          setInputController(null)
         }
        else if ( value.length==8){
          setMessage('')
        }
      }
    
  } 
   
const checkCep= async (e:React.SyntheticEvent )=>{
    
   let target= e.target as HTMLInputElement;
    const zipCode= target.value.replace(/\D/g,'');

    if(!target.value){  
      setMessage('Campo Obrigatório')       
        
    }
    else{
      setPagination(true)
    }
   
    try{ 
      const response= await api.get(`https://viacep.com.br/ws/${zipCode}/json`)
   const data:AndressProps=await response.data
        
        if(!data.cep ){
          setMessage('Cep Não Encontrado ') 
           setFocus("cep")
            resetField("cep")
            resetField("andress")
            resetField("neighborhood")
             resetField("city")
           resetField("uf")
           setInputController(null)
          
          
        }
       if(data.cep){
           setValue("andress",data.logradouro)
      setValue("neighborhood",data.bairro)
      setValue("city", data.localidade)
      setValue("uf", data.uf)
      setMessage('')
      setButtonController(false)
      if(!data.bairro ){
        return setFocus("neighborhood")
        
      }else{
         setFocus("andressNumber")
      }
     
       }
    
    }catch(e){
      console.log(e)
    }
   
   } 

    return (
        <FormsContext.Provider value={{
          checkCep,
        register,
        errors,
        handleSubmit,
        setMessage
        ,message,
        handleOnChangeUser,
        inputController,
        handlePagination,
        buttonController,
        handleKeyUp
        }}>
                {children}
        </FormsContext.Provider>
    )
}