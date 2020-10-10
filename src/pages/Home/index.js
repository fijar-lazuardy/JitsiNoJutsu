import React, { useState} from "react";
import { WrapperHome, Flex, Left, Right } from "./style";
import JitsiVideoConference from "../JitsiVideoConference/index";
import People from "./Media/people.png";
import {getUser,logout} from "../../utils/auth";


const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [values, setValues] = useState({
    roomName: "",
    password: "",
    subject: "",
    displayName:`${getUser().name} - ${getUser().npm}`,
    jwt: "",
  });  


  const handleChange = (e, name) => {
    e.persist();
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handleJoin = () => {
    if(values.roomName && values.displayName && values.subject){
      setIsStarted(true);
    }
  
  };
  const handleEndMeet = () => {
    setIsStarted(false);
    setValues({
      roomName: "",
      password: "",
      subject: "",
      displayName: `${getUser().name} - ${getUser().npm}`,
      jwt: "",
    });
  };
  const handleLogout = ()=>{
    logout()
    window.location.href="https://sso.ui.ac.id/cas2/logout?url=http://localhost:3001"

  }
  return (
    <WrapperHome>
      {isStarted ? (
        <JitsiVideoConference
          roomName={values.roomName}
          password={values.password}
          subject={values.subject}
          displayName={values.displayName}
          onClose={handleEndMeet}
        />
      ) : (
        <>
          <Flex direction="row" justify="center">
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
                    type="text"
                    className="form__input"
                    value={values.displayName}
                    onChange={(e) => handleChange(e, "displayName")}
                    placeholder="Display Name"
                    required=""
                  />
                  <label htmlFor="name" className="form__label">
                    Display Name
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
                  <button onClick={handleLogout}>logout</button>
                </Flex>
              </Flex>
            </Right>
          </Flex>
        </>
      )}
    </WrapperHome>
  );
};
export default Home;
