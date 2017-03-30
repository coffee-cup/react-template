import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const HeadingLarge = ({ className, title }) => {
    return (
        <h1
            className={classNames(
                className,
                'f-headline-ns f-subheadline-m f1 measure mv4'
            )}
        >
            {title}
        </h1>
    );
};
HeadingLarge.displayName = 'HeadingLarge';

HeadingLarge.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired
};

export const HeadingSmall = ({ className, title }) => {
    return (
        <h1 className={classNames(className, 'f2 mv4')}>
            {title}
        </h1>
    );
};
HeadingSmall.displayName = 'HeadingSmall';

HeadingSmall.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired
};
