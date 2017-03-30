import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ga from 'react-ga';

import App from './components/App.jsx';
import NotFound from './components/NotFound.jsx';

const history = createBrowserHistory();
function logPageView() {
    ga.pageview(window.location.pathname);
}
// ga.initialize('GA CODE HERE');

const Container = () => {
    return (
        <Router history={history} onUpdate={logPageView}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

Container.displayName = 'Container';

export default Container;
