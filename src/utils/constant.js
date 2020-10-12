const BASE_URL_CLIENT = process.env.REACT_APP_NODE_ENV === "prod"
  ? process.env.PROD_URL_CLIENT
  : process.env.REACT_APP_DEV_URL_CLIENT;

const URL_REDIRECT = BASE_URL_CLIENT;
const JITSI_DOMAIN = process.env.REACT_APP_NODE_ENV === "prod" ? 
process.env.REACT_APP_DOMAIN_JITSI :
"meet.jit.si"

export {URL_REDIRECT, JITSI_DOMAIN}