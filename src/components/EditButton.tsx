import React from "react";

interface Props {
  step: number;
  handleStep: Function;
}

export default function EditButton(props: Props) {
  return (
    <button
      className="col-3 btn"
      onClick={() => {
        props.handleStep(props.step);
      }}
    >
      edit
    </button>
  );
}
