import React, { Component } from 'react';
import './App.css';
import Header from './partials/header.js';
import Footer from './partials/footer.js';
import {movieService} from './service/movieService';
import Main from './main/Main.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: []
     
    }
    
    
  }
  movieFetch = ()=>{
    movieService.fetchMovie().then(movieObj=>{ this.setState({movie:movieObj})
    })
  
  }
      componentDidMount() {
        this.movieFetch()
  }
  render() {
    return (
      <div>
      <Header/>

      <div className="container">
        <Main data={this.state.movie}/>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default App;

