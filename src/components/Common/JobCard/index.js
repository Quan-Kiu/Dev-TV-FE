import { HeartOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { jobForm } from '../../../constants';
import { JobCardWrapper } from './JobCard.style';
import { FormattedMessage } from 'react-intl';

const JobCard = ({ type, job }) => {
    const isColumn = type === 'column';
    const span = isColumn ? { span: 24 } : {};
    const CompanyLogoSize = isColumn ? '150px' : '50px';
    const jobFormProps = isColumn ? { order: 1 } : {};
    const likeProps = isColumn ? { order: 2 } : {};

    return (
        <JobCardWrapper data-type={type}>
            <Row gutter={[32, 32]} align={'middle'}>
                <Col {...span}>
                    <img
                        style={{ width: CompanyLogoSize, height: CompanyLogoSize, objectFit: 'contain' }}
                        src={job.image}
                        alt={job.image}
                    />
                </Col>
                <Col {...span} flex={1}>
                    <div className="job__info">
                        <div className="job__name">{job.name}</div>
                        <div className="company">{job.company.name}</div>
                    </div>
                </Col>

                <Col {...span}>
                    <Row align="middle" gutter={30}>
                        <Col {...likeProps}>
                            <HeartOutlined />
                        </Col>
                        <Col {...jobFormProps}>{jobForm[job.form]}</Col>
                        <Col order={3}>
                            <Button shape={'round'} type="primary">
                                <FormattedMessage id="func.apply" />
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
