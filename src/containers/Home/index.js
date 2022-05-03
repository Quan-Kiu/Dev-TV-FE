import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import Companies from '../../components/Common/Companies';
import Container from '../../components/Common/Container';
import Hero from '../../components/Common/Hero';
import Jobs from '../../components/Common/Jobs';
import Section from '../../components/Common/Section';
import WhoAreYou from '../../components/Common/WhoAreYou';
import { companies, jobs, questions } from '../../data';
import { HomeWrapper } from './Home.style';

import { Collapse } from 'antd';
import Button from '../../components/Common/Button';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const HomePage = (props) => {
    const widthSize = useSelector(({ app }) => app.WIDTH);
    // 800 is breakPont for feature jobs
    const isColumn = widthSize <= 800;

    return (
        <HomeWrapper>
            <Hero />
            <Container>
                <Companies data={companies} title={<FormattedMessage id="title.popular-companies" />} />
            </Container>
            <Container>
                <Row gutter={24}>
                    <Col xl={16} md={24}>
                        <Jobs
                            data={jobs}
                            type={isColumn && 'column'}
                            title={<FormattedMessage id="title.feature-jobs" />}
                        />
                    </Col>
                    <Col xl={8} md={24}>
                        <Jobs data={jobs.slice(0, 2)} type="column" title={<FormattedMessage id="title.new-jobs" />} />
                    </Col>
                </Row>
            </Container>

            <Container className="new-blog">
                <div className="section-title">
                    <FormattedMessage id="title.new-blog" />
                </div>
                <Row gutter={[32, 32]}>
                    <Col xl={12} md={12} sm={24}>
                        <Row gutter={[24, 24]}>
                            <Col xl={8} xs={8}>
                                <img
                                    src="https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM25wSmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9eddcbe0806e81eeca746e2b9a9d069c21db9748/game-online-mien-phi-thumbnail-200x105.jpg"
                                    alt=""
                                />
                            </Col>
                            <Col xl={16} xs={16}>
                                <div className="title">
                                    Top 10+ game online miễn phí về lập trình dành cho Developer
                                </div>
                                <div className="desc">
                                    Tuy hầu hết các game online miễn phí về lập trình đều hướng đến đối tượng là trẻ em
                                    nhưng cũng có nhiều game lập...
                                </div>
                                <Link to="/">
                                    <FormattedMessage id="button.readmore" />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12} md={12} sm={24}>
                        <Row gutter={[24, 24]}>
                            <Col xl={8} xs={8}>
                                <img
                                    src="https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM25wSmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9eddcbe0806e81eeca746e2b9a9d069c21db9748/game-online-mien-phi-thumbnail-200x105.jpg"
                                    alt=""
                                />
                            </Col>
                            <Col xl={16} xs={16}>
                                <div className="title">
                                    Top 10+ game online miễn phí về lập trình dành cho Developer
                                </div>
                                <div className="desc">
                                    Tuy hầu hết các game online miễn phí về lập trình đều hướng đến đối tượng là trẻ em
                                    nhưng cũng có nhiều game lập...
                                </div>
                                <Link to="/">
                                    <FormattedMessage id="button.readmore" />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Row>
                <Col xl={12} md={12} sm={24}>
                    <WhoAreYou opposite={true} pseudoBg={'blackClr'} background="/parallax1.jpg" />
                </Col>
                <Col xl={12} md={12} sm={24}>
                    <WhoAreYou pseudoBg={'primaryClr'} background="/parallax2.jpg" />
                </Col>
            </Row>

            <Container>
                <Section
                    className={'how-it-work'}
                    title={<FormattedMessage id="title.how-it-work" />}
                    desc={<FormattedMessage id="title.how-it-work-desc" />}
                >
                    <Row gutter={[32, 32]}>
                        <Col xl={8} md={8} sm={24}>
                            <Avatar size={100} icon={<UserOutlined />} />
                            <div className="title">Register an account</div>
                            <div className="desc">
                                Post a job to tell us about your project. We'll quickly match you with the right
                                freelancers.
                            </div>
                        </Col>
                        <Col xl={8} md={8} sm={24}>
                            <Avatar size={100} icon={<UserOutlined />} />
                            <div className="title">Register an account</div>
                            <div className="desc">
                                Post a job to tell us about your project. We'll quickly match you with the right
                                freelancers.
                            </div>
                        </Col>
                        <Col xl={8} md={8} sm={24}>
                            <Avatar size={100} icon={<UserOutlined />} />
                            <div className="title">Register an account</div>
                            <div className="desc">
                                Post a job to tell us about your project. We'll quickly match you with the right
                                freelancers.
                            </div>
                        </Col>
                    </Row>
                </Section>
            </Container>
            <Container>
                <Section
                    className={'site-stats'}
                    title={<FormattedMessage id="title.site-stats" />}
                    desc={<FormattedMessage id="title.site-stats-desc" />}
                >
                    <Row gutter={[32, 32]}>
                        <Col xl={6} md={6} sm={12} xs={24}>
                            <div className="title">14</div>
                            <div className="desc">Jobs Posted</div>
                        </Col>

                        <Col xl={6} md={6} sm={12} xs={24}>
                            <div className="title">14</div>
                            <div className="desc">Jobs Posted</div>
                        </Col>

                        <Col xl={6} md={6} sm={12} xs={24}>
                            <div className="title">14</div>
                            <div className="desc">Jobs Posted</div>
                        </Col>

                        <Col xl={6} md={6} sm={12} xs={24}>
                            <div className="title">14</div>
                            <div className="desc">Jobs Posted</div>
                        </Col>
                    </Row>
                </Section>
            </Container>
            <Container>
                <div
                    className="section-title"
                    style={{
                        marginBottom: '4rem',
                    }}
                >
                    <FormattedMessage id="title.question" />
                </div>
                <Collapse accordion defaultActiveKey={1}>
                    {questions.map((item) => (
                        <Panel header={<FormattedMessage id={item.question} />} key={item.key}>
                            <p>
                                <FormattedMessage id={item.answer} />
                            </p>
                        </Panel>
                    ))}
                </Collapse>
            </Container>
        </HomeWrapper>
    );
};

HomePage.propTypes = {};

export default HomePage;
