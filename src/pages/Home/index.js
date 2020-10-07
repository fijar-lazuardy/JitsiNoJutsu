import React, { useState } from "react";
import { WrapperHome, Flex, Left, Right } from "./style";
import JitsiVideoConference from "../JitsiVideoConference/index";
import People from "./Media/people.png";
const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [values, setValues] = useState({
    roomName: "",
    password: "",
    subject: "",
    displayName: "",
    jwt: "",
  });
  const handleChange = (e, name) => {
    e.persist();
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const handleJoin = () => {
    setIsStarted(true);
  };
  const handleEndMeet = () => {
    setIsStarted(false);
    setValues({
      roomName: "",
      password: "",
      subject: "",
      displayName: "",
      jwt: "",
    });
  };
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
                <div class="form_group">
                  <input
                    type="text"
                    class="form__input"
                    value={values.subject}
                    onChange={(e) => handleChange(e, "subject")}
                    placeholder="Title"
                    required=""
                  />
                  <label for="name" class="form__label">
                    Title
                  </label>
                </div>

                <div class="form_group">
                  <input
                    type="text"
                    class="form__input"
                    value={values.roomName}
                    onChange={(e) => handleChange(e, "roomName")}
                    placeholder="Room"
                    required=""
                  />
                  <label for="name" class="form__label">
                    Room
                  </label>
                </div>

                <div class="form_group">
                  <input
                    type="text"
                    class="form__input"
                    value={values.displayName}
                    onChange={(e) => handleChange(e, "displayName")}
                    placeholder="Username"
                    required=""
                  />
                  <label for="name" class="form__label">
                    Username
                  </label>
                </div>

                <div class="form_group">
                  <input
                    type="password"
                    class="form__input"
                    value={values.password}
                    onChange={(e) => handleChange(e, "password")}
                    placeholder="Password"
                    required=""
                  />
                  <label for="name" class="form__label">
                    Password
                  </label>
                </div>
                <Flex direction="row" justify="center">
                  <button onClick={handleJoin}>Start / Join</button>
                </Flex>
              </Flex>
            </Right>
          </Flex>
          {/* <label>nama room brok</label>
            <input value={values.roomName} onChange={(e)=>handleChange(e,'roomName')}></input>
            <label>judul meet brok</label>
            <input value={values.subject} onChange={(e)=>handleChange(e,'subject')}></input>
            <label>nama lu brok</label>
            <input value={values.displayName} onChange={(e)=>handleChange(e,'displayName')}></input>
            <label>password</label>
            <input value={values.password} onChange={(e)=>handleChange(e,'password')}></input>
            <button onClick={handleJoin}>join kuy</button> */}
        </>
      )}
    </WrapperHome>
  );
};
export default Home;
