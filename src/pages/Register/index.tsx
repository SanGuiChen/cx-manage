import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import './index.less';

const logo = require('assets/images/sun.png');

export default function Login() {
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='login-bg'>
      <div className='login'>
        <div className='login-logo'>
          <img src={logo} alt="" height={50}/>
          <span>Sundesign</span>
        </div>

        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="ConfirmPassword"
            label="确认密码"
            rules={[{ required: true, message: '请输入确认密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to={'/login'}>已有账号？返回登陆</Link>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
