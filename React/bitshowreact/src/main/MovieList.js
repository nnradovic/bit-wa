import React from 'react';

const MovieList = (props) => {
    console.log(props);
    return (
        <div className="col-md-4" data-id={props.data.id}>
        {/* <img src={props.data.image.medium} alt="show" /><h3 class="show-title">{data.props.name}</h3> */}
        </div>
    )

}

export default MovieList;