import React from 'react';


const ListCard = (props) => {
  const { email, name, dob, picture } = props.data
  // console.log(email, name, dob, picture);

  return (

    <div className="col s12 m4" >
      <div className='card'  >
        <div className={props.data.getGender()}>
          <div className="card-image">
            <img src={picture.large} />
            <span className="card-title">{name}</span>
          </div>
          <div className="card-content">
            <p>{props.data.getEmail()}</p>
            <p>{props.data.getDate()}</p>
          </div>
        </div>
      </div>
    </div>



  )
}

export default ListCard