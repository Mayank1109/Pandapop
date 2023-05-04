import RightArrow from "../../UI/RightArrow";
import classes from "./Top20sub.module.css";
import colorclasses from "../../UI/iconColourChange.module.css";
const Top20Sub = () => {
  return (
    <div className={classes.Top20_Sub}>
      <div className={classes.time2}>
        <div className={classes.time}>Monthly</div>
        <div className={classes.time}>Weekly</div>
      </div>
    </div>
  );
};

export default Top20Sub;
