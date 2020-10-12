import React,{useEffect,useState} from "react";
import {Container,WrapperJitsi} from './style';
import {JITSI_DOMAIN} from "../../utils/constant";

const domain = JITSI_DOMAIN;
const jitsiContainerId = 'jitsi-container';

const JitsiVideoConference = ({subject="",roomName="",password="",displayName="",jwt="",onClose = ()=>{},...props}) => {
    const [loading, setLoading] = useState(true);

    function startConference() {
        try {
        const options = { 
          roomName:roomName, 
          subject:subject,
          jwt: jwt ,
          password:password,
          parentNode:jitsiContainerId,
          interfaceConfigOverwrite: {
            filmStripOnly: false,
            SHOW_JITSI_WATERMARK: true,
          },
          configOverwrite: {
            disableSimulcast: false,
          },
        }
        options.parentNode =document.getElementById(options.parentNode)
        const api = new window.JitsiMeetExternalAPI(domain, options);
        setLoading(false)
        console.log(subject)
        console.log(displayName)
        api.executeCommand('subject', subject)
        api.addEventListener('videoConferenceJoined', () => {
          api.executeCommand('displayName', displayName)
          if (password) api.executeCommand('password', password)
       
        })
        api.addEventListener('passwordRequired', () => {
          if (password) {
            api.executeCommand('password', password)
          }
        })
        if (onClose) api.addEventListener('readyToClose', onClose)
      }catch (error) {
        console.error('Failed to load Jitsi API', error);
      }
    }
    
     useEffect(() => {
      /* eslint-disable */
      // verify the JitsiMeetExternalAPI constructor is added to the global..
      if (window.JitsiMeetExternalAPI) startConference();
      else alert('Jitsi Meet API script not loaded');
     }, []);
    
    
      return (
        <Container>
          {loading &&  <p>Loading</p>}
          <WrapperJitsi loading={loading}>
            <div id='jitsi-container' />
          </WrapperJitsi>
         
        </Container>
      )
    


    
};

export default JitsiVideoConference;
