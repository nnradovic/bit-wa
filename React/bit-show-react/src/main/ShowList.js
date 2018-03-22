import React from "react";
import {Link} from "react-router-dom";


const ShowList = (props) =>{
    const {show, single} = props;
    return(
     
    <div className="col-md-4 col-show single-show" data-id={show.id}>
    <img src={show.image.medium} alt="show" />
    <h3 className="show-title">{show.name}</h3>
    <Link to={`/show/${show.id}`} >View Show</Link>
    </div>

    )
}

export default ShowList;