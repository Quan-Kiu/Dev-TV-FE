import { Row, Col } from 'antd';
import React from 'react';
import CompanyCard from '../CompanyCard';
import { CompaniesWrapper } from './Companies.style';

const Companies = ({ data, title }) => {
    return (
        <CompaniesWrapper>
            {title && <div className="title">{title}</div>}
            <div className="Companies">
                <div className="site-card-wrapper">
                    <Row gutter={[32, 32]}>
                        {data.map((company) => (
                            <Col xs={24} sm={12} md={8} lg={6}>
                                <CompanyCard company={company} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </CompaniesWrapper>
    );
};

Companies.propTypes = {};

export default Companies;
