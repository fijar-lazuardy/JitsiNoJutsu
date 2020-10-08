import React from "react";
import { WrapperPrefix } from "./styles";
import Center from "./Media/center_vector.png";
import Side from "./Media/side_vector.png";


const URL_REDIRECT = "http://localhost:3001/home"
const Prefix = () => {
  const handleLogin = ()=>{
    window.location.href=`https://sso.ui.ac.id/cas2/login?service=${URL_REDIRECT}`
  }


  return (
    <WrapperPrefix>
      <img src={Center} alt="center_vector" className="center_vector" />
      <img src={Side} alt="side_vector" className="side_vector" />
      <button onClick={handleLogin}>Login With SSO</button>
    </WrapperPrefix>
  );
};

export default Prefix;
