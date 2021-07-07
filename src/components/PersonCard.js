import React, { useEffect } from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

const PersonCard = props => {
  return (
    <Col xs="10" style={{ marginLeft: "10%" }}>
      <Card height="100%">
        <CardImg top width="50%" src="/" alt="" />
        <CardBody height="100%">
          <CardTitle>
            <h2>{props.name}</h2>
          </CardTitle>
          <CardSubtitle>Height: {props.height}</CardSubtitle>
          <CardText>
            Birth Year: {props.birth_year}
            <br />
            Eye Color: {props.eye_color}
            <br />
            Skin Color: {props.skin_color}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PersonCard;
