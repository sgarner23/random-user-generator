import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#4C4A46",
  },

  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  searchDivContainer: {
    marginTop: "70px",
    width: "100%",
    display: "flex",
    position: "relative",
  },

  searchField: {
    "& label.Mui-focused": {
      color: "#498522",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#4C4A46",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#498522",
      },
    },
  },
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  searchParamsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
  },

  dropdownText: {
    padding: "15px",
  },

  downArrow: {
    cursor: "pointer",
  },

  searchOptions: {
    width: "100px",
    position: "absolute",
    top: "70px",
    right: "-10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#FFFFFF",
    boxShadow: "0px 10px 20px rgba(72, 84, 159, 0.25)",
    borderRadius: "15px",
  },

  searchOptionText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    width: "100%",
    borderBottom: "1px solid #C4C4C4",
    cursor: "pointer",
  },

  moreInfoContainer: {},

  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "100px 0 20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));

export default useStyles;
