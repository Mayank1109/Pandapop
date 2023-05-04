import classes from "./TrendingArtists.module.css";
import Artist from "./Artist";
const TrendingArtists = () => {
  return (
    <div className={classes.T_Artists}>
      <div className={classes.Artists_layout}>
        <h1>Trending on Youtube</h1>
      </div>
      <div className={classes.t_artist}>
        <Artist />
      </div>
    </div>
  );
};

export default TrendingArtists;
