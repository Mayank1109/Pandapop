import classes from "./iconColourChange.module.css";
const LeftArrow = ({ colourChange }) => {
  return (
    <svg
      className={classes.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="2.5em"
      height="2.5em"
      viewBox="0 0 24 24"
    >
      <path
        fill="#a2a2a2"
        d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12l8.13-8.13z"
      ></path>
    </svg>
  );
};

export default LeftArrow;
