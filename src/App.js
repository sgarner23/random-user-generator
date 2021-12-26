import { useContext } from "react";
import { usersContext } from "./store/usersStore";
import { Container } from "@mui/material";
import Greeting from "./components/Greeting";
import useStyles from "./styles";
import Search from "./components/Search";
import Users from "./components/Users";
import NewTagModal from "./components/UI/Modals/NewTagModal";

function App() {
  const { usersState, updateUsers } = useContext(usersContext);
  const classes = useStyles();
  return (
    <Container maxWidth="false" disableGutters>
      {usersState.userModal === "ADD_TAG" && <NewTagModal />}
      <Greeting />
      <Search />
      <Users />
    </Container>
  );
}

export default App;
