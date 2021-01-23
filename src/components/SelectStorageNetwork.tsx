import React, { useState } from "react";
import SelectStorageForm from "./SelectStorageForm";
import { Mem } from "./Interfaces";

interface Props {
  root: Mem;
  setRoot: Function;
  ext: Mem;
  setExt: Function;
  extDisplay: string;
  setExtDisplay: Function;
}

export default function SelectStorageNetwork(props: Props) {
  return (
    <div>
      <div className="row container pt-3 ml-3" style={{ textAlign: "center" }}>
        <SelectStorageForm
          volume="Root"
          mem={props.root}
          setMem={props.setRoot}
        />
        <div className="row" style={{ display: props.extDisplay }}>
          <SelectStorageForm
            volume="Ext"
            mem={props.ext}
            setMem={props.setExt}
          />
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => props.setExtDisplay("none")}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div className="container mt-5 ml-3">
        <h2>Network Bandwidth Configuration</h2>
        <div className="col-md-4">
          <label className="form-label">Outbound Traffic</label>
          <br />
          <input
            type="range"
            className="form-range w-100"
            min="256"
            max="2000"
          />
          <br />
          <span>256GB</span>
          <span style={{ float: "right" }}>2TB</span>
        </div>
      </div>
    </div>
  );
}
