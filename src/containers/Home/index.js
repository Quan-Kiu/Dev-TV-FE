import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import Companies from '../../components/Common/Companies';
import Container from '../../components/Common/Container';
import Hero from '../../components/Common/Hero';
import Jobs from '../../components/Common/Jobs';
import { companies, jobs } from '../../data';
import { FormattedMessage } from 'react-intl';

const HomePage = (props) => {
    const widthSize = useSelector(({ app }) => app.WIDTH);
    // 800 is breakPont for feature jobs
    const isColumn = widthSize <= 800;

    return (
        <div>
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
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
