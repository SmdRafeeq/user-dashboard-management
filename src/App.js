import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DataContext from "./context/DataContext";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

class App extends Component {
  state = { userData: [] };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const options = { method: "GET" };
    try {
      await fetch(apiUrl, options)
        .then((res) => res.json())
        .then((data) => this.setState({ userData: data }))
        .then((err) => console.error(err));
    } catch (error) {
      console.error("Data not fetched");
    }
  };

  deleteUser = async (id) => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    const options = {
      method: "DELETE",
    };

    const response = await fetch(apiUrl, options);
    if (response.status === 200) {
      this.setState({
        userData: this.state.userData.filter((each) => each.id !== id),
      });
    }
  };

  addUser = async (newUser) => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.status === 201) {
        this.setState((preState) => ({
          userData: [...preState.userData, newUser],
        }));
      } else {
        console.error("Failed to add user", response.statusText);
      }
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  updateUser = async (updatedUser) => {
    const { userData } = this.state;
    const userId = updatedUser.id;
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    };
    try {
      const response = await fetch(apiUrl, options);
      if (response.status === 200) {
        this.setState({
          userData: userData.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          ),
        });
      }
    } catch {
      console.error("Failed to update the user");
    }
  };

  render() {
    const { userData } = this.state;

    return (
      <DataContext.Provider
        value={{
          usersData: userData,
          setUsersData: this.fetchData,
          deleteUserFun: this.deleteUser,
          addUserFun: this.addUser,
          updateUserFun: this.updateUser,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<UserList />} />
            <Route exact path="/add" element={<UserForm />} />
            <Route exact path="/edit/:id" element={<UserForm />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    );
  }
}

export default App;
