import React, { useState } from "react";
import MainPage from "./components/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectImage from "./components/SelectImage";
import SelectInstance from "./components/SelectInstance";
import SelectStorageNetwork from "./components/SelectStorageNetwork";
import Footer from "./components/Footer";
import Warnings from "./components/Warnings";
import Review from "./components/Review";
import {
  Image,
  Instance,
  Mem,
  initialImage,
  initialInstance,
  initialMem
} from "./components/Interfaces";

export default function App() {
  const [image, setImage] = useState<Image>(initialImage);
  const [region, setRegion] = useState<string>("");
  const [step, setStep] = useState(1);
  const [showLaunchSuccess, setShowLaunchSuccess] = useState(false);
  const [showRegionWarning, setShowRegionWarning] = useState(false);
  const [instance, setInstance] = useState<Instance>(initialInstance);
  const [rootMem, setRootMem] = useState<Mem>(initialMem);
  const [extMem, setExtMem] = useState<Mem>(initialMem);
  const [extDisplay, setExtDisplay] = useState("");

  const handleStep = (newStep: number) => {
    setStep(newStep);
  };

  const handleClose = () => {
    setShowRegionWarning(false);
    setShowLaunchSuccess(false);
  };

  function handleReset(event: MouseEvent) {
    setImage(initialImage);
    setShowRegionWarning(false);
    return;
  }

  const handleRegion = (newRegion: string) => {
    if (image.zones.length !== 0 && !image.zones.includes(newRegion)) {
      setShowRegionWarning(true);
    }
    if (image.zones.length === 0 || image.zones.includes(newRegion)) {
      // console.log(newRegion);
      setRegion(newRegion);
    }
  };

  return (
    <div>
      <MainPage
        step={step}
        handleStep={handleStep}
        image={image}
        handleRegion={handleRegion}
        region={region}
        instance={instance}
        root={rootMem}
        ext={extMem}
        extDisplay={extDisplay}
      />
      {step === 1 && <SelectImage setImage={setImage} region={region} />}
      {step === 2 && (
        <SelectInstance instance={instance} setInstance={setInstance} />
      )}
      {step === 3 && (
        <SelectStorageNetwork
          root={rootMem}
          setRoot={setRootMem}
          ext={extMem}
          setExt={setExtMem}
          extDisplay={extDisplay}
          setExtDisplay={setExtDisplay}
        />
      )}
      {step === 5 && (
        <Review image={image} handleStep={setStep} instance={instance} />
      )}
      <Footer
        step={step}
        handleStep={handleStep}
        handleLaunchSuccess={setShowLaunchSuccess}
        image={image}
        instance={instance}
        root={rootMem}
        ext={extMem}
        extDisplay={extDisplay}
      />
      <Warnings
        showRegionWarning={showRegionWarning}
        showLaunchSuccess={showLaunchSuccess}
        handleClose={handleClose}
        handleReset={handleReset}
      />
    </div>
  );
}
