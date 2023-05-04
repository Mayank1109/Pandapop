import classes from "./AlbumCard.module.css";
const AlbumCard = (props) => {
  return (
    <>
      <div className={classes.card}>
        <img src={props.src} />
        <div className={classes.album_info}>
          <h1>{props.name}</h1>
          <h2>{props.artist}</h2>
        </div>
      </div>
    </>
  );
};

export default AlbumCard;
