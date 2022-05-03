import React from 'react';
import { useSelector } from 'react-redux';
import { ContainerWrapper } from './Container.style';
const Container = ({ className, children }) => {
    const widthSize = useSelector(({ app }) => app.WIDTH);

    return (
        <ContainerWrapper className={className} width-data={widthSize}>
            {children}
        </ContainerWrapper>
    );
};

Container.propTypes = {};

export default Container;
