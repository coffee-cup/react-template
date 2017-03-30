import React, { PropTypes } from 'react';

export const headingLarge = ({ className, title }) => {
    return <h1 className={className}>{{ title }}</h1>;
};
headingLarge.displayName = 'headingLarge';

headingLarge.propTypes = {
    className: PropTypes.string
};
