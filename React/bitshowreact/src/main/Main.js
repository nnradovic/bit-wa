import React from 'react';
import MovieList from './MovieList.js'
const Main = (props) => {
    console.log(props);
    
    return (
        <main className="container">
            <div className="headline-holder">
                <h1>Popular Shows</h1>
            </div>
            <div className="row">
                <MovieList data={props.data}/>
            </div>
        </main>
    )

}

export default Main;