import React from 'react';
import PropTypes from 'prop-types';
import { FooterWrapper } from './Footer.style';
import { Row, Col, BackTop } from 'antd';
import { aboutUsLink, terms_Conditions } from '../../../data';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { contact, copyrights, taxCode } from '../../../constants';

const Footer = (props) => {
    return (
        <FooterWrapper>
            <Row gutter={[12, 12]}>
                <Col xl={8} md={8} xs={12}>
                    <div className="title">
                        <FormattedMessage id="link.about-us" />
                    </div>
                    {aboutUsLink.map((link) => (
                        <Link key={link.key} to={link.path}>
                            <FormattedMessage id={link.label} />
                        </Link>
                    ))}
                </Col>
                <Col xl={8} md={8} xs={12}>
                    <div className="title">
                        <FormattedMessage id="link.terms-conditions" />
                    </div>
                    {terms_Conditions.map((link) => (
                        <Link key={link.key} to={link.path}>
                            <FormattedMessage id={link.label} />
                        </Link>
                    ))}
                </Col>
                <Col xl={8} md={8} xs={24}>
                    <p>{copyrights}</p>
                    <p>{taxCode}</p>
                    <Row gutter={[12, 12]}>
                        <Col>
                            <Link to="/">
                                <FacebookOutlined />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/">
                                <GoogleOutlined />
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col xl={24}>
                    <Row>
                        <Col>
                            <div className="title">
                                <FormattedMessage id="link.contact-us" />
                            </div>
                            <p>{contact}</p>
                        </Col>
                        <Col>
                            <BackTop />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </FooterWrapper>
    );
};

Footer.propTypes = {};

export default Footer;
