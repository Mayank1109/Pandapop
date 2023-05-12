import React, { useState } from "react";

const appContext = React.createContext({
  searchResults: [],
  onSearch: (searchdata) => {},
});

export const AppContextProvider = (props) => {
  const [searchResults, setSearchResults] = useState(null);
  const searchHandler = (searchdata) => {
    setSearchResults(searchdata);
    // localStorage.setItem("songresults", searchResults);
    // console.log(searchResults);
  };

  return (
    <appContext.Provider
      value={{
        searchResults: searchResults,
        onSearch: searchHandler,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default appContext;
