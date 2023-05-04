import classes from "./Header.module.css";
import LeftArrow from "../../UI/LeftArrow";
import RightArrow from "../../UI/RightArrow";
import Search from "./Search";
import colorclasses from "../../UI/iconColourChange.module.css";
const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.page_navigate}>
          <button className={colorclasses.btn}>
            <LeftArrow />
          </button>
          <button className={colorclasses.btn}>
            <RightArrow />
          </button>
        </div>
        <Search />
      </div>
    </>
  );
};

export default Header;
