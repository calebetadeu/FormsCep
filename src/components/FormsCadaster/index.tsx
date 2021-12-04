import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { FormsContext } from '../../context/FormsCadasterContext';
import Button from '../Button';
import { Input } from '../Input';
import * as S from './style';

export default function FormsCadaster() {
   
    const { checkCep,handleSubmit,errors,register,message} = useContext(FormsContext)
    const [ messageError,setMessageError ] = useState('')
    const router= useRouter()

  
  function handlelogin(e) {
    router.push('/test')
     
  }
    return (
        <S.Form>
   <form onSubmit={ handleSubmit( handlelogin ) }    >
      
     " <Input
         {...register("name")}   
        name="name"
        label="Nome"
        placeholder="Nome"
     
     /> 
     <Input 
     {...register("cep",{
       required:true,
      maxLength:8,
      
     } 
     )} 
     name="cep"
     label="Cep"
     placeholder="Cep"
    onBlur={ checkCep }
     
    />
       
{errors.cep &&  (
         <span  > {messageError} </span>
       )}
   
   <Input
   
   {...register("neighborhood")}
   label="Bairro"
   name="neighborhood"
   placeholder="Bairro"
      

   />
     <Input 
      {...register("city")}
   label="Cidade "
   name="cidade"
   placeholder="Cidade"
     />   
     <Input 
     {...register("andress")}
     placeholder="Logradouro"
      name="andress"
      label="Endereço"
     />
     <Input 
    {...register("uf")}
    placeholder="Uf"
    name="uf"
    label="Estado"
     />
      
      <Input 
      {...register("andressNumber")}
     placeholder="Número"
    name="numero"
    label="Complemento"
     />
      
      
   <Button   >
        Enviar
     </Button>
     
    
     
    </form>
    
        </S.Form>


    )
}
