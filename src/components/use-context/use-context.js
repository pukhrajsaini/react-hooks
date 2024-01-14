import { createContext, useContext } from "react";

const AppContext = createContext();

const employData = {
  list: [
    {
      id: 1234,
      name: "pukhraj",
      skill: "NodeJS",
    },
    {
      id: 1235,
      name: "Shiv",
      skill: "React",
    },
  ],
  heading: "Employee List",
};

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={employData}> {children}</AppContext.Provider>
  );
};

export const useEmploy = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
