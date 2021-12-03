import React, { useContext } from 'react';
import { FormsContext } from '../../context/FormsCadasterContext';
import * as S from './style';


export default function FormsCadaster() {
   
    const { checkCep,register,errors,setError} = useContext(FormsContext)
    
   

    return (
        <S.Form>
   <form >
      
      <label >Nome</label>
      <input {...register("name", { required: true })}  placeholder="Primeiro Nome" name="name" /> 
   
     <label >Cep</label>
      <input {...register("cep",{required:true})} placeholder="Cep"  onBlur={ checkCep } />
        
     <label >Bairro</label>
      <input {...register("neighborhood")} placeholder="Bairro" name="neighborhood" />  
      <label>Cidade</label>
      <input {...register("andress")} placeholder="Logradouro" name="andress"/>
    <label>Uf</label>
      <input {...register("uf")} placeholder="Uf" name="uf" />      
    <label >Complemento</label>
      <input {...register("andressNumber")} placeholder="Número" name="numero" />
      
  
     
    
      <input type="submit" className='submitButton' />
    </form>
        </S.Form>


    )
}
