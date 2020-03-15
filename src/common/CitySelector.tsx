import * as React from "react";
import './CitySelector.css'
import classnames from 'classnames'
import {useCallback, useContext, useState} from "react";
import Context from "../index/Context";
import {ChangeEventHandler} from "react";
import {MouseEventHandler} from "react";
import * as actionCreator from '../index/action'

const CitySelector: React.FC = (props) => {
  const {state, dispatch} = useContext(Context)
  const [searchKey, setSearchKey] = useState<string>('')
  const onChangeSearchKey: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchKey(e.target.value)
  }
  const onClickClean: MouseEventHandler = () => {
    setSearchKey('')
  }
  const key = useCallback(() => searchKey.trim(), [searchKey])
  const onClickBack = () => {
    dispatch({type: actionCreator.ACTION_SET_IS_CITY_SELECTOR_VISIBLE, isCitySelectorVisible: false})
  }
  return (
    <div className={classnames('city-selector', {hidden: !(state.isCitySelectorVisible)})}>
      <div className="city-search">
        <div className="search-back" onClick={onClickBack}>
          <svg width={"42"} height={"42"}>
            <polyline points={"25,13 16,21 25,29"} stroke={"#fff"} strokeWidth={"2"} fill={"none"}/>
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input type="text" value={searchKey} placeholder={""} className={"search-input"}
            onChange={onChangeSearchKey}
          />
        </div>
        <i className={classnames('search-clean', {hidden: key.length === 0})} onClick={onClickClean}
        >
          x
        </i>
      </div>
    </div>
  )
}
export default CitySelector;