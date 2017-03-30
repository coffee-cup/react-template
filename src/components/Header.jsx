import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Counter from './Counter.jsx';

const Header = ({ className }) => {
    return (
        <header
            className={classNames(
                className,
                'header bold full vertical-center'
            )}
        >
            <div>
                <h1 className="f-headline-ns f-subheadline mv0">Hello.</h1>
                <Counter />
            </div>
        </header>
    );
};

Header.displayName = 'Header';

Header.propTypes = {
    className: PropTypes.string
};

export default Header;
