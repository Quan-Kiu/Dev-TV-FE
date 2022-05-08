import { Layout } from 'antd';
import React from 'react';
import HomePage from '../../containers/Home';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { LayoutWrapper } from './DefaultLayout.style';
import Container from '../Common/Container';
import { Route, Routes } from 'react-router-dom';
import SearchPage from '../../containers/Search';
import Verify from '../../containers/Auth/Verify';

const LayoutRoutes = ()=>{
    
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/tim-kiem" element={<SearchPage/>}/>
            <Route path="/account/verify/:id" element={<Verify/>}/>
        </Routes>
    )
}

const DefaultLayout = (props) => {
    return (
        <LayoutWrapper>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout.Content>
                <LayoutRoutes/>
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
