import React from "react";
import HomePage from "./Components/HomePage";
import { StateProvider } from "./store/StateContext";

const App = () => {
  return (
    <div>
      <StateProvider>
        <HomePage />
      </StateProvider>
    </div>
  );
};

export default App;
