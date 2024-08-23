import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import moment from 'moment';
import './style.css';
import { useBackgroundImage } from '../../hooks/backgroundImage';

const NewMembersForm: React.FC = () => {
  const { t } = useTranslation();
  const { backgroundImage } = useBackgroundImage();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const currentDate = moment().format('YYYY-MM-DD');
    const dataToSend = {
      ...values,
      date: currentDate,
    };

    console.log('Received values:', dataToSend);
    form.resetFields();
  };

  return (
    <div className="page-container" style={{backgroundImage: `url(${backgroundImage})`}}>
    
      <div className="content-container">
        <div className="form-wrapper">
          <h1 className="title">How to Samba</h1>
          <p className="subtitle">coming soon...</p>
          <Form
            form={form}
            name="new_member"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: t('please_enter_email') },
                { type: 'email', message: t('please_enter_valid_email') }
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder={t('email')} />
            </Form.Item>
            <Form.Item>
              <Button type="primary"style={{backgroundColor:"orange", color:"white"}} htmlType="submit" block>
                {t('register')}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewMembersForm;