import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found ph6-ns ph4-m ph3 full vertical-center">
            <div>
                <h2 className="f2 mv4 mono">¯\_(ツ)_/¯</h2>
                <p className="measure">
                    {'Page not found '}
                    <Link to="/" className="su-colour">Go home</Link>.
                </p>
            </div>
        </div>
    );
};

NotFound.displayName = 'NotFound';

export default NotFound;
