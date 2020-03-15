import {createContext, Dispatch} from "react";
import {Action, State} from "./App";
export interface ContextProp {
  state: State;
  dispatch: Dispatch<Action>
}
const Context = createContext<ContextProp>({state: {}, dispatch: () => {}})
export default Context;