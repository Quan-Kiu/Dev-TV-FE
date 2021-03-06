import { SearchOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Select, Col } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import { HeroWrapper } from './Hero.style';
import { FormattedMessage, useIntl } from 'react-intl';

const Hero = (props) => {
    const intl = useIntl();
    return (
        <HeroWrapper
            style={{
                background: `url("/hero.jpg")`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}
        >
            <div className="hero-content">
                <div className="hero__text">
                    <h1>Great Job</h1>
                    <h1>Great Talent</h1>
                </div>
                <Form>
                    <Row>
                        <Col>
                            <Form.Item name="searchValue">
                                <Input
                                    size="large"
                                    style={{ width: '30rem' }}
                                    placeholder={intl.formatMessage({id: 'search.placeholder'})}
                                />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item name="searchLocation" initialValue="all">
                                <Select
                                    suffixIcon={
                                        <SendOutlined
                                            style={{
                                                transform: 'rotate(-90deg)',
                                            }}
                                        />
                                    }
                                    size="large"
                                    style={{ width: '15rem' }}
                                >
                                    <Select.Option value="all">
                                        <FormattedMessage id="filter.all" />
                                    </Select.Option>
                                    <Select.Option value="hcm">H??? Ch?? Minh</Select.Option>
                                    <Select.Option value="hn">H?? N???i</Select.Option>
                                    <Select.Option value="dn">???? N???ng</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Button size="large" type="primary" htmlType="submit">
                                <SearchOutlined />
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </HeroWrapper>
    );
};

Hero.propTypes = {};

export default Hero;
