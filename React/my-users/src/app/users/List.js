import React from 'react';
import ListThumb from './ListIThumb'
import ListCard from './ListCard'

const List = (props) => {
    console.log(props);
    const { data, displayCard } = props
    console.log(data, displayCard);


    const listCard = data.map((user, index) => <ListCard key={index} data={user} />)
    const listThumb = data.map((user, index) => <ListThumb key={index} data={user} />)

    const listCardFun = () => {
        return (
            <div className="row">
                {listCard}
            </div>
        )
    }

    const listThumbFun = () => {
        return (
            <ul className="collection">
                {listThumb}
            </ul>
        )
    }
    return (
        <div>
            {displayCard ? listThumbFun() : listCardFun()}
        </div>
    )
}

export default List