import React, { Component } from 'react'
import { Row, Col } from 'antd';
import MyEcahrts from "components/echarts";
export default class Home extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <MyEcahrts options={{
                            color:['#CCCCFF','#00a0e9'],
                            data:[{value:80},{value:200}],
                            formatter:this.handleformatter.bind(this,'注册量'),
                            id:"charts1"
                            }
                           
                            }/>
                </Col>
                <Col className="gutter-row" span={8}>
                    <MyEcahrts options={{
                            color:['#CCCCFF','#330000'],
                            data:[{value:30},{value:1000}],
                            formatter:this.handleformatter.bind(this,'阅读量'),
                            id:"charts2"
                            }}/>
                </Col>
                <Col className="gutter-row" span={8}>
                    <MyEcahrts options={{
                            color:['#CCCCFF','#990066'],
                            data:[{value:80},{value:400}],
                            formatter:this.handleformatter.bind(this,'访问量'),
                            id:"charts3"
                            }}/>
                </Col>
            </Row>
        )
    }
    handleformatter(info){
        return info;
    }
}
