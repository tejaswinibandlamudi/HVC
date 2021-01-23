import React from "react";
import { Card } from "react-bootstrap";
import { Image, Instance, Mem } from "./Interfaces";

interface Props {
  region: string;
  image: Image;
  instance: Instance;
  root: Mem;
  ext: Mem;
  extDisplay: string;
}

export default function Cart(props: Props) {
  return (
    <Card
      bg="light"
      style={{ float: "right", width: "18rem" }}
      className="mb-2"
    >
      <Card.Body>
        <Card.Title>
          Cost Estimates
          <span className="float-right"> {props.region}</span>
        </Card.Title>
        <Card.Text>
          {props.image.name !== "" && (
            <div>
              {props.image.name} -
              <span className="float-right"> ${props.image.price}</span>
            </div>
          )}
          {props.instance.name}
          {props.instance.memory !== "" && (
            <div>
              Memory - {props.instance.memory}
              <span className="float-right">${props.instance.memoryPrice}</span>
            </div>
          )}
          {props.instance.cpu !== "" && (
            <div>
              CPU - {props.instance.cpu} Core
              {parseInt(props.instance.cpu, 10) > 1 ? "s" : ""}
              <span className="float-right">${props.instance.cpuPrice}</span>
            </div>
          )}
          {props.root.name && (
            <div>
              Root - {props.root.name} - {props.root.quantity}
              <span className="float-right">${props.root.price}</span>{" "}
            </div>
          )}
          {props.ext.name && !props.extDisplay && (
            <div>
              Ext - {props.ext.name} - {props.ext.quantity}
              <span className="float-right">${props.ext.price}</span>{" "}
            </div>
          )}
        </Card.Text>
        <hr />
        Total cost -
        <span className="float-right">
          $
          {props.image.price +
            props.instance.memoryPrice +
            props.instance.cpuPrice}
          /mo
        </span>
      </Card.Body>
    </Card>
  );
}
