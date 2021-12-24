import { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";

import useStyles from "../styles";
import MoreUserInfo from "./MoreUserInfo";

function UserCard({ userName, profilePic, userEmail, index }) {
  const [displayMoreInfo, setDisplayMoreInfo] = useState(false);

  const classes = useStyles();

  const viewMoreDetail = () => {
    setDisplayMoreInfo(!displayMoreInfo);
  };

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
          <Typography>{`Email: ${userEmail}`}</Typography>
          {displayMoreInfo && <MoreUserInfo index={index} />}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={viewMoreDetail}>
            {displayMoreInfo ? "View Less" : "View More"}
          </Button>
          <Button size="small" color="primary">
            Add Tag
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default UserCard;
