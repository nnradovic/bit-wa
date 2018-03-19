import React from 'react'


const Header = (props)=>{

    return(
    
        <nav>
        <div className="nav-wrapper">
          <a   className="brand-logo center">Users</a>
          <ul className="left hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li   className="active"><a onClick={props.click} >Users Card</a></li>
          </ul>
        </div>
      </nav>
    )
}

        
export default Header

    