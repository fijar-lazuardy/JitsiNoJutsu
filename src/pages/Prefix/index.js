import React from "react";
import { useHistory } from "react-router-dom";
import { WrapperPrefix } from "./styles";
import Center from "./Media/center_vector.png";
import Side from "./Media/side_vector.png";

const Prefix = () => {
  const history = useHistory();
  return (
    <WrapperPrefix>
      <img src={Center} alt="center_vector" className="center_vector" />
      <img src={Side} alt="side_vector" className="side_vector" />
      <button onClick={() => history.push("/home")}>Login With SSO</button>
    </WrapperPrefix>
  );
};

export default Prefix;
