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
      color: "#87A437",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#4C4A46",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#87A437",
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

  overlay: {
    height: "100vh",
    width: "100vw",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    position: "fixed",
    background: "rgba(49, 49, 49, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
  },

  modalCard: {
    width: "500px",
    height: "220px",
    backgroundColor: "#FFFFFF",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },

  modalContent: {
    padding: "20px",
    width: "100%",
  },

  modalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "30px",
  },

  label: {
    fontSize: "22px",
  },

  modalBtnContainer: {
    height: "80px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

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
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardMedia: {
    paddingTop: "100%",
  },

  cardContent: {
    flexGrow: 1,
  },

  tagContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  tag: {
    width: "80px",
    height: "30px",
    backgroundColor: "#E1ED96",
    color: "#87A437",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  tagText: {
    fontWeight: "bold",
    color: "#4C4A46",
  },
}));

export default useStyles;
