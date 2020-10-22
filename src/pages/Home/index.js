import React, { useState } from "react";
import { WrapperHome, Flex, Header, Paper } from "./style";
import JitsiVideoConference from "../JitsiVideoConference/index";
import Logo from "./Media/logo2.png";
import Video from "./Media/video.jpg";
import { getUser, logout } from "../../utils/auth";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [values, setValues] = useState({
    roomName: "",
    // password: "",
    // subject: "",
    displayName: `${getUser().name}`,
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
      displayName: `${getUser().name} - ${getUser().npm}`,
      jwt: "",
    });
  };
  const handleLogout = () => {
    logout();
    window.location.href =
      "https://akun-kp.cs.ui.ac.id/cas/logout?service=http://localhost:3001";
  };
  return (
    <WrapperHome>
      {isStarted ? (
        <JitsiVideoConference
          roomName={values.roomName}
          // password={values.password}
          // subject={values.subject}
          displayName={values.displayName}
          onClose={handleEndMeet}
        />
      ) : (
        <>
          <Header>
            <Flex direction="row">
              <img src={Logo} alt="UI-Logo" />
              <p>JitsiNoJutsu</p>
              <p className="welcome">Welcome, {values.displayName}</p>
              <button className="logoutBtn" onClick={handleLogout}>
                Logout
              </button>
            </Flex>
          </Header>

          <Flex direction="row">
            <Flex direction="column" style={{ width: "30em", margin: 0 }}>
              <p className="caption">プレミアムビデオ会議。 誰でも無料</p>
              <p className="description">
                Premium video meetings. Free for everyone
              </p>
              <Flex direction="row" style={{ marginTop: "5em" }}>
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
                <img src={Video} alt="video-confernce" />
              </Paper>
            </Flex>
          </Flex>

          {/* <Flex direction="row" justify="center">
            <Left>
              <Flex direction="row" justify="center" alignItem="center">
                <h1>Jitsi No Jutsu</h1>
              </Flex>
              <img src={People} alt="people_vector" />
            </Left>
            <Right>
              <Flex direction="row" justify="center" alignItem="center">
                <h1>Start New Meeting</h1>
              </Flex>
              <Flex direction="column" justify="center">
              <div className="welcome-text">
                <h5>Welcome,</h5>
                 <h5>{values.displayName}</h5>
                 
                </div>
                <div className="classNamem_group">
                  <input
                    type="text"
                    className="form__input"
                    value={values.subject}
                    onChange={(e) => handleChange(e, "subject")}
                    placeholder="Title"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Title
                  </label>
                </div>

                <div className="form_group">
                  <input
                    type="text"
                    className="form__input"
                    value={values.roomName}
                    onChange={(e) => handleChange(e, "roomName")}
                    placeholder="Room Name"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Room Name
                  </label>
                </div>

                <div className="form_group">
                  <input
                    type="password"
                    className="form__input"
                    value={values.password}
                    onChange={(e) => handleChange(e, "password")}
                    placeholder="Password"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Password
                  </label>
                </div>
                <Flex direction="row" justify="center">
                  <button onClick={handleJoin}>Start / Join</button>
                </Flex>
                <Flex direction="row" justify="center">
                  <button className="logout-button" onClick={handleLogout}>logout</button>
                </Flex>
              </Flex>
            </Right>
          </Flex> */}
        </>
      )}
    </WrapperHome>
  );
};
export default Home;
