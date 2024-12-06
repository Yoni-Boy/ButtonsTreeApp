export interface Node {
    guid: string | undefined;
    isParent: boolean | undefined;
    data: any;
    nodes: Node[] | undefined;
  }
