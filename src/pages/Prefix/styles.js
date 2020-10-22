import styled from "styled-components";

export const WrapperPrefix = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .center_vector {
    width: 640px;
    margin-bottom: 2em;
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
  // button {
  //   display: inline-block;
  //   border: none;
  //   border-radius: 20px;
  //   text-decoration: none;
  //   font-family: "Roboto", sans-serif;
  //   font-weight: 800;
  //   color: #284089;
  //   background-color: white;
  //   text-align: center;
  //   transition: all 0.2s;
  //   width: 360px;
  //   height: 75px;
  //   font-weight: 800;
  //   font-size: 28px;
  //   cursor: pointer;

  //   @media only screen and (max-width: 414px) {
  //     width: 240px;
  //     height: 65px;
  //     font-size: 22px;
  //   }
  // }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
`;

export const Button = styled.a`
  display: inline-block;
   padding: 0.35em 1.2em;
   border: 0.1em solid #284089;
   margin: 0 0.3em 0.3em 0;
   border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 28px;
  cursor: pointer;
   color: black;
   text-align: center;
   transition: all 0.2s;

  :hover {
     color: white;
     background-color: #284089;
  }

  @media only screen and (max-width: 414px) {
    width: 240px;
    height: 65px;
    font-size: 22px;
  }
`;
