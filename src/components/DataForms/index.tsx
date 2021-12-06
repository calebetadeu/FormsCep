import { useRouter } from "next/router";
import React from "react";
import type { UserProps } from "../../types/Forms";
import Button from "../Button";
import * as S from "./style";

export default function WelcomePage({
  name,
  city,
  neighborhood,
  andress,
  uf,
  andressNumber,
}: UserProps) {
  const router = useRouter();
  const handleBackToPage = () => {
    router.push("/");
  };
  return (
    <>
      <S.dataForm>
        <header>
          <h1>
            Obrigado! <br /> <span>{name}</span>{" "}
          </h1>
        </header>
        <div className="sectionInfo">
          <ul>
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
        <Button OnClick={handleBackToPage}>Voltar</Button>
      </S.dataForm>
    </>
  );
}
