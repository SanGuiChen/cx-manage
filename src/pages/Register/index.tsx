import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import './index.less';
import { RegisterApi } from 'utils/http/api';

const logo = require('assets/images/sun.png');

export default function Login() {
  const onFinish = (values: any) => {
    const { username, password } = values;
    RegisterApi({ username, password })
      .then((res: any) => {
        if (res.errCode === 0) message.success(res.message);
        else message.error(res.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-bg">
      <div className="login">
        <div className="login-logo">
          <img src={logo} alt="" height={50} />
          <span>Sundesign</span>
        </div>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: '请输入确认密码!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('前后两次密码不一致!'));
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to={'/login'}>已有账号？返回登陆</Link>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              立即注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
