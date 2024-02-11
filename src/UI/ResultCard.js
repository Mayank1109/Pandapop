import colorclasses from "./iconColourChange.module.css";
import DownloadButton from "./DownloadButton";
import classes from "./ResultCard.module.css";

const ResultCard = (props) => {
  const downloadSongHandler = async (event) => {
    event.preventDefault();

    try {
      const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${props.downloadId}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "84701ac01emsh75827ed4d87b809p1cfe69jsneb3682289658",
          "X-RapidAPI-Host": "youtube-mp3-downloader2.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);

      const result = await response.json();

      window.location.replace(result.link);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={classes.masonry}>
      <div className={classes.card}>
        <img src={props.src} />
        <div className={classes.top_div}>
          <div className={classes.song_info}>
            <h1>{props.name}</h1>
            <h2>{props.artist}</h2>
            <h3>{props.duration}</h3>
          </div>
          <button className={colorclasses.btn} onClick={downloadSongHandler}>
            <DownloadButton />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
