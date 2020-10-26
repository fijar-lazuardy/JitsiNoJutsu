import React,{useEffect,useState} from "react";
import {Container,WrapperJitsi, LoadingWrapper} from './style';
import {JITSI_DOMAIN,URL_REDIRECT} from "../../utils/constant";
import { checkAuth, login, logout, getUser} from "../../utils/auth";
import {useLocation } from "react-router-dom";
import ReactLoading from 'react-loading';
import { useHistory } from "react-router-dom";
import qs from "query-string";
import Axios from 'axios';



const domain = JITSI_DOMAIN;
const jitsiContainerId = 'jitsi-container';

const JitsiVideoConference = ({email="",subject="",roomName="",password="",displayName="",jwt="",onClose = ()=>{},...props}) => {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const location =useLocation();
    const parsed = qs.parse(location.search);
    console.log("jitsivideo")
  

    const handleLogin = () => {
      const loginWindow = window.open(
        `https://akun-kp.cs.ui.ac.id/cas/login?service=${URL_REDIRECT}`,
        "_blank",
        "width=800,height=800",
        "toolbar=0,location=0,menubar=0"
      );
      if (parsed.ticket) {
        setLoading(true)
        Axios.post(`${getUser}/?ticketId=${parsed.ticket}`)
          .then((res) => {
            
            setLoading(false)       
            const data = res.data.data;
            login(data);
          })
          .catch(
            (e) => {
              console.log(e)
              logout();
              history.push("/")
              setLoading(false)
                 
            }
           
            );
      } 
      setInterval(() => {
        loginWindow.close()
        window.location.reload()
      }, 1500);
      
     
      
    };
    function startConference() {
        try {
        const options = { 
          roomName:roomName, 
          subject:subject,     
          userInfo: {
            displayName: displayName,
            email:email
        },
          jwt: jwt ,
          password:password,
          parentNode:jitsiContainerId,
          interfaceConfigOverwrite: {
            filmStripOnly: false,
            SHOW_JITSI_WATERMARK: true,
          },
          configOverwrite: {
            disableSimulcast: false,
            prejoinPageEnabled: false,
            startAudioOnly:true
          },
        }
        console.log("start conference")
        options.parentNode =document.getElementById(options.parentNode)
        const api = new window.JitsiMeetExternalAPI(domain, options);
      
        console.log("masuk api")
        api.executeCommand('subject', subject)
        api.executeCommand('displayName', displayName)
        api.addEventListener('videoConferenceJoined', () => { 
          setLoading(false)
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
      if(checkAuth()){
        if (window.JitsiMeetExternalAPI) startConference();
        else alert('Jitsi Meet API script not loaded');
      }
      else{
       handleLogin()
      }
     
     }, []);
    
    
      return (
        <Container>
          {loading &&   
          <LoadingWrapper>
            <ReactLoading type={"cubes"} color={"black"} height={200} width={200} />
            <h2>joining...</h2>
          </LoadingWrapper>
          }
          <WrapperJitsi loading={loading}>
            <div id='jitsi-container' />
          </WrapperJitsi>
         
        </Container>
      )
    


    
};

export default JitsiVideoConference;
