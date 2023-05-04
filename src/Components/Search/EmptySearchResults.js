import panda from "../../Assets/Dummy_pics/1.png";
import classes from "./EmptySearchResults.module.css";
const EmptySearchResults = () => {
  return (
    <div className={classes.outer_div}>
      <img src={panda} />
      <div className={classes.inner_div}>
        <h1>Nothing here ?</h1>
        <h2>Search songs to see here....</h2>
      </div>
    </div>
  );
};

export default EmptySearchResults;
