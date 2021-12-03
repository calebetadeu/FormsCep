import React, { useContext } from 'react';
import { FormsContext } from '../../context/FormsCadasterContext';
import Button from '../Button';
import { Input } from '../Input';
import * as S from './style';

export default function FormsCadaster() {
   
    const { checkCep,register,errors,setError,handleSubmit} = useContext(FormsContext)
    
  function handlelogin(values) {
      console.log(values)
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
     {...register("cep")}
     name="cep"
     label="Cep"
     placeholder="Cep"
     onBlur={ checkCep }
     />

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
      
      
   <Button  >
        Logar
     </Button>
     
    
     
    </form>
    
        </S.Form>


    )
}
