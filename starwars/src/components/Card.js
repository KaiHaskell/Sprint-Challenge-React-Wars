import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const CharCard = styled.div`
  color: white;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 5px;
  transition: transform 0.2s ease-in;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    transform: translate(5px) scale(1.05);
  }
`;

const SwCard = props => {
  return (
    <CharCard>
      <h1>{props.name}</h1>
      <h2>{props.birth_year}</h2>
      {/* <ul>
        <li>{props.films}</li>
      </ul> */}
      <Button src="https://swapi.co/">API LINK</Button>
    </CharCard>
  );
};

export default SwCard;
