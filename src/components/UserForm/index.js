import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DataContext from "../../context/DataContext";

import {
  Container,
  FormCon,
  Heading,
  Label,
  InputField,
  FieldCon,
  Button,
  UpdateMessage,
} from "./styles";

const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [update, setUpdate] = useState(false);

  const { addUserFun, usersData, updateUserFun } = useContext(DataContext);

  const navigate = useNavigate();
  const { id } = useParams();

  const lastUser = usersData[usersData.length - 1];
  const newUserId = lastUser ? lastUser.id + 1 : 1;
  console.log(newUserId);

  useEffect(() => {
    if (id) {
      const userToEdit = usersData.find((each) => each.id === parseInt(id));
      if (userToEdit) {
        setFirstName(userToEdit.name.split(" ")[0]);
        setLastName(userToEdit.name.split(" ")[1]);
        setEmail(userToEdit.email);
      }
    }
  }, [id, usersData]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (id) {
      const updatedUser = {
        id: parseInt(id),
        name: `${firstName} ${lastName}`,
        email,
      };

      updateUserFun(updatedUser);
      setUpdate(true);
    } else {
      const newUser = {
        id: newUserId,
        name: `${firstName} ${lastName}`,
        email,
      };

      addUserFun(newUser);
      setUpdate(true);
    }

    setFirstName("");
    setLastName("");
    setEmail("");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const msg = id ? "successfully updated..." : "new user added...";

  return (
    <Container>
      <FormCon onSubmit={onSubmitForm}>
        <Heading>{id ? "edit user" : "new user"}</Heading>
        <FieldCon>
          <Label>first name</Label>
          <InputField
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </FieldCon>
        <FieldCon>
          <Label>last name</Label>
          <InputField
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </FieldCon>
        <FieldCon>
          <Label>email</Label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FieldCon>
        <Button type="submit">{id ? "Update" : "Submit"}</Button>
        <UpdateMessage>{update ? msg : ""}</UpdateMessage>
      </FormCon>
    </Container>
  );
};
export default UserForm;
