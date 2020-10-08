import Axios from 'axios';


const URL_REDIRECT = "http://localhost:3001/home"
const validateTicket = (ticketId)=>{
    try{
        const data =  Axios.post(`https://sso.ui.ac.id/cas2/serviceValidate?ticket=${ticketId}&service=${URL_REDIRECT}`)
        console.log(data)
        return data
    }
    catch(e){
        return e
    }
  
}
export {validateTicket};