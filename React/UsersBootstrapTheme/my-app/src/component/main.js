import React, { Component } from 'react';
import ListUsers from './listUsers.js'

const Main = (props)=>{
    const main = props.data;
   
    
    return(
        <div className="container">
          <div className="row">
              <ListUsers data={main}/>
          </div>
        </div>
    )
}

export default Main;