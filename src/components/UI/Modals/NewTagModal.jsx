import { useContext, useState } from "react";
import { usersContext } from "../../../store/usersStore";
import { TextField, Button } from "@material-ui/core";
import useStyles from "../../../styles";

function NewTagModal() {
  const { usersState, updateUsers } = useContext(usersContext);
  const [userInput, setUserInput] = useState("");
  const classes = useStyles();

  const handleSetUserInput = (e) => {
    setUserInput(e.target.value);
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      updateTagInput(e.target.value);
    }, 50);
  };

  const clearInput = () => {
    updateUsers({ type: "RESET_TAG_INPUT" });
  };

  const updateTagInput = (userInput) => {
    updateUsers({ type: "TAG_INPUT", value: userInput });
  };

  const addNewTagToUser = () => {
    updateUsers({ type: "ADD_TAG", value: usersState.addTagInput });
    closeAddTagModal();
    clearInput();
  };

  const closeAddTagModal = () => {
    updateUsers({ type: "CLOSE_MODAL" });
    clearInput();
  };
  return (
    <div className={classes.overlay}>
      <div className={classes.modalCard}>
        <div className={classes.modalContent}>
          <div className={classes.modalHeader}>
            <label className={classes.label}>ADD TAG</label>
            <Button
              size="small"
              color="primary"
              className={classes.closeModal}
              onClick={closeAddTagModal}
            >
              X
            </Button>
          </div>
          <TextField
            fullWidth
            label="Tag Name"
            id="tagNameInput"
            value={userInput}
            onChange={handleSetUserInput}
            className={classes.searchField}
          />
          <div className={classes.modalBtnContainer}>
            <Button size="small" color="primary" onClick={closeAddTagModal}>
              Cancel
            </Button>
            <Button size="small" color="primary" onClick={addNewTagToUser}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTagModal;
