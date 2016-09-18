import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="grid-noGutter-centered full center-vertical gutter-small">
                <div className="col-9_xs-12">
                    <div className="header-content pl4">
                        <h1 className="f1 mv0 pt1">
                            {"React Template"}
                        </h1>
                        <h2 className="f3 mt1 pb1">
                            {"A static website thing"}
                        </h2>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
