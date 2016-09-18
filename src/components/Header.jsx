import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="grid-noGutter-centered full center-vertical gutter-small">
                <div className="col-10_lg-8_md-10_sm-10_xs-12">
                    <h1 className="f1 mv0">
                        {"React Template"}
                    </h1>
                    <h2 className="f3 mt1">
                        {"A static website thing"}
                    </h2>
                </div>
            </header>
        );
    }
}

export default Header;
