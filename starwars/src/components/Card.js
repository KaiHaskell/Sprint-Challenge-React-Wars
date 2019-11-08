import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const SwCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.birth_year}</CardSubtitle>
          <CardText>{props.films}</CardText>
          <Button>{props.url}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SwCard;
