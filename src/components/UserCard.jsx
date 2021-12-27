/*
  Cards that are mapped from global users array.
*/

import { useState, useContext } from "react";
import { usersContext } from "../store/usersStore";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Box,
} from "@material-ui/core";

import useStyles from "../styles";
import MoreUserInfo from "./MoreUserInfo";
import Tag from "./Tag";

function UserCard({ userName, profilePic, userEmail, index }) {
  const { usersState, updateUsers } = useContext(usersContext);
  const [displayMoreInfo, setDisplayMoreInfo] = useState(false);
  const classes = useStyles();

  const viewMoreDetail = () => {
    setDisplayMoreInfo(!displayMoreInfo);
  };

  //Setting index of user to global state to track cards that need tags displayed then opening up modal to add tag.
  const addTagToCard = () => {
    updateUsers({ type: "CURRENT_USER_INDEX", value: index });
    updateUsers({ type: "DISPLAY_TAG_MODAL" });
  };

  const listOfTags = usersState.filteredUsersArr[index].tags
    ? usersState.filteredUsersArr[index].tags.map((tag) => {
        return <Tag text={tag} />;
      })
    : null;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={profilePic}
          title="Profile Picture"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {userName}
          </Typography>
          <Typography noWrap>{`Email: ${userEmail}`}</Typography>
          {displayMoreInfo && <MoreUserInfo index={index} />}
        </CardContent>
        <Box className={classes.tagContainer}>{listOfTags}</Box>
        <CardActions>
          <Button size="small" color="primary" onClick={viewMoreDetail}>
            {displayMoreInfo ? "View Less" : "View More"}
          </Button>
          <Button size="small" color="primary" onClick={addTagToCard}>
            Add Tag
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default UserCard;
