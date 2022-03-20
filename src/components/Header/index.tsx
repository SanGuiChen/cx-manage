import React from 'react'
import './index.less'
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const logo = require('assets/images/sun.png')

export default function MyHeader() {
  const menu = (
    <Menu>
      <Menu.Item>
          修改资料
      </Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item>
          退出登陆
      </Menu.Item>
    </Menu>
  );
  
  return (
    <header>
      <div>
        <img src={logo} height={50} alt="" />
        <span style={{color: '#13227a'}}>Sun Design</span>
      </div>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href='!#' onClick={e => e.preventDefault()}>
          <Avatar icon={<UserOutlined />} style={{ marginRight: '10px' }}/>
          匿名用户 <DownOutlined />
        </a>
      </Dropdown>
    </header>
  )
}
