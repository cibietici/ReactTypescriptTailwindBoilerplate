import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import NavBar from './shared/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  RouteComponentProps
} from "react-router-dom";
import New from './pages/New';
import Home from './pages/Home';
import NewInfo from './pages/NewInfo';

function MainApp() {
  return (  
    <div className="wrapper">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/new" component={New}></Route>
                    <Route path="/list/:id" component={NewInfo} exact></Route>
                </Switch>
            </Router>    
    </div>
  );
}

export default MainApp;