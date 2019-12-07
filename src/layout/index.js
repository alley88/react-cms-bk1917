import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon,Modal} from 'antd';
import sliderEach from "utils/sliderEach"
import { LayoutRoutes } from "router"
import { withRouter } from "react-router-dom";
import logo from "static/logo.png"
import {connect} from "react-redux";
import {mapStateToProps} from "./mapstore";
import Cookies from "js-cookie"
const { Header, Content, Footer, Sider } = Layout;

@connect(mapStateToProps)
@withRouter
class WrapperComponent extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    const menu = (
      <Menu onClick={this.handleUserTo.bind(this)}>
        <Menu.Item key="userinfo">
          个人中心
        </Menu.Item>
        <Menu.Item key="logout">
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <img src={logo} />
          </div>

          {/* 侧边栏导航 */}
          <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" onClick={this.handlePush.bind(this)}>
            {sliderEach(LayoutRoutes)}
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', paddingRight: 20,display:'flex',justifyContent:'flex-end'}}>
           
            <Dropdown overlay={menu}>
                <span>
                   {this.props.userInfo.name}<Icon type="down" />
                </span>
              </Dropdown>
            
          </Header>
          {/* 内容区 */}
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
  handleUserTo({key}){
    if(key == "userinfo"){
      this.props.history.push('/user/userInfo')
    }else{
      Modal.info({
        content:"您确定要退出登录吗?",
        onOk:()=>{
          Cookies.remove("token");
          this.props.history.push('/login')
        }
      })
    }
  }
  handlePush({ key }) {
    this.props.history.push(key)
  }
}
export default WrapperComponent