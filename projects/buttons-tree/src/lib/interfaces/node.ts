import { Data } from "./data";

export interface Node {
    guid: string | undefined;
    isParent: boolean | undefined;
    data: Data;
    nodes: Node[] | undefined;
  }
