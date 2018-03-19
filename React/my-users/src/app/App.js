import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './partials/Header'
import Footer from './partials/Footer'
import { userService } from '.././service/usersService'
import Main from './users/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      displayCard: false
    }
  }
  changeStates =()=> {
    this.setState({ displayCard: (this.state.displayCard) ? false : true })
  }
  componentDidMount() {
    userService.fetchUsers().then(userList => {
      this.setState({ user: userList })
    })
  }
  render() {
    return (
      <div>
        <Header click={this.changeStates} />
        <Main data={this.state.user} displayCard={this.state.displayCard} />
        <Footer />
      </div>

    )
  }
}

export default App