import React, { useState } from "react";
import { ROUTE_CONSTANTS } from "../resources/routes";
import { Link } from "react-router-dom";

export const LoginMenu: React.FunctionComponent = () => {

  const getAuthToken = () => {
    return window.localStorage.getItem('auth_token');
  };

  const [authToken, setAuthToken] = useState(getAuthToken());

  return(
    <div>
      {authToken ?
        (
          <div className={"navbar navbar-brand"} >
            <Link
              onClick={() => {
                setAuthToken(null);
              }}
              className={"btn btn-dark mx-1"}
              to={ROUTE_CONSTANTS.HOME}>
              Logout
            </Link>
          </div>
          ) :
        (<div className={"navbar navbar-brand"} >
          <Link
            className={"btn btn-dark mx-1"}
            to={ROUTE_CONSTANTS.LOGIN}>
            Login
          </Link>
          <Link
            className={"btn btn-group bg-secondary-subtle mx-1"}
            to={ROUTE_CONSTANTS.SIGNUP}>
            Sign up
          </Link>
        </div>)
      }
    </div>
  );
};
