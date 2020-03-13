import { connect } from "react-redux";
import './App.css'
import * as React from "react";
import Header from '../common/Header'
import DepartDate from "./DepartData";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import {createContext, Dispatch, useReducer} from "react";
interface State {

}
interface Action extends State {
  type: string
}
type Reducer = (state: State, action: Action) => State
interface Context {
  state: State;
  dispatch: Dispatch<Action>
}
const store = {}
const reducer: Reducer = (state, action) => {
  switch (action.type) {
    default:
      throw new Error()
  }
}
const Context = createContext<Context | null>(null)
const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, store)
  return (
    <Context.Provider value={{state, dispatch}}>
      <Header/>
      <Journey/>
      <DepartDate/>
      <HighSpeed/>
      <Submit/>
    </Context.Provider>
  )
}
export default App