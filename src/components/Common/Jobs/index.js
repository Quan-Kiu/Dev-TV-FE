import React from 'react';
import PropTypes from 'prop-types';
import { JobsWrapper } from './Jobs.style';
import { Row, Col } from 'antd';
import JobCard from '../JobCard';

const Jobs = ({ data, title, type = 'row' }) => {
    return (
        <JobsWrapper data-type={type}>
            {title && <div className="title">{title}</div>}
            <div className="jobs">
                <Row gutter={[32, 32]}>
                    <Col span={24}>
                        {data.map((job, index) => (
                            <JobCard key={index} type={type} job={job} />
                        ))}
                    </Col>
                </Row>
            </div>
        </JobsWrapper>
    );
};

Jobs.propTypes = {};

export default Jobs;
