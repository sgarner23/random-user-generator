import { useContext, useEffect } from "react";
import { usersContext } from "../store/usersStore";
import { Grid, Container } from "@material-ui/core";
import getUserList from "../api/fetchUsers";

import useStyles from "../styles";
import UserCard from "./UserCard";

function Users() {
  const { usersState, updateUsers } = useContext(usersContext);

  const classes = useStyles();

  useEffect(() => {
    const users = getUserList();
    users.then((res) => {
      updateUsers({ type: "STORE_USERS", value: res.results });
    });
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {usersState.usersData
          ? usersState.usersData.map((user, index) => (
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
