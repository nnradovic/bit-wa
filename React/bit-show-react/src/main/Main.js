import React from "react";
import ShowList from "./ShowList";
import "./Main.css";

const Main = (props) =>{

    return (
        <main className="container">
        <div className="headline-holder">
            <h1>Popular Shows</h1>
        </div>
        <div id="main-row" className="row">
        { props.data.map((show,index) => <ShowList key={index} show= {show}/>) }
        </div>
    </main>

    )
}
export default Main;