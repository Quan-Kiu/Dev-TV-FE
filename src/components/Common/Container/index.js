import React from 'react';
import PropTypes from 'prop-types';
import { ContainerWrapper } from './Container.style';
import { useSelector } from 'react-redux';
const Container = (props) => {
    const widthSize = useSelector(({ app }) => app.WIDTH);

    return <ContainerWrapper width-data={widthSize}>{props.children}</ContainerWrapper>;
};

Container.propTypes = {};

export default Container;
