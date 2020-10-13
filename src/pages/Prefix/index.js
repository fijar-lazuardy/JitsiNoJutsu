import React, { useEffect } from "react";
import { WrapperPrefix } from "./styles";
import Center from "./Media/center_vector.png";
import Side from "./Media/side_vector.png";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import Axios from "axios";
import { login, checkAuth } from "../../utils/auth";
import { getUser } from "../../utils/api";
import { URL_REDIRECT } from "../../utils/constant";

const Prefix = () => {
  const location = useLocation();
  const history = useHistory();
  const parsed = qs.parse(location.search);

  const handleLogin = () => {
    window.location.href = `https://akun-kp.cs.ui.ac.id/cas/login?service=${URL_REDIRECT}`;
  };

  useEffect(() => {
    if (parsed.ticket) {
      console.log(parsed.ticket)
      Axios.post(`${getUser}/?ticketId=${parsed.ticket}`)
        .then((res) => {
          console.log(res)
          const data = res.data.data;
          login(data);
          history.push("/home");
        })
        .catch((e) => console.log(e));
    } else {
      if (checkAuth() === true) {
        history.push("/home");
      }
    }
  });

  return (
    <WrapperPrefix>
      <img src={Center} alt="center_vector" className="center_vector" />
      <img src={Side} alt="side_vector" className="side_vector" />
      <button onClick={handleLogin}>Login With SSO</button>
    </WrapperPrefix>
  );
};

export default Prefix;
