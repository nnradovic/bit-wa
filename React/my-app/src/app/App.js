import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import  {usersData} from "./data/data";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Main from "./users/Main";
import {userService} from './../service/usersService'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: [] }
  }
  componentDidMount() {
    userService.fetchUsers()
      .then((userList) => {
        this.setState({ user: userList })
      })
  }
  onClick = () => {
    this.setState({ selected: true })
}

  render() {
    const cName = (this.state.selected) ? "star selected" : "star"
    return (

      <div>
        <Header />
        <Main data={this.state.user} />
        <Footer />
      </div>
    );
  }
}

export default App;
