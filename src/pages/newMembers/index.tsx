import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import moment from 'moment';
import './style.css';
import { useBackgroundImage } from '../../hooks/backgroundImage';

const NewMembersForm: React.FC = () => {
  const { t } = useTranslation();
  const { backgroundImage } = useBackgroundImage();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const currentDate = moment().format('YYYY-MM-DD');
    const dataToSend = {
      ...values,
      date: currentDate,
    };
  
    // Check for duplicate keys
    const keys = Object.keys(dataToSend);
    const uniqueKeys = new Set(keys);
    if (keys.length !== uniqueKeys.size) {
      console.error('Duplicate keys found in dataToSend:', dataToSend);
      return;
    }
  
    console.log('Data to send:', dataToSend);
  
    try {
      const response = await fetch('https://sheet.best/api/sheets/bb3d98f0-83b6-4bc3-ba5b-72b9d60f04fc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      if (response.ok) {
        console.log('Dados enviados com sucesso:', dataToSend);
      } else {
        console.error('Erro ao enviar dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  
    form.resetFields();
  };

  return (
    <div className="page-container" style={{backgroundImage: `url(${backgroundImage})`}}>
    
      <div className="content-container">
        <div className="form-wrapper">
          <h1 className="title">How to Samba ? </h1>
          <p className="subtitle">Act Local,Think Global</p>


          <Form
            form={form}
            name="new_member"
            style={{marginTop:"75%"}}
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
             <div className="losango"  onClick={()=>{
              onFinish(form.getFieldsValue())
             }} data-text={t('register')}>
             <MailOutlined style={{fontSize:"40px",rotate:"45deg",margin:"15px"}}  />
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewMembersForm;