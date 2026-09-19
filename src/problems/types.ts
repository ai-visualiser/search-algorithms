export interface Problem<S = string, A = string> {
  id: string;
  name: string;
  initialState: S;
  isGoal: (state: S) => boolean;
  useStateSpace: boolean;
  stateSpace: {
    bidirectional: boolean;
    table: Array<{
      from: S;
      to: S;
      cost: number;
      action?: A;
    }>;
  };
  actionSpace: Array<{
    action: A;
    transition: (state: S) => S;
    cost: (state: S, nextState: S, action: A) => number;
  }>;
  heuristic: {
    asFunction: boolean;
    table: Map<S, number>;
    function: (state: S) => number;
  };
  meta?: {
    getLabel?: (state: S) => string;
    renderDisplayNode?: string
  }
}
