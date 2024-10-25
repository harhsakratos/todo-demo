import React from "react";
import { createContext } from "react";

export const MyContext = createContext();

const StateProvider = ({ children }) => {
  const [name, setName] = React.useState("harsha");
  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};

export default StateProvider;
