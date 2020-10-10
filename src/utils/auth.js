
const login = (data)=>{
    var toStringData = JSON.stringify(data)
    localStorage.setItem("user", toStringData);
}

const getUser = ()=>{
    var toJson = JSON.parse(localStorage.getItem("user"));
    return toJson  
}

const checkAuth = ()=>{
    if(localStorage.getItem("user")===null){
        return false
    }
    else{
        return true
    }
}
const logout = () =>{
    localStorage.removeItem("user");
}

export {login, getUser, checkAuth, logout};