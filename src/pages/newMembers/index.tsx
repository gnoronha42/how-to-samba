import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment';
import './style.css';
import { useBackgroundImage } from '../../hooks/backgroundImage';
import NavBar from '../../components/navBar';

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
        
        const emailResponse = await fetch('https://formspree.io/f/mnnawpyb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.email, message: 'Thank you for registering. We are excited to have you on board!' }),
        });

        if (emailResponse.ok) {
          console.log('Email enviado com sucesso');
          toast.success('Cadastro realizado com sucesso! Por favor, verifique sua caixa de entrada.');
        } else {
          console.error('Erro ao enviar email:', emailResponse.statusText);
          toast.error('Erro ao enviar email. Por favor, tente novamente.');
        }
      } else {
        console.error('Erro ao enviar dados:', response.statusText);
        toast.error('Erro ao enviar dados. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      toast.error('Erro ao enviar dados. Por favor, tente novamente.');
    }

    form.resetFields();
  };

  return (
    <div className="page-container" style={{backgroundImage: `url(${backgroundImage})`}}>
            <NavBar />
     
      <div className="content-container">
        <div className="form-wrapper">
          <h1 className="title">How to Samba ? </h1>
          <p className="subtitle">Act Local, Think Global</p>


          <Form
            form={form}
            name="new_member"
            style={{marginTop:"75%"}}
            onFinish={onFinish}
            layout="vertical"
          >
             <p style={{ fontSize: '20px', fontStyle: 'italic', marginBottom: '5px',color:"white" }}>
            Share your email to know more
          </p>
            <Form.Item
              name="Email"
              rules={[
                { required: true, message: t('please_enter_email') },
                { type: 'email', message: t('please_enter_valid_email') }
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder={t('email')} />
            </Form.Item>
            <Form.Item>
             <button className="losango"  type='submit'  onClick={()=>{
              onFinish(form.getFieldsValue())
             }} data-text={t('register')}>
             <MailOutlined style={{fontSize:"20px",rotate:"45deg",margin:"5px"}}  />
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />\
    </div>
  );
};

export default NewMembersForm;