import { Instance, Image, Mem } from "./Interfaces";

interface Props {
  step: number;
  handleStep: Function;
  handleLaunchSuccess: Function;
  image: Image;
  instance: Instance;
  root: Mem;
  ext: Mem;
  extDisplay: string;
}

export default function Footer(props: Props) {
  const handleDisable = () => {
    if (props.step === 1) return props.image.name === "";
    else if (props.step === 2)
      return props.instance.memory === "" || props.instance.cpu === "";
    else if (props.step === 3) {
      if (props.extDisplay === "none")
        return props.root.name === "" || props.root.quantity === 0;
      else return props.root.name === "" || props.ext.name === "";
    }
  };

  const handleProceed = (e: any) => {
    e.preventDefault();
    if (props.step < 5) {
      props.handleStep(props.step + 1);
    }
    if (props.step === 5) {
      props.handleLaunchSuccess(true);
    }
  };
  return (
    <div className="container row justify-content-center pt-4 pb-5">
      <button
        type="button"
        className="btn btn-dark col-2 mr-1"
        disabled={props.step === 1}
        onClick={(e) => {
          e.preventDefault();
          props.handleStep(1);
        }}
      >
        Back
      </button>
      <button
        type="button"
        className="btn btn-primary col-2 ml-1"
        onClick={handleProceed}
        disabled={handleDisable()}
      >
        Proceed
      </button>
    </div>
  );
}
