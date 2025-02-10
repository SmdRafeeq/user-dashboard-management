import React from "react";

const DataContext = React.createContext({
  usersData: [],
  setUsersData: () => {},
  deleteUserFun: () => {},
  addUserFun: () => {},
  updateUserFun: () => {},
});
export default DataContext;
