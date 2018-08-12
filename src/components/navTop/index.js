import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import NavTabs from './../navTab'
import './index.less'

export default class NavTop extends React.Component {
    render() {
        return (
            <div className="wapper_nav_top">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                      <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //   <Icon key="1" type="ellipsis" />,
                    ]}
                    style={{background: '#d43d3d'}}
                >
                    <img src="/assets/logo.png" alt='logo'/>
                </NavBar>
                <NavTabs />
            </div>
        );
    }
}