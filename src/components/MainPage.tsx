import React from "react";
import "./styles.css";
import Cart from "./Cart";
import SelectRegion from "./SelectRegion";
import NavSteps from "./NavSteps";
import { Instance, Image, Mem } from "./Interfaces";

interface Props {
  region: string;
  handleRegion: Function;
  step: number;
  handleStep: Function;
  image: Image;
  instance: Instance;
  root: Mem;
  ext: Mem;
  extDisplay: string;
}

export default function MainPage(props: Props) {
  const handleDisable = () => {
    if (props.step === 1) return props.image.name === "";
    if (props.step === 2)
      return props.instance.memory === "" || props.instance.cpu === "";
    if (props.step === 3) {
      if (props.extDisplay === "none")
        return props.root.name === "" || props.root.quantity === 0;
      else return props.root.name === "" || props.ext.name === "";
    }
  };

  return (
    <div className="pt-4">
      <h1 className="border-bottom border-4">HVC</h1>
      <div className="container pt-4">
        <SelectRegion region={props.region} handleRegion={props.handleRegion} />
        <div className="container pt-4">
          <NavSteps
            step={props.step}
            handleDisable={handleDisable}
            handleStep={props.handleStep}
          />
        </div>
        <div className="container pt-4">
          <Cart
            region={props.region}
            image={props.image}
            instance={props.instance}
            root={props.root}
            ext={props.ext}
            extDisplay={props.extDisplay}
          />
        </div>
      </div>
    </div>
  );
}
