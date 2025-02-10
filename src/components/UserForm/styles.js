import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #fafdff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormCon = styled.form`
  width: 300px;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const FieldCon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Label = styled.label`
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
`;

export const Button = styled.button`
  background-color: yellow;
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
`;

export const UpdateMessage = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #bde0fe;
  margin-top: 15px;
  text-transform: capitalize;
  text-align: center;
`;
