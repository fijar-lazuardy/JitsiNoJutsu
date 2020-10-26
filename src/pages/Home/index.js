import React, { Fragment, useState } from "react";
import { WrapperHome, Flex, Header, Paper, Warning } from "./style";
import JitsiVideoConference from "../JitsiVideoConference/index";
import { getUser, logout } from "../../utils/auth";
import { URL_REDIRECT } from "../../utils/constant";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [values, setValues] = useState({
    roomName: "",
    // password: "",
    // subject: "",
    displayName: `${getUser()?.name ?? ""}`,
    email:`${getUser()?.email ?? ""}`,
    jwt: "",
  });

  const handleChange = (e, name) => {
    e.persist();
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handleJoin = () => {
    if (values.roomName) {
      setIsStarted(true);
    }
  };
  const handleEndMeet = () => {
    setIsStarted(false);
    setValues({
      roomName: "",
      // password: "",
      // subject: "",
      displayName: `${getUser()?.name ?? ""}`,
      email:`${getUser()?.email ?? ""}`,
      jwt: "",
    });
  };
  const handleLogout = () => {
    const logoutWindow = window.open(
      `https://akun-kp.cs.ui.ac.id/cas/logout?service=${URL_REDIRECT}`,
      "_blank",
      "width=800,height=800",
      "toolbar=0,location=0,menubar=0"
    );
   setInterval(() => {

      logoutWindow.close()
      logout();
      window.location.reload()
    }, 1500);
  
   
    
  };
  return (
    <Fragment>
      <WrapperHome>
        {isStarted ? (
          <JitsiVideoConference
            roomName={values.roomName}
            // password={values.password}
            // subject={values.subject}
            displayName={values.displayName}
            email ={values.email}
           
            onClose={handleEndMeet}
          />
        ) : (
          <>
            <Header>
              <Flex direction="row">
                <img src={"https://i.ibb.co/9cpjmRX/logo.png"} alt="UI-Logo" />
                <p>JitsiNoJutsu</p>
                <p className="welcome">Welcome, {values.displayName}</p>
                <button className="logoutBtn" onClick={handleLogout}>
                  Logout
                </button>
              </Flex>
            
            </Header>

            <Flex direction="row" wrap="wrap">
              <Flex direction="column" style={{ width: "30em", margin: 0 }}>
                <p className="caption">プレミアムビデオ会議。 誰でも無料</p>
                <p className="description">
                  Premium video meetings. Free for everyone
                </p>

                <Flex direction="row" justify="center" style={{ marginTop: "5em" }}>
                  <div className="classNamem_group">
                    <input
                      type="text"
                      className="form__input"
                      value={values.roomName}
                      onChange={(e) => handleChange(e, "roomName")}
                      placeholder="Room Name"
                      required=""
                    />
                    <label htmlFor="name" className="form__label">
                      Room
                    </label>
                  </div>
                  <button className="button" onClick={handleJoin}>
                    Join
                  </button>
                </Flex>
              </Flex>
              <Flex direction="column">
                <Paper>
                  <img src={"https://i.ibb.co/28BRcQS/video.jpg"} alt="video-confernce" />
                </Paper>
              </Flex>
            </Flex>
          </>
        )}
      </WrapperHome>
      <Warning>
        <h2>The page does not support on mobile devices</h2>
      </Warning>
    </Fragment>
    
    
  );
};
export default Home;
