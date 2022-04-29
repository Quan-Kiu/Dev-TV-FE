import React from 'react';
import PropTypes from 'prop-types';
import { JobCardWrapper } from './JobCard.style';
import { Row, Col, Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { jobForm } from '../../../constants';

const JobCard = ({ type, job }) => {
    const span = type === 'column' ? { span: 24 } : {};

    return (
        <JobCardWrapper data-type={type}>
            <Row gutter={[32, 32]} align={'middle'}>
                <Col {...span}>
                    <img
                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                        src={job.image}
                        alt={job.image}
                    />
                </Col>
                <Col {...span} flex={1}>
                    <div className="job__name">{job.name}</div>
                    <div className="company">{job.company.name}</div>
                </Col>

                <Col {...span}>
                    <Row align="middle" gutter={30}>
                        <Col sm={24} xl={2}>
                            <HeartOutlined />
                        </Col>
                        <Col>{jobForm[job.form]}</Col>
                        <Col>
                            <Button shape={'round'} type="primary">
                                Apply now
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </JobCardWrapper>
    );
};

JobCard.propTypes = {};

export default JobCard;
