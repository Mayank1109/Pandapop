import classes from "./TopSongsCard.module.css";
const TopSongsCard = (props) => {
  return (
    <>
      <div className={classes.card}>
        <img src={props.src} />
        <h1>{props.name}</h1>
        <h2>{props.artist}</h2>
      </div>
    </>
  );
};

export default TopSongsCard;
