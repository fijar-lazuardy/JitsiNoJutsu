const BASE_URL_SERVER = process.env.REACT_APP_NODE_ENV === "prod"
  ? process.env.REACT_APP_PROD_URL_SERVER
  : process.env.REACT_APP_DEV_URL_SERVER;

//API
const getUser = `${BASE_URL_SERVER}/api/user`;


export { getUser};
