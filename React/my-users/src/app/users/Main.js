import React from 'react'
import List from './List'

const Main = (props)=>{
    // console.log(props);
    const{data, displayCard} = props
    console.log(data,displayCard);
    
    return(
        <List data={data} displayCard={displayCard} />
    )


}

export default Main