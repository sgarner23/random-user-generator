import { useState } from "react";

import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

import useStyles from "../styles";

function Search() {
  const [displaySearchOptions, setDisplaySearchOptions] = useState(false);
  const [searchOptionText, setSearchOptionText] = useState("All");

  const classes = useStyles();

  const changeSearchParam = (e) => {
    setSearchOptionText(e.target.textContent);
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
        />
        <div className={classes.searchParamsContainer}>
          <p className={classes.dropdownText}>{searchOptionText}</p>
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
