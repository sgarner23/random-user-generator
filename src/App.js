import { Container } from "@mui/material";
import Greeting from "./components/Greeting";
import "./App.css";
import Search from "./components/Search";
import Users from "./components/Users";

function App() {
  return (
    <Container maxWidth="false" disableGutters>
      <Greeting />
      <Search />
      <Users />
    </Container>
  );
}

export default App;
