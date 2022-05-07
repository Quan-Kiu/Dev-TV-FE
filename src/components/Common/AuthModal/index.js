import React from 'react'
import PropTypes from 'prop-types'
import { AuthModalWrapper } from './AuthModal.style'
import { Row,Col, Radio, Button, Divider,Form } from 'antd'
import LoginForm from '../../../containers/Auth/LoginForm'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { CloseOutlined, FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import SignUpForm from '../../../containers/Auth/SignUpForm'

const AuthModal = ({onClose,type}) => {

  const [form] = Form.useForm();

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
          <Radio.Group  className="permission"  defaultValue="candidate">
            <Radio.Button value="candidate">Candidate</Radio.Button>
            <Radio.Button value="employer">Employer</Radio.Button>
          </Radio.Group>

          {type !=='login' ? <LoginForm form={form}/> : <SignUpForm form={form}/>}

          


          <Row justify="space-between">
            <Col>
            <Checkbox> <FormattedMessage id="auth.login.remember"/></Checkbox>
            </Col>
            <Link to=""> <FormattedMessage id="auth.login.forgot"/></Link>
          </Row>


          <Button className="button-submit">
            <FormattedMessage id="auth.login.title"/>
          </Button>

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