import AnotherSearchIcon from "../../UI/AnotherSearchIcon";
import classes from "./SideNavigation.module.css";
import PandaIcon from "../../UI/PandaIcon";
import HomeIcon from "../../UI/HomeIcon";
import LikeIcon from "../../UI/LikeIcon";
import colorclasses from "../../UI/iconColourChange.module.css";
import { NavLink } from "react-router-dom";

const SideNavigation = () => {
  return (
    <>
      <ul className={classes.navbar__sidebar} id="sideBar">
        <div className={classes.main_icons}>
          <PandaIcon />
          <h2 className={classes.sidebar_info}>Panda Pop</h2>
        </div>
        <div className={classes.menu_list}>
          <li id="Menu">Menu</li>
          <li>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <button className={colorclasses.btn}>
                <div className={classes.icon}>
                  <HomeIcon />
                </div>
                Home
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none" }}>
              <button className={colorclasses.btn}>
                <div className={classes.icon}>
                  <LikeIcon />
                </div>
                Favourites
              </button>
            </NavLink>
          </li>
        </div>
      </ul>
    </>
  );
};

export default SideNavigation;
