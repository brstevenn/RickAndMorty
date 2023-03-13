import { createContext, ReactNode, useState } from "react";
import { ISessionContextType } from "@tstypes/sessioncontext";

const defaultValue: ISessionContextType = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  username: "",
  setUsername: () => {},
  accessToken: "",
  setAccessToken: () => {},
};

export const SessionContext = createContext<ISessionContextType>(defaultValue);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    username,
    setUsername,
    accessToken,
    setAccessToken,
  };

  return (
    <SessionContext.Provider value={value}> {children}</SessionContext.Provider>
  );
};

export default SessionContext;
