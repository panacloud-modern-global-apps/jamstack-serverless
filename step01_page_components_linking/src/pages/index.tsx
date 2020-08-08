import React from 'react';
import { Link } from "gatsby";

export default () => {
    return (
        <div>
            <p>We can link pages in Gatsby by using Link</p>
            <Link to="/about/">About</Link>
        </div>
    );
}