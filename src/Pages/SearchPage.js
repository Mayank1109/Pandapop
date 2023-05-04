import classes from "./SearchPage.module.css";
import Results from "../Components/Search/Results";
// import TopResults from "../Components/Search/TopResult";
import appContext from "../Components/app-Context";
import { useState } from "react";
const SearchPage = () => {
  // const [resultData, setResultData] = useState([]);

  return (
    <div className={classes.search_page}>
      {/* <TopResults /> */}
      <Results />
    </div>
  );
};

export default SearchPage;
