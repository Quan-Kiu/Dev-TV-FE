import React from 'react';
import PropTypes from 'prop-types';
import { WhoAreYouWrapper } from './WhoAreYou.style';
import Button from '../Button';
import { FormattedMessage } from 'react-intl';
import theme from '../../../configs/theme';
import { Row, Col } from 'antd';

const WhoAreYou = ({ opposite, pseudoBg, background }) => {
    return (
        <WhoAreYouWrapper opposite={opposite} pseudo-bg={pseudoBg} data-background={background}>
            <Row>
                <Col xl={12} order={opposite && 1}>
                    <div className="content">
                        <div className="title">I am recuiter!</div>
                        <div className="desc">
                            One of our One of our jobs has some kind of flexibility jobs has some kind of flexibility
                            option such as telecommuting, a part-time schedule or a flexible or flextime.
                        </div>
                        <Button
                            hoverStyle={`
                    color: ${theme.darkClr};
                    background: ${theme.whiteClr};
                    border: thin solid currentColor;
                `}
                            style={{
                                padding: '2rem 3rem',
                            }}
                            background="transparent"
                            outline="true"
                            label={<FormattedMessage id="headers.employers" />}
                        />
                    </div>
                </Col>
                <Col xl={12}></Col>
            </Row>
        </WhoAreYouWrapper>
    );
};

WhoAreYou.propTypes = {};

export default WhoAreYou;
