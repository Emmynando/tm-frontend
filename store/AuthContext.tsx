"use client";

import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ContextProps {
  token: string;
  setIsToken: Dispatch<SetStateAction<string>>;
}

const AuthCtx = createContext<ContextProps>({
  token: "",
  setIsToken: (): string => "",
});

export const AuthContextProvider = ({ children }) => {
  const [token, setIsToken] = useState("");

  return (
    <AuthCtx.Provider value={{ token, setIsToken }}>
      {children}
    </AuthCtx.Provider>
  );
};

export const useAuthCtx = () => useContext(AuthCtx);
