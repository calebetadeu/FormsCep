export interface FormInputs {
  cep?: string;
  name?: string;
  andress?: string;
  neighborhood?: string;
  city?: string;
  uf?: string;
  andressNumber?: string;
}
export type AndressProps = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  complemento: string;
  uf: string;
};
export interface UserProps extends FormInputs {}
