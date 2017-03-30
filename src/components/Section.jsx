import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { HeadingSmall } from './ViewUtils.jsx';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { className, heading, children } = this.props;
        return (
            <div className={classNames(className, 'section')}>
                <HeadingSmall title={heading} />
                {children}
            </div>
        );
    }
}

Section.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default Section;
