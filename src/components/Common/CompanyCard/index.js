import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const CompanyCard = ({ company }) => {
    return (
        <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={company.image} />}>
            <Card.Meta title={company.name} description="www.instagram.com" />
        </Card>
    );
};

CompanyCard.propTypes = {};

export default CompanyCard;
