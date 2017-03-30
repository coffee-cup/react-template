import React, { Component } from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Copy from './Copy.jsx';

class App extends Component {
    render() {
        return (
            <div className="ph6-ns ph4-m ph3">

                <Header />
                <Copy />
                <Footer />

            </div>
        );
    }
}

export default App;

