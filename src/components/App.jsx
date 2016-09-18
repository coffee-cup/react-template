import React, { Component } from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends Component {
    render() {
        return (
            <div className="main mw100">

                <Header />
                <Footer />

            </div>
        );
    }
}

export default App;

