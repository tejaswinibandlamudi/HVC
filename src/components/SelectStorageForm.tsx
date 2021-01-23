import React, { useState } from "react";
import { Card } from "react-bootstrap";
import externalMemory from "./data/external_memory.json";
import { Mem } from "./Interfaces";

interface Props {
  volume: string;
  mem: Mem;
  setMem: Function;
}

export default function SelectStorageForm(props: Props) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [capacityError, setCapacityError] = useState<string>(null);
  return (
    <Card>
      <Card.Body className="row container form">
        <div className="col-sm form-group">
          <label className="form-check-label">Type</label>
          <select
            className="custom-select"
            value={props.mem.name}
            onChange={(e) => {
              setCapacityError(null);
              props.setMem({
                name: e.target.value,
                price: externalMemory.find((ext) => ext.name === e.target.value)
                  .price
              });
              setMin(
                externalMemory.find((ext) => ext.name === e.target.value).min
              );
              setMax(
                externalMemory.find((ext) => ext.name === e.target.value).max
              );
            }}
          >
            <option value="" hidden>
              Select
            </option>
            {externalMemory.map((memoryType, index) => (
              <option key={index} value={memoryType.name}>
                {memoryType.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm form-group">
          <label className="form-check-label">Volume</label>
          <p>{props.volume}</p>
        </div>
        <div className="col-sm form-group">
          <label htmlFor="capacity" className="form-check-label">
            Capacity (GB)
          </label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => {
              setCapacityError(null);
              if (e.target.value > max || e.target.value < min) {
                if (min === 0) setCapacityError("Please select Mem type");
                else setCapacityError(`Memory available from ${min} to ${max}`);
              } else
                props.setMem((prevMem: any) => ({
                  ...prevMem,
                  quantity: e.target.value
                }));
            }}
          />
          {capacityError}
        </div>
        <div className="col-sm form-group">
          <label className="form-check-label">Encryption</label>
          <br />
          <input type="checkbox" />
        </div>
        <div className="col-sm form-group">
          <label className="form-check-label">IOPS</label>
          <p>
            {props.mem.quantity < 100
              ? 100
              : props.mem.quantity <= 500
              ? 600
              : 1000}
          </p>
        </div>
        <div className="col-sm form-group">
          <label className="form-check-label">Backup</label>
          <br />
          <input type="checkbox" />
        </div>
        <div className="col-sm form-group">
          <label htmlFor="capacity" className="form-check-label">
            Remarks
          </label>
          <input
            type="text"
            className="form-control"
            id="capacity"
            placeholder="Some Remarks"
          />
        </div>
      </Card.Body>
    </Card>
  );
}
