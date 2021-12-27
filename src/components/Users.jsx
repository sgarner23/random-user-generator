/*
  Displays Grid of all user cards. This component is responsible for making the api call and loading the initial user data on state. 
*/
import { useContext, useEffect } from "react";
import { usersContext } from "../store/usersStore";
import { Grid, Container } from "@material-ui/core";
import getUserList from "../api/fetchUsers";

import useStyles from "../styles";
import UserCard from "./UserCard";

function Users() {
  const { usersState, updateUsers } = useContext(usersContext);

  const classes = useStyles();

  //Making API call and storing results in global state.
  useEffect(() => {
    const users = getUserList();
    users.then((res) => {
      updateUsers({ type: "STORE_USERS", value: res.results });
    });
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {usersState.filteredUsersArr
          ? usersState.filteredUsersArr.map((user, index) => (
              <UserCard
                key={index}
                index={index}
                userName={`${user.name.first} ${user.name.last}`}
                profilePic={user.picture.large}
                userEmail={user.email}
              />
            ))
          : "Loading..."}
      </Grid>
    </Container>
  );
}

export default Users;
