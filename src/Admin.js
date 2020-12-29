import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import User from './Pages/UserPage/User'
import History from './Pages/HistoryPage/History'
import Question from './Pages/QuestionPage/Question'

import { Layout, Menu,Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ProjectOutlined,
  ScheduleOutlined,
  ProfileOutlined
} from "@ant-design/icons";
import { Page404 } from './Pages/404/Page404';

const { Header, Sider, Content } = Layout;

 const Admin = () => {
   const [collapsed , setCollapsed] = useState(false)
   const toggle = () => {
   setCollapsed(!collapsed)
  };
  return (
    <Layout style={{minHeight:590}}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div
        className="logo"
        style={{
          backgroundColor: "lightgray",
          height: 65,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar size={40}>ADMIN</Avatar>
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="user" icon={<UserOutlined />}>
          <Link to="/admin/user">Quản lý tài khoản</Link>
        </Menu.Item>
        <Menu.Item key="cauhoi" icon={<ProfileOutlined />}>
          <Link to="/admin/question">Quản lý câu hỏi</Link>
        </Menu.Item>
        <Menu.Item key="lichsu" icon={<ScheduleOutlined />}>
          <Link to="/admin/history">Quản lý lịch sử</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggle,
          }
        )}
        
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 400,
        }}
      > 
     <Switch>
      <Route path="/admin/user" >
        <User/>
      </Route>
      <Route path="/admin/history" >
        <History />
      </Route>

      <Route path="/admin/question" >
        <Question/>
      </Route>
      <Route path="">
          <Page404/>
         </Route>
    </Switch>
        
      </Content>
    </Layout>
  </Layout>


    // <Router>
    
    // </Router>
  )
}
export default Admin