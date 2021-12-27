/*
  Tags displayed to cards if user adds one to an individual card. Tag information is stored on global state. 
*/

import useStyles from "../styles";

function Tag({ text }) {
  const classes = useStyles();
  return (
    <div className={classes.tag}>
      <p className={classes.tagText}>{text}</p>
    </div>
  );
}

export default Tag;
