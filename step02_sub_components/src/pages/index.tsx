import React from 'react';
import { Link } from "gatsby";
import Header from '../components/Header';

export default () => {
    return (
        <div>
            <Header text="This is a heading" subtext="The is the sub heading"></Header>
            <p>We can link pages in Gatsby by using Link</p>
            <Link to="/about/">About</Link>
        </div>
    );
}