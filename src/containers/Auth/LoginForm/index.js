import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Row,Col, Checkbox, Button } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { FormattedMessage, useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart } from '../../../redux/auth/action'
import { authSelector } from '../../../redux/auth/reducer'

const LoginForm = (props) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const {loading} = useSelector(authSelector);
  const handleOnFinish = (values)=>{
    if(values){
      dispatch(loginStart(values));
    }
  }
  return (
    <Form style={{ 
      margin: '1rem 0',
    }} 
      onFinish={handleOnFinish}
    >

      <Form.Item
         name="email"
         normalize={(val) => val?.replace(/\s/g, '') || ''}
         rules={[{ required: true, message: <FormattedMessage id="auth.rules.required.confirmation-password"/> },{
           type: "email",
           message: <FormattedMessage id="auth.rules.required.email"/>
         }]}>
        <Input prefix={<MailOutlined className="site-form-item-icon" />}  placeholder={intl.formatMessage({id: 'auth.field.email'})} />
      </Form.Item>

      <Form.Item
       
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="Password" />
      </Form.Item>

      
        <Row justify="space-between" style={{
          marginBottom: '1rem'
        }}>
            <Col>
            <Checkbox> <FormattedMessage id="auth.login.remember"/></Checkbox>
            </Col>
            <Link to=""> <FormattedMessage id="auth.login.forgot"/></Link>
          </Row>
          


          <Button loading={loading} htmlType='submit' className="button-submit">
            <FormattedMessage id="headers.signin"/>
          </Button>

    </Form>
  )
}

LoginForm.propTypes = {}

export default LoginForm