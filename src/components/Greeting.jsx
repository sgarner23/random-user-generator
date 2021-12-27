/*
  Header section of the SPA
*/
import { Typography } from "@mui/material";
import useStyles from "../styles";
import "./Greeting.css";

function Greeting() {
  const classes = useStyles();
  return (
    <div className="greeting-container">
      <Typography
        variant="h3"
        align="center"
        className={classes.header}
        gutterBottom
      >
        WELCOME, MEET MY RANDOM USERS
      </Typography>
    </div>
  );
}

export default Greeting;
