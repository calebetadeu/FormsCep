import { useRouter } from "next/router";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from "react";
import {
  FieldError,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister
} from "react-hook-form";
import api from "../services/api";
import type { AndressProps, FormInputs, UserProps } from "../types/Forms";
import { InputProps } from "../types/Inputs";

interface FormsContextData {
  onBlurZipCode: (e: React.SyntheticEvent) => void;
  register: UseFormRegister<FormInputs>;
  handleSubmit: UseFormHandleSubmit<FormInputs>;
  setMessage: Dispatch<SetStateAction<string>>;
  buttonController: boolean;
  inputController: string;
  onBlurName: (e: React.FormEvent<HTMLInputElement>) => void;
  handlePagination: SubmitHandler<SyntheticEvent<Element, Event>>;
  handleKeyUp: (e: React.FormEvent<HTMLInputElement>) => void;
  handleOnChangeUser: (e: React.SyntheticEvent) => void;
  user: UserProps;
  message: string;
  errors: {
    name?: FieldError;
    cep?: FieldError;
    andress?: FieldError;
    andressNumber?: FieldError;
    neighborhood?: FieldError;
    city?: FieldError;
    uf?: FieldError;
  };
}
type FormsProviderProps = {
  children: ReactNode;
};

export const FormsContext = createContext<FormsContextData>(
  {} as FormsContextData
);

export function FormsProvider({ children }: FormsProviderProps) {
  const [buttonController, setButtonController] = useState(true);
  const [inputController, setInputController] = useState(null);
  const [message, setMessage] = useState("");
  const [pagination, setPagination] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<UserProps>({});

  const {
    register,
    setValue,
    setFocus,
    formState: { errors },
    setError,
    handleSubmit,
    resetField,
  } = useForm<FormInputs>();

  useEffect(() => {
    onBlurZipCode;
    handleOnChangeUser;
  }, []);

  const handlePagination: SubmitHandler<InputProps> = (data) => {
    if (pagination) {
      setUser(data);
    
      router.push("/userdata");
    }
  };

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    e.currentTarget.value = value;
  }, []);

  function handleOnChangeUser(e: React.SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    const { maxLength, value } = target;

    if (!value && value.length <= 7) {
      setButtonController(true);
    }
    if (value.length > 8) {
      setInputController(value.slice(0, maxLength));
      setMessage("");
    } else if (value.length <= 9) {
      setInputController(null);
    } else if (value.length == 8) {
      setMessage("cep");
    }
  }

  const onBlurName = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (!value) {
      setError("name", {
        message: "Campo Obrigatório",
      });
    }
  };
  const onBlurZipCode = async (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    const zipCode = target.value.replace(/\D/g, "");

    if (!target.value) {
      setMessage("Campo Obrigatório");
    } else {
      setPagination(true);
    }

    try {
      const response = await api.get(
        `https://viacep.com.br/ws/${zipCode}/json`
      );
      const data: AndressProps = await response.data;

      if (!data.cep) {
        setMessage("Cep Não Encontrado");
        setFocus("cep");
        resetField("cep");
        resetField("andress");
        resetField("neighborhood");
        resetField("city");
        resetField("uf");
        setInputController(null);
      }
       
      setValue("andress", data.logradouro);
      setValue("neighborhood", data.bairro);
      setValue("city", data.localidade);
      setValue("uf", data.uf);
      setMessage("");
      setButtonController(false);
      if (!data.bairro) {
        return setFocus("neighborhood");
      } else {
        setFocus("andressNumber");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormsContext.Provider
      value={{
        onBlurZipCode,
        register,
        errors,
        handleSubmit,
        setMessage,
        message,
        handleOnChangeUser,
        inputController,
        handlePagination,
        buttonController,
        handleKeyUp,
        onBlurName,
        user,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
}
