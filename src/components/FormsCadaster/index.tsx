import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FormsContext } from "../../hooks/UseFormProvider";
import Button from "../Button";
import { Input } from "../Input";
import * as S from "./style";

export default function FormsCadaster() {
  const {
    onBlurZipCode,
    register,
    message,
    handleOnChangeUser,
    inputController,
    buttonController,
    handleKeyUp,
    errors,
    onBlurName,
    handleSubmit,
    handlePagination,
  } = useContext(FormsContext);

  const router = useRouter();

  return (
    <S.Form>
      <form onSubmit={handleSubmit(handlePagination)}>
        <Input
          {...register("name", {
            required: true,
          })}
          name="name"
          label="Nome*"
          placeholder="Nome*"
          htmlFor="name"
          inputMode="text"
          autoComplete=""
          onBlur={onBlurName}
        />
        {errors.name && (
          <span className="messageError"> {errors.name.message} </span>
        )}
        <Input
          {...register("cep", {})}
          name="cep"
          label="Cep*"
          placeholder="00000-000"
          onBlur={onBlurZipCode}
          onChange={handleOnChangeUser}
          inputMode="numeric"
          value={inputController}
          onKeyUp={handleKeyUp}
          maxLength={9}
          htmlFor="zipCode"
        />

        {<span className="messageError"> {message} </span>}

        <Input
          {...register("neighborhood")}
          label="Bairro"
          name="neighborhood"
          placeholder="Bairro"
          htmlFor="neighborhood"
        />
        <Input
          {...register("city")}
          label="Cidade "
          name="cidade"
          placeholder="Cidade"
          htmlFor="city"
        />
        <Input
          {...register("andress")}
          placeholder="Logradouro"
          name="andress"
          label="Endereço"
          htmlFor="andress"
        />
        <Input
          {...register("uf")}
          placeholder="Uf"
          name="uf"
          label="Estado"
          htmlFor="uf"
        />

        <Input
          {...register("andressNumber")}
          placeholder="Número"
          name="andressNumber"
          label="Complemento"
          htmlFor="andressNumber"
        />

        <Button disabled={buttonController}>Enviar</Button>
      </form>
    </S.Form>
  );
}
