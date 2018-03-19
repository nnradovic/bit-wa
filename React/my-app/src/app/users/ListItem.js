import React from "react";


const ListItem = (props) => {
 
    // const list = props.data
    // console.log(list);
    
    // console.log(props.data);
    const { email, name, dob, picture } =  props.data ;
    
    
    return (
        
        // <div className="col s4">
        //   <div className="card">
        //     <div className="card-image">
        //       <img src={picture.large}></img>
        //       <span className="card-title">{props.data.getEmail()}</span>
        //     </div>
        //     <div className="card-content">
        //       <p>Name: {name} </p>
        //       <p>Date of Birth: {props.data.getDate()}</p>
        //     </div>
        //     <div className="card-action">
        //       <a href="#">This is a link</a>
        //     </div>
        //   </div>
        // </div>
     
        <li className="collection-item avatar">
        <img src={picture.large} alt="" className="circle"/>
        <span className="title">{name}</span>
        <p>Date of Birth: {props.data.getDate()}</p>
        <p>Email: {props.data.getEmail()}</p>
       
      </li>
    
    )

    
}




export default ListItem;