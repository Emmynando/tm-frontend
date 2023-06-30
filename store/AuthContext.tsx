import React, { useState } from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const AuthCtx = React.createContext({
  token: "",
  isLoggedIn: false,
  logOut: () => {},
  logIn: (token: string) => {},
});

export const AuthContextProvider = ({ children }: Props) => {
  const initialToken = JSON.parse(document.cookie)["token"];
  const [isToken, setIstoken] = useState(initialToken);

  const userLoggedIn = !!isToken;

  const logInHandler = (token: string) => {
    setIstoken(token);
    localStorage.setItem("token", token);
  };

  const logOutHandler = () => {
    setIstoken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: isToken,
    isLoggedIn: userLoggedIn,
    logOut: logOutHandler,
    logIn: logInHandler,
  };

  return (
    <AuthCtx.Provider value:any={contextValue}>{children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
