import classes from "./SearchPage.module.css";
import Results from "../Components/Search/Results";

const SearchPage = () => {
  return (
    <div className={classes.search_page}>
      <Results />
    </div>
  );
};

export default SearchPage;
