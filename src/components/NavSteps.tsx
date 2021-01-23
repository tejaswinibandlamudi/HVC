import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface Props {
  step: number;
  handleStep: Function;
  handleDisable: Function;
}

const navTabs = [
  "Choose Image",
  "Choose Instance Type",
  "Choose Storage & Network",
  "Configure Security",
  "Review & Launch"
];

export default function NavSteps(props: Props) {
  return (
    <Row>
      {navTabs.map((tab: string, index: number) => (
        <Col md="auto" key={index}>
          <Button
            variant={props.step === index + 1 ? "primary" : "outline-primary"}
            disabled={
              index + 1 > props.step
                ? props.handleDisable() === false
                  ? index !== props.step
                  : true
                : false
            }
            onClick={(e) => {
              props.handleStep(index + 1);
            }}
          >
            {index + 1}. {tab}
          </Button>
        </Col>
      ))}
    </Row>
  );
}
