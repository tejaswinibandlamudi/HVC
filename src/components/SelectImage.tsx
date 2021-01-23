import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import images from "./data/images_new.json";

interface Image {
  name: string;
  description: string;
  zones: string[];
  price: number;
  architecture: string;
}

interface Props {
  setImage: Function;
  region: string;
}

export default function SelectImage(props: Props) {
  const initialImage = {
    name: "",
    description: "",
    zones: [],
    price: 0,
    architecture: ""
  };
  const [imageGlobal, setImageGlobal] = useState<Image>(initialImage);

  const sumbitHandler = () => {
    props.setImage(imageGlobal);
  };

  return (
    <Container>
      {images.map((image, index) => (
        <Card style={{ width: "45rem" }} key={index}>
          <Card.Header>{image.name}</Card.Header>
          <Card.Body className="row justify-content-between">
            <div className="col-9">{image.description}</div>
            <div className="col-3">
              {image.architectures.map((architecture) => (
                <li key={architecture}>
                  <input
                    type="radio"
                    id={`${image.name}${architecture}`}
                    name={image.name}
                    value={architecture}
                    onClick={(e: any) =>
                      setImageGlobal({
                        architecture: e.target.value,
                        name: image.name,
                        price: image.price,
                        zones: image.zones,
                        description: image.description
                      })
                    }
                  />
                  <label htmlFor={`${image.name}${architecture}`}>
                    {architecture}
                  </label>
                </li>
              ))}
              <Button
                block
                disabled={
                  imageGlobal.name !== image.name ||
                  !image.zones.includes(props.region)
                }
                onClick={sumbitHandler}
              >
                Select
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
