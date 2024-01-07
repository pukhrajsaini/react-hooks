import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "pukhraj saini",
    designation: "Sr Software Engineer",
  };
  return (
    <AppContext.Provider value={userData}> {children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
