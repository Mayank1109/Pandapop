import Header from "../Components/Fixed_Components/Header";
import SideNavigation from "../Components/Fixed_Components/SideNavigation";
import classes from "../App.module.css";
import Error from "./Error";
function ErrorPageC() {
  return (
    <div className={classes.grid_container}>
      <div className={classes.grid_header}>
        <Header />
      </div>
      <div className={classes.grid_menu}>
        <SideNavigation />
      </div>
      <div className={classes.grid_main}>
        <Error />
      </div>
    </div>
  );
}

export default ErrorPageC;
