import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  { HashRouter, Route, Switch } from "react-router-dom";
import ShowSingle from "./main/ShowSingle"; 

ReactDOM.render(
    <HashRouter>
        <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/show/:id' component={ShowSingle}/>

</Switch>
</HashRouter>
    
    , document.getElementById('root'));
registerServiceWorker();
