import React from 'react';
import ReactDOM from 'react-dom/server';

import createDocument from './document';
import App from '../shared/App';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 */
export default () => (req, res) => {
    const app = (
        <App/>
    );

    const appString = ReactDOM.renderToString(app);

    const document = createDocument({
        appString,
        js: '/client.js',
    });

    res.set('Content-Type', 'text/html').end(document);
};
