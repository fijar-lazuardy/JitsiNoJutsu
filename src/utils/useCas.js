import CasClient, { constant } from "react-cas-client";
 
let casEndpoint = "sso.ui.ac.id/cas2";
let casOptions = { version: constant.CAS_VERSION_2_0 };
let casClient = new CasClient(casEndpoint, casOptions);
export default casClient;