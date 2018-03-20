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
      displayCard: false,
      nameIcon: false,
      search: ''
    }
    //   localStorage.setItem("displaySave",this.state.displayCard)
    //  localStorage.setItem("iconSave",this.state.nameIcon)
  }

  handleStates = () => {
    const displayCard = !this.state.displayCard;
    const nameIcon = !this.state.nameIcon;

    this.state.displayCard = localStorage.setItem("displaySave", displayCard);
    this.state.nameIcon = localStorage.setItem("iconSave", nameIcon)

    this.setState({ displayCard })
    this.setState({ nameIcon })
  }

  refreshData = () => {
    userService
      .fetchUsers().then(userList => {
        this.setState({
          user: userList
         
        })
      })
    
  }

 updateSearch=(event) =>{ 
  this.setState({search:event.target.value})
  
  }

  componentWillMount() {
    const displayCard = localStorage.getItem("displaySave");
    const nameIcon = localStorage.getItem("iconSave")
    const a = displayCard === "false" ? false : true;
    const b =nameIcon === "false" ? false : true;
    this.setState({ displayCard: a })
    this.setState({ nameIcon: b })
    
  }
  
  
  componentDidMount() {
    this.refreshData()
    
  }
  
  render() {
   
    let users = this.state.user
    let filterUsers = users.filter((singleUser)=>{return singleUser.name.indexOf(this.state.search) !== -1})
    console.log(filterUsers);
    
    filterUsers.map((singleUser)=>{console.log(singleUser)})
    
    
    
    return (
      <div>
        <Header click={this.handleStates} nameIcon={this.state.nameIcon} refresh={this.refreshData} value={this.state.search} keyup={this.updateSearch.bind(this)}/>
        <Main data={filterUsers} displayCard={this.state.displayCard}  />
        <Footer />
      </div>

    )
  }
}

export default App