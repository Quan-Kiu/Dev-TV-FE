import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../../api/axiosClient';
import { openErrorNotifyModal,openSuccessNotifyModal} from '../../../utils/notifyModal';

const SignUpForm = ({onClose}) => {
  const intl = useIntl();
  const [isLoading,setIsLoading] = useState(false);


  const handleOnFinish = async(values)=>{
    try {
      setIsLoading(true);
      delete values.confirmation_password;
      const res = await axiosClient.post('account',values);
      if(res.success) {

          openSuccessNotifyModal({
            title: intl.formatMessage({id: "response.message.title.signup"}),
            content: intl.formatMessage({id: "response.message.content.signup"}),
          });
          onClose();

      }
    } catch (error) {
      setIsLoading(false);

      openErrorNotifyModal({
        title: "Error",
            content: error.message,
      });
    }
  }

  return (
    <Form style={{ 
      margin: '1rem 0',
    }} 
    onFinish={handleOnFinish}
    >

      <Form.Item name="accountType" initialValue={"Candidate"}>
        <Radio.Group className="permission" >
            <Radio.Button value="Candidate"><FormattedMessage id="permission.candidate"/></Radio.Button>
            <Radio.Button value="Employer"><FormattedMessage id="permission.employer"/></Radio.Button>
          </Radio.Group>

      </Form.Item>

<Form.Item
        name="email"
        normalize={(val) => val?.replace(/\s/g, '') || ''}
        rules={[{ required: true, message: <FormattedMessage id="auth.rules.required.confirmation-password"/> },{
          type: "email",
          message: <FormattedMessage id="auth.rules.required.email"/>
        }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />}  placeholder={intl.formatMessage({id: 'auth.field.email'})} />
      </Form.Item>
      

      <Form.Item
        normalize={(val) => val?.replace(/\s/g, '') || ''}
        name="password"
        rules={[{ required: true, message: <FormattedMessage id="auth.rules.required.password"/>  }]}
      >
        <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />}  placeholder={intl.formatMessage({id: 'auth.field.password'})} />
      </Form.Item>

      <Form.Item
        name="confirmation_password"

        rules={[
          {
            required: true,
            message: <FormattedMessage id="auth.rules.required.confirmation-password"/> ,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(intl.formatMessage({id: 'auth.rules.same.password'})));
            },
          }),
        ]}
      >
        <Input.Password  prefix={<LockOutlined className="site-form-item-icon" />}  placeholder={intl.formatMessage({id: 'auth.field.confirmationPassword'})} />
      </Form.Item>

            <Button loading={isLoading}  htmlType='submit' className="button-submit">
            <FormattedMessage id="headers.signup"/>
          </Button>

    </Form>
  )
}

SignUpForm.propTypes = {}

export default SignUpForm