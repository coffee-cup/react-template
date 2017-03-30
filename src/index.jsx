import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
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
            <Route path="/" component={App} />

        </div>
    </Router>,
    document.getElementById('app')
);
