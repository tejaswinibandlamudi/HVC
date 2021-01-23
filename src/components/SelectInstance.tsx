import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import instances from "./data/instances.json";
import instancePrices from "./data/instances_network_pricing.json";
import { Instance } from "./Interfaces";

interface Props {
  setInstance: Function;
  instance: Instance;
}

export default function SelectInstance(props: Props) {
  const [memory, setMemory] = useState<string[]>([]);
  const [cpu, setCpu] = useState<string[]>([]);
  return (
    <div className="container">
      <Row>
        {instances.map((instanceLocal) => (
          <Col md="auto">
            <Button
              variant={
                props.instance.code === instanceLocal.code
                  ? "primary"
                  : "outline-primary"
              }
              disabled={false}
              onClick={() => {
                props.setInstance({
                  code: instanceLocal.code,
                  name: instanceLocal.name,
                  memory: "",
                  cpu: "",
                  memoryPrice: 0,
                  cpuPrice: 0
                });
                setMemory(instanceLocal.memory);
                setCpu(instanceLocal.cpu);
              }}
            >
              {instanceLocal.name}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        <select
          className="custom-select col-4"
          value={props.instance.memory}
          onChange={(e) =>
            props.setInstance((prevState: any) => ({
              ...prevState,
              memory: e.target.value,
              memoryPrice: instancePrices.memory[e.target.value]
            }))
          }
        >
          <option value="">Memory</option>
          {memory.map((memory, index) => (
            <option key={`${index}${memory}`} value={memory}>
              {memory}
            </option>
          ))}
        </select>
        <select
          className="custom-select col-4"
          value={props.instance.cpu}
          onChange={(e) => {
            // console.log(props.instance.memoryPrice + props.instance.cpuPrice);
            props.setInstance((prevState: any) => ({
              ...prevState,
              cpu: e.target.value,
              cpuPrice: instancePrices.cpu[e.target.value]
            }));
          }}
        >
          <option value="">CPU Cores</option>
          {cpu.map((cpu, index) => (
            <option key={`${index}${cpu}`} value={cpu}>
              {cpu}
            </option>
          ))}
        </select>
      </Row>
    </div>
  );
}
