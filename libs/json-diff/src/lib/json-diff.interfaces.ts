export enum JsonDiffNodeType {
  literal = 1,
  pair = 2,
  json = 3,
  array = 4,
}
export enum JsonDiffNodeStatus {
  default = 1,
  typeChanged = 2,
  nameChanged = 3,
  valueChanged = 4,
  added = 5,
  removed = 6,
}
export interface JsonDiffNode {
  id: number;
  index: number;
  name: string;
  value: string;
  parent: JsonDiffNodeType;
  type: JsonDiffNodeType;
  children: JsonDiffNode[];
  status: JsonDiffNodeStatus;
  isRoot?: boolean;
}
