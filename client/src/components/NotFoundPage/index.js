/*
*
*   404 Page - Render when a route does not exist
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h2>Page Not Found</h2>
        <p>This page does not seem to exist</p>
        <p>
            <Link to="/">Back to Homepage</Link>
        </p>
    </div>
)

export default NotFoundPage;