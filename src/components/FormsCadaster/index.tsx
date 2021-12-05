import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { FormsContext } from '../../hooks/UseFormProvider';
import Button from '../Button';
import { Input } from '../Input';
import * as S from './style';



export default function FormsCadaster() {
   
    const { 
      checkCep,
     register,
     message,
      handleOnChangeUser,
      inputController,
      buttonController,
      handleKeyUp
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
         htmlFor='name'
         inputMode='text'
         autoComplete=''
     /> 
     <Input 
     {...register("cep",{
     } 
     )} 
     name="cep"
     label="Cep*"
     placeholder="00000-000"
    onBlur={ checkCep }
     onChange={handleOnChangeUser}
     
     inputMode='numeric'
     value={inputController}
     onKeyUp={handleKeyUp}
     maxLength={9}
     htmlFor='zipCode'
    />
       

         <span className='messageError' > {message} </span>
      
   
   <Input
   
   {...register("neighborhood")}
   label="Bairro"
   name="neighborhood"
   placeholder="Bairro"
     htmlFor='neighborhood' 

   />
     <Input 
      {...register("city")}
   label="Cidade "
   name="cidade"
   placeholder="Cidade"
   htmlFor='city'
     />   
     <Input 
     {...register("andress")}
     placeholder="Logradouro"
      name="andress"
      label="Endereço"
      htmlFor='andress'
     />
     <Input 
    {...register("uf")}
    placeholder="Uf"
    name="uf"
    label="Estado"
    htmlFor='uf'
     />
      
      <Input 
      {...register("andressNumber")}
     placeholder="Número"
    name="andressNumber"
    label="Complemento"
    htmlFor='andressNumber'
     />
      
      
   <Button disabled={buttonController} >
        Enviar
     </Button>
     
    
     
    </form>
    
        </S.Form>


    )
}
