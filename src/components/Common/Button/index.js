import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './Button.style';

const Button = ({ label, onClick, background, textClr, outline, style, hoverStyle }) => {
    return (
        <ButtonWrapper
            hover={hoverStyle}
            background={background}
            text={textClr}
            outline={outline}
            style={style}
            onClick={onClick}
        >
            {label}
        </ButtonWrapper>
    );
};

Button.propTypes = {};

export default Button;
