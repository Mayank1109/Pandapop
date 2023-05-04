import SearchResults from "./SearchResults";
import classes from "./Results.module.css";
const Results = () => {
  return (
    <div className={classes.results}>
      <h1>Results</h1>
      <div className={classes.searched_songs}>
        <SearchResults />
      </div>
    </div>
  );
};

export default Results;
