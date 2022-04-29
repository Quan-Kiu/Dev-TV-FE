import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../../components/Common/Hero';
import Companies from '../../components/Common/Companies';
import Jobs from '../../components/Common/Jobs';
import { companies, jobs } from '../../data';
import { Row, Col } from 'antd';

const HomePage = (props) => {
    return (
        <div>
            <Hero />
            <Companies data={companies} title={'Nhà tuyển dụng phổ biến'} />
            <Row gutter={32}>
                <Col span={16}>
                    <Jobs data={jobs} title={'Công việc nổi bật'} />
                </Col>
                <Col span={8}>
                    <Jobs data={jobs.slice(0, 2)} type="column" title={'Công việc mới đây'} />
                </Col>
            </Row>
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
