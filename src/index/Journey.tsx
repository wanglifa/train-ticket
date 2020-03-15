import * as React from "react";
import './Journey.css'
import switchImg from './imgs/switch.svg'
import {useContext} from "react";
import Context from "./Context";
import {MouseEventHandler} from "react";
import * as actionCreator from './action'
// interface Prop {
//   exchangeFromTo: () => void;
//   showCitySelector: () => void;
// }
const Journey: React.FC = (props) => {
  const {state, dispatch} = useContext(Context)
  const onClickExchangeFromTo: MouseEventHandler = () => {
    dispatch({type: actionCreator.ACTION_SET_TO, to: state.from})
    dispatch({type: actionCreator.ACTION_SET_FROM, from: state.to})
  }
  const showCitySelector = (a: boolean) => {
    console.log('aaaa')
    if (a === true) {
      dispatch({type: actionCreator.ACTION_SET_IS_CITY_SELECTOR_VISIBLE, isCitySelectorVisible: a})
    } else {
      dispatch({type: actionCreator.ACTION_SET_CURRENT_SELECTING_LEFT_CITY, currentSelectingLeftCity: a})
    }
  }
  return (
    <div className="journey">
      <div className="journey-station" onClick={() => showCitySelector(true)}>
        <input type="text" readOnly name={"from"} value={state.from} className={"journey-input journey-from"}/>
      </div>
      <div className="journey-switch" onClick={onClickExchangeFromTo}>
        <img src={switchImg} alt="" width={70} height={40}/>
      </div>
      <div className="journey-station" onClick={() => showCitySelector(false)}>
        <input type="text" readOnly name={"to"} value={state.to} className={"journey-input journey-to"}/>
      </div>
    </div>
  )
}
export default Journey;