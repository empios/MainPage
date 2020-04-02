import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {Contact} from "./Contact";
import {NoMatch} from "./NoMatch";
import {Layout} from "./components/Layout";
import {NavigationBar} from "./components/NavBar";


function App(){
  return (
    <React.Fragment>
        <Router>
            <NavigationBar/>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={NoMatch}/>
                </Switch>
            </Layout>
        </Router>


    </React.Fragment>
  );
}

export default App;
