import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
`;

export const Header = styled.div`
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/open-sans-v13-latin-regular.eot"); /* IE9 Compat Modes */
    src: local("Open Sans"), local("OpenSans"),
      url("../fonts/open-sans-v13-latin-regular.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("../fonts/open-sans-v13-latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("../fonts/open-sans-v13-latin-regular.woff") format("woff"),
      /* Modern Browsers */ url("../fonts/open-sans-v13-latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("../fonts/open-sans-v13-latin-regular.svg#OpenSans") format("svg"); /* Legacy iOS */
  }
  position: absolute;
  top: 1em;
  left: 3em;
  img {
    width: 6em;
  }
  p {
    font-size: 2rem;
    font-weight: 500;
    font-family: "Google Sans Display", Roboto, Arial, sans-serif;
    margin-left: 2em;
  }
  .welcome {
    padding: 1em;
    margin-left: 25rem;
    font-size: 18px;
    font-weight: 500;
    font-family: "Google Sans Display", Roboto, Arial, sans-serif;
  }
  .logoutBtn {
    margin-top: 1em;
  }
`;

export const WrapperHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .caption {
    font-size: 2.5rem;
  }
  .description {
    font-size: 1.5em;
    opacity: 0.7;
  }

  .form_group {
    margin-top: 0.7em;
  }
  .form__label {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    transform: translateY(-5rem);
    @media (max-width: 500px) {
      margin-left: 3rem;
    }
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
  .welcome-text {
    padding: 0rem 6rem;
    h5 {
      margin: 0;
    }
    margin-bottom: 2rem;
  }
  @media (max-width: 500px) {
    width: 360px;
    border-radius: 20px;
  }

  button {
    height: 2.8em;
    width: 7em;
    margin-left: 2em;
    background-color: #284089;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 17px;
    cursor: pointer;
  }
`;

export const Paper = styled.div`
  width: 35em;
  height: 25em;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  background-color: #fff;
  border-radius: 0.5rem;
  font-size: 1.1em;
  opacity: 1;
  padding: 0.5em 0;
  text-align: center;
  transition: box-shadow 0.03s linear, opacity 0.25s linear;
  z-index: 1;
  margin-left: 4em;

  img {
    width: 25em;
    height: 25em;
  }
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
    display: none;
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
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  img {
    padding-top: 100px;
    padding-left: 80px;
    width: 370px;
    height: 370px;
  }
  button.logout-button {
    background-color: #d3d3d3;
  }
  button {
    display: inline-block;
    border: none;
    border-radius: 20px;
    margin-top: 5px;
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

    @media (max-width: 500px) {
      width: 300px;
      height: 50px;
      font-size: 20px;
    }
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
    @media (max-width: 500px) {
      margin-left: 3rem;
    }
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
  .welcome-text {
    padding: 0rem 6rem;
    h5 {
      margin: 0;
    }
    margin-bottom: 2rem;
  }
  @media (max-width: 500px) {
    width: 360px;
    border-radius: 20px;
  }
`;
