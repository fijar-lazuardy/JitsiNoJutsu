import React, { useState } from 'react';
import {WrapperHome} from './style';
import JitsiVideoConference from '../JitsiVideoConference/index';
const Home = ()=>{
    const [isStarted, setIsStarted] = useState(false)
    const [values, setValues] = useState({
        roomName:'',
        password:'',
        subject:'',
        displayName:'',
        jwt:''
    })
    const handleChange = (e,name)=>{
        e.persist();
        setValues((prev)=>({...prev,[name]:e.target.value}));
    }
    const handleJoin = ()=>{
        setIsStarted(true);
    }
    const handleEndMeet =() =>{
        setIsStarted(false)
        setValues({
            roomName:'',
            password:'',
            subject:'',
            displayName:'',
            jwt:''
        })
    }
    return(
        <WrapperHome>
            {isStarted ? 
            <JitsiVideoConference 
            roomName={values.roomName} 
            password={values.password} 
            subject={values.subject} 
            displayName={values.displayName}
            onClose={handleEndMeet}
            />
            :
            <>
            <label>nama room brok</label>
            <input value={values.roomName} onChange={(e)=>handleChange(e,'roomName')}></input>
            <label>judul meet brok</label>
            <input value={values.subject} onChange={(e)=>handleChange(e,'subject')}></input>
            <label>nama lu brok</label>
            <input value={values.displayName} onChange={(e)=>handleChange(e,'displayName')}></input>
            <label>password</label>
            <input value={values.password} onChange={(e)=>handleChange(e,'password')}></input>
            <button onClick={handleJoin}>join kuy</button>
            </>
            }
        </WrapperHome>
    )
}
export default Home;