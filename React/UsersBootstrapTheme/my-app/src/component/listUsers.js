import React, { Component } from 'react';
import List from './list.js'

const ListUsers = (props) => {
    const lists = props.data;
 
    
    return (
        <div className="card">
            
            {lists.map((list, index) => <ListUsers key={index} email={list.email} name={list.name.first} lastname={list.name.last} dob={list.dob} picture={list.picture.large} />)}
        </div>
          
    )
}

export default ListUsers