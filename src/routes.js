import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerInformation from './components/registerInfromation';
import registerVerification from './components/registerVerification';
import registerBusinessCard from './components/registerBusinessCard';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={registerInformation} />
            <Route path="/verification/:id" component={registerVerification} />
            <Route path="/end" component={registerBusinessCard} />
        </Switch>
    </Router>
);

export default Routes;