import styled from "styled-components";

export const WrapperPrefix = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #284089;

  .center_vector {
    width: 670px;
    @media only screen and (max-width: 414px) {
      width: 370px;
    }
  }
  .side_vector {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 380px;
    height: 730px;

    @media (max-width: 500px) {
      display: none;
    }
    @media (max-width: 768px) {
      width: 280px;
      height: 530px;
    }
  }
  button {
    display: inline-block;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    color: #284089;
    background-color: white;
    text-align: center;
    transition: all 0.2s;
    width: 360px;
    height: 75px;
    font-weight: 800;
    font-size: 28px;
    cursor: pointer;

    @media only screen and (max-width: 414px) {
      width: 240px;
      height: 65px;
      font-size: 22px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
`;
