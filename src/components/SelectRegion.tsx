import React from "react";
import { Row, Col } from "react-bootstrap";
import regions from "./data/regions_new.json";

interface Props {
  region: string;
  handleRegion: Function;
}

export default function SelectRegion(props: Props) {
  return (
    <Row>
      <Col md={{ span: 3, offset: 8 }}>
        <select
          className="custom-select "
          style={{ float: "right" }}
          value={props.region}
          onChange={(e) => {
            props.handleRegion(e.target.value);
          }}
        >
          <option value="">Region</option>
          {regions.map((region: { name: string }, index: number) => (
            <option key={index} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </Col>
    </Row>
  );
}
