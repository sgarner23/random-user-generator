import React, { createContext, useReducer } from "react";

const initialState = {
  userData: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_USERS": {
      return {
        ...state,
        usersData: action.value,
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
