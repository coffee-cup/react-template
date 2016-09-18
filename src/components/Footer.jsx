import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="gutter-small">
                <div className="grid-centered-noGutter pv2 center-vertical">
                    <div className="col-10_lg-8_md-10_sm-10_xs-12 mb0">
                        <p className="mt1 mb1 f4">
                            Made with <span className="heart">&hearts;</span> by <a href='https://jakerunzer.xyz'>jake runzer</a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
