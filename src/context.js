import React, { useState, createContext } from "react";

export const Context = createContext();

const UserProvider = ({ children }) => {  // we will wrap the provider around the <App> component, in this case represented by children
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default UserProvider;
