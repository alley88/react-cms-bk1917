import React, { Component } from 'react'
import { Layout, Menu,} from 'antd';
import sliderEach from "utils/sliderEach"
import {LayoutRoutes} from "router"
import {withRouter} from "react-router-dom";
import logo from "static/logo.png"
const { Header, Content, Footer, Sider } = Layout;

@withRouter
class WrapperComponent extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
            <img src={logo}/>
          </div>

          {/* 侧边栏导航 */}
          <Menu theme="dark" defaultSelectedKeys={['/home']} mode="inline" onClick={this.handlePush.bind(this)}>
            {sliderEach(LayoutRoutes)}
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          {/* 内容区 */}
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
  handlePush({key}){
    this.props.history.push(key)
  }
}
export default WrapperComponent