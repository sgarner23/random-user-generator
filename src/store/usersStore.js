import React, { createContext, useReducer } from "react";

const initialState = {
  usersData: [],
  filteredUsersArr: [],
  filterType: "All",
  userModal: null,
  userSearch: "",
  addTagInput: "",
  currentUserIndex: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_USERS": {
      return {
        ...state,
        usersData: action.value,
        filteredUsersArr: action.value,
      };
    }

    case "UPDATE_SEARCH_STATE": {
      return {
        ...state,
        userSearch: action.value,
      };
    }

    case "FILTER_USERS": {
      let filteredUsers = state.usersData;
      console.log("we gonna filter");

      if (state.filterType === "All") {
        filteredUsers = state.usersData.filter((user) => {
          return (
            user.name.first.includes(state.userSearch) ||
            user.name.last.includes(state.userSearch)
          );
        });
      }

      return {
        ...state,
        usersData: filteredUsers,
      };
    }

    case "TAG_INPUT": {
      return {
        ...state,
        addTagInput: action.value,
      };
    }

    case "UPDATE_FILTER_PARAMS": {
      return {
        ...state,
        filterType: action.value,
      };
    }

    case "RESET_TAG_INPUT": {
      return {
        ...state,
        addTagInput: "",
      };
    }

    case "CURRENT_USER_INDEX": {
      return {
        ...state,
        currentUserIndex: action.value,
      };
    }

    case "ADD_TAG": {
      let users = state.usersData;

      //Making a check to see if tags has been defined yet to prevent errors
      if (!users[state.currentUserIndex].tags) {
        users[state.currentUserIndex].tags = [];
      }
      users[state.currentUserIndex].tags = [
        ...users[state.currentUserIndex].tags,
        action.value,
      ];

      return {
        ...state,
        usersData: users,
      };
    }
    case "DISPLAY_TAG_MODAL": {
      return {
        ...state,
        userModal: "ADD_TAG",
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        userModal: null,
      };
    }
    default:
      return state;
  }
};

export const usersContext = createContext(initialState);

export const UsersStore = ({ children }) => {
  const [usersState, updateUsers] = useReducer(reducer, initialState);

  return (
    <usersContext.Provider value={{ usersState, updateUsers }}>
      {children}
    </usersContext.Provider>
  );
};
