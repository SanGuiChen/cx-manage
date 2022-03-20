import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { EditOutlined, ReadOutlined, UsergroupAddOutlined, HighlightOutlined, SelectOutlined } from '@ant-design/icons';
import Header from 'components/Header'
import Footer from 'components/Footer'
import './App.less'


const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default function App() {
  return (
    <Layout className='container'>
      <Header />
      <Layout className='container_content'>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme='dark'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['4']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<ReadOutlined />}>查看文章列表</Menu.Item>
            <Menu.Item key="2" icon={<EditOutlined />}>文章编辑</Menu.Item>
            <Menu.Item key="3" icon={<HighlightOutlined />}>修改资料</Menu.Item>
            <SubMenu key="4" icon={<UsergroupAddOutlined />} title="管理员">
              <Menu.Item key="4-1" icon={<SelectOutlined />}>小编名单</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="content-main">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  )
}
