import { useContext } from "react";
import { usersContext } from "../store/usersStore";
import { Typography } from "@material-ui/core";
import useStyles from "../styles";

function MoreUserInfo({ index }) {
  const { usersState, updateUsers } = useContext(usersContext);
  const classes = useStyles();

  return (
    <div className={classes.moreInfoContainer}>
      <Typography>
        {usersState.usersData[index].location &&
          `Location: ${usersState.usersData[index].location.country}`}
      </Typography>
      <Typography>
        {usersState.usersData[index].dob &&
          `Age: ${usersState.usersData[index].dob.age}`}
      </Typography>
      <Typography>
        {usersState.usersData[index].cell &&
          `Cell: ${usersState.usersData[index].cell}`}
      </Typography>
    </div>
  );
}

export default MoreUserInfo;
