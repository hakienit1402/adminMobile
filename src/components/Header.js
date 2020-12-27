import React, { useState, useEffect } from "react";
// import firebase from '../firebase/Firebase'
import {
  UserOutlined,
  LogoutOutlined,
  LockOutlined,QuestionCircleOutlined,FacebookFilled
} from "@ant-design/icons";
import { Menu, Modal, Form, Input, Button,Row, Descriptions, Col,Image } from "antd";
import {  Link, useHistory} from "react-router-dom";
const { SubMenu } = Menu;
const Header = (props) => {
  let history = useHistory();
  const [visibleAbout,setVisibleAbout] = useState(false)
  const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem('isAuth')));
  const [visible, setVisible] = useState(false);
  const logout = () => {
    setIsLogin(false);
    localStorage.setItem('isAuth',false)
    history.push("/")
    window.location.reload()
  };
  const login = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const onLogin = (values) => {
   if (values.username === "admin" && values.password === "admin"){
    localStorage.setItem('isAuth',true)
    setIsLogin(true)
    setVisible(false)
    history.push("/admin")
    window.location.reload()
    }
   
  };

  const LoginForm = () => {
    return (
      <Form name="normal_login" className="login-form" onFinish={onLogin}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item style={{ float: "right" }}>
          <Link to='' className="login-form-forgot">Forgot password</Link>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ marginRight: 10 }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  };


  const AboutForm = () => {
    return (
      <Row>
      <Col span={14}>
     <Descriptions column={1}>
       <Descriptions.Item label='Company name'>Nong Lam University</Descriptions.Item>
       <Descriptions.Item label='Developer'>Ha Ngoc Kien</Descriptions.Item>
       <Descriptions.Item label='Version'>st01-2020 YataomeApp</Descriptions.Item>
       <Descriptions.Item label='Contact me '>
         <a href="https://www.facebook.com/hakien1402/"><FacebookFilled />FB: HÀ KIÊN </a> <br/>
         Email : hangockien99@gmail.com
       </Descriptions.Item>
     </Descriptions>
     </Col>
     <Col span={6} className='info'>
     <Image
            width={220}
            src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/79451546_3058864351005230_4509966735998189568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=O59O_uf-7V0AX_MG01r&_nc_ht=scontent.fvca1-1.fna&oh=b6d6d25efb2e3bf695154980216b05c1&oe=5FB78BBA"
          />
     </Col>
     </Row>
    )
  }
  return (
    <div>
      <Menu mode="horizontal" className="menu-app">
        <Menu.Item style={{ marginLeft: 40 }}>
         <Link to='/'> <strong>Admin Mobile App</strong></Link>
        </Menu.Item>
        {isLogin === true ? (
          <SubMenu
            icon={<UserOutlined />}
            title={"Welcome to Admin"}
            style={{
              float: "right",
              marginRight: 50,
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            <Menu.Item icon={<QuestionCircleOutlined />} onClick={()=> setVisibleAbout(true)}>About us</Menu.Item>
            <Menu.Item icon={<LogoutOutlined />} onClick={logout}>
              Log Out
            </Menu.Item>
          </SubMenu>
        ) : (
          <Menu.Item
            icon={<UserOutlined />}
            style={{
              float: "right",
              marginRight: 50,
              fontSize: 16,
              fontWeight: 500,
            }}
            onClick={login}
          >
            Sign In
          </Menu.Item>
        )}
      </Menu>
      {/* Form */}
      <Modal
        title="Sign In" 
        visible={visible}
        width="400px"
        footer=""
        onCancel={handleCancel}
      >
         <LoginForm /> 
      </Modal>
      <Modal
        title='About'
        visible={visibleAbout}
            footer=''
        width="700px"
        onOk={()=>setVisibleAbout(false)}
        onCancel={()=> setVisibleAbout(false)}
       
      >
        <AboutForm/>
      </Modal>
    </div>
  );
};

export default Header;
