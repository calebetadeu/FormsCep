import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { FormsContext } from '../../hooks/UseFormProvider';
import Button from '../Button';
import { Input } from '../Input';
import * as S from './style';

export default function FormsCadaster() {
   
    const { checkCep,
      handleSubmit,
      register,message,
      handleOnChangeError,
      inputController,
      handlePagination,
      buttonController
    } = useContext(FormsContext)
   
    const router= useRouter()

  
    return (
        <S.Form>
   <form    >
      
      <Input
         {...register("name",{
           required:true
         })}   
        name="name"
        label="Nome*"
        placeholder="Nome*"
     
     /> 
     <Input 
     {...register("cep",{
     } 
     )} 
     name="cep"
     label="Cep*"
     placeholder="Cep*"
    onBlur={ checkCep }
     onChange={handleOnChangeError}
     type="number"
     value={inputController}
     maxLength={8}
    />
       

         <span className='messageError' > {message} </span>
      
   
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
      
      
   <Button disabled={buttonController} >
        Enviar
     </Button>
     
    
     
    </form>
    
        </S.Form>


    )
}
