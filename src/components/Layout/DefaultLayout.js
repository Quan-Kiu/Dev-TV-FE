import { Layout } from 'antd';
import React from 'react';
import HomePage from '../../containers/Home';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { LayoutWrapper } from './DefaultLayout.style';
import theme from '../../configs/theme';
import Container from '../Common/Container';

const DefaultLayout = (props) => {
    return (
        <LayoutWrapper>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout.Content>
                <HomePage />
            </Layout.Content>

            <Layout.Footer
                style={{
                    marginTop: '4rem',
                    background: '#202020',
                }}
            >
                <Container>
                    <Footer />
                </Container>
            </Layout.Footer>
        </LayoutWrapper>
    );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
