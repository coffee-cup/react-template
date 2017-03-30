import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'tachyons/css/tachyons.css';
import 'normalize-css';
import './scss/main.scss';

// Routes
import Routes from './Routes.jsx';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};

render(Routes);

if (module.hot) {
    module.hot.accept('./Routes.jsx', () => {
        // eslint-disable-next-line
        const NextRoutes = reqiure('./Routes.jsx').default;
        render(NextRoutes);
    });
}
