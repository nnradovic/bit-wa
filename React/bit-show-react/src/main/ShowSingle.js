import React from "react";
import {Link} from "react-router-dom";
import {showService} from "./../service/ShowService";
import Header from './../partials/Header';
import Footer from './../partials/Footer';
// import './ShowSingle.css'
class ShowSingle extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          single: {}
        }
    }

    componentDidMount() {
        showService.fetchSingle(this.props.match.params.id)
         .then(showSingle => {
             console.log(showSingle)
            this.setState({
                single:showSingle
            })
         })
        }
    
    render(){              
        return (
            <React.Fragment>
                <Header/>
            <div className="card col-4 offset-2" >
                <img className="card-img-top" src={this.state.single.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.single.name}</h5>
                    <p className="card-text">{this.state.single.summary}</p>
                <Link to="/" className="btn btn-primary">Go Back to List</Link>
                </div>
        </div>
        <Footer/>
        </React.Fragment>
        )
    }
}


export default ShowSingle;