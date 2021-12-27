/*
  This is additional user information that is displayed to each userCard dynamically. The default is for this information to not be shown unless there's a state change from the user.  
*/

import { useContext } from "react";
import { usersContext } from "../store/usersStore";
import { Typography, Box } from "@material-ui/core";
import useStyles from "../styles";

function MoreUserInfo({ index }) {
  const { usersState, updateUsers } = useContext(usersContext);
  const classes = useStyles();

  return (
    <Box className={classes.moreInfoContainer}>
      <Typography>
        {usersState.usersData[index].location &&
          `Location: ${usersState.usersData[index].location.country}`}
      </Typography>
      <Typography>
        {usersState.usersData[index].login.username &&
          `Username: ${usersState.usersData[index].login.username}`}
      </Typography>
      <Typography>
        {usersState.usersData[index].dob &&
          `Age: ${usersState.usersData[index].dob.age}`}
      </Typography>
      <Typography>
        {usersState.usersData[index].cell &&
          `Cell: ${usersState.usersData[index].cell}`}
      </Typography>
    </Box>
  );
}

export default MoreUserInfo;
