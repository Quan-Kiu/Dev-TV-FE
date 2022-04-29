import { Layout } from 'antd';
import React from 'react';
import HomePage from '../../containers/Home';
import Header from '../Common/Header';
import { LayoutWrapper } from './DefaultLayout.style';

const DefaultLayout = (props) => {
    return (
        <LayoutWrapper>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout.Content>
                <HomePage />
            </Layout.Content>
            <Layout.Footer>Footer</Layout.Footer>
        </LayoutWrapper>
    );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
