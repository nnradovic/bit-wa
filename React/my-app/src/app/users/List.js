import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
    const lists = props.data;
    //    console.log(lists);
    const singleUser = lists.map((user, index) => <ListItem key={index} data={user} />)

    const renderList = () => {
        return
        <ul className="collection">
            {singleUser}
        </ul>
    }

    const renderCard = () => {
        {singleUser}
    }

    return (
        <div>
            {viewType ? renderCard() : renderList()}
        </div>
    )
}

export default List;