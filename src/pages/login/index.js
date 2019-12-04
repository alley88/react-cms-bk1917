import React, { Component } from 'react'
import {LoginContainer} from "./styled"
import {Form,Input,Button} from "antd";
import logo from "static/logo.png"
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
@Form.create()
class LOGIN extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginContainer>
                <div className="loginContent">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <Form onSubmit={this.props.handleLogin.bind(this)}>
                        <Form.Item label="用户名">
                            {
                                getFieldDecorator('username',{
                                    //初始值  数据校验等工作
                                    rules:[
                                        {required:true,message:"用户名称必须填写"},
                                        {pattern:/^a\w{4,8}$/,message:"用户名填不规范"}
                                    ],
                                    initialValue:'alley',
                                })(
                                   <Input type="text"/>
                                )
                            }
                            
                        </Form.Item>
                       
                        <Form.Item label="密码">
                          {
                                getFieldDecorator('password',{
                                    rules:[
                                        {required:true,message:"密码必须填写"},
                                        {
                                            pattern:/\w{4,8}/,message:"密码填不规范"
                                        }
                                    ],
                                    initialValue:"alley"
                                })(
                                    <Input type="password"/>
                                )
                          }
                        </Form.Item>
                        <Form.Item className="loginBtn">
                            <Button type="primary" block htmlType="submit">登陆</Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginContainer>
        )
    }
    
}


export default LOGIN;

/*
    getFieldDecorator: 柯里化
        实现数据的绑定
        数据的校验
        初始值等等....
    validateFields:
        校验数据
        以及获取表单中的数据




    initialValue:初始值
    valuePropName:指定初始值赋值给哪个属性
*/