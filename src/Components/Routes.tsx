import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
        </Switch>
       )
}

export default Routes;