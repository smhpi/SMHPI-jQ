import React , { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
class App extends Component{

    render(){
        return(
            <Router>
                <Main>
                <Route exact={true} path="/" component={Hero} />
                <Route exact={true} path="/about" component={About} />
                </Main>
            </Router>
        )
    }

}

export default App;