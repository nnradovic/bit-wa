import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header';
import Main from "./main/Main";
import Footer from './partials/Footer';
import {showService} from "./service/ShowService";


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      shows: [],
      search:''
    }
    // this.moviesFetch = this.moviesFetch.bind(this);
  }
  componentDidMount(){
    this.moviesFetch();
  }
  updateSearch=(event) =>{ 
    this.setState({search:event.target.value})
    
    }
   moviesFetch = () =>  {
    showService.showFetch()
     .then(showList => {
      this.setState({
        shows: showList
      })
     })
   }

  
  render() {
    let users = this.state.shows
    let filterShow = users.filter((singleShow)=>{return singleShow.name.indexOf(this.state.search) !== -1})
    console.log(filterShow);
    filterShow.map((singleUser)=>{singleUser})

    return (
<Fragment>
   <Header value={this.state.search} keyup={this.updateSearch}/>
   <Main data={filterShow} />
   <Footer/>
  </Fragment>
    )}
}

export default App;
