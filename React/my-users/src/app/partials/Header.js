import React from 'react'


const Header = (props) => {

  const { nameIcon, click, refresh, value,keyup } = props;



  return (
    <nav>
      <div className="nav-wrapper">

        <a className="brand-logo center">Users</a>
        <ul className="right hide-on-med-and-down">
          <li><input type="text" value={value} onChange={keyup}/></li>
          <li><a href="collapsible.html"><i  onClick={refresh}  className="material-icons">refresh</i></a></li>
          <li><a >  <i onClick={click} className="material-icons">{nameIcon ? "format_list_bulleted" :  "view_module" }</i></a></li>
        </ul>
      </div>
    </nav>
  )
}


export default Header;


