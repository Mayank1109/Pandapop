import classes from "./Top20.module.css";
import Top20Sub from "./Top20sub";
import Top20Songs from "./Top20Songs";
const Top20 = () => {
  return (
    <div className={classes.top_20}>
      <div className={classes.top}>
        <h1>Top 20</h1>
      </div>
      <Top20Sub />
      <Top20Songs />
    </div>
  );
};

export default Top20;
