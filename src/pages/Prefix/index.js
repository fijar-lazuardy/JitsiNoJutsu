import React from "react";
import { useHistory } from "react-router-dom";
import { WrapperPrefix } from "./styles";
import Center from "./Media/center_vector.png";
import Side from "./Media/side_vector.png";
import CasClient from "../../utils/useCas";

const Prefix = () => {
  // const history = useHistory();
  const handleLogin = ()=>{
    CasClient
    .auth()
    .then(successRes => {
      console.log("in")
      console.log(successRes.user);
      console.log(successRes);
      // history.push("/home")
      // Login user in state / locationStorage ()
      // eg. loginUser(response.user);
      this.props.history.replace(successRes.currentPath);
      // Update current path to trim any extra params in url
      // eg. this.props.history.replace(response.currentPath);
    })
    .catch(errorRes => {
      console.error(errorRes);
      // Error handling
      // displayErrorByType(errorRes.type)
  
      // Update current path to trim any extra params in url
      // eg. this.props.history.replace(response.currentPath);
    });
  }
  // const handleLogout = ()=>{
  //   CasClient.logout();
  // }
  return (
    <WrapperPrefix>
      <img src={Center} alt="center_vector" className="center_vector" />
      <img src={Side} alt="side_vector" className="side_vector" />
      <button onClick={handleLogin}>Login With SSO</button>
    </WrapperPrefix>
  );
};

export default Prefix;
