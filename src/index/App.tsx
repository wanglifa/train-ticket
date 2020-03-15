import './App.css'
import * as React from "react";
import Header from '../common/Header'
import DepartDate from "./DepartData";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import {useCallback, useReducer} from "react";
import Context from "./Context";
import * as actionCreator from './action'
import CitySelector from "../common/CitySelector";
export interface State {
  from?: string;
  to?: string;
  isCitySelectorVisible?: boolean;
  currentSelectingLeftCity?: boolean;
  cityData?: any;
  isLoadingCityData?: boolean;
  isDateSelectorVisible?: boolean;
  highSpeed?: boolean;
}
export interface Action extends State {
  type: string
}
type Reducer = (state: State, action: Action) => State
const store: State = {
  from: '北京',
  to: '上海',
  isCitySelectorVisible: false,
  currentSelectingLeftCity: false,
  cityData: null,
  isLoadingCityData: false,
  isDateSelectorVisible: false,
  highSpeed: false
}
const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case actionCreator.ACTION_SET_CITY_DATA:
      return { ...state, cityData: action.cityData }
    case actionCreator.ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
      return { ...state, currentSelectingLeftCity: action.currentSelectingLeftCity }
    case actionCreator.ACTION_SET_FROM:
      return { ...state, from: action.from }
    case actionCreator.ACTION_SET_HIGH_SPEED:
      return { ...state, highSpeed: action.highSpeed }
    case actionCreator.ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
      return { ...state, isCitySelectorVisible: action.isCitySelectorVisible }
    case actionCreator.ACTION_SET_IS_DATE_SELECTOR_VISIBLE:
      return { ...state, isDateSelectorVisible: action.isDateSelectorVisible }
    case actionCreator.ACTION_SET_IS_LOADING_CITY_DATA:
      return { ...state, isLoadingCityData: action.isLoadingCityData }
    case actionCreator.ACTION_SET_TO:
      return { ...state, to: action.to }
    default:
      throw new Error()
  }
}
const App: React.FC = () => {
  const [state, dispatch] = useReducer<Reducer>(reducer, store)
  const onBack = useCallback(() => {
    window.history.back()
  }, [])
  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="header-wrapper">
        <Header title={"火车票"} onBack={onBack}/>
      </div>
      <form className={"form"}>
        <Journey/>
        <DepartDate/>
        <HighSpeed/>
        <Submit/>
      </form>
      <CitySelector/>
    </Context.Provider>
  )
}
export default App