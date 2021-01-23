import React from "react";
import { Modal } from "react-bootstrap";

interface Props {
  handleClose: Function;
  showRegionWarning: boolean;
  showLaunchSuccess: boolean;
  handleReset: Function;
}

export default function Warnings(props: Props) {
  return (
    <div>
      <Modal show={props.showRegionWarning} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The selected region doesn't have the given image. Please press reset
          to proceed with region change
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={props.handleReset}>
            Reset
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={props.showLaunchSuccess} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#2AC769" }}>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          VM(s) Created with provided configurations successfully!
        </Modal.Body>
      </Modal>
    </div>
  );
}
