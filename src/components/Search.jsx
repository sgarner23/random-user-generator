import { useState, useContext } from "react";
import { usersContext } from "../store/usersStore";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

import useStyles from "../styles";

function Search() {
  const { usersState, updateUsers } = useContext(usersContext);
  const [displaySearchOptions, setDisplaySearchOptions] = useState(false);
  const [userSearch, setUserSearch] = useState("");

  const classes = useStyles();

  const handleUserSearchInput = (e) => {
    setUserSearch(e.target.value);
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      updateUsers({ type: "UPDATE_SEARCH_STATE", value: e.target.value });
      updateUsers({ type: "FILTER_USERS" });
    }, 50);
  };

  const changeSearchParam = (e) => {
    updateUsers({ type: "UPDATE_FILTER_PARAMS", value: e.target.textContent });
    setDisplaySearchOptions(false);
  };

  const displayDropDownOptions = () => {
    setDisplaySearchOptions(!displaySearchOptions);
  };

  return (
    <div className={classes.searchWrapper}>
      <Box maxWidth="sm" className={classes.searchDivContainer}>
        <TextField
          fullWidth
          label="Search users..."
          id="searchUsers"
          className={classes.searchField}
          value={userSearch}
          onChange={handleUserSearchInput}
        />
        <div className={classes.searchParamsContainer}>
          <p className={classes.dropdownText}>{usersState.filterType}</p>
          <KeyboardArrowDown
            className={classes.downArrow}
            onClick={displayDropDownOptions}
          />
          {displaySearchOptions && (
            <div className={classes.searchOptions}>
              <div
                className={classes.searchOptionText}
                onClick={changeSearchParam}
              >
                All
              </div>
              <div
                className={classes.searchOptionText}
                onClick={changeSearchParam}
              >
                Name
              </div>
              <div
                className={classes.searchOptionText}
                style={{ border: "none" }}
                onClick={changeSearchParam}
              >
                Tags
              </div>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
}

export default Search;
