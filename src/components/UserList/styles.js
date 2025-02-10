import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  font-family: "Roboto";
  background-color: #fafdff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const MainHeading = styled.h1`
  font-size: 32px;
  color: #0a0257;
  text-transform: capitalize;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 15px 0;
  }
`;

export const Table = styled.table`
  width: 90%;
  border-radius: 4px;
  box-shadow: 0 0 10px #0d0b0b;
  margin: 15px 0;
  border-collapse: collapse;
`;

export const TableHeading = styled.th`
  padding: 10px 5px;
  font-size: 20px;
  text-transform: capitalize;
  text-align: ${(props) => (props.center ? "center" : "left")};
  background-color: #0a0257;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const BtnsCon = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  visibility: hidden;
`;

export const Buttons = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

export const TableData = styled.td`
  font-size: 18px;
  text-align: ${(props) => (props.center ? "center" : "left")};
  padding: 8px 10px;

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 4px 5px;
  }
`;

export const TableRow = styled.tr`
  height: 50px;
  &:hover {
    font-weight: 500;
    background-color: lightblue;
    ${BtnsCon} {
      visibility: visible;
    }
    ${TableData} {
      color: red;
    }
  }
`;

export const NoUsers = styled.h2`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const NewUserButton = styled.button`
  background-color: blue;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 0 3px #000;
  text-transform: capitalize;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;
