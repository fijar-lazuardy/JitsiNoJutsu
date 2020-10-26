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
  

  @media (max-width: 1000px){

    // img{
    //   width: 4em;
    //   height: 4em;
    // }
    // p{
    //   font-size: 1.2rem;
    // }
    // .welcome{
    //   display: none;
    // }
    // button{
    //   display: none;
    // }
    left: 1em;
    img{
      width: 4em;
      height: 4em;
    }
    p{
      font-size: 1.2rem;
    }
    .welcome{
      margin-left: 5rem;
      font-size: 15px;
      padding: 0;
    }
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
  .warning{
    display: none;
  }

  // @media (max-width: 1000px){
  //   .caption {
  //     display: none;
  //   }
  //   .description{
  //     display: none;
  //   }
  //   .form__input{
  //     display: none;
  //   }
  //   button{
  //     display: none;
  //   }
  //   img{
  //     display: none;
  //   }
  //   p{
  //     display: none;
  //   }
  //   .warning{
  //     display: block;
  //     margin-top: 3em;
  //     text-align: center;
  //     // margin-left: 2em;
  //     // margin-rigth: 2em;

  //   }
    
  // }

  @media (max-width: 414px){
    .welcome{
      display: none;
    }
    .caption{
      text-align: center;
      margin-top: 4em;
      font-size: 1.5em;
    }
    .description{
      font-size: 1em;
      text-align: center;
    }
    .form__input{
      width: 170px;
    }
    .form__label{
      margin-left: 1em;
    }
  }
  @media (max-width: 375px){
    .caption{
      text-align: center;
    }  
    .form__input{
      width: 150px;
    }
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

  @media (max-width: 1000px){
    width: 20em;
    height: 15em;
    // display: none;
    img{
      width: 15em;
      height: 15em;
      // display: none;
    }
  }
`;


