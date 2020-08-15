import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { Link } from "gatsby";

export default () => {
    return (
        <div>
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <p>This is my home page</p>
                <Link to="/app/page1/">Go to Client Page 1</Link>
            </Layout>
        </div>
    );
}