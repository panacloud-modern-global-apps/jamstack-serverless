import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default () => {
    return (
        <div>
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <p>This is my home page</p>
            </Layout>
        </div>
    );
}