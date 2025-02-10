import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

import {
  MainContainer,
  MainHeading,
  Table,
  TableHeading,
  BtnsCon,
  Buttons,
  TableData,
  TableRow,
  NoUsers,
  NewUserButton,
} from "./styles";

const departments = [
  "Human Resources",
  "Marketing",
  "Product Development",
  "Customer Support",
  "Sales ",
  " Business Development",
  "Finance & Accounting",
  "Research & Development",
  "Creative & Design",
  "IT & Engineering",
  "Data Science & Analytics",
];

const UserList = () => (
  <DataContext.Consumer>
    {(value) => {
      const { usersData, deleteUserFun } = value;

      const firstNameFun = (name) => {
        if (!name || typeof name !== "string") return "";

        const splitedName = name.split(" ");
        if (splitedName.length === 1) {
          return splitedName[0];
        }

        return splitedName[0];
      };

      const lastNameFun = (name) => {
        if (!name || typeof name !== "string") return "";

        const splitedName = name.split(" ");
        if (splitedName.length === 1) {
          return "";
        }

        return splitedName[1];
      };

      const randomDeptFun = () =>
        departments[Math.floor(Math.random() * departments.length)];

      return (
        <MainContainer>
          <MainHeading>user management dashboard</MainHeading>
          <Link to="/add">
            <NewUserButton>add new user</NewUserButton>
          </Link>
          <Table>
            <thead>
              <TableRow>
                <TableHeading center={true}>id</TableHeading>
                <TableHeading>first name</TableHeading>
                <TableHeading>last name</TableHeading>
                <TableHeading>email</TableHeading>
                <TableHeading>department</TableHeading>
                <TableHeading>actions</TableHeading>
              </TableRow>
            </thead>
            <tbody>
              {usersData.length === 0 ? (
                <TableRow>
                  <TableData></TableData>
                  <TableData></TableData>
                  <TableData>
                    <NoUsers>no users available</NoUsers>
                  </TableData>
                </TableRow>
              ) : (
                usersData.map((eachUser) => (
                  <TableRow key={eachUser.id} id={eachUser.id}>
                    <TableData center={true}>{eachUser.id}</TableData>
                    <TableData>{firstNameFun(eachUser.name)}</TableData>
                    <TableData>{lastNameFun(eachUser.name)}</TableData>
                    <TableData>{eachUser.email}</TableData>
                    <TableData>{randomDeptFun()}</TableData>
                    <TableData>
                      <BtnsCon>
                        <Link to={`/edit/${eachUser.id}`}>
                          <Buttons>
                            <CiEdit size={30} />
                          </Buttons>
                        </Link>
                        <Buttons onClick={() => deleteUserFun(eachUser.id)}>
                          <MdDeleteForever size={30} />
                        </Buttons>
                      </BtnsCon>
                    </TableData>
                  </TableRow>
                ))
              )}
            </tbody>
          </Table>
        </MainContainer>
      );
    }}
  </DataContext.Consumer>
);
export default UserList;
