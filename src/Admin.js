import {
  MenuFoldOutlined, MenuUnfoldOutlined,
  ProfileOutlined
} from "@ant-design/icons";
import { Avatar, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
  Link, Route, Switch
} from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Question from './Pages/QuestionPage/Question';


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
      <Menu.Item key="dashboard" icon={<ProfileOutlined />}>
          <Link to="/admin">DashBoard</Link>
        </Menu.Item>
        <Menu.Item key="cauhoi" icon={<ProfileOutlined />}>
          <Link to="/admin/question">Quản lý câu hỏi</Link>
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
          <Route path="/admin" exact={true}>
        <DashBoard/>
         </Route>
         <Route path="/admin/question">
        <Question/>
         </Route>
        </Switch>
      </Content>
    </Layout>
  </Layout>
  )
}
export default Admin