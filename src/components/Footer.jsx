import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer pb4">
                <p className="f5">
                    <Link to="/" className="none">♥</Link>
                </p>
            </footer>
        );
    }
}

export default Footer;
