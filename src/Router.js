import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Prefix from "./pages/Prefix";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Prefix} restricted={false} />
        {/* <PrivateRoute exact path="/home" component={Homepage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// };

// const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         checkAuth() && restricted ? (
//           <Redirect to="/home" />
//         ) : (
//           <Component {...props} />
//         )
//       }
//     />
//   );
// };
