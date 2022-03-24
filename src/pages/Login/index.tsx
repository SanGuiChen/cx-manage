import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import './index.less';
import { LoginApi } from 'utils/http/api';

const logo = require('assets/images/sun.png');

export default function Login() {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const { username, password } = values;
    LoginApi({ username, password })
      .then((res: any) => {
        console.log(res);
        if (res.errCode === 0) {
          message.success(res.message);
          const { avatar, editable, player, username } = res.data;
          // 存储数据
          localStorage.setItem('avatar', avatar);
          localStorage.setItem('editable', editable);
          localStorage.setItem('player', player);
          localStorage.setItem('username', username);
          localStorage.setItem('cms-token', res.data['cms-token']);
          // 跳转到根路径
          setTimeout(() => {
            navigate('/');
          }, 1500);
        } else message.error(res.message);
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to={'/register'}>还没账号？立即注册</Link>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
