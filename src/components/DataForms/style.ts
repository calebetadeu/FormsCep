import styled from "styled-components";

export const dataForm = styled.div`
  background: var(--gray-50);
  border: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 500px;
  padding: 20px 50px;
  border-radius: 10px;
  .sectionInfo {
    margin-top: 1rem;
  }
  h1 {
    color: black;
    display: flex;
    margin: 1rem auto;
    font-size: 25px;
    margin-top: 2rem;
  }
  ul {
    display: inline-block;
    height: 12rem;
    margin-top: 5rem;
    align-items: center;
    margin: 5rem;
    color: black;
    margin: 0;
  }
  span {
    color: black;
  }
  li {
    text-decoration: none;
    font-size: 20px;
    list-style-type: none;
    font-weight: bold;
  }
  @media screen and (max-width: 780px) {
    max-width: 250px;

    li {
      font-size: 15px;
    }
    h1 {
      margin-top: 2rem;
      font-size: 16px;
      width: 100%;
    }
  }
`;
