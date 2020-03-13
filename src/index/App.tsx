import { connect } from "react-redux";
import './App.css'
import * as React from "react";
import Header from '../common/Header'
import DepartDate from "./DepartData";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Journey/>
      <DepartDate/>
      <HighSpeed/>
      <Submit/>
    </div>
  )
}
const mapState = (state: any) => {

}
const mapDispatch = (dispatch: any) => {

}
export default connect(mapState, mapDispatch)(App)