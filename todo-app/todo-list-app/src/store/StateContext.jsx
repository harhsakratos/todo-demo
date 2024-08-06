import React, { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const initialState = [];

const StateContext = createContext({ state: initialState, dispatch: () => {} });

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateValue = () => {
  return useContext(StateContext);
};

export { StateProvider, useStateValue };
