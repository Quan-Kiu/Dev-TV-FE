import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const SignUpForm = ({form}) => {
  return (
    <Form style={{ 
      margin: '1rem 0',
    }} form={form}>
      <Form.Item
        name="username"
       
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />}  placeholder="Username" />
      </Form.Item>

      <Form.Item
       
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="Password" />
      </Form.Item>
    </Form>
  )
}

SignUpForm.propTypes = {}

export default SignUpForm