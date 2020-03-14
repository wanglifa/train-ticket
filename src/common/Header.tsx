import * as React from "react";
import './Header.css'
interface Prop {
  onBack: () => void;
  title: string;
}
const Header: React.FC<Prop> = (props) => {
  const {onBack, title} = props
  console.log('zzz')
  return (
    <div className={"header"}>
      <div className="header-back" onClick={onBack}>
        <svg width={"42"} height={"42"}>
          <polyline points="25,13 16,21 25,29" stroke={"#fff"}
            strokeWidth={"2"} fill={"none"}
          />
        </svg>
      </div>
      <h1 className="header-title">
        {title}
      </h1>
    </div>
  )
}
export default Header;