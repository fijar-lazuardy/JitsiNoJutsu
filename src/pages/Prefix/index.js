import React, { useEffect, useState } from "react";
import { WrapperPrefix, Button, LoadingWrapper } from "./styles";
// import Center from "./Media/center.jpg";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import Axios from "axios";
import { login, checkAuth,logout } from "../../utils/auth";
import { getUser } from "../../utils/api";
import { URL_REDIRECT } from "../../utils/constant";
import Homepage from "../Home";
import ReactLoading from 'react-loading';

const Prefix = () => {
  const location = useLocation();
  const history = useHistory();
  const [isLoading,setIsLoading] = useState(false)
  const parsed = qs.parse(location.search);
  const isLoggedIn = checkAuth();

  const handleLogin = () => {
    window.location.href = `https://akun-kp.cs.ui.ac.id/cas/login?service=${URL_REDIRECT}`;
  };


  useEffect(() => {
    if (parsed.ticket) {
      setIsLoading(true)
      Axios.post(`${getUser}/?ticketId=${parsed.ticket}`)
        .then((res) => {
          setIsLoading(false)       
          const data = res.data.data;
          login(data);
          history.push("/");
        })
        .catch(
          (e) => {
            console.log(e)
            logout();
            setIsLoading(false)
               
          }
         
          );
    } 
  },[history, parsed.ticket]);

  return (
    <>
    {
      isLoading ? 
      <LoadingWrapper>
          <ReactLoading type={"cubes"} color={"black"} height={200} width={200} />
      </LoadingWrapper>
    :
      
      isLoggedIn ?
        <Homepage/>
      :
      <WrapperPrefix>

        <img src={"https://i.ibb.co/hMgZc66/center.jpg"} alt="center_vector" className="center_vector" />
        {/* <img src={Side} alt="side_vector" className="side_vector" /> */}
        <Button onClick={handleLogin}>Login With SSO</Button>
      </WrapperPrefix>

    }
    </>
   
  );

};

export default Prefix;
