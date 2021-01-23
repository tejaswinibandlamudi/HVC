import React from "react";
import { Card } from "react-bootstrap";
import { Image, Instance } from "./Interfaces";
import EditButton from "./EditButton";

interface Props {
  handleStep: Function;
  image: Image;
  instance: Instance;
}

export default function Review(props: Props) {
  return (
    <div className="container">
      <div>
        <div className="row justify-content-between">
          <h2 className="col-9">Image</h2>
          <EditButton step={1} handleStep={props.handleStep} />
        </div>

        <Card>
          <Card.Header>{props.image.name}</Card.Header>
          <Card.Body className="row">
            <div className="col-9">{props.image.description}</div>
            <span className="col-3">{props.image.architecture}</span>
          </Card.Body>
        </Card>
        <div className="w-50 p-3">
          <div className="row justify-content-between">
            <h2 className="col-9">Instance</h2>
            <EditButton step={2} handleStep={props.handleStep} />
          </div>
          <Card>
            <Card.Header>{props.instance.name}</Card.Header>
            <Card.Body className="container">
              {props.instance.memory} RAM
              <br />
              {props.instance.cpu} CPU
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
