import { CloseOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row } from 'antd'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import LoginForm from '../../../containers/Auth/LoginForm'
import SignUpForm from '../../../containers/Auth/SignUpForm'
import { AuthModalWrapper } from './AuthModal.style'

const AuthModal = ({onClose,type}) => {


  return (
    <AuthModalWrapper>
        <div className="content">
          <div onClick={onClose} className="close-button">
            <CloseOutlined />
          </div>
          <div className="title">
            <FormattedMessage id={`auth.${type}.title`}/>
          </div>
          <div className="desc">
            <FormattedMessage id={`auth.${type}.desc`}/>
          </div>
         
          {type ==='login' ? <LoginForm onClose={onClose} /> : <SignUpForm onClose={onClose} />}

          


          <Divider plain>
            <FormattedMessage id="site.or"/>
          </Divider>

          <Row justify="center" gutter={24}>
            <Col>
            <Button type="primary" icon={<FacebookOutlined /> } size="medium" />
            </Col>
            <Col>
            <Button type="primary" icon={<GoogleOutlined />} size="medium" />
            </Col>

          </Row>


        </div>
    </AuthModalWrapper>
  )
}

AuthModal.propTypes = {}

export default AuthModal