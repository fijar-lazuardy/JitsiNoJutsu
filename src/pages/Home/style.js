import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
`;

export const WrapperHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #284089;
`;

export const Left = styled.div`
  width: 508px;
  height: 599px;
  background: linear-gradient(
    180deg,
    #b96969 0%,
    rgba(42, 44, 157, 0) 99.98%,
    #15179a 99.99%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0 0 20px;
  h1 {
    text-aling: center;
    color: white;
  }
  img {
    width: 370px;
    height: 330px;
    margin-top: 15em;
    // position: fixed;
    // bottom: 0;
  }
  @media (max-width: 500px) {
    width: 360px;
    border-radius: 20px;
  }
`;

export const Right = styled.div`
  width: 508px;
  height: 599px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 20px 20px 0;
  h1 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 45px;
  }
  img {
    padding-top: 100px;
    padding-left: 80px;
    width: 370px;
    height: 370px;
  }
  button {
    display: inline-block;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    color: white;
    background-color: #284089;
    text-align: center;
    transition: all 0.2s;
    width: 295px;
    height: 65px;
    font-size: 24px;
    cursor: pointer;
  }
  .form_group {
    margin-top: 0.7em;
  }
  .form__label {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    margin-left: 6rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    transform: translateY(-5rem);
  }

  .form__input {
    font-family: "Roboto", sans-serif;
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 0.7rem 2rem;
    border-radius: 0.2rem;
    background-color: white;
    border: 1px solid black;
    width: 250px;
    display: block;
    // border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
  }

  .form__input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-2rem);
    transform: translateY(-2rem);
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
