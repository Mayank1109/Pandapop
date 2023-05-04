import colorclasses from "./iconColourChange.module.css";

import DownloadButton from "./DownloadButton";
import classes from "./TopResultCard.module.css";
const TopResultCard = () => {
  return (
    <div className={classes.top_card}>
      <img src="https://i.ytimg.com/vi/9u14-QBPzSE/mqdefault.jpg" />
      <div className={classes.t_card}>
        <div className={classes.card_info}>
          <h1>Pacify Her</h1>
          <h2>Melanie martinez</h2>
        </div>
        <button className={colorclasses.btn}>
          <DownloadButton />
        </button>
      </div>
    </div>
  );
};

export default TopResultCard;
