import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerInformation from './components/registerInfromation';
import registerVerification from './components/registerVerification';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={registerInformation} />
            <Route path="/verification/:id" component={registerVerification} />
        </Switch>
    </Router>
);

export default Routes;