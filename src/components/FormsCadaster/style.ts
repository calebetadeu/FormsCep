import styled from "styled-components";

export const Form = styled.div`
  margin: 20px;
  display: block;
  align-items: center;

  form {
    background: var(--gray-50);
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 40px 70px;
    border-radius: 10px;
  }
  .messageError {
    color: #ff0f0f;
    margin: 3px;
    font-size: 14px;
    font-size: bolder;
  }
  @media only screen and (max-width: 768px) {
    .messageError {
      font-size: 15px;
    }
  }
`;
