import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ga from 'react-ga';

import 'tachyons/css/tachyons.css';
import 'normalize-css';
import './scss/main.scss';

// Pages
import App from './components/App.jsx';
import NotFound from './components/NotFound.jsx';

// ga.initialize('GA CODE HERE');

const history = createBrowserHistory();
function logPageView() {
    ga.pageview(window.location.pathname);
}

render(
    <Router history={history} onUpdate={logPageView}>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('app')
);
