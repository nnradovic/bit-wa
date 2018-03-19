import React from 'react'


const ListThumb = (props)=>{
    const{email, name, dob, picture}=props.data
    console.log(email, name, dob, picture);
    
   return(
    
    <li className="collection-item avatar">
      <img src={picture.medium} alt="" className="circle"/>
      <span className="title">{name}</span>
      <p>{props.data.getEmail()} <br/>
        {props.data.getDate()}
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
   )

}

export default ListThumb