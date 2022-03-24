import React, { useEffect, useState } from 'react';
import './index.less';
import { Menu, Dropdown, Avatar, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const logo = require('assets/images/sun.png');

export default function MyHeader() {
  const [avatar, setAvatar] = useState('https://joeschmoe.io/api/v1/random');
  const [username, setUsername] = useState('游客');
  const navigate = useNavigate();

  useEffect(() => {
    const un = localStorage.getItem('username');
    const avatarPic = localStorage.getItem('avatar');
    if (un) setUsername(un);
    if (avatarPic) {
      if (avatarPic !== 'default_avatar.jpg') setAvatar(avatarPic);
    }
  }, []);

  // 退出登录
  const logout = () => {
    message.success('退出成功');
    localStorage.removeItem('cms-token');
    setTimeout(() => navigate('/login'), 1500);
  };

  const menu = (
    <Menu>
      <Menu.Item key={1}>修改资料</Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key={2} onClick={logout}>
        退出登陆
      </Menu.Item>
    </Menu>
  );

  return (
    <header>
      <div>
        <img src={logo} height={50} alt="" />
        <span style={{ color: '#13227a' }}>Sun Design</span>
      </div>
      <Dropdown overlay={menu}>
        <a
          className="ant-dropdown-link"
          href="!#"
          onClick={(e) => e.preventDefault()}
          style={{ cursor: 'pointer' }}
        >
          <Avatar src={avatar} style={{ marginRight: '10px' }} />
          {username} <DownOutlined />
        </a>
      </Dropdown>
    </header>
  );
}
