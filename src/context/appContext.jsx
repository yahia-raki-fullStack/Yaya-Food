import { createContext } from "react";
import { useState, useContext } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  return (
    <AppContext.Provider value={{ query, setQuery, handleQueryChange }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};
