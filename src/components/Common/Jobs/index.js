import React from 'react';
import PropTypes from 'prop-types';
import { JobsWrapper } from './Jobs.style';
import { Row, Col } from 'antd';
import JobCard from '../JobCard';

const Jobs = ({ data, title, type = 'row' }) => {
    const span =
        type === 'column'
            ? {
                  xl: 24,
                  md: 12,
              }
            : { xl: 24 };
    const gutter =
        type === 'column'
            ? {
                  gutter: [24, 24],
              }
            : {};
    return (
        <JobsWrapper>
            {title && <div className="title">{title}</div>}
            <div className="jobs">
                <Row {...gutter}>
                    {data.map((job, index) => (
                        <Col key={index} {...span}>
                            <JobCard key={index} type={type} job={job} />
                        </Col>
                    ))}
                </Row>
            </div>
        </JobsWrapper>
    );
};

Jobs.propTypes = {};

export default Jobs;
