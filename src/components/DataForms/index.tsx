import React from "react";
import type { UserProps } from "../../types/Forms";
import * as S from "./style";

export default function WelcomePage({
  name,
  city,
  neighborhood,
  andress,
  uf,
  andressNumber,
}: UserProps) {
  return (
    <S.dataForm>
      <h1>Obrigado </h1>
      <h1>Dados:</h1>
      <div className="sectionInfo">
        <ul>
          <li>Nome:</li>
          <span>{name}</span>
          <li>Cidade: </li>
          <span> {city}</span>
          <li>Bairro: </li>
          <span>{neighborhood}</span>
          <li>Endereço: </li>
          <span>{andress}</span>
          <li>Estado: </li>
          <span>{uf}</span>
          <li>Complemento: </li>
          <span>{andressNumber}</span>
        </ul>
      </div>
    </S.dataForm>
  );
}
