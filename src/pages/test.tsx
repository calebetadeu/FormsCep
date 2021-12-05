import React, { useContext } from "react";
import DataForms from "../components/DataForms";
import { FormsContext } from "../hooks/UseFormProvider";

function test() {
  const { user } = useContext(FormsContext);
  return (
    <DataForms
      name={user.name}
      city={user.city}
      neighborhood={user.neighborhood}
      andress={user.andress}
      uf={user.uf}
      andressNumber={user.andressNumber}
    />
  );
}

export default test;
