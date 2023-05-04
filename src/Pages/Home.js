import Top20 from "../Components/Home/Top20";
import ArtistAlbum from "../Components/Home/artistAlbum";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes.home}>
      <Top20 />
      <ArtistAlbum />
    </div>
  );
};

export default Home;
