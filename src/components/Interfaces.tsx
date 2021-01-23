export interface Image {
  name: string;
  description: string;
  zones: string[];
  price: number;
  architecture: string;
}
export interface Instance {
  code: string;
  name: string;
  memory: string;
  cpu: string;
  memoryPrice: number;
  cpuPrice: number;
}

export interface Mem {
  name: string;
  quantity: number;
  price: number;
}

export const initialImage = {
  name: "",
  description: "",
  zones: [],
  price: 0,
  architecture: ""
};

export const initialInstance = {
  code: "",
  name: "",
  memory: "",
  cpu: "",
  memoryPrice: 0,
  cpuPrice: 0
};

export const initialMem = {
  name: "",
  quantity: 0,
  price: 0
};
