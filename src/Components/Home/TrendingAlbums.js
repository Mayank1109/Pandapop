import RightArrow from "../../UI/RightArrow";
import colorclasses from "../../UI/iconColourChange.module.css";
import classes from "./TrendingAlbums.module.css";
import Album from "./Album";
const TrendingAlbums = () => {
  return (
    <div className={classes.T_Albums}>
      <div className={classes.Album_layout}>
        <h1>Latest Albums</h1>
        {/* <button className={colorclasses.btn}>
          <RightArrow />
        </button> */}
      </div>
      <Album />
    </div>
  );
};

export default TrendingAlbums;
