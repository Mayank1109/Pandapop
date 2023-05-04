import classes from "./artistAlbum.module.css";
import TrendingAlbums from "./TrendingAlbums";
import TrendingArtists from "./TrendingArtists";
const ArtistAlbum = () => {
  return (
    <div className={classes.artist_album}>
      <TrendingAlbums />
      <TrendingArtists />
    </div>
  );
};

export default ArtistAlbum;
