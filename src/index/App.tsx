import { connect } from "react-redux";
import './App.css'
import * as React from "react";
const App: React.FC = () => {
  return (
    <div>app</div>
  )
}
const mapState = (state: any) => {

}
const mapDispatch = (dispatch: any) => {

}
export default connect(mapState, mapDispatch)(App)