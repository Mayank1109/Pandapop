import classes from "./ArtistCard.module.css";
const ArtistCard = (props) => {
  return (
    <div className={classes.t_artist}>
      <img src={props.src} />
      <h1>{props.name}</h1>
    </div>
  );
};

export default ArtistCard;
