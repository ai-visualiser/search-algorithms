import { type Problem } from "./types";

export const romania: Problem = {
  id: "romania",
  name: "Romania",
  initialState: "Arad",
  isGoal: (state: string) => state == "Bucharest",
  useStateSpace: true,
  stateSpace: {
    bidirectional: false,
    table: new Map(),
  },
  actionSpace: [],
  heuristic: {
    asFunction: false,
    table: new Map(),
    function: (state: string) => 0,
  },
};
