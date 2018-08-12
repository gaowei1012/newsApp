import React from 'react'
import { NavBar, Icon, Modal } from 'antd-mobile'
import NavTabs from './../navTab'
import './index.less'

export default class NavTop extends React.Component {

    state = {

    }

    // 初始化
    componentWillMount() {

    }

    // 搜索
    handleSearch = () => {
        Modal.prompt('请输入你要查询的关键词','欢迎使用', [
            { text: '取消' },
            { text: '查询', onPress: value => console.log(`输入的内容:${value}`) }, // 这块可以发送ajax请求
        ])
    }

    render() {
        return (
            <div className="wapper_nav_top">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.handleSearch} />,
                        //   <Icon key="1" type="ellipsis" />,
                    ]}
                    style={{ background: '#d43d3d' }}
                >
                    <img src="/assets/logo.png" alt='logo' />
                </NavBar>
                <NavTabs />
            </div>
        );
    }
}